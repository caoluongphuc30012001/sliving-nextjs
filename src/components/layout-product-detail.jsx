import React from "react";

import ButtonRounded from "@components/button/button-card-rounded";
// import FooterV2 from "./footer/footer-home-page";
import NavbarLighting from "@components/menu/index";
import logo from "../images/smart-home-v3/png/logo.png";
import Footer from "./footer/footer-v3/footer-v3";
const url = typeof window !== "undefined" ? window.location.href : "";
const listRoute = [
  {
    id: 0,
    nameRoute: "GIẢI PHÁP",
    listRoute: [
      {
        id: 0,
        nameRoute: "SMART HOME",
        href: "/smart-home/",
      },
      {
        id: 1,
        nameRoute: "SMART PARKING",
        href: "/smart-parking/",
      },
      {
        id: 2,
        nameRoute: "SMART BUILDING",
        href: "/smart-building/",
      },
      {
        id: 3,
        nameRoute: "SMART LIGHTING",
        href: "/smart-lighting/",
      },
    ],
  },
  {
    id: 1,
    nameRoute: "SẢN PHẨM",
    // href: "/product-detail/",
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
