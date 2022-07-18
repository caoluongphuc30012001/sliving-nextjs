import React from "react";

import background from "@images/smart-parking-v3/jpg/bg-parking.jpg";
import car_img from "@images/smart-parking-v3/png/img-car.png";
import { useTranslation } from "react-i18next";

const SmartHeader = () => {
  const { t, ready } = useTranslation();

  return (
    <section className="section-smart-parking-v3-header">
      <div className="smart-parking-v3-header">
        <header className="smart-parking-header">
          <div className="smart-parking-content">
            <div className="content-left">
              <div className="content-left-title">
                {ready && t("smartParking.sectionHeader.title")}
              </div>
              <div className="content-left-text">
                {ready && t("smartParking.sectionHeader.subTitle")}
              </div>
            </div>
            <div className="content-right">
              <img className="content-right__img" src={car_img} alt="" />
            </div>
          </div>
        </header>
        <div className="back-ground">
          <img alt="" src={background} className="back-ground__img"></img>
        </div>
      </div>
    </section>
  );
};

export default SmartHeader;
