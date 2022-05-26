import React from "react";
import SectionAboutUs from "./body/section-about-us";
import LayoutSmartLighting from "../../components/layout-smart-lighting-v3";
import "./style.scss";
import SectionHeader from "./body/section-header";
import SectionProductsSlider from "./body/section-products-slider";
import SectionPopularProductSliving from "./body/section-popular-product-sliving";
import SectionSwiperVideoSliving from "./body/section-swiper-video-sliving";
import SectionTitlebox from "./body/section-titlebox";
import SectionDefinition from "./body/section-definition";
import SectionProductMain from "../../components/product/section-product-main";
import Seo from "../../components/seo";
const SmartLightingPage = () => {
  return (
    <LayoutSmartLighting>
      <Seo
        title={"Smart Lighting"}
        description="Smart Lighting - giải pháp chiếu sáng thông minh, 
          tiện lợi cho các không gian như: trung tâm thương mại,
          tòa nhà, văn phòng, căn hộ,... mang lại cảm giác thoải mái và hiện đại"
      />
      <main id="smart_lighting_page">
        <SectionHeader />
        <SectionDefinition />
        <SectionAboutUs />
        <SectionTitlebox />
        <SectionProductsSlider />
        <SectionPopularProductSliving />
        <SectionProductMain />
        <SectionSwiperVideoSliving />
      </main>
    </LayoutSmartLighting>
  );
};

export default SmartLightingPage;
