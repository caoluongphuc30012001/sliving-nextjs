import React, { useState } from 'react';

import SectionHeader from '@components/about-us/section-header';
import SectionBrandStory from '@components/about-us/section-brand-story';
import SectionCustomerCentric from '@components/about-us/section-customer-centric';
import SectionActivity from '@components/about-us/section-field-activity';
import SectionIntro from '@components/about-us/section-intro';
import SectionOurPartner from '@components/about-us/section-our-partner';
import SectionSmartFactory from '@components/about-us/section-smart-factory';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LayoutV3 from '@components/common/layout-v3';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'aboutUs',"menu"])),
      locale: locale,
    },
  };
};
const AboutUs = ({ locale }) => {
  const router = useRouter();
  const changeLng = () => {
    router.push(router.asPath, undefined, {
      locale: locale === 'en' ? 'vi' : 'en',
      scroll: false,
    });
  };
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
      </main>
    </LayoutV3>
  );
};

export default AboutUs;
