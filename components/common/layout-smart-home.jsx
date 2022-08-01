import React, { useState, useEffect } from 'react';

// import ButtonRounded from "@components/button/button-card-rounded";
import NavbarSmartHome from '@components/common/menu/index';
import Footer from '@components/common/Footer';

import logo from '@images/smart-home-v3/png/logo.png';
import { useTranslation } from 'next-i18next';
function LayoutSmartHome({ children }) {
  const { t } = useTranslation('menu');
  const listRoute = [
    {
      id: 0,
      nameRoute: t('menu.home'),
      listRoute: [
        {
          id: 0,
          nameRoute: t('menu.lighting'),
          href: '/smart-lighting/',
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
      <NavbarSmartHome listRoute={listRoute} logo={logo} back={true} />
      <main>{children}</main>
      <Footer />
      {/* 
      <ButtonRounded /> */}
    </>
  );
}
export default LayoutSmartHome;
