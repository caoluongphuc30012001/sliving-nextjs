import React from "react";
import SectionAboutUs from "@pages/smart-lighting/body/section-about-us";
// import LayoutSmartLighting from "../../components/layout-smart-lighting-v3";
import style from "./style.module.scss";
import SectionHeader from "@pages/smart-lighting/body/section-header";
import SectionProductsSlider from "@pages/smart-lighting/body/section-products-slider";
import SectionPopularProductSliving from "@pages/smart-lighting/body/section-popular-product-sliving";
import SectionSwiperVideoSliving from "@pages/smart-lighting/body/section-swiper-video-sliving";
import SectionTitlebox from "@pages/smart-lighting/body/section-titlebox";
import SectionDefinition from "@pages/smart-lighting/body/section-definition";
import SectionProductMain from "../../components/product/section-product-main";
// import Seo from "../../components/seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import Link from "next/link";
// import { useRouter } from "next/router";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "smartLighting"])),
      locale: locale,
    },
  };
};
const SmartLightingPage = () => {
  return (
    // <LayoutSmartLighting>
      // <Seo
      //   title={"Smart Lighting"}
      //   description="Smart Lighting - giải pháp chiếu sáng thông minh, 
      //     tiện lợi cho các không gian như: trung tâm thương mại,
      //     tòa nhà, văn phòng, căn hộ,... mang lại cảm giác thoải mái và hiện đại"
      //   url="/smart-lighting/"
      //   metaImage="/thumbnail.png"
      // />
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
    // </LayoutSmartLighting>
  );
};

export default SmartLightingPage;
