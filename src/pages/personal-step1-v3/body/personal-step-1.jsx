import React, { useContext, useState, useEffect, useLayoutEffect } from "react";
import { Link } from "gatsby";
import imageStep from "../../../images/business-step1-v3/jpg/control-solution.jpg";

import item_3 from "../../../images/personal-step1-v3/jpg/item-1.jpg";
import item_2 from "../../../images/personal-step1-v3/jpg/item-2.jpg";
import item_v from "../../../images/personal-step1-v3/jpg/item-3.jpg";
import item_1 from "../../../images/personal-step1-v3/jpg/item-5.jpg";

import axios from "axios";

import { useTranslation } from "react-i18next";

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
  const checkList = [{}, {}, {}, {}];
  const [skeleton, setSkeleton] = useState(true);

  const { t, i18n } = useTranslation();

  useLayoutEffect(() => {
    const getListHouse = async () => {
      try {
        const response = await axios.get(
          "https://zacnrkt7mg.execute-api.ap-southeast-1.amazonaws.com/staging/business/houses"
        );
        // item.listDevice = item.listDevice.sort((a, b) =>
        //     a.deviceValues.nameVi.localeCompare(b.deviceValues.nameVi)
        //   );
        const data = response.data?.Items.sort((a, b) =>
          a.nameVi.localeCompare(b.nameVi)
        );
        setListOption(data);
        setActiveCard(data[0]);
      } catch (err) {
        console.error(err);
      }
    };
    getListHouse();
    const time = setTimeout(() => {
      setSkeleton(false);
    }, 1000);
    return () => {
      clearTimeout(time);
    };
  }, []);

  const handleClickCardItem = (cardItem) => {
    setActiveCard({ ...cardItem });
  };
  return (
    <section className="personal-step1-container">
      <div className="personal-step1-wrapper">
        <div className="top-content">
          <h1 className="main-title">
            {t("personalPackage.personalStep1.mainTitle")}
          </h1>
          <h4 className="sub-title">
            {t("personalPackage.personalStep1.mainDesc")}
          </h4>
        </div>
        <div
          className={`bottom-content ${
            listOption.length > 0
              ? !skeleton
                ? ""
                : "non-display"
              : "non-display"
          }`}
        >
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
                <div className="image-box">
                  <img
                    src={imgList[index].img}
                    alt=""
                    className="solution-item-img"
                  ></img>
                </div>
                <div className="solution-item-desc">
                  <span>
                    {i18n.language.toUpperCase() === "VN"
                      ? item.nameVi
                      : item.nameEn}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={`bottom-content ${
            listOption.length > 0 ? (skeleton ? "" : "non-display") : ""
          }`}
        >
          {checkList.map((item, index) => {
            const id = index + 1;
            return (
              // <div
              //   className= "skeleton-item"
              //   key={id}
              // >
              // </div>
              <div id="card" key={id}>
                <div className="card-image">
                  <div className="block pulsate"></div>
                </div>
                <div className="card-content">
                  <div className="block2 pulsate"></div>
                  <div className="block3 pulsate"></div>
                  <div className="circle pulsate"></div>
                  <div></div>
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
            <span>{t("personalPackage.groupBtn.confirmBtn")}</span>
          </button>
        </Link>
      </div>
    </section>
  );
};
export default PersonalStep1;
