import React from "react";
import SectionSolution from "./body/section-solution";
import "./style.scss";
import LayoutV3 from "../../components/layout-v3";
import SectionHelpMore from "../../components/help-more/section-help-more";
import Seo from "../../components/seo";

export default function BusinessStep2() {
  return (
    <LayoutV3>
      <Seo
        title="Sliving - Giải pháp dành cho doanh nghiệp"
        description="Cung cấp các giải pháp chiếu sáng, điều khiển thông minh, giải pháp an ninh cho tòa nhà, 
        căn hộ, văn phòng, trung tâm thương mại... với đa dạng lựa chọn và chi phí hợp lý nhất."
        url="/business-step2/"
        metaImage="/thumbnail.png"
      />
      <main id="business-step2-v3">
        <SectionSolution />
        <SectionHelpMore />
      </main>
    </LayoutV3>
  );
}
