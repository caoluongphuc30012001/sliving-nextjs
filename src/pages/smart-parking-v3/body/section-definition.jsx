import React from "react";
import iconMaintain from "@images/smart-parking-v3/svg/icon-maintain.svg";
import iconModernity from "@images/smart-parking-v3/svg/icon-modernity.svg";
import iconParkingPhone from "@images/smart-parking-v3/svg/icon-parking-phone.svg";
import iconParkingTime from "@images/smart-parking-v3/svg/icon-parking-time.svg";
import iconSafety from "@images/smart-parking-v3/svg/icon-safety.svg";
import iconSolving from "@images/smart-parking-v3/svg/icon-solving.svg";
import { useTranslation } from "react-i18next";

const imgIconList = [
  iconParkingTime,
  iconSafety,
  iconSolving,
  iconMaintain,
  iconParkingPhone,
  iconModernity,
];

const SectionDefinition = () => {
  const { t, ready } = useTranslation();

  const infoItem = t("smartParking.sectionDefinition.infoItem", {
    returnObjects: true,
  });

  return (
    <section className="smart-parking-definition-v3">
      <div className="content">
        <div className="left-content">
          <h1 className="left-content-title">{infoItem.title}</h1>
          <div className="left-all-description-container">
            <div className="left-all-description">
              {ready &&
                infoItem.webContents.map((descItem, index) => {
                  return (
                    <p className="web-content-desc" key={index.toString()}>
                      {descItem.content}
                    </p>
                  );
                })}
              {ready &&
                infoItem.mobileContents.map((descItem, index) => {
                  return (
                    <p className="mobile-content-desc" key={index.toString()}>
                      {descItem.content}
                    </p>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className="right-content-container">
            {ready &&
              infoItem.listIcon.map((iconItem, index) => {
                return (
                  <div className="right-icon-item" key={index.toString()}>
                    <img
                      src={imgIconList[iconItem.id]}
                      alt=""
                      className="icon-item-img"
                    ></img>
                    <p className="icon-item-title">
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
