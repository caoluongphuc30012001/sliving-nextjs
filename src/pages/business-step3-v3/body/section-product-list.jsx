import React, { useState, useEffect, useContext } from "react";
import { Data } from "@data/tableData.js";

import { BusinessStateContext } from "../../../context/businessContext";
import ModalAdvise from "@components/modal/modal-advise/ModalAdvise";

const buttonList = [
  {
    id: 0,
    content: "cơ bản",
    className: "effect left",
  },
  {
    id: 1,
    content: "nâng cao",
    className: "effect right",
  },
];

const Table = ({ table, sorting, quantity }) => {
  return (
    <table className="table-container">
      <thead className="content-container">
        <tr className="table-row">
          <th
            className="table-data header"
            onClick={() => {
              sorting("position");
            }}
          >
            Vị trí lắp đặt
          </th>
          <th
            className="table-data header center"
            onClick={() => {
              sorting("device");
            }}
          >
            Tên thiết bị
          </th>
          <th className="table-data header">SỐ LƯỢNG</th>
        </tr>
      </thead>
      <tbody className="content-container">
        {table.content.map((item) => {
          return (
            <tr key={item.id} className="table-row">
              <td className="table-data">{item.position}</td>
              <td className="table-data center">{item.device}</td>
              <td className="table-data">
                {item.quantityMultiplier
                  ? item.quantityMultiplier * table.range.min +
                    " - " +
                    item.quantityMultiplier * table.range.max
                  : table.range.min + " - " + table.range.max}
              </td>
            </tr>
          );
        })}
        <tr className="table-row">
          <td className="table-data">{table.lastContent.position}</td>
          <td className="table-data center">{table.lastContent.device}</td>
          <td className="table-data">{table.lastContent.quantity}</td>
        </tr>
      </tbody>
    </table>
  );
};

const SectionProductList = () => {
  const [modalShow, setModalShow] = React.useState(false);
  let activeTable = 0;
  const [order, setOrder] = useState("ASC");
  const [quantity, setQuantity] = useState(0);
  const [tableData, setTableData] = useState("");

  const state = useContext(BusinessStateContext);
  console.log("state", state);

  useEffect(() => {
    if (state["total"]) {
      if (state["total"] < 500) setQuantity(500);
      else if (state["total"] >= 5000) setQuantity(4999);
      else setQuantity(state["total"]);
    }
    setTableData(Data);
  }, [tableData]);

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = tableData;
      sorted.content[`${activeTable}`].content.sort((a, b) =>
        b[col].localeCompare(a[col])
      );
      setTableData(sorted);
      setOrder("DESC");
    } else {
      const sorted = tableData;
      sorted.content[`${activeTable}`].content.sort((a, b) =>
        a[col].localeCompare(b[col])
      );
      setTableData(sorted);
      setOrder("ASC");
    }
  };

  const [toggle, setToggle] = useState(0);

  return (
    <section className="section-business-product-list">
      <div className="section-container">
        <div className="content-title">
          <div className="sub-title">PRODUCT LIST</div>
          <div className="title">Danh Sách Thiết Bị Sử Dụng Cho Dự Án</div>
          <div className="underline"></div>
        </div>
        <div className="button-container">
          {buttonList.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => {
                  setToggle(item.id);
                  console.log(quantity);
                }}
                className={toggle === item.id ? "button" : "button active"}
              >
                {item.content}
              </div>
            );
          })}
          <div className={buttonList[`${toggle}`].className}></div>
        </div>
        <div className="table">
          {tableData.content?.map((table) => {
            table.range.min <= quantity &&
              table.range.max > quantity &&
              (activeTable = table.id);
            return (
              table.range.min <= quantity &&
              table.range.max > quantity && (
                <Table
                  sorting={sorting}
                  key={table.id}
                  table={table}
                  quantity={quantity}
                />
              )
            );
          })}
        </div>
        {tableData.content?.map((table) => {
          return (
            table.range.min <= quantity &&
            table.range.max > quantity && (
              <div key={table.id} className="sumary">
                {table.sumary.content.map((item) => {
                  return (
                    <div key={item.id} className="sumary-container">
                      <div className="sumary-text">{item.text}</div>
                      <div>:</div>
                      <div className="sumary-quantity">{item.quantity}</div>
                    </div>
                  );
                })}
                <div className="smallNote">{tableData.smallNote}</div>
              </div>
            )
          );
        })}
        <div className="advise-now-btn" onClick={() => setModalShow(true)}>
          <span>Tư Vấn Ngay</span>
        </div>
      </div>
      <ModalAdvise show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
};

export default SectionProductList;
