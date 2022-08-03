import LayoutSmartHome from '@components/common/layout-smart-home';
import SectionProductMain from '@components/common/product/section-product-main';
import SectionHelpMore from '@components/common/SectionHelpMore';
import Seo from '@components/common/seo';
import SectionPopularProductSliving from '@components/smart-home/section-popular-product-sliving';
import SectionProductsSlider from '@components/smart-home/section-products-slider';
import SectionSwiperVideoSliving from '@components/smart-home/section-swiper-video-sliving';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'smartHome',
        'menu',
        'smartLighting',
        'footer',
        'seo',
      ])),
      locale: locale,
    },
  };
};
const SmartHome = () => {
  const { t } = useTranslation('seo');

  return (
    <>
      <Seo
        title={t('smartHome.title')}
        description={t('smartHome.description')}
        url="/smart-home"
      />
      <LayoutSmartHome>
        <SectionProductsSlider />
        <SectionPopularProductSliving />
        <SectionProductMain />
        <SectionSwiperVideoSliving />
        <SectionHelpMore />
      </LayoutSmartHome>
    </>
  );
};

export default SmartHome;
