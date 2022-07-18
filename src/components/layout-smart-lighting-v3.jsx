import React from "react";

import ButtonRounded from "@components/button/button-card-rounded";
// import FooterV2 from "./footer/footer-home-page";
import NavbarLighting from "@components/menu/index";

import { useTranslation } from "react-i18next";

import logo from "../images/smart-home-v3/png/logo.png";
import Footer from "./footer/footer-v3/footer-v3";

function LayoutSmartLighting({ children }) {
  const { t } = useTranslation();
  const listRoute = [
    {
      id: 0,
      nameRoute: t("menu.lighting"),
      listRoute: [
        {
          id: 0,
          nameRoute: t("menu.home"),
          href: "/smart-home/",
        },
        {
          id: 1,
          nameRoute: t("menu.parking"),
          href: "/smart-parking/",
        },
        {
          id: 2,
          nameRoute: t("menu.building"),
          href: "/smart-building/",
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
      <NavbarLighting logo={logo} listRoute={listRoute} back={true} />
      <main>{children}</main>
      {/* <FooterV2 /> */}
      <Footer />
      <ButtonRounded />
    </>
  );
}
export default LayoutSmartLighting;
