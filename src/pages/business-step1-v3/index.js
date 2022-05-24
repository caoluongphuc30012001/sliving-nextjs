import React from "react";
import BusinessStep1 from "./body/business-step-1";
import SectionHeader from "./body/section-header";
import LayoutV3 from "../../components/layout-v3";
import SectionHelpMore from "../../components/help-more/section-help-more";
import "./index.scss";

const IndexPage = () => {
  return (
    <LayoutV3>
      <main id="business-step1-v3">
        <SectionHeader />
        <BusinessStep1 />
        <SectionHelpMore />
      </main>
    </LayoutV3>
  );
};
export default IndexPage;
