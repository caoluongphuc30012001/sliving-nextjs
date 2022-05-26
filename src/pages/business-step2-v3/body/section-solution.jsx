import React, { useState, useEffect, useContext } from "react";

import { packagesData } from "@data/business-packages.js";

import SolutionPopup from "./solution-popup";

import { Link } from "gatsby";

import {
  BusinessDispatchContext,
  BusinessStateContext,
} from "../../../context/businessContext";

import swapIcon from "../../../images/business-step2-v3/png/swap.png";
import cancel from "../../../images/business-step2-v3/svg/cancel.svg";
import plus from "../../../images/business-step2-v3/svg/plus.svg";
import addIcon from "../../../images/business-step2-v3/png/add.png";
import deleteIcon from "../../../images/business-step2-v3/png/delete.png";

function ListSolution({
  activeStep2Cards,
  setActiveStep2Cards,
  packagesData,
  dispatch,
}) {
  const [openPopup, setOpenPopup] = useState(false);

  const handleShow = () => {
    setOpenPopup(true);
  };

  const handleDeleteSolution = (index) => {
    dispatch({ type: "REMOVE_USER_CHOICES", payload: { id: index } });
    const newListActiveCards = activeStep2Cards.filter(
      (item) => item.id !== index
    );
    setActiveStep2Cards([...newListActiveCards]);
  };
  return (
    <>
      <div className="list-solution">
        <p className="name">Giải pháp áp dụng cho dự án</p>
        <div className="list-item">
          {activeStep2Cards.length > 0 &&
            activeStep2Cards.map((item, index) => {
              return (
                <div className="item-container" key={item.id}>
                  <img src={item.icon} alt="" className="icon-box" />
                  <p className="description">{item.title}</p>
                  <img
                    src={cancel}
                    alt=""
                    className="cancel-icon"
                    onClick={() => {
                      handleDeleteSolution(item.id);
                    }}
                  />
                </div>
              );
            })}
          {activeStep2Cards.length < packagesData.length && (
            <div className="item-container plus-box" onClick={handleShow}>
              <img src={plus} alt="" className="icon-box" />
              <p className="description">Thêm giải pháp</p>
            </div>
          )}
        </div>
      </div>
      {openPopup && (
        <SolutionPopup
          activeCards={activeStep2Cards}
          setOpenPopup={setOpenPopup}
          dispatch={dispatch}
        />
      )}
    </>
  );
}
function Item({ item, handleUpdate, index, handleDelete }) {
  const [itemValue, setItemValue] = useState("");
  useEffect(() => {
    setItemValue(item.count);
  }, [item.count]);
  return (
    <div className="item-box">
      <p className="name">{item.name}</p>
      <div className="input-box">
        <input
          type="number"
          className="count-input"
          onBlur={(e) => {
            if (e.target.value === "") {
              setItemValue(item.count);
            } else handleUpdate(e.target.value, index);
          }}
          value={itemValue}
          onChange={(e) => {
            setItemValue(e.target.value);
          }}
        />
        {/* <div className="unit">căn hộ</div> */}
        <button
          className="delete-btn"
          onClick={() => {
            handleDelete(index);
          }}
        >
          <img src={deleteIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
const SectionSolution = () => {
  const listOption = [
    {
      id: 0,
      label: "Căn hộ 1 phòng ngủ",
      value: "Căn hộ 1 phòng ngủ",
    },
    {
      id: 1,
      label: "Căn hộ 2 phòng ngủ",
      value: "Căn hộ 2 phòng ngủ",
    },
    {
      id: 2,
      label: "Căn hộ 3 phòng ngủ",
      value: "Căn hộ 3 phòng ngủ",
    },
    {
      id: 3,
      label: "Nhà phố 3 tầng",
      value: "Nhà phố 3 tầng",
    },
    {
      id: 4,
      label: "Biệt thự",
      value: "Biệt thự",
    },
    {
      id: 5,
      label: "Chọn loại căn hộ",
      value: "Chọn loại căn hộ",
    },
  ];

  const dispatch = useContext(BusinessDispatchContext);

  const state = useContext(BusinessStateContext);

  //   const { userChoices } = state;

  const [drop, setDrop] = useState(false);
  const [count, setCount] = useState("");
  const [sum, setSum] = useState(0);
  const [list, setList] = useState([]);
  const [validOption, setValidOption] = useState(true);
  const [validCount, setValidCount] = useState(true);

  const [activeStep2Cards, setActiveStep2Cards] = useState([]);

  const [option, setOption] = useState(listOption[listOption.length - 1]);

  const handleAdd = () => {
    checkOption();
    checkCount();
    if (
      Number(count) > 0 &&
      Number.isInteger(Number(count)) &&
      option.label !== listOption[listOption.length - 1].label
    ) {
      const id = list.findIndex((item) => item.type === option.id);
      if (id >= 0) {
        handleUpdate(Number(list[id].count) + Number(count), id);
      } else {
        setList([
          ...list,
          {
            type: option.id,
            name: option.label,
            count: Number(count),
          },
        ]);
      }
      setOption(listOption[listOption.length - 1]);
      setCount("");
    }
  };
  const handleUpdate = (value, index) => {
    let data = [...list];
    data[index].count = value;
    setList([...data]);
  };
  const handleDelete = (index) => {
    let data = [...list];
    data = [...data.slice(0, index), ...data.slice(index + 1)];
    setList([...data]);
  };
  const checkOption = () => {
    if (option.label === listOption[listOption.length - 1].label)
      setValidOption(false);
    else setValidOption(true);
  };
  const checkCount = () => {
    if (Number(count) > 0 && Number.isInteger(Number(count))) {
      setValidCount(true);
    } else setValidCount(false);
  };

  useEffect(() => {
    if (state["userChoices"]) {
      setActiveStep2Cards([...state["userChoices"]]);
    }
  }, [state]);

  useEffect(() => {
    const handleClick = (event) => {
      if (
        event.target.className !== "selection-box" &&
        event.target.parentNode?.className !== "selection-box"
      ) {
        setDrop(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  useEffect(() => {
    let sum = 0;
    list.forEach((item) => {
      sum += Number(item.count);
    });
    setSum(sum);
  }, [list]);
  return (
    <section className="section-solution-box">
      <div className="solution-container">
        <div className="title-box">
          <div className="sub-title">SOLUTION</div>
          <div className="title">
            Gói Giải Pháp Dành Cho Doanh Nghiệp Của Bạn
          </div>
          <div className="item-border"></div>
        </div>
        <ListSolution
          activeStep2Cards={activeStep2Cards}
          setActiveStep2Cards={setActiveStep2Cards}
          packagesData={packagesData}
          dispatch={dispatch}
        />
        <div className="add-house">
          <div className="type-box">
            <div className="name">Loại căn hộ dự án</div>
            <div
              className="selection-box"
              onClick={() => {
                setDrop(!drop);
              }}
            >
              <div
                className={`main-selection ${
                  option.value !== listOption[listOption.length - 1].value
                    ? "done"
                    : ""
                }`}
              >
                {option.label}
              </div>
              <img src={swapIcon} alt="" className="icon-drop-down" />
              <div className={`drop-box ${drop ? "drop" : ""}`}>
                {listOption.map((item, index) => {
                  return (
                    index !== listOption.length - 1 && (
                      <div
                        key={item.id}
                        className={`option ${
                          item.label === option.label ? "active" : ""
                        }`}
                        onClick={() => {
                          setOption(item);
                          setValidOption(true);
                        }}
                      >
                        {item.label}
                      </div>
                    )
                  );
                })}
              </div>
            </div>
            <p className={`check-valid ${!validOption ? "invalid" : ""}`}>
              Không để trống
            </p>
          </div>
          <div className="quantity-box">
            <div className="name">Số lượng</div>
            <div className="input-box">
              <input
                type="number"
                className="quantity-input"
                value={count}
                onChange={(item) => {
                  setCount(item.target.value);
                }}
                onBlur={checkCount}
              />
              <button
                className="add-btn"
                onClick={() => {
                  handleAdd();
                }}
              >
                <img src={addIcon} alt="" />
              </button>
            </div>
            <p className={`check-valid ${!validCount ? "invalid" : ""}`}>
              Phải là số tự nhiên
            </p>
          </div>
        </div>
        <div className="list-house-box">
          {list.length > 0 &&
            list.map((item, index) => {
              let id = index + 2;
              return (
                <Item
                  key={id}
                  item={item}
                  index={index}
                  handleUpdate={handleUpdate}
                  handleDelete={handleDelete}
                />
              );
            })}
        </div>
        <div className="total-box">
          <div className="total">
            <p className="name">Tổng cộng:</p>
            <p className="sum">{sum + " căn hộ"}</p>
          </div>
        </div>

        <Link
          to={`${
            activeStep2Cards?.length > 0 && sum > 99 ? "/business-step3/" : "#"
          }`}
          state={{ total: sum }}
        >
          <button
            className="advise-now-btn"
            type="button"
            onClick={() =>
              dispatch({ type: "GET_TOTAL_HOUSES", payload: { total: 1000 } })
            }
          >
            <span>Xác nhận</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SectionSolution;
