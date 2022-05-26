import React from "react";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import LayoutV3 from "../../components/layout-v3";
import SectionProductList from "./body/section-product-list";
import SectionHelpMore from "../../components/help-more/section-help-more";
import Seo from "../../components/seo";

const BusinessStep3 = () => {
  return (
    <LayoutV3>
      <Seo title="Sliving - Giải pháp dành cho doanh nghiệp " />
      <main id="business-step3-v3">
        <SectionProductList />
        <SectionHelpMore />
      </main>
    </LayoutV3>
  );
};

export default BusinessStep3;
