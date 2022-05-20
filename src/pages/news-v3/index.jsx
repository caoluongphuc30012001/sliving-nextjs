import React from "react";
import SectionHelpMore from "../../components/help-more/section-help-more";
import LayoutV3 from "../../components/layout-v3";
import Seo from "@components/seo";
import SectionHeader from "./body/section-header";
import SectionNewCards from "./body/section-new-cards";
import "./style.scss";

const NewsPage = () => {
  return (
    <LayoutV3>
      <Seo title="Sliving" description="Sliving" url="https://sliving.vn" />
      <main id="news-page-v3">
        <SectionHeader />
        <SectionNewCards />
        <SectionHelpMore />
      </main>
    </LayoutV3>
  );
};

export default NewsPage;
