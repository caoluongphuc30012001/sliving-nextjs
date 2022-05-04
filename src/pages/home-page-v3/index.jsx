import React from "react";
import dataMeta from "@data/dataMeta.json";
import LayoutNew from "@components/layout-new";

import Seo from "@components/seo";
import "@i18n/i18n";
import "swiper/css/effect-fade";
import "./style.scss";

import SectionHeader from "./body/section-header";
import SectionSolution from "./body/section-solution";
import SectionProduct from "./body/section-product";

import { useTranslation } from "react-i18next";

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <LayoutNew>
      <Seo title="Sliving" description="Sliving" url="https://sliving.vn" />
      <SectionHeader />
      <main id="main_page">
        <SectionSolution />
        <SectionProduct />
      </main>
    </LayoutNew>
  );
};

export default IndexPage;
