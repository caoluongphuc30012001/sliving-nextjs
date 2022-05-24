import React, { useState, useEffect, useRef } from "react";

import { packagesData } from "@data/business-packages.js";

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
                  <div className="solution-item-desc">
                    <span>{item.title}</span>
                  </div>
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
