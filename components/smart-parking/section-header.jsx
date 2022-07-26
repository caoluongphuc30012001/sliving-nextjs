import React from "react";

import background from "@images/smart-parking-v3/jpg/bg-parking.jpg";
import car_img from "@images/smart-parking-v3/png/img-car.png";

import style from "./style.module.scss";

import Image from "next/image";

import { useTranslation } from "next-i18next";
const SmartHeader = () => {
  const { t } = useTranslation("smartParking");
  return (
    <section className={style["section-smart-parking-v3-header"]}>
      <div className={style["smart-parking-v3-header"]}>
        <header className={style["smart-parking-header"]}>
          <div className={style["smart-parking-content"]}>
            <div className={style["content-left"]}>
              <div className={style["content-left-title"]}>
                {t("smartParking.sectionHeader.title")}
              </div>
              <div className={style["content-left-text"]}>
                {t("smartParking.sectionHeader.subTitle")}
              </div>
            </div>
            <div className={style["content-right"]}>
              <img
                className={style["content-right__img"]}
                src={car_img.src}
                alt=""
              />
            </div>
          </div>
        </header>
        <div className={style["back-ground"]}>
          <img
            alt=""
            src={background.src}
            className={style["back-ground__img"]}
          ></img>
        </div>
      </div>
    </section>
  );
};

export default SmartHeader;
