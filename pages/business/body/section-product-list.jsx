import React, { useState, useContext, useEffect } from "react";

// import { BusinessStateContext } from "@context/businessContext";
// import ModalAdvise from "@components/modal/modal-advise/ModalAdvise-business";
import icon from "@images/business-step3-v3/png/icon-vector.png";

import { useTranslation } from "react-i18next";

import style from "../style.module.scss";
import Image from "next/image";

const Table2 = ({ table }) => {
  const { t } = useTranslation("business");
  return (
    <div className={style[`table`]}>
      <table className={style[`table-container`]}>
        <thead className={style[`content-container`]}>
          <tr className={style[`table-row`]}>
            <th className={`${style[`table-data`]} ${style[`header`]}`}>
              {t("business.packagesData.solution")}
            </th>
            <th
              className={`${style[`table-data`]} ${style[`header`]} ${
                style[`center`]
              }`}
            >
              {t("business.packagesData.device")}
            </th>
            <th className={`${style[`table-data`]} ${style[`header`]}`}>
              {t("business.packagesData.normal")}
            </th>
            <th className={`${style[`table-data`]} ${style[`header`]}`}>
              {t("business.packagesData.advanced")}
            </th>
          </tr>
        </thead>
        <tbody
          className={`${style[`body-content-container`]} ${style[`border-b`]}`}
        >
          <tr className={style[`body-table-row`]}>{table.solutionName}</tr>
          <tr className={`${style[`body-table-row`]} ${style[`border-lr`]}`}>
            {table.deviceList.map((item) => {
              return (
                <td
                  key={item.id}
                  className={`${style[`table-data`]} ${style[`border-b`]}`}
                >
                  {item.deviceName}
                </td>
              );
            })}
          </tr>
          <tr className={style[`body-table-row`]}>
            {table.deviceList.map((item, index) => {
              return (
                <td
                  key={index}
                  id={item.id}
                  className={`${style[`table-data`]} ${style[`border-b`]}`}
                >
                  {item.inBasic && (
                    <Image
                      alt=""
                      className={style[`table-data-icon`]}
                      src={icon}
                    ></Image>
                  )}
                </td>
              );
            })}
          </tr>
          <tr className={`${style[`body-table-row`]} ${style[`border-lr`]}`}>
            {table.deviceList.map((item, index) => {
              return (
                <td
                  key={index}
                  id={item.id}
                  className={`${style[`table-data`]} ${style[`border-b`]}`}
                >
                  {item.inAdvanced && (
                    <Image
                      alt=""
                      className={style[`table-data-icon`]}
                      src={icon}
                    ></Image>
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
  const { t } = useTranslation("business");
  return (
    <tbody
      className={`${style[`body-content-container`]} ${style[`border-b`]}`}
    >
      <tr className={`${style[`body-table-row`]}`}>{table.solutionName}</tr>
      <tr className={`${style[`body-table-row`]} ${style[`border-lr`]}`}>
        <td className={`${style[`table-data`]} ${style[`border-b`]}`}>
          {table.softwareName}
        </td>
        {table.deviceList.content.length > 0 && (
          <td className={`${style[`table-data-center`]}`}>
            <div className={`${style[`data-col`]} ${style[`border-r`]}`}>
              {table.deviceList.listName}
            </div>
            <td className={`${style[`data-col`]}`}>
              {table.deviceList.content?.map((item, index) => {
                const id = index + 1;
                return (
                  <td
                    key={id}
                    className={`${style[`table-data`]} ${style[`border-b`]}`}
                  >
                    {item.deviceName}
                  </td>
                );
              })}
            </td>
          </td>
        )}
      </tr>
      <tr className={`${style[`body-table-row`]}`}>
        <td className={`${style[`table-data`]}`}>
          <div className={`${style[`quantity-data`]}`}>
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
  // const state = useContext(BusinessStateContext);
  // useLayoutEffect(() => {
  //   if (!state["total"]) navigate("/business-step1");
  // }, []);
  const [solutionNames, setSolutionNames] = useState("");

  const { i18n, t, ready } = useTranslation("business");
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
    <section className={style[`section-business-product-list`]}>
      <div className={style[`section-container`]}>
        <div className={style[`content-title`]}>
          <div className={style[`sub-title`]}>
            {t("business.packagesData.listDeviceSubTitle")}
          </div>
          <div className={style[`title`]}>
            {t("business.packagesData.listDeviceTitle")}
          </div>
          <div className={style[`underline`]}></div>
        </div>
        {tableData.content?.map((table) => {
          return <Table2 key={table.id} table={table} />;
        })}
        <div className={style[`sub-table`]}>
          <table className={style[`table-container`]}>
            <thead className={style[`content-container`]}>
              <tr className={style[`table-row`]}>
                <th className={`${style[`table-data`]} ${style[`header`]}`}>
                  {t("business.packagesData.solution")}
                </th>
                <th
                  className={`${style[`table-data`]} ${style[`header`]} ${
                    style[`center`]
                  }`}
                >
                  {t("business.packagesData.device")}
                </th>
                <th
                  className={`${style[`table-data`]} ${style[`header`]} ${
                    style[`center`]
                  }`}
                >
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
        <div className={style[`sumary`]}>
          <div className={style[`smallNote`]}>{tableData.smallNote}</div>
        </div>
        <div
          className={style[`advise-now-btn`]}
          onClick={() => setModalShow(true)}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          <span>{t("sectionDropdown.consultNow")}</span>
        </div>
      </div>
      {/* <ModalAdvise
        show={modalShow}
        onHide={() => setModalShow(false)}
        solutionNames={solutionNames}
      /> */}
    </section>
  );
};

export default SectionProductList;
