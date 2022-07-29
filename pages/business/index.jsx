import React, { useState } from 'react';

import SectionHeader from '../../components/business/section-header';
import SectionProductList from '../../components/business/section-product-list';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'business'])),
      locale: locale,
    },
  };
};
const Business = ({ locale }) => {
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
      <SectionProductList />
    </div>
  );
};

export default Business;
