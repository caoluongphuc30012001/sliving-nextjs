import React, { useState, useEffect } from 'react';

// import ButtonRounded from "@components/button/button-card-rounded";
import NavbarLighting from '@components/common/menu/index';
import Footer from '@components/common/Footer';

import logo from '@images/smart-home-v3/png/logo.png';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
function LayoutSmartLighting({ children }) {
  const { t } = useTranslation('menu');
  const listRoute = [
    {
      id: 0,
      nameRoute: t('menu.lighting'),
      listRoute: [
        {
          id: 0,
          nameRoute: t('menu.home'),
          href: '/smart-home/',
        },
        {
          id: 1,
          nameRoute: t('menu.parking'),
          href: '/smart-parking/',
        },
        {
          id: 2,
          nameRoute: t('menu.building'),
          href: '/smart-building/',
        },
      ],
    },
    {
      id: 1,
      nameRoute: t('menu.method'),
      href: '/business/',
      active: true,
    },
    {
      id: 2,
      nameRoute: t('menu.process'),
      href: '/implementation-process/',
    },
    {
      id: 3,
      nameRoute: t('menu.contact'),
      href: '/contact-us/',
    },
  ];
  return (
    <>
      <NavbarLighting logo={logo} listRoute={listRoute} back={true} />
      <main>{children}</main>
      <Footer />
      {/* <Footer />
      <ButtonRounded /> */}
    </>
  );
}
export default LayoutSmartLighting;
