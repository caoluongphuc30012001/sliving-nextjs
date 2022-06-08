import React, { useContext, useState, useEffect } from "react";
import { Link } from "gatsby";

import imageStep from "../../../images/business-step1-v3/jpg/control-solution.jpg";

import item_3 from "../../../images/personal-step1-v3/jpg/item-1.jpg";
import item_2 from "../../../images/personal-step1-v3/jpg/item-2.jpg";
import item_v from "../../../images/personal-step1-v3/jpg/item-3.jpg";
import item_1 from "../../../images/personal-step1-v3/jpg/item-5.jpg";

import axios from "axios";

import {
  BusinessDispatchContext,
  BusinessStateContext,
} from "../../../context/businessContext";

const imgList = [
  {
    id: 0,
    img: item_1,
  },
  {
    id: 1,
    img: item_2,
  },
  {
    id: 2,
    img: item_3,
  },
  {
    id: 3,
    img: item_v,
  },
];

const PersonalStep1 = () => {
  const dispatch = useContext(BusinessDispatchContext);

  const [activeCard, setActiveCard] = useState({});

  const [listOption, setListOption] = useState([]);

  useEffect(() => {
    const getListHouse = async () => {
      try {
        const response = await axios.get(
          "https://2b2kcrs18g.execute-api.ap-southeast-1.amazonaws.com/staging/business/houses"
        );
        // item.listDevice = item.listDevice.sort((a, b) =>
        //     a.deviceValues.nameVi.localeCompare(b.deviceValues.nameVi)
        //   );
        const data = response.data.Items.sort((a, b) =>
          a.nameVi.localeCompare(b.nameVi)
        );
        console.log(data);
        setListOption(data);
        setActiveCard(data[0]);
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
          {listOption.map((item, index) => {
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
                <img
                  src={imgList[index].img}
                  alt=""
                  className="solution-item-img"
                ></img>
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
export default PersonalStep1;
