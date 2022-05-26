import React from "react";
import SectionHelpMore from "../../components/help-more/section-help-more";
import SectionSwiperVideoSliving from "./body/section-swiper-video-sliving";
import SectionPopularProductSliving from "./body/section-popular-product-sliving";
import LayoutSmartHome from "../../components/layout-smart-home-v3";
import SectionProductsSlider from "./body/section-products-slider";
import Seo from "../../components/seo";
import SectionProductMain from "../../components/product/section-product-main";
import "./style.scss";

const SmartHomePage = () => {
  return (
    <LayoutSmartHome>
      <Seo
        title={"Smart Home"}
        description="Nâng cao chất lượng cuộc sống với giải pháp Sliving Smart Home, 
        điều khiển thiết bị từ xa, giám sát an ninh hiệu quả."
        url="/smart-home/"
        metaImage="/thumbnail.png"
      />
      <main id="smart_home_page">
        <SectionProductsSlider />
        <SectionPopularProductSliving />
        <SectionProductMain />
        <SectionSwiperVideoSliving />
        <SectionHelpMore />
      </main>
    </LayoutSmartHome>
  );
};

export default SmartHomePage;
