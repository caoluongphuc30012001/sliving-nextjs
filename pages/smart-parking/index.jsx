import React, { useState } from 'react';

import SectionDefinition from '@pages/smart-parking/body/section-definition';
import SmartHeader from '@pages/smart-parking/body/section-header';
import SectionParkingSolution from '@pages/smart-parking/body/section-parking-solution';
import SectionParkingSystem from '@pages/smart-parking/body/section-parking-system';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'smartParking'])),
      locale: locale,
    },
  };
};
const SmartParking = ({ locale }) => {
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
      <SmartHeader />
      <SectionDefinition />
      <SectionParkingSolution />
      <SectionParkingSystem />
    </div>
  );
};

export default SmartParking;
