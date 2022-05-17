import React from "react";
import dataMeta from "@data/dataMeta.json";
import LayoutNew from "@components/layout-new";

import Seo from "@components/seo";
import "@i18n/i18n";
import "swiper/css/effect-fade";
import "./style.scss";

import SectionHeader from "./body/section-header";
import SectionSolution from "./body/section-solution";
import SectionFeaturedProject from "./body/section-featured-project";
import SectionSmartLighting from "./body/section-smart-lighting";
import SectionSmartParking from "./body/section-smart-parking";
import SectionHelpMore from "../../components/help-more/section-help-more";
import SectionProduct from "./body/section-product";

import { useTranslation } from "react-i18next";

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo title="Sliving" description="Sliving" url="https://sliving.vn" />
      <SectionHeader />
      <main id="main_page">
        {/* <SectionSolution />
        <SectionProduct />
        <SectionSmartParking />
        <SectionSmartLighting />
        <SectionFeaturedProject />
        <SectionHelpMore /> */}
      </main>
    </>
  );
};

export default IndexPage;
