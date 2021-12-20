import React from "react";
import LayoutNew from "@components/layout-new";
import LightingHeader from "./body/lighting-header";
import LedLightProduct from "./body/lighting-led-product";
import "./style.scss"
import LightingProduct from "./body/lighting-product";
import SectionBannerV2 from "../../components/section/banner/banner";
import IntroMain from "./body/light-intro";
import { graphql } from "gatsby";
import { withI18next } from "@wapps/gatsby-plugin-i18next";
const LightingPage=()=>{ 
    return <LayoutNew isMainPage pageContext={{isSmartLighting:true}}>
        <div id='smartLighting'>
        <LightingHeader />
        <LightingProduct />
        <IntroMain />
        <LedLightProduct />
        <div className="lightBanner">
            <SectionBannerV2 title={'Find other options that are perfect for you.'} desc={'We can answer any of your questions, provide product demos, and find the perfect package for you. Please leave a message with us!'} btnContact/>
        </div>
        </div>
    </LayoutNew>
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
