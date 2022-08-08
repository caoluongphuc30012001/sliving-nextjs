import LayoutSmartLighting from '@components/common/layout-smart-lighting';
import SectionAboutUs from '@components/smart-lighting/section-about-us';
import SectionDefinition from '@components/smart-lighting/section-definition';
import SectionHeader from '@components/smart-lighting/section-header';
import SectionPopularProductSliving from '@components/smart-lighting/section-popular-product-sliving';
import SectionProductsSlider from '@components/smart-lighting/section-products-slider';
import SectionSwiperVideoSliving from '@components/smart-lighting/section-swiper-video-sliving';
import SectionTitlebox from '@components/smart-lighting/section-titlebox';
import SectionProductMain from '../../components/common/product/section-product-main';
// import Seo from "../../components/seo";
import SectionHelpMore from '@components/common/SectionHelpMore';
import Seo from '@components/common/seo';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'smartLighting',
        'menu',
        'footer',
        'seo',
      ])),
      locale: locale,
    },
  };
};
const SmartLightingPage = () => {
  const { t } = useTranslation('seo');

  return (
    <>
      <Seo
        title={t('smartLighting.title')}
        description={t('smartLighting.description')}
        url="/smart-lighting"
      />
      <LayoutSmartLighting>
        <main id="smart-lighting-page">
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
    </>
  );
};

export default SmartLightingPage;
