import React from "react";

import ButtonRounded from "@components/button/button-card-rounded";
import NavbarSmartHome from "@components/menu/index";
import FooterV2 from "@components/footer/footer-home-page";

import logo from '../images/smart-home-v3/png/logo.png';
const listRoute = [
    {
        id:0,
        nameRoute: "SMART HOME",
        listRoute: [
            {
                id:0,
                nameRoute: "SMART LIGHTING",
                href:"/smart-lighting-v3"
            },
            {
                id:1,
                nameRoute:"SMART PARKING",
                href:"/smart-parking-v3"
            },
            {
                id:2,
                nameRoute:"SMART SECURITY",
                href:"/smart-security-v3"
            },
        ]
    },
    {
        id:1,
        nameRoute: "SẢN PHẨM",
        href:"/#",
        active:true,
    },
    {
        id:2,
        nameRoute: "QUY TRÌNH",
        href:"/#"
    },
    {
        id:3,
        nameRoute: "LIÊN HỆ",
        href:"/home-page-v3"
    },

];
function LayoutSmartHome({ children}) {
  
  return (
    <>
        <NavbarSmartHome listRoute={listRoute} logo={logo} />
        <main>{children}</main>
        <FooterV2 />
        <ButtonRounded />
    </>
  );
}
export default LayoutSmartHome;
