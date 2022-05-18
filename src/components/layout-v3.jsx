import React from "react";

import ButtonRounded from "@components/button/button-card-rounded";
import Navbar from "@components/menu/index";
import FooterV2 from "@components/footer/footer-home-page";

import logo from "../images/smart-home-v3/png/logo.png";

function LayoutV3({ children }) {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const listRoute = [
    {
      id: 0,
      nameRoute: "TRANG CHỦ",
      href: "/",
      active: !url.includes("about-us-v3"),
    },
    {
      id: 1,
      nameRoute: "VỀ CHÚNG TÔI",
      href: "/about-us-v3",
      active: url.includes("about-us-v3"),
    },
    {
      id: 2,
      nameRoute: "GIẢI PHÁP",
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
          nameRoute: "SMART SECURITY",
          href: "/smart-security-v3",
        },
        {
          id: 3,
          nameRoute: "SMART HOME",
          href: "/smart-home-v3",
        },
      ],
    },
    {
      id: 3,
      nameRoute: "GÓI GIẢI PHÁP",
      href: "/#",
    },

    {
      id: 4,
      nameRoute: "TIN TỨC",
      href: "/news-v3",
    },
    {
      id: 5,
      nameRoute: "QUY TRÌNH",
      href: "/implementation-process",
      active: url.includes("implementation-process"),
    },
  ];
  return (
    <>
      <Navbar listRoute={listRoute} logo={logo} />
      <main>{children}</main>
      <FooterV2 />
      <ButtonRounded />
    </>
  );
}
export default LayoutV3;
