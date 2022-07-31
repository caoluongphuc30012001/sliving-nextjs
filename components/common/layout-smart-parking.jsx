import React, { useState, useEffect } from 'react';

// import ButtonRounded from "@components/button/button-card-rounded";
import NavbarParking from '@components/common/menu/index';
// import FooterV3 from "@components/footer/footer-home-page";

import logo from '@images/smart-home-v3/png/logo.png';
// import Footer from './footer/footer-v3/footer-v3';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
function LayoutParking({ children }) {
  //********translate************
  const { t } = useTranslation('menu');

  const listRoute = [
    {
      id: 0,
      nameRoute: t("menu.parking"),
      listRoute: [
        {
          id: 0,
          nameRoute: t("menu.lighting"),
          href: "/smart-lighting/",
        },
        {
          id: 1,
          nameRoute: t("menu.building"),
          href: "/smart-building/",
        },
        {
          id: 2,
          nameRoute: t("menu.home"),
          href: "/smart-home",
        },
      ],
    },
    {
      id: 1,
      nameRoute: t("menu.method"),
      href: "/business/",
      active: true,
    },
    {
      id: 2,
      nameRoute: t("menu.process"),
      href: "/implementation-process/",
    },
    {
      id: 3,
      nameRoute: t("menu.contact"),
      href: "/contact-us/",
    },
  ];
  return (
    <>
      <NavbarParking listRoute={listRoute} logo={logo} back={true} />
      <main>{children}</main>
      {/* <Footer />
      <ButtonRounded /> */}
    </>
  );
}
export default LayoutParking;
