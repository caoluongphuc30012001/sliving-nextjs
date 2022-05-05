import React from "react";
import LayoutNew from "@components/layout-new";

import Seo from "@components/seo";
import "@i18n/i18n";
import "swiper/css/effect-fade";
import "./style.scss";

import SectionHeader from "./body/section-header";
import SectionSolution from "./body/section-solution";
import SectionHelpMore from "./body/section-help";
import SectionFeaturedProject from "./body/section-featured-project";
import SectionSmartLighting from "./body/section-smart-lighting";
import SectionSmartParking from "./body/section-smart-parking";

const IndexPage = () => {
  return (
    <LayoutNew>
      <SectionHeader />
      <main id="main_page">
        <SectionSolution />
        <SectionSmartParking />
        <SectionSmartLighting />
        <SectionFeaturedProject />
        <SectionHelpMore />
      </main>
    </LayoutNew>
  );
};

export default IndexPage;
