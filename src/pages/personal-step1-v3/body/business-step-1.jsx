import React, { useContext, useState, useEffect } from "react";
import { Link } from "gatsby";

import imageStep from "../../../images/business-step1-v3/jpg/control-solution.jpg";

import axios from "axios";

import {
  BusinessDispatchContext,
  BusinessStateContext,
} from "../../../context/businessContext";

const BusinessStep1 = () => {
  const dispatch = useContext(BusinessDispatchContext);

  const [activeCard, setActiveCard] = useState({});

  const [listOption, setListOption] = useState([]);

  useEffect(() => {
    const getListHouse = async () => {
      try {
        const response = await axios.get(
          "https://2b2kcrs18g.execute-api.ap-southeast-1.amazonaws.com/staging/business/houses"
        );
        setListOption(response.data.Items);
        setActiveCard(response.data.Items[0]);
      } catch (err) {
        console.error(err);
      }
    };
    getListHouse();
  }, []);

  const handleClickCardItem = (cardItem) => {
    setActiveCard({ ...cardItem });
  };

  return (
    <section className="business-step1-container">
      <div className="business-step1-wrapper">
        <div className="top-content">
          <h1 className="main-title">Chọn Loại Căn Hộ Bạn Đang Sở Hữu</h1>
          <h4 className="sub-title">
            Chọn một loại hình căn hộ bạn đang sở hữu, chúng tôi sẽ đưa ra các
            giải pháp thông minh phù hợp với căn hộ của bạn.
          </h4>
        </div>
        <div className="bottom-content">
          {listOption.map((item) => {
            return (
              <div
                className={`${
                  item.id === activeCard.id
                    ? "bottom-content-container active"
                    : "bottom-content-container"
                }  `}
                key={item.id}
                onClick={() => {
                  handleClickCardItem(item);
                }}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
              >
                <img src={imageStep} alt="" className="solution-item-img"></img>
                <div className="solution-item-desc">
                  <span>{item.nameVi}</span>
                </div>
              </div>
            );
          })}
        </div>

        <Link to="/personal-step2">
          <button
            className="advise-now-btn"
            type="button"
            onClick={() => {
              dispatch({ type: "GET_HOUSE_ID", payload: activeCard.id });
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
