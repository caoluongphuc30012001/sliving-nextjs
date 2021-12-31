import React from "react";
import LightingHeader from "./body/lighting-header";
import LedLightProduct from "./body/lighting-led-product";
import IntroMain from "./body/light-intro";

import SectionBannerV2 from "@components/section/banner/banner";
import LayoutSmartLighting from "@components/layout-smart-lighting";
import { useTranslation } from "react-i18next";

import { PortfolioConsumer } from "@context/context";

import "./style.scss"
import NewSectionApp from "../smart-home-page-v2/body/new-section-app";

const LightingPage = () => {
  const { t } = useTranslation();
  return (
    <PortfolioConsumer>
      {context => (<LayoutSmartLighting title={context?.dataTitles?.dataTitles.smart_lighting}>
    <div id='smartLighting'>
      <LightingHeader />
      <NewSectionApp />
      <IntroMain />
      <LedLightProduct />
      <div className="lightBanner">
        <SectionBannerV2 title={t(`solution.footer`)} desc={t(`solution.subFooter`)} btnContact />
      </div>
    </div>
  </LayoutSmartLighting>)}
    </PortfolioConsumer>
  );
}
export default LightingPage;

