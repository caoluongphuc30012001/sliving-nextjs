import React, { useState } from 'react';

import SectionDefinition from '@components/smart-parking/section-definition';
import SmartHeader from '@components/smart-parking/section-header';
import SectionParkingSolution from '@components/smart-parking/section-parking-solution';
import SectionParkingSystem from '@components/smart-parking/section-parking-system';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LayoutParking from '@components/common/layout-smart-parking';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'smartParking', 'menu'])),
      locale: locale,
    },
  };
};
const SmartParking = () => {
  return (
    <LayoutParking>
      <main>
        <SmartHeader />
        <SectionDefinition />
        <SectionParkingSolution />
        <SectionParkingSystem />
      </main>
    </LayoutParking>
  );
};

export default SmartParking;
