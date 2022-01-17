import React from "react";

import NewSectionVideo from "./body/new-section-video";
import NewSectionHeader from "./body/new-section-header";
import NewSectionApp from "./body/new-section-app";
import NewSectionImg360 from "./body/new-section-img360";
import NewSectionSolution from "./body/new-section-solution";
import NewSectionCarousel from "./body/new-section-carousel";
import NewSectionProduct from "./body/new-section-product";

import LayoutSmartHome from "@components/layout-smart-home";

import { useTranslation } from "react-i18next";

import dataMetaDetails   from "@data/dataMeta.json";

import Seo from "@components/seo";

import "./style.scss";

const HomePageNew = ({ pageContext }) => {
  const { t } = useTranslation();
const dataMeta = dataMetaDetails["dataMeta"];

  return (
    <LayoutSmartHome  pageContext={pageContext} >
    <Seo title={t(`${dataMeta.smart_home_page.title}`)} description={t(`${dataMeta.smart_home_page.description}`)} url={dataMeta.smart_home_page.url}  />
    <div className="smart-home-page-v2">
      <NewSectionHeader />
      <NewSectionApp />
      <NewSectionImg360 />
      <NewSectionProduct />
      <NewSectionCarousel />
      <NewSectionSolution />
      <NewSectionVideo />
    </div>
  </LayoutSmartHome>
  );
}
export default HomePageNew;
