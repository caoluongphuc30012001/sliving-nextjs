import React from "react";

import ButtonRounded from "@components/button/button-card-rounded";
import NavbarParking from "@components/menu/index";

import logo from "../images/smart-home-v3/png/logo.png";
import Footer from "./footer/footer-v3/footer-v3";
const listRoute = [
  {
    id: 0,
    nameRoute: "SMART PARKING",
    listRoute: [
      {
        id: 0,
        nameRoute: "SMART LIGHTING",
        href: "/smart-lighting/",
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
    href: "/business/",
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
function LayoutParking({ children }) {
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
