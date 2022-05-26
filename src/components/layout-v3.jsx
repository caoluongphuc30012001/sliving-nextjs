import React from "react";

import ButtonRounded from "@components/button/button-card-rounded";
import Navbar from "@components/menu/index";
// import FooterV3 from "@components/footer/footer-home-page";

import logo from "../images/smart-home-v3/png/logo.png";
import Footer from "./footer/footer-v3/footer-v3";

function LayoutV3({ children }) {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const listRoute = [
    {
      id: 0,
      nameRoute: "TRANG CHỦ",
      href: "/",
      active:
        !url.includes("about-us") &&
        !url.includes("implementation-process") &&
        !url.includes("business-step1") &&
        !url.includes("news"),
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
      href: "/business-step1/",
      active: url.includes("business-step1"),
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
  ];
  return (
    <>
      <Navbar listRoute={listRoute} logo={logo} />
      <main>{children}</main>
      {/* <FooterV3 /> */}
      <Footer />
      <ButtonRounded />
    </>
  );
}
export default LayoutV3;
