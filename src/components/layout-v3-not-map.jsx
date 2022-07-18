import React, { useState, useEffect } from "react";

import ButtonRounded from "@components/button/button-card-rounded";
import Navbar from "@components/menu/index";
// import FooterV3 from "@components/footer/footer-home-page";

import logo from "../images/smart-home-v3/png/logo.png";
import Footer from "./footer/footer-v3/footer-v3-not-map";
import { useLocation } from "@reach/router";

import { useTranslation } from "react-i18next";
function LayoutV3({ children }) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  let url = location.href ? location.href : "";
  const [listRoute, setListRoute] = useState([]);
  useEffect(() => {
    setListRoute([
      {
        id: 0,
        nameRoute: t("menu.homepage"),
        href: "/",
        active:
          !url.includes("about-us") &&
          !url.includes("implementation-process") &&
          !url.includes("step") &&
          !url.includes("business") &&
          !url.includes("news") &&
          !url.includes("contact-us"),
      },
      {
        id: 1,
        nameRoute: t("menu.aboutUs"),
        href: "/about-us/",
        active: url.includes("about-us"),
      },
      {
        id: 2,
        nonActive: true,
        nameRoute: t("menu.method"),
        listRoute: [
          {
            id: 0,
            nameRoute: t("menu.home"),
            href: "/smart-home/",
          },
          {
            id: 1,
            nameRoute: t("menu.lighting"),
            href: "/smart-lighting/",
          },
          {
            id: 2,
            nameRoute: t("menu.parking"),
            href: "/smart-parking/",
          },
          {
            id: 3,
            nameRoute: t("menu.building"),
            href: "/smart-building/",
          },
        ],
      },
      {
        id: 3,
        nameRoute: t("menu.package"),
        nonActive: true,
        listRoute: [
          {
            id: 0,
            nameRoute: t("menu.business"),
            href: "/business/",
            active: url.includes("business"),
          },
          {
            id: 1,
            nameRoute: t("menu.person"),
            href: "/personal-step1/",
            active: url.includes("personal"),
          },
        ],
      },
      {
        id: 4,
        nameRoute: t("menu.new"),
        href: "https://unicloud.com.vn/news",
        active: url.includes("news"),
      },
      {
        id: 5,
        nameRoute: t("menu.process"),
        href: "/implementation-process/",
        active: url.includes("implementation-process"),
      },
      {
        id: 6,
        nameRoute: t("menu.contact"),
        href: "/contact-us",
        active: url.includes("contact-us"),
      },
    ]);
  }, [url, i18n.language]);
  return (
    <>
      <Navbar listRoute={listRoute} logo={logo} />
      {children}
      {/* <FooterV3 /> */}
      <Footer />
      <ButtonRounded />
    </>
  );
}
export default LayoutV3;
