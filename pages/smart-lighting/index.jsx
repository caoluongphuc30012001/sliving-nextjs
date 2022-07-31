import React from 'react';
import SectionAboutUs from '@components/smart-lighting/section-about-us';
import LayoutSmartLighting from '@components/common/layout-smart-lighting';
import SectionHeader from '@components/smart-lighting/section-header';
import SectionProductsSlider from '@components/smart-lighting/section-products-slider';
import SectionPopularProductSliving from '@components/smart-lighting/section-popular-product-sliving';
import SectionSwiperVideoSliving from '@components/smart-lighting/section-swiper-video-sliving';
import SectionTitlebox from '@components/smart-lighting/section-titlebox';
import SectionDefinition from '@components/smart-lighting/section-definition';
import SectionProductMain from '../../components/common/product/section-product-main';
// import Seo from "../../components/seo";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SectionHelpMore from '@components/common/SectionHelpMore';
// import Link from "next/link";
// import { useRouter } from "next/router";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'smartLighting', 'menu'])),
      locale: locale,
    },
  };
};
const SmartLightingPage = () => {
  return (
    <LayoutSmartLighting>
      {/* <Seo
        title={"Smart Lighting"}
        description="Smart Lighting - giải pháp chiếu sáng thông minh, 
          tiện lợi cho các không gian như: trung tâm thương mại,
          tòa nhà, văn phòng, căn hộ,... mang lại cảm giác thoải mái và hiện đại"
        url="/smart-lighting/"
        metaImage="/thumbnail.png"
      /> */}
      <main id="smart_lighting_page">
        <SectionHeader />
        <SectionDefinition />
        <SectionAboutUs />
        <SectionTitlebox />
        <SectionProductsSlider />
        <SectionPopularProductSliving />
        <SectionProductMain />
        <SectionSwiperVideoSliving />
        <SectionHelpMore />
      </main>
    </LayoutSmartLighting>
  );
};

export default SmartLightingPage;
