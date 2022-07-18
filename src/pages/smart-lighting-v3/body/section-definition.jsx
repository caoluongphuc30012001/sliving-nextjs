import React from "react";

import iconMaintain from "../../../images/smart-lighting-v3/svg/icon-maintain.svg";

import iconModernity from "../../../images/smart-lighting-v3/svg/icon-modernity.svg";

import iconParkingPhone from "../../../images/smart-lighting-v3/svg/icon-parking-phone.svg";

import iconParkingTime from "../../../images/smart-lighting-v3/svg/icon-parking-time.svg";

import iconSafety from "../../../images/smart-lighting-v3/svg/icon-safety.svg";

import iconSolving from "../../../images/smart-lighting-v3/svg/icon-solving.svg";
import { useTranslation } from "react-i18next";

const SectionDefinition = () => {
  const { i18n, t } = useTranslation();

  const infoItem = {
    title: `${t("sectionDefinition.title")}`,
    webContents: [
      {
        id: 0,
        content: `${t("sectionDefinition.webContentsDes1")}`,
      },
      {
        id: 1,
        content: `${t("sectionDefinition.webContentsDes2")}`,
      },
    ],
    mobileContents: [
      {
        id: 0,
        content: `${t("sectionDefinition.mobileContents")}`,
      },
    ],
    listIcon: [
      {
        id: 0,
        title: `${t("sectionDefinition.icon0")}`,
        icon: iconParkingTime,
      },
      {
        id: 1,
        title: `${t("sectionDefinition.icon1")}`,
        icon: iconSafety,
      },
      {
        id: 2,
        title: `${t("sectionDefinition.icon2")}`,
        icon: iconSolving,
      },
      {
        id: 3,
        title: `${t("sectionDefinition.icon3")}`,
        icon: iconMaintain,
      },
      {
        id: 4,
        title: `${t("sectionDefinition.icon4")}`,
        icon: iconParkingPhone,
      },
      {
        id: 5,
        title: `${t("sectionDefinition.icon5")}`,
        icon: iconModernity,
      },
    ],
  };

  return (
    <section className="smart-lighting-definition-v3">
      <div className="content">
        <div className="left-content">
          <h1 className="left-content-title">{infoItem.title}</h1>
          <div className="left-all-description-container">
            <div className="left-all-description">
              {infoItem.webContents.map((descItem) => {
                return (
                  <p key={descItem.id} className="web-content-desc">
                    {descItem.content}
                  </p>
                );
              })}
              {infoItem.mobileContents.map((descItem) => {
                return (
                  <p key={descItem.id} className="mobile-content-desc">
                    {descItem.content}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className="right-content-container">
            {infoItem.listIcon.map((iconItem) => {
              return (
                <div key={iconItem.id} className="right-icon-item">
                  <img
                    src={iconItem.icon}
                    alt=""
                    className="icon-item-img"
                  ></img>
                  <p className="icon-item-title">{iconItem.title}</p>
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
