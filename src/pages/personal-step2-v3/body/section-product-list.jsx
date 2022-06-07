import React, { useState, useEffect, useContext, useLayoutEffect } from "react";
import { navigate } from "gatsby";
import axios from "axios";

import {
  BusinessDispatchContext,
  BusinessStateContext,
} from "../../../context/businessContext";
import ModalAdvise from "@components/modal/modal-advise/ModalAdvise";

const Table = ({ table, handlePlus, handleSub, onInputChange }) => {
  return (
    <tbody className="content-container">
      {table.listDevice.map((item) => {
        return (
          <tr
            className="table-row"
            //key={}
          >
            <td className="table-data">{table.room.roomValue.nameVi}</td>
            <td className="table-data center">{item.deviceValues.nameVi}</td>
            <td className="table-data">
              <div className="quantity-data">
                <div
                  className="table-data-sub table-data-button"
                  onClick={() =>
                    handleSub(item.deviceValues.id, table.room.roomValue.id)
                  }
                >
                  -
                </div>
                <input
                  type="number"
                  name="name"
                  onChange={(e) =>
                    onInputChange(
                      item.deviceValues.id,
                      table.room.roomValue.id,
                      e.target.value
                    )
                  }
                  value={item.deviceValues.total}
                  className="table-data-input"
                />
                <div
                  className="table-data-plus table-data-button"
                  onClick={() =>
                    handlePlus(item.deviceValues.id, table.room.roomValue.id)
                  }
                >
                  +
                </div>
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

const SectionProductList = () => {
  const [modalShow, setModalShow] = useState(false);
  const [total, setTotal] = useState(0);
  const [totalDevice, setTotalDevice] = useState(0);
  const [currentHouse, setCurrentHouse] = useState("");
  // const [order, setOrder] = useState("ASC");
  const [quantity, setQuantity] = useState(0);
  const state = useContext(BusinessStateContext);

  const [tableData, setTableData] = useState([]);
  const [isBasic, setBasic] = useState(true);

  const [buttonList, setButtonList] = useState([]);

  const [toggle, setToggle] = useState(0);
  useLayoutEffect(() => {
    if (!state["houseID"]) navigate("/personal-step1");
  }, []);
  useEffect(() => {
    const getServices = async () => {
      try {
        const res = await axios.get(
          "https://2b2kcrs18g.execute-api.ap-southeast-1.amazonaws.com/staging/business/services"
        );
        const list = res.data.Items.map((item, index) => {
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
          "https://2b2kcrs18g.execute-api.ap-southeast-1.amazonaws.com/staging/business/houses"
        );
        setCurrentHouse(
          response.data.Items.find((item) => item.id === state["houseID"])
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
          "https://2b2kcrs18g.execute-api.ap-southeast-1.amazonaws.com/staging/business/devices",
          {
            houseID,
            isBasic,
          }
        );
        console.log(res.data);
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
            device.deviceValues.total =
              device.quantityDevice * item.room.quantityRoom;
          });
        });
        setTableData(rs);
      } catch (err) {
        console.error(err);
      }
    };

    if (state["houseID"]) getDevice(state["houseID"], isBasic);
  }, [isBasic, state]);

  const sumCalculation = (list) => {
    const sum = list.listDevice.reduce((prev, item) => {
      return prev + item.deviceValues.total * item.deviceValues.price;
    }, 0);
    return sum;
  };

  const sumDeviceCalculation = (list) => {
    const sum = list.listDevice.reduce((prev, item) => {
      return prev + item.deviceValues.total;
    }, 0);
    return sum;
  };

  useEffect(() => {
    const getTotal = () => {
      const total = tableData.reduce((prev, item) => {
        return prev + sumCalculation(item);
      }, 0);
      setTotal(total);
    };
    getTotal();
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

  const handlePlus = (deviceId, roomId) => {
    tableData.forEach((table) => {
      if (table.room.roomValue.id === roomId)
        table.listDevice.forEach((item) => {
          if (item.deviceValues.id === deviceId) item.deviceValues.total += 1;
        });
    });
    setTableData([...tableData]);
  };

  const handleSub = (deviceId, roomId) => {
    tableData.forEach((table) => {
      if (table.room.roomValue.id === roomId)
        table.listDevice.forEach((item) => {
          if (item.deviceValues.id === deviceId && item.deviceValues.total > 0)
            item.deviceValues.total -= 1;
        });
    });
    setTableData([...tableData]);
  };

  const onInputChange = (deviceId, roomId, value) => {
    value = Number(value).toFixed(0);
    console.log(value, "this is Value");
    tableData.forEach((table) => {
      if (table.room.roomValue.id === roomId)
        table.listDevice.forEach((item) => {
          if (item.deviceValues.id === deviceId && Number(value) >= 0)
            item.deviceValues.total = Number(value);
        });
    });
    setTableData([...tableData]);
  };

  return (
    <section className="section-business-product-list">
      <div className="section-container">
        <div className="content-title">
          <div className="sub-title">PRODUCT LIST</div>
          <div className="title">Danh Sách Thiết Bị Sử Dụng Cho Dự Án</div>
          <div className="underline"></div>
        </div>
        <div className="button-container">
          {buttonList.length > 0 &&
            buttonList.map((item, index) => {
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setToggle(index);
                    if (buttonList[index].nameEn === "Basic") setBasic(true);
                    else setBasic(false);
                  }}
                  className={`${toggle === index ? "button" : "button active"}`}
                  onKeyDown={() => {}}
                  role="button"
                  tabIndex={0}
                >
                  {item.nameVi}
                </div>
              );
            })}
          {buttonList.length > 0 && (
            <div className={buttonList[toggle].className}></div>
          )}
        </div>
        <div className="table">
          <table className="table-container">
            <thead className="content-container">
              <tr className="table-row">
                <th className="table-data header">Vị trí lắp đặt</th>
                <th className="table-data header center">Tên thiết bị</th>
                <th className="table-data header">SỐ LƯỢNG</th>
              </tr>
            </thead>
            {tableData &&
              tableData.map((table) => {
                return (
                  <Table
                    key={table.id}
                    table={table}
                    quantity={quantity}
                    handlePlus={handlePlus}
                    handleSub={handleSub}
                    onInputChange={onInputChange}
                  />
                );
              })}
          </table>
        </div>
        <div className="sumary-container">
          <div className="sumary-text">Tổng giá tiền dự tính</div>
          <div>:</div>
          <div className="sumary-quantity">
            {(Math.round(total / 1000000) * 1000000).toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </div>
        </div>
        <div className="sumary-container">
          <div className="sumary-text">Số lượng thiết bị cho gói giải pháp</div>
          <div>:</div>
          <div className="sumary-quantity">{totalDevice + " Thiết bị"}</div>
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
