import React from "react";

import Seo from "@components/seo";
import "swiper/css/effect-fade";
import "./style.scss";

import SectionHeader from "./body/section-header";
import SectionSolution from "./body/section-solution";
import SectionFeaturedProject from "./body/section-featured-project";
import SectionSmartLighting from "./body/section-smart-lighting";
import SectionSmartParking from "./body/section-smart-parking";
import SectionHelpMore from "../../components/help-more/section-help-more";
import SectionProduct from "./body/section-product";
import LayoutV3 from "../../components/layout-v3";

const IndexPage = () => {
  return (
    <LayoutV3>
      <Seo
        title="Sliving - Giải Pháp Nhà Thông Minh"
        description="Sliving cung cấp giải pháp nhà thông minh với thuật toán AI để thực hiện giám sát từ xa an toàn và an ninh."
        url="https://sliving.vn"
      />
      <SectionHeader />
      <main id="main_page">
        <SectionSolution />
        <SectionProduct />
        <SectionSmartParking />
        <SectionSmartLighting />
        <SectionFeaturedProject />
        <SectionHelpMore />
      </main>
    </LayoutV3>
  );
};

export default IndexPage;
