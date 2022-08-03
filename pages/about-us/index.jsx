import React from 'react';

import SectionHeader from '@components/about-us/section-header';
import SectionBrandStory from '@components/about-us/section-brand-story';
import SectionCustomerCentric from '@components/about-us/section-customer-centric';
import SectionActivity from '@components/about-us/section-field-activity';
import SectionIntro from '@components/about-us/section-intro';
import SectionOurPartner from '@components/about-us/section-our-partner';
import SectionSmartFactory from '@components/about-us/section-smart-factory';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LayoutV3 from '@components/common/layout-main';
import SectionHelpMore from '@components/common/SectionHelpMore';
import Seo from '@components/common/seo';
import { useTranslation } from 'next-i18next';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'aboutUs', 'menu', 'footer','seo'])),
      locale: locale,
    },
  };
};
const AboutUs = () => {
  const {t} = useTranslation('seo')
  return (
    <>
      <Seo
        title={t('aboutUs.title')}
        description={t("aboutUs.description")}
        url="/about-us"
        metaImage="/thumbnail.png"
      />
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
