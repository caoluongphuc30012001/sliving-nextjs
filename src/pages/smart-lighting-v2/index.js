import React from "react";
import LightingHeader from "./body/lighting-header";
import LedLightProduct from "./body/lighting-led-product";
import LightingProduct from "./body/lighting-product";
import IntroMain from "./body/light-intro";
import { graphql } from "gatsby";
import { withI18next } from "@wapps/gatsby-plugin-i18next";

import SectionBannerV2 from "@components/section/banner/banner";
import LayoutSmartLighting from "@components/layout-smart-lighting";
import { useTranslation } from "react-i18next";

import "./style.scss"

const LightingPage = () => {
  const { t } = useTranslation();
  return <LayoutSmartLighting isMainPage pageContext={{ isSmartLighting: true }}>
    <div id='smartLighting'>
      <LightingHeader />
      <LightingProduct />
      <IntroMain />
      <LedLightProduct />
      <div className="lightBanner">
        <SectionBannerV2 title={t(`solution.footer`)} desc={t(`solution.subFooter`)} btnContact />
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
