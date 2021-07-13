import React from "react";
import Layout from "@components/layout.jsx";
import { withI18next } from "@wapps/gatsby-plugin-i18next";
import { graphql } from "gatsby";
import IntroductHeader from "./header/section-header";
import SectionContent from "./body/section-content";
import SectionIntroductLast from "./body/section-last";
import imgFirst from "@images/introduction-page/smart-home/banner-first.svg";
import imgSecond from "@images/introduction-page/smart-home/banner-second.svg";
import imgThird from "@images/introduction-page/smart-home/banner-third.svg";
import imgFour from "@images/introduction-page/smart-home/banner-four.svg";
import imgFive from "@images/introduction-page/smart-home/banner-five.svg";
import imgSix from "@images/introduction-page/smart-home/banner-six.svg";
import { useTranslation } from "react-i18next";
import "./style.scss";
import BannerSlide from "./body/banner-slide";
const IntroductDetail = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="introduct-main" id="introduct-main">
        <IntroductHeader />
        <div className="section-first section-first-left">
          <SectionContent
            imgUrl={imgFirst}
            title={t(`Smart-lighting`)}
            url="introduct-detail-page/smart-lighting"
            id="smart-lighting"
          />
        </div>
        <div className="section-second">
          <SectionContent
            imgUrl={imgSecond}
            title={t(`Thermostat-control`)}
            url={"product-solution-page"}
            id="4"
          />
        </div>
        <div className="section-first">
          <SectionContent
            imgUrl={imgThird}
            title={t(`Smart-switch`)}
            id={2}
            subDescription={t(`facial-recognition`)}
            description={
              <ul>
                <li>
                {t(`Face-ID`)}
                </li>
                <li> {t(`Identify-strangers`)}</li>
                <li> {t(`recognition-camera`)}</li>
                <li> {t(`Control-elevators`)}</li>
              </ul>
            }
          />
        </div>
        <div className="section-second">
          <SectionContent
            imgUrl={imgFour}
            title={t(`Sensor`)}
            description={
              <ul>
                <li> {t(`Power-Socket-V3`)}</li>
                <li> Pir</li>
                <li> {t(`Ultrasonic-sensors`)}</li>
                <li> {t(`Light-Sensor`)}</li>
                <li> {t(`Rectangular-Socket`)}</li>
              </ul>
            }
          />
        </div>
        <div className="section-first">
          <SectionContent
            imgUrl={imgFive}
            title={t(`curtain`)}
            url={"product-solution-page"}
            id="5"
          />
        </div>
        <div className="section-second">
          <SectionContent
            imgUrl={imgSix}
            title={t(`Door-Gate`)}
            url={"product-solution-page"}
            id="8"
          />
        </div>
        <div className="banner-slides">
          <BannerSlide />
        </div>
        <div className="section-slide-product">
          <SectionIntroductLast />
        </div>
      </div>
    </Layout>
  );
};
export default withI18next()(IntroductDetail);
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(
      filter: { lng: { eq: $lng }, ns: { eq: "translations" } }
    ) {
      ...LocaleFragment
    }
  }
`;
