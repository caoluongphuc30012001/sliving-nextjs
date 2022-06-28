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
    nameRoute: "TRANG CHỦ",
    href: "/",
    active:
      !url.includes("about-us") &&
      !url.includes("implementation-process") &&
      !url.includes("step") &&
      !url.includes("news") &&
      !url.includes("contact-us"),
  },
  {
    id: 1,
    nameRoute: "VỀ CHÚNG TÔI",
    href: "/about-us/",
    active: url.includes("about-us"),
  },
  {
    id: 2,
    nonActive: true,
    nameRoute: "GIẢI PHÁP",
    listRoute: [
      {
        id: 0,
        nameRoute: "SMART HOME",
        href: "/smart-home/",
      },
      {
        id: 1,
        nameRoute: "SMART LIGHTING",
        href: "/smart-lighting/",
      },
      {
        id: 2,
        nameRoute: "SMART PARKING",
        href: "/smart-parking/",
      },
      {
        id: 3,
        nameRoute: "SMART BUILDING",
        href: "/smart-building/",
      },
    ],
  },
  {
    id: 3,
    nameRoute: "GÓI GIẢI PHÁP",
    nonActive: true,
    listRoute: [
      {
        id: 0,
        nameRoute: "GÓI DOANH NGHIỆP",
        href: "/business-step1/",
        active: url.includes("business"),
      },
      {
        id: 1,
        nameRoute: "GÓI CÁ NHÂN",
        href: "/personal-step1/",
        active: url.includes("personal"),
      },
    ],
  },
  {
    id: 4,
    nameRoute: "TIN TỨC",
    href: "https://unicloud.com.vn/news",
    active: url.includes("news"),
  },
  {
    id: 5,
    nameRoute: "QUY TRÌNH",
    href: "/implementation-process/",
    active: url.includes("implementation-process"),
  },
  {
    id: 6,
    nameRoute: "LIÊN HỆ",
    href: "/contact-us",
    active: url.includes("contact-us"),
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
