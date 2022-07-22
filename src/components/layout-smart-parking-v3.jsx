import React from "react";

import ButtonRounded from "@components/button/button-card-rounded";
import NavbarParking from "@components/menu/index";
import { useTranslation } from "react-i18next";

import logo from "../images/smart-home-v3/png/logo.png";
import Footer from "./footer/footer-v3/footer-v3";

function LayoutParking({ children }) {
  const { t } = useTranslation();
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
      <Footer />
      <ButtonRounded />
    </>
  );
}
export default LayoutParking;
