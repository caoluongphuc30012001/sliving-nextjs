import React from 'react';
import Layout from "@components/layout.jsx";
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { graphql } from 'gatsby';
import IntroductHeader from './header/section-header';
import SectionContent from "./body/section-content";
import SectionIntroductLast from './body/section-last';
import imgFirst from "@images/introduction-page/smart-home/banner-first.svg";
import imgSecond from "@images/introduction-page/smart-home/banner-second.svg";
import imgThird from "@images/introduction-page/smart-home/banner-third.svg";
import imgFour from "@images/introduction-page/smart-home/banner-four.svg";
import imgFive from "@images/introduction-page/smart-home/banner-five.svg";
import imgSix from "@images/introduction-page/smart-home/banner-six.svg";
import "./style.scss"
import BannerSlide from './body/banner-slide';
const IntroductDetail = () => {
    return (
        <Layout>
            <div className="introduct-main" id="introduct-main">
                <IntroductHeader />
                <div className="section-first section-first-left">
                    <SectionContent imgUrl={imgFirst} title={"Chiếu sáng thông minh"} id={1}/>
                </div>
                <div className="section-second">
                    <SectionContent imgUrl={imgSecond} title={"Điều khiển điều hòa Thermostat"} id={2}/>
                </div>
                <div className="section-first">
                    <SectionContent imgUrl={imgThird} title={"Công tắc thông minh"} id={2}/>
                </div>
                <div className="section-second">
                    <SectionContent imgUrl={imgFour} title={"Sensor"} />
                </div>
                <div className="section-first">
                    <SectionContent imgUrl={imgFive} title={"Rèm thông minh thông minh"} id={2}/>
                </div>
                <div className="section-second">
                    <SectionContent imgUrl={imgSix} title={"Động cơ cửa - cổng"} id={2}/>
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
}
export default withI18next()(IntroductDetail);
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "translations" } }) {
      ...LocaleFragment
    }
  }
`;
