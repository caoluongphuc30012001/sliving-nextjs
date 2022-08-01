import React, { useState } from 'react';

import SectionHeader from '../../components/business/section-header';
import SectionProductList from '../../components/business/section-product-list';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LayoutV3 from '@components/common/layout-main';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'business', 'menu', 'footer'])),
      locale: locale,
    },
  };
};
const Business = () => {
  return (
    <LayoutV3>
      <main id="business">
        <SectionHeader />
        <SectionProductList />
      </main>
    </LayoutV3>
  );
};

export default Business;
