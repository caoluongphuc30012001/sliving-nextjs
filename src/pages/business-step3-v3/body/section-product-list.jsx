import React, { useState, useContext, useEffect } from "react";

import { BusinessStateContext } from "../../../context/businessContext";
import ModalAdvise from "@components/modal/modal-advise/ModalAdvise-business";
import icon from "../../../images/business-step3-v3/png/icon-vector.png";

import { useTranslation } from "react-i18next";
const Table2 = ({ table }) => {
  const { t } = useTranslation();
  return (
    <div className="table">
      <table className="table-container">
        <thead className="content-container">
          <tr className="table-row">
            <th className="table-data header">
              {t("business.packagesData.solution")}
            </th>
            <th className="table-data header center">
              {t("business.packagesData.device")}
            </th>
            <th className="table-data header">
              {t("business.packagesData.normal")}
            </th>
            <th className="table-data header">
              {t("business.packagesData.advanced")}
            </th>
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
  const { t } = useTranslation();
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
                const id = index + 1;
                return (
                  <td key={id} className="table-data border-b">
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
          <div className="quantity-data">
            {t("business.packagesData.contact")}
          </div>
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
  const [solutionNames, setSolutionNames] = useState("");

  const { i18n, t, ready } = useTranslation();
  useEffect(() => {
    const data = t("business.tableData2", { returnObjects: true });
    setTableData(data);
  }, [ready, i18n.language]);
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
          <div className="sub-title">
            {t("business.packagesData.listDeviceSubTitle")}
          </div>
          <div className="title">
            {t("business.packagesData.listDeviceTitle")}
          </div>
          <div className="underline"></div>
        </div>
        {tableData.content?.map((table) => {
          return <Table2 key={table.id} table={table} />;
        })}
        <div className="sub-table">
          <table className="table-container">
            <thead className="content-container">
              <tr className="table-row">
                <th className="table-data header">
                  {t("business.packagesData.solution")}
                </th>
                <th className="table-data header center">
                  {t("business.packagesData.device")}
                </th>
                <th className="table-data header">
                  {t("business.packagesData.count")}
                </th>
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
          <span>{t("sectionDropdown.consultNow")}</span>
        </div>
      </div>
      <ModalAdvise
        show={modalShow}
        onHide={() => setModalShow(false)}
        solutionNames={solutionNames}
      />
    </section>
  );
};

export default SectionProductList;
