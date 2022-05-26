import React from "react";

import ButtonRounded from "@components/button/button-card-rounded";
import FooterV2 from "./footer/footer-home-page";
import NavbarLighting from "@components/menu/index";
import logo from "../images/smart-home-v3/png/logo.png";
import Footer from "./footer/footer-v3/footer-v3";
const listRoute = [
  {
    id: 0,
    nameRoute: "SMART LIGHTING",
    listRoute: [
      {
        id: 0,
        nameRoute: "SMART PARKING",
        href: "/smart-parking/",
      },
      {
        id: 1,
        nameRoute: "SMART BUILDING",
        href: "/smart-building/",
      },

      {
        id: 2,
        nameRoute: "SMART HOME",
        href: "/smart-home",
      },
    ],
  },
  {
    id: 1,
    nameRoute: "GIẢI PHÁP",
    href: "/business-step1/",
    active: true,
  },
  {
    id: 2,
    nameRoute: "QUY TRÌNH",
    href: "/implementation-process/",
  },
  {
    id: 3,
    nameRoute: "LIÊN HỆ",
    href: "/contact-us/",
  },
];

function LayoutSmartLighting({ children }) {
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
