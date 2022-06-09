import React, { useState, useLayoutEffect, useContext, useEffect } from "react";
import { Data } from "@data/tableData2.js";

import { BusinessStateContext } from "../../../context/businessContext";
import ModalAdvise from "@components/modal/modal-advise/ModalAdvise";
import { navigate } from "gatsby";
import icon from "../../../images/business-step3-v3/png/icon-vector.png";

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

const Table2 = ({ table }) => {
  return (
    <div className="table">
      <table className="table-container">
        <thead className="content-container">
          <tr className="table-row">
            <th className="table-data header">Vị trí lắp đặt</th>
            <th className="table-data header center">Tên thiết bị</th>
            <th className="table-data header">Cơ Bản</th>
            <th className="table-data header">Nâng Cao</th>
          </tr>
        </thead>
        <tbody className="body-content-container border-b">
          <tr className="body-table-row">{table.solutionName}</tr>
          <tr className="body-table-row border-lr">
            {table.deviceList.map((item) => {
              return (
                <td key={item.id} className="table-data border-b">
                  {item.deviceName}
                </td>
              );
            })}
          </tr>
          <tr className="body-table-row">
            {table.deviceList.map((item, index) => {
              return (
                <td className="table-data border-b">
                  {item.inBasic && (
                    <img className="table-data-icon" src={icon}></img>
                  )}
                </td>
              );
            })}
          </tr>
          <tr className="body-table-row  border-lr">
            {table.deviceList.map((item, index) => {
              return (
                <td className="table-data border-b">
                  {item.inAdvanced && (
                    <img className="table-data-icon" src={icon}></img>
                  )}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const SubTable = ({ table }) => {
  return (
    <tbody className="body-content-container border-b">
      <tr className="body-table-row">{table.solutionName}</tr>
      <tr className="body-table-row border-lr">
        <td className="table-data border-b">{table.softwareName}</td>
        {table.deviceList.content.length > 0 && (
          <td className="table-data-center">
            <div className="data-col border-r">{table.deviceList.listName}</div>
            <td className="data-col">
              {table.deviceList.content?.map((item, index) => {
                return (
                  <td className="table-data border-b">{item.deviceName}</td>
                );
              })}
            </td>
          </td>
        )}
      </tr>
      <tr className="body-table-row">
        <td className="table-data">
          <div className="quantity-data">liên hệ</div>
        </td>
      </tr>
    </tbody>
  );
};

const SectionProductList = () => {
  const [modalShow, setModalShow] = useState(false);
  // const [activeTable, setActiveTable] = useState(false);
  // const [order, setOrder] = useState("ASC");
  const [quantity, setQuantity] = useState(0);
  const [tableData, setTableData] = useState("");
  const [isSubtable, setIsSubtable] = useState("false");
  const state = useContext(BusinessStateContext);
  useLayoutEffect(() => {
    if (!state["total"]) navigate("/business-step1");
  }, []);

  useEffect(() => {
    if (state["total"]) {
      if (state["total"] < 500) setQuantity(500);
      else if (state["total"] >= 5000) setQuantity(4999);
      else setQuantity(state["total"]);
    }
    setTableData(Data);
  }, [tableData]);
  useEffect(() => {
    if (state["checkParking"]) {
      setIsSubtable(state["checkParking"]);
    }
  }, [isSubtable]);
  const sorting = (col) => {
    // if (order === "ASC") {
    //   const sorted = tableData;
    //   sorted.content[`${activeTable}`].content.sort((a, b) =>
    //     b[col].localeCompare(a[col])
    //   );
    //   setTableData(sorted);
    //   setOrder("DESC");
    // } else {
    //   const sorted = tableData;
    //   sorted.content[`${activeTable}`].content.sort((a, b) =>
    //     a[col].localeCompare(b[col])
    //   );
    //   setTableData(sorted);
    //   setOrder("ASC");
    // }
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
                }}
                className={toggle === item.id ? "button" : "button active"}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
              >
                {item.content}
              </div>
            );
          })}
          <div className={buttonList[`${toggle}`].className}></div>
        </div>
        {tableData.content?.map((table) => {
          return <Table2 key={table.id} table={table} />;
        })}
        {isSubtable && (
          <div className="sub-table">
            <table className="table-container">
              <thead className="content-container">
                <tr className="table-row">
                  <th className="table-data header">Giải pháp</th>
                  <th className="table-data header center">Tên thiết bị</th>
                  <th className="table-data header">Số lượng</th>
                </tr>
              </thead>
              {tableData?.subContent?.solutionList?.map((table) => {
                return (
                  <SubTable
                    sorting={sorting}
                    key={table.id}
                    table={table}
                    quantity={quantity}
                  />
                );
              })}
            </table>
          </div>
        )}
        {/* {tableData.content?.map((table) => {
          return (
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
          );
        })} */}
        <div
          className="advise-now-btn"
          onClick={() => setModalShow(true)}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          <span>Tư Vấn Ngay</span>
        </div>
      </div>
      <ModalAdvise show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
};

export default SectionProductList;
