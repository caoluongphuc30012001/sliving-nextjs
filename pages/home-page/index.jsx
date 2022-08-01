import React, { useState, useEffect } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useTranslation, i18n } from 'next-i18next';
import LayoutV3 from '@components/common/layout-main';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home', 'menu', 'footer'])),
    },
  };
};

const HomePage = () => {
  return <LayoutV3></LayoutV3>;
};

export default HomePage;
