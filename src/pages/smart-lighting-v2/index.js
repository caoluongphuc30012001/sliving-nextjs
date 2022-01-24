import React from "react";

import "@i18n/i18n";

import LightingHeader from "./body/lighting-header";
import LedLightProduct from "./body/lighting-led-product";
import IntroMain from "./body/light-intro";

import SectionBannerV2 from "@components/section/banner/banner";
import LayoutSmartLighting from "@components/layout-smart-lighting";

import Seo from "@components/seo";

import NewSectionApp from "../smart-home-page-v2/body/new-section-app";

import dataMetaDetails   from "@data/dataMeta.json";

import { useTranslation } from "react-i18next";

import "./style.scss"

const LightingPage = () => {
  const { t } = useTranslation();
const dataMeta = dataMetaDetails["dataMeta"];

  return (
    <LayoutSmartLighting >
        <Seo title={t(`${dataMeta?.smart_lighting.title}`)} description={t(`${dataMeta?.smart_lighting.description}`)} url={dataMeta.smart_lighting.url}  />
        <div id='smartLighting'>
          <LightingHeader />
          <NewSectionApp />
          <IntroMain />
          <LedLightProduct />
          <div className="lightBanner">
            <SectionBannerV2 title={t(`solution.footer`)} desc={t(`solution.subFooter`)} btnContact />
          </div>
        </div>
      </LayoutSmartLighting>
  );
}
export default LightingPage;
