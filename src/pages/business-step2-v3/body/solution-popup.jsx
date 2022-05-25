import React, { useState, useEffect, useRef } from "react";

import { packagesData } from "@data/business-packages.js";

import selectedIcon from "../../../images/business-step1-v3/svg/icon-add.svg";

const CheckOutsideClick = ({ onClickOutside, children }) => {
  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onClickOutside && onClickOutside();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  if (!children) return null;

  return (
    <div ref={ref} className="container">
      {children}
    </div>
  );
};

const SPEC = ({ text }) => {
  {
    text = text.replace("Giải pháp", "");
    return (
      <div className="solution-item-desc">
        <p className="desc-p">Giải Pháp</p>
        <span className="desc-span">{text}</span>
      </div>
    );
  }
};

const SolutionPopup = ({ activeCards, setOpenPopup, dispatch }) => {
  const [activePopupCards, setActivePopupCards] = useState([]);

  useEffect(() => {
    setActivePopupCards([...activeCards]);
  }, [activeCards]);

  const handleClick = (cardItem) => {
    const check = activePopupCards.every((item) => {
      return item.id !== cardItem.id;
    });

    if (check) {
      console.log([...activePopupCards, { ...cardItem }]);
      setActivePopupCards([...activePopupCards, { ...cardItem }]);
    } else {
      const newActivePopupCards = activePopupCards.filter((item) => {
        return item.id !== cardItem.id;
      });

      setActivePopupCards([...newActivePopupCards]);
    }
  };

  const handleSubmit = () => {
    dispatch({ type: "GET_USER_CHOICES", payload: activePopupCards });
    setOpenPopup(false);
  };

  return (
    <div className="solution-popup-bg">
      <CheckOutsideClick onClickOutside={() => setOpenPopup(false)}>
        <div className="wrapper">
          <div className="wrapper-title">Chọn Giải Pháp</div>
          <div className="body">
            {packagesData.map((item) => {
              let checkItem = activePopupCards.find(
                (element) => element.id === item.id
              );
              return (
                <div
                  className={`${
                    checkItem
                      ? "bottom-content-container active"
                      : "bottom-content-container"
                  }  `}
                  key={item.id}
                  onClick={() => {
                    handleClick(item);
                  }}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="solution-item-img"
                  ></img>
                  <SPEC text={item.title} />
                  <img
                    className="solution-item-icon"
                    src={selectedIcon}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
          <div className="popup-footer">
            <button className="popup-advise-now-btn" onClick={handleSubmit}>
              <span>Xác nhận</span>
            </button>
          </div>
        </div>
      </CheckOutsideClick>
    </div>
  );
};

export default SolutionPopup;
