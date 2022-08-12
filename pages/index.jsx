import React from 'react';
import HomePage from './home-page';
// import Layout from "../components/common/layout";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from '@components/next-config';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'homePage', 'menu', 'footer', 'seo'], {
        i18n: i18n,
        serializeConfig: false,
      })),
    },
  };
};

export default function Home(props) {
  return (
    <div className="app">
      <HomePage />
    </div>
  );
}
