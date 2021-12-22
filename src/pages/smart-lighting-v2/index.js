import React from "react";
import LightingHeader from "./body/lighting-header";
import LedLightProduct from "./body/lighting-led-product";
import LightingProduct from "./body/lighting-product";
import IntroMain from "./body/light-intro";
import { graphql } from "gatsby";
import { withI18next } from "@wapps/gatsby-plugin-i18next";

import SectionBannerV2 from "@components/section/banner/banner";
import LayoutSmartLighting from "@components/layout-smart-lighting";

import "./style.scss"

const LightingPage = () => {
  return <LayoutSmartLighting isMainPage pageContext={{ isSmartLighting: true }}>
    <div id='smartLighting'>
      <LightingHeader />
      <LightingProduct />
      <IntroMain />
      <LedLightProduct />
      <div className="lightBanner">
        <SectionBannerV2 title={'Find other options that are perfect for you.'} desc={'We can answer any of your questions, provide product demos, and find the perfect package for you. Please leave a message with us!'} btnContact />
      </div>
    </div>
  </LayoutSmartLighting>
}
export default withI18next()(LightingPage);
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(
      filter: { lng: { eq: $lng }, ns: { eq: "translations" } }
    ) {
      ...LocaleFragment
    }
  }
`;
