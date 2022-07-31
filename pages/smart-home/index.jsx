import LayoutSmartHome from '@components/common/layout-smart-home';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SectionProductsSlider from '@components/smart-home/section-products-slider';
import SectionProductMain from '@components/common/product/section-product-main';
import SectionSwiperVideoSliving from '@components/smart-home/section-swiper-video-sliving';
import SectionHelpMore from '@components/common/SectionHelpMore';
import SectionPopularProductSliving from '@components/smart-home/section-popular-product-sliving';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'smartHome', 'menu','smartLighting'])),
      locale: locale,
    },
  };
};
const SmartHome = () => {
  return (
    <LayoutSmartHome>
      <SectionProductsSlider />
      <SectionPopularProductSliving />
      <SectionProductMain />
      <SectionSwiperVideoSliving />
      <SectionHelpMore />
    </LayoutSmartHome>
  );
};

export default SmartHome;
