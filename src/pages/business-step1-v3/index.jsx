import React from "react";
import BusinessStep1 from "./body/business-step-1";
import SectionHeader from "./body/section-header";
import LayoutV3 from "../../components/layout-v3";
import SectionHelpMore from "../../components/help-more/section-help-more";
import "./index.scss";
import Seo from "../../components/seo";

const IndexPage = () => {
  return (
    <LayoutV3>
      <Seo
        title="Sliving - Giải pháp dành cho doanh nghiệp"
        description="Cung cấp các giải pháp chiếu sáng, điều khiển thông minh, giải pháp an ninh cho tòa nhà, 
        căn hộ, văn phòng, trung tâm thương mại... với đa dạng lựa chọn và chi phí hợp lý nhất."
        url="/business/"
        metaImage="/thumbnail.png"
      />
      <main id="business-step1-v3">
        <SectionHeader />
        <BusinessStep1 />
        <SectionHelpMore />
      </main>
    </LayoutV3>
  );
};
export default IndexPage;
