import React, { useState, useEffect, useContext, useLayoutEffect } from "react";
import { navigate } from "gatsby";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import {
  BusinessDispatchContext,
  BusinessStateContext,
} from "../../../context/businessContext";
import ModalAdvise from "@components/modal/modal-advise/ModalAdvise";

import { useTranslation } from "react-i18next";

const isBrowser = typeof window !== "undefined";
const Table = ({ table }) => {
  const { i18n } = useTranslation();
  const checkVn = i18n.language.toUpperCase() === "VN" ? true : false;
  return (
    <tbody className="body-content-container border-b">
      <tr className="body-table-row">
        {checkVn ? table.room.roomValue.nameVi : table.room.roomValue.nameEn}
      </tr>
      <tr className="body-table-row border-l">
        {table.listDevice.map((item, index) => {
          const id = index + 1;
          return (
            <td key={id} className="table-data border-b">
              {checkVn ? item.deviceValues.nameVi : item.deviceValues.nameEn}
            </td>
          );
        })}
      </tr>
      <tr className="body-table-row border-l">
        {table.listDevice.map((item, index) => {
          const id = index + 1;
          return (
            <td key={id} className="table-data border-b">
              {item.basicCount * table.room.quantityRoom}
            </td>
          );
        })}
      </tr>
      <tr className="body-table-row border-l">
        {table.listDevice.map((item, index) => {
          const id = index + 1;
          return (
            <td key={id} className="table-data border-b">
              {item.normalCount * table.room.quantityRoom}
            </td>
          );
        })}
      </tr>
      <tr className="body-table-row border-l">
        {table.listDevice.map((item, index) => {
          const id = index + 1;
          return (
            <td key={id} className="table-data border-b">
              {item.advancedCount * table.room.quantityRoom}
            </td>
          );
        })}
      </tr>
    </tbody>
  );
};

const SectionProductList = () => {
  const [modalShow, setModalShow] = useState(false);
  const [totalBasic, setTotalBasic] = useState(0);
  const [totalNormal, setTotalNormal] = useState(0);
  const [totalAdvanced, setTotalAdvanced] = useState(0);
  const [totalDevice, setTotalDevice] = useState(0);
  const [currentHouse, setCurrentHouse] = useState("");
  const [display, setDisplay] = useState(false);
  // const [order, setOrder] = useState("ASC");
  const [quantity, setQuantity] = useState(0);
  const state = useContext(BusinessStateContext);

  const [tableData, setTableData] = useState([]);
  const [isBasic, setBasic] = useState(true);

  const [buttonList, setButtonList] = useState([]);

  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(0);

  const { t } = useTranslation();

  useLayoutEffect(() => {
    if (!state["houseID"]) navigate("/personal-step1");
  }, []);
  useEffect(() => {
    const scrollEvent = () => {
      if (isBrowser) {
        const section = document.getElementById(
          "section-personal-product-list"
        );
        if (window.pageYOffset > section.clientHeight - window.innerHeight)
          setDisplay(false);
        else setDisplay(true);
      }
    };
    document.addEventListener("scroll", scrollEvent);
    return () => {
      document.removeEventListener("scroll", scrollEvent);
    };
  }, []);
  useEffect(() => {
    const getServices = async () => {
      try {
        const res = await axios.get(
          "https://zacnrkt7mg.execute-api.ap-southeast-1.amazonaws.com/staging/business/services"
        );
        const list = res.data?.Items.map((item, index) => {
          return {
            ...item,
            className: index === 1 ? "effect left" : "effect right",
          };
        });
        setButtonList(list.reverse());
      } catch (err) {
        console.error(err);
      }
    };

    getServices();
  }, []);
  useEffect(() => {
    const getListHouse = async () => {
      try {
        const response = await axios.get(
          "https://zacnrkt7mg.execute-api.ap-southeast-1.amazonaws.com/staging/business/houses"
        );
        setCurrentHouse(
          response.data?.Items.find((item) => item.id === state["houseID"])
            .nameVi
        );
      } catch (err) {
        console.error(err);
      }
    };
    if (state["houseID"]) getListHouse();
  }, []);
  useEffect(() => {
    const getDevice = async (houseID, isBasic) => {
      try {
        const res = await axios.post(
          "https://zacnrkt7mg.execute-api.ap-southeast-1.amazonaws.com/staging/business/devices",
          {
            houseID,
            isBasic,
          }
        );
        setLoading(false);
        let rs = res.data.sort((a, b) =>
          a.room.roomValue.nameVi.localeCompare(b.room.roomValue.nameVi)
        );
        res.data.forEach((item) => {
          item.listDevice = item.listDevice.sort((a, b) =>
            a.deviceValues.nameVi.localeCompare(b.deviceValues.nameVi)
          );
        });
        rs.forEach((item) => {
          item.listDevice.forEach((device) => {
            device.deviceValues.totalBasic =
              device.basicCount * item.room.quantityRoom;
            device.deviceValues.totalNormal =
              device.normalCount * item.room.quantityRoom;
            device.deviceValues.totalAdvanced =
              device.advancedCount * item.room.quantityRoom;
          });
        });
        setTableData(rs);
        console.log(rs);
      } catch (err) {
        console.error(err);
      }
    };

    if (state["houseID"]) getDevice(state["houseID"], isBasic);
  }, [isBasic, state]);

  const sumCalculation = (list, property) => {
    const sum = list.listDevice.reduce((prev, item) => {
      return prev + item[property] * item.deviceValues.price;
    }, 0);
    return sum;
  };

  const sumDeviceCalculation = (list) => {
    const sum = list.listDevice.reduce((prev, item) => {
      return prev + item.deviceValues.totalBasic;
    }, 0);
    return sum;
  };

  useEffect(() => {
    const getTotal = (SetData, property) => {
      const total = tableData.reduce((prev, item) => {
        return prev + sumCalculation(item, property);
      }, 0);
      SetData(total);
    };
    getTotal(setTotalBasic, "basicCount");
    getTotal(setTotalNormal, "normalCount");
    getTotal(setTotalAdvanced, "advancedCount");
  }, [tableData]);

  useEffect(() => {
    const getTotal = () => {
      const total = tableData.reduce((prev, item) => {
        return prev + sumDeviceCalculation(item);
      }, 0);
      setTotalDevice(total);
    };
    getTotal();
  }, [tableData]);

  // const handlePlus = (deviceId, roomId) => {
  //   tableData.forEach((table) => {
  //     if (table.room.roomValue.id === roomId)
  //       table.listDevice.forEach((item) => {
  //         if (item.deviceValues.id === deviceId) item.deviceValues.total += 1;
  //       });
  //   });
  //   setTableData([...tableData]);
  // };

  // const handleSub = (deviceId, roomId) => {
  //   tableData.forEach((table) => {
  //     if (table.room.roomValue.id === roomId)
  //       table.listDevice.forEach((item) => {
  //         if (item.deviceValues.id === deviceId && item.deviceValues.total > 0)
  //           item.deviceValues.total -= 1;
  //       });
  //   });
  //   setTableData([...tableData]);
  // };

  // const onInputChange = (deviceId, roomId, value) => {
  //   value = Number(value).toFixed(0);
  //   tableData.forEach((table) => {
  //     if (table.room.roomValue.id === roomId)
  //       table.listDevice.forEach((item) => {
  //         if (item.deviceValues.id === deviceId && Number(value) >= 0)
  //           item.deviceValues.total = Number(value);
  //       });
  //   });
  //   setTableData([...tableData]);
  // };

  return (
    <section
      className="section-personal-product-list"
      id="section-personal-product-list"
    >
      <div className="section-container">
        <div className="content-title">
          <div className="sub-title">PRODUCT LIST</div>
          <div className="title">
            {t("personalPackage.personalStep2.mainDesc")}
          </div>
          <div className="underline"></div>
        </div>
        <div className="table">
          <table className="table-container">
            <thead className="content-container">
              <tr className="table-row">
                <th className="table-data header">
                  {t("personalPackage.personalStep2.tableHeader.title1")}
                </th>
                <th className="table-data header border-l">
                  {t("personalPackage.personalStep2.tableHeader.title2")}
                </th>
                <th className="table-data header border-l">
                  {t("personalPackage.personalStep2.tableHeader.title3")}
                </th>
                <th className="table-data header border-l">
                  {t("personalPackage.personalStep2.tableHeader.title4")}
                </th>
                <th className="table-data header border-l">
                  {t("personalPackage.personalStep2.tableHeader.title5")}
                </th>
              </tr>
            </thead>
            {loading && (
              <Spinner animation="border" className="spiner-animation" />
            )}
            {!loading &&
              tableData.map((table, index) => {
                const id = index + 1;
                return (
                  <Table
                    key={id}
                    table={table}
                    quantity={quantity}
                    // handlePlus={handlePlus}
                    // handleSub={handleSub}
                    // onInputChange={onInputChange}
                  />
                );
              })}
            <thead className="content-container">
              <tr className="table-row">
                <th className="table-data header"></th>
                <th className="table-data header border-l"></th>
                <th className="table-data header border-l">
                  {(Math.round(totalBasic / 1000000) * 1000000).toLocaleString(
                    "vi-VN",
                    {
                      style: "currency",
                      currency: "VND",
                    }
                  )}
                </th>
                <th className="table-data header border-l">
                  {(Math.round(totalNormal / 1000000) * 1000000).toLocaleString(
                    "vi-VN",
                    {
                      style: "currency",
                      currency: "VND",
                    }
                  )}
                </th>
                <th className="table-data header border-l">
                  {(
                    Math.round(totalAdvanced / 1000000) * 1000000
                  ).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </th>
              </tr>
            </thead>
          </table>
        </div>
        {!loading && (
          <div
            className={` ${display ? "active-menu" : "section-menu-bottom"}`}
          >
            <div className="bottom-menu">
              <div
                className="advise-now-btn"
                onClick={() => setModalShow(true)}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
              >
                <span>{t("personalPackage.groupBtn.adviseBtn")}</span>
              </div>
            </div>
            <div className="table">
              <table className="table-container">
                <thead className="content-container">
                  <tr className="table-row">
                    <th className="table-data header border-l">
                      {(
                        Math.round(totalBasic / 1000000) * 1000000
                      ).toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </th>
                    <th className="table-data header border-l">
                      {(
                        Math.round(totalNormal / 1000000) * 1000000
                      ).toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </th>
                    <th className="table-data header border-l">
                      {(
                        Math.round(totalAdvanced / 1000000) * 1000000
                      ).toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        )}
        {!loading && (
          <div
            className="advise-now-btn"
            onClick={() => setModalShow(true)}
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
          >
            <span>{t("personalPackage.groupBtn.adviseBtn")}</span>
          </div>
        )}
      </div>
      <ModalAdvise
        show={modalShow}
        onHide={() => setModalShow(false)}
        houseName={currentHouse}
        serviceName={isBasic ? "Cơ Bản" : "Nâng Cao"}
      />
    </section>
  );
};

export default SectionProductList;
