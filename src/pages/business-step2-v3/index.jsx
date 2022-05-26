import React from "react";
import SectionSolution from "./body/section-solution";
import "./style.scss";
import LayoutV3 from "../../components/layout-v3";
import SectionHelpMore from "../../components/help-more/section-help-more";
import Seo from "../../components/seo";

export default function BusinessStep2() {
  return (
    <LayoutV3>
      <Seo title="Sliving - Giải pháp dành cho doanh nghiệp " />
      <main id="business-step2-v3">
        <SectionSolution />
        <SectionHelpMore />
      </main>
    </LayoutV3>
  );
}
