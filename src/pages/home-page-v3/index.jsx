import React from "react";
import LayoutNew from "@components/layout-new";

import Seo from "@components/seo";
import "@i18n/i18n";
import "swiper/css/effect-fade";
import "./style.scss";

import SectionHeader from "./body/section-header";
import SectionSolution from "./body/section-solution";

const IndexPage = () => {
  return (
    <LayoutNew>
      <SectionHeader />
      <main id="main_page">
        <SectionSolution />
      </main>
    </LayoutNew>
  );
};

export default IndexPage;
