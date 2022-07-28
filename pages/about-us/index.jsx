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

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'aboutUs'])),
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
    <div>
      <button
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 100000,
        }}
        onClick={changeLng}
      >
        click
      </button>
      <SectionHeader />
      <SectionIntro />
      <SectionBrandStory />
      <SectionCustomerCentric />
      <SectionSmartFactory />
      <SectionActivity />
      <SectionOurPartner />
    </div>
  );
};

export default AboutUs;
