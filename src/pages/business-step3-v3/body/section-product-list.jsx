import React, { useState, useLayoutEffect, useContext, useEffect } from "react";
import { Data } from "@data/tableData2.js";

import { BusinessStateContext } from "../../../context/businessContext";
import ModalAdvise from "@components/modal/modal-advise/ModalAdvise";
import { navigate } from "gatsby";
import icon from "../../../images/business-step3-v3/png/icon-vector.png";

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
                <td id={item.id} className="table-data border-b">
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
                <td id={item.id} className="table-data border-b">
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
                  <td id={item.id} className="table-data border-b">
                    {item.deviceName}
                  </td>
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
  const [tableData, setTableData] = useState("");
  const state = useContext(BusinessStateContext);
  // useLayoutEffect(() => {
  //   if (!state["total"]) navigate("/business-step1");
  // }, []);

  useEffect(() => {
    setTableData(Data);
  }, [tableData]);

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
  return (
    <section className="section-business-product-list">
      <div className="section-container">
        <div className="content-title">
          <div className="sub-title">PRODUCT LIST</div>
          <div className="title">Danh Sách Thiết Bị Sử Dụng Cho Dự Án</div>
          <div className="underline"></div>
        </div>
        {tableData.content?.map((table) => {
          return <Table2 key={table.id} table={table} />;
        })}
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
                <SubTable sorting={sorting} key={table.id} table={table} />
              );
            })}
          </table>
        </div>
        <div className="sumary">
          <div className="smallNote">{tableData.smallNote}</div>
        </div>
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
