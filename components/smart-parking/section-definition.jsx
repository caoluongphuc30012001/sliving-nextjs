import React from "react";

import iconMaintain from "@images/smart-parking-v3/svg/icon-maintain.svg";

import iconModernity from "@images/smart-parking-v3/svg/icon-modernity.svg";

import iconParkingPhone from "@images/smart-parking-v3/svg/icon-parking-phone.svg";

import iconParkingTime from "@images/smart-parking-v3/svg/icon-parking-time.svg";

import iconSafety from "@images/smart-parking-v3/svg/icon-safety.svg";

import iconSolving from "@images/smart-parking-v3/svg/icon-solving.svg";

import style from "./style.module.scss";

import { useTranslation, i18n } from "next-i18next";
const SectionDefinition = () => {
  const { t } = useTranslation("smartParking");
  const imgIconList = [
    iconParkingTime,
    iconSafety,
    iconSolving,
    iconMaintain,
    iconParkingPhone,
    iconModernity,
  ];
  const infoItem = t("smartParking.sectionDefinition.infoItem", {
    returnObjects: true,
  });
  return (
    <section className={style["smart-parking-definition-v3"]}>
      <div className={style["content"]}>
        <div className={style["left-content"]}>
          <h1 className={style["left-content-title"]}>{infoItem.title}</h1>
          <div className={style["left-all-description-container"]}>
            <div className={style["left-all-description"]}>
              {infoItem?.webContents?.map((descItem, index) => {
                return (
                  <p
                    className={style["web-content-desc"]}
                    key={index.toString()}
                  >
                    {descItem.content}
                  </p>
                );
              })}
              {infoItem?.mobileContents?.map((descItem, index) => {
                return (
                  <p
                    className={style["mobile-content-desc"]}
                    key={index.toString()}
                  >
                    {descItem.content}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className={style["right-content"]}>
          <div className={style["right-content-container"]}>
            {infoItem?.listIcon?.map((iconItem, index) => {
              return (
                <div
                  className={style["right-icon-item"]}
                  key={index.toString()}
                >
                  <img
                    src={imgIconList[index].src}
                    alt=""
                    className={style["icon-item-img"]}
                  ></img>
                  <p className={style["icon-item-title"]}>
                    {iconItem.title[0]} <br /> {iconItem.title[1]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDefinition;
