import React, { useContext, useState, useEffect } from "react";
import { Link } from "gatsby";

import { packagesData } from "@data/business-packages.js";

import {
  BusinessDispatchContext,
  BusinessStateContext,
} from "../../../context/businessContext";

const BusinessStep1 = () => {
  const dispatch = useContext(BusinessDispatchContext);
  const state = useContext(BusinessStateContext);

  const [activeCards, setActiveCards] = useState([]);

  useEffect(() => {
    if (state["userChoices"]) {
      setActiveCards([...state["userChoices"]]);
    }
  }, [state]);

  const handleClickCardItem = (cardItem) => {
    const check = activeCards.every((item) => {
      return item.id !== cardItem.id;
    });

    if (check) {
      setActiveCards([...activeCards, { ...cardItem }]);
    } else {
      const newActiveCards = activeCards.filter((item) => {
        return item.id !== cardItem.id;
      });

      setActiveCards([...newActiveCards]);
    }
  };

  return (
    <section className="business-step1-container">
      <div className="business-step1-wrapper">
        <div className="top-content">
          <h1 className="main-title">Chọn Giải Pháp Cho Dự Án</h1>
          <h4 className="sub-title">
            Chúng tôi sẽ đưa ra giải pháp phù hợp dựa trên quy mô dự án của
            doanh nghiệp bạn
          </h4>
        </div>
        <div className="bottom-content">
          {packagesData.map((item) => {
            let checkItem = activeCards.find(
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
                  handleClickCardItem(item);
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

        <Link to={`${activeCards.length > 0 ? "/business-step2" : "#"}`}>
          <button
            className="advise-now-btn"
            type="button"
            disabled={activeCards.length > 0 ? false : true}
            onClick={() => {
              dispatch({ type: "GET_USER_CHOICES", payload: activeCards });
            }}
          >
            <span>Xác nhận</span>
          </button>
        </Link>
      </div>
    </section>
  );
};
export default BusinessStep1;
