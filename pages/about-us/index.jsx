import SectionBrandStory from '@components/about-us/section-brand-story';
import SectionCustomerCentric from '@components/about-us/section-customer-centric';
import SectionActivity from '@components/about-us/section-field-activity';
import SectionHeader from '@components/about-us/section-header';
import SectionIntro from '@components/about-us/section-intro';
import SectionOurPartner from '@components/about-us/section-our-partner';
import SectionSmartFactory from '@components/about-us/section-smart-factory';
import LayoutV3 from '@components/common/layout-main';
import SectionHelpMore from '@components/common/SectionHelpMore';
import Seo from '@components/common/seo';
import { i18n } from '@components/next-config';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'aboutUs', 'menu', 'footer', 'seo'],{
        i18n: i18n,
        serializeConfig: false,
      })),
      locale: locale,
    },
  };
};
const AboutUs = () => {
  const { t } = useTranslation('seo');
  return (
    <>
      <Seo title={t('aboutUs.title')} description={t('aboutUs.description')} url="/about-us" />
      <LayoutV3>
        <main id="about-us-page">
          <SectionHeader />
          <SectionIntro />
          <SectionBrandStory />
          <SectionCustomerCentric />
          <SectionSmartFactory />
          <SectionActivity />
          <SectionOurPartner />
          <SectionHelpMore />
        </main>
      </LayoutV3>
    </>
  );
};

export default AboutUs;
