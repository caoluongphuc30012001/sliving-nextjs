import React, { useState, useEffect } from 'react';
import SectionHeader from '@components/home-page/section-header';
import SectionSolution from '@components/home-page/section-solution';
import SectionFeaturedProject from '@components/home-page/section-featured-project';
import SectionSmartLighting from '@components/home-page/section-smart-lighting';
import SectionSmartParking from '@components/home-page/section-smart-parking';
import SectionHelpMore from '@components/common/SectionHelpMore';
import SectionProduct from '@components/home-page/section-product';
import Layout from '@components/common/layout-main';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'homePage', 'menu', 'footer'])),
    },
  };
};

const HomePage = () => {
  return (
    <Layout>
      <SectionHeader />
      <main id="main_page">
        <SectionSolution />
        <SectionProduct />
        <SectionSmartParking />
        <SectionSmartLighting />
        <SectionFeaturedProject />
        <SectionHelpMore />
      </main>
    </Layout>
  );
};

export default HomePage;
