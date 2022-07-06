import React from "react";
import "./style.scss";
import './index.scss';
import LayoutV3 from "../../components/layout-v3";
import SectionProductList from "./body/section-product-list";
import SectionHelpMore from "../../components/help-more/section-help-more";
import Seo from "../../components/seo";
import SectionHeader from "../business-step1-v3/body/section-header";

const BusinessStep3 = () => {
  return (
    <LayoutV3>
      <Seo
        title="Sliving - Giải pháp dành cho doanh nghiệp"
        description="Cung cấp các giải pháp chiếu sáng, điều khiển thông minh, giải pháp an ninh cho tòa nhà, 
        căn hộ, văn phòng, trung tâm thương mại... với đa dạng lựa chọn và chi phí hợp lý nhất."
        url="/business/"
        metaImage="/thumbnail.png"
      />
      <main id="business-step3-v3">
        <SectionHeader />
        <SectionProductList />
        <SectionHelpMore />
      </main>
    </LayoutV3>
  );
};

export default BusinessStep3;
