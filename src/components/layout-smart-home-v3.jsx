import React from "react";

import ButtonRounded from "@components/button/button-card-rounded";
import NavbarSmartHome from "@components/menu/index";
import FooterV2 from "@components/footer/footer-home-page";

import logo from "../images/smart-home-v3/png/logo.png";
import Footer from "./footer/footer-v3/footer-v3";
const listRoute = [
  {
    id: 0,
    nameRoute: "SMART HOME",
    listRoute: [
      {
        id: 0,
        nameRoute: "SMART LIGHTING",
        href: "/smart-lighting-v3",
      },
      {
        id: 1,
        nameRoute: "SMART PARKING",
        href: "/smart-parking-v3",
      },
      {
        id: 2,
        nameRoute: "SMART BUILDING",
        href: "/smart-building",
      },
    ],
  },
  {
    id: 1,
    nameRoute: "GIẢI PHÁP",
    href: "/business-step1-v3",
    active: true,
  },
  {
    id: 2,
    nameRoute: "QUY TRÌNH",
    href: "/implementation-process",
  },
  {
    id: 3,
    nameRoute: "LIÊN HỆ",
    href: "/contact-us-v3",
  },
];
function LayoutSmartHome({ children }) {
  return (
    <>
      <NavbarSmartHome listRoute={listRoute} logo={logo} back={true} />
      <main>{children}</main>
      {/* <FooterV2 /> */}
      <Footer />
      <ButtonRounded />
    </>
  );
}
export default LayoutSmartHome;
