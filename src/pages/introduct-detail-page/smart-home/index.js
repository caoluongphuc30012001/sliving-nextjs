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
            subDescription={
              "Sử dụng công nghệ nhận diện khuôn mặt để giám sát người ra vào các khu vực cần kiểm soát."
            }
            description={
              <ul>
                <li>
                  Gọi thang máy bằng công nghệ nhận diện khuôn mặt (Face ID)
                </li>
                <li> Nhận diện người lạ</li>
                <li> Chấm công bằng camera nhận diện khuôn mặt</li>
                <li> Điều khiển thang máy, điều khiển cửa quay (turnstiles)</li>
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
                <li> Power Socket V3</li>
                <li> Pir</li>
                <li> Cảm Biến Siêu Âm</li>
                <li> Light Sensor</li>
                <li> Ổ Cắm Hình Chữ Nhật</li>
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
