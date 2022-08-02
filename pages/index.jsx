import React from 'react';
import HomePage from './home-page';
// import Layout from "../components/common/layout";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'homePage', 'menu', 'footer'])),
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
