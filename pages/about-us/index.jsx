import React, { useState } from 'react';

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

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'aboutUs', 'menu', 'footer'])),
      locale: locale,
    },
  };
};
const AboutUs = () => {
  return (
    <LayoutV3>
      <main>
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
  );
};

export default AboutUs;
