import React from "react";

import ButtonRounded from "@components/button/button-card-rounded";
import FooterV2 from "./footer/footer-home-page";
import NavbarLighting from "./navbar-new/navbar-lighting";


function LayoutSmartLighting({ children }) {
  
  return (
    <>
      <NavbarLighting />
      <main>{children}</main>
      <FooterV2 />
      <ButtonRounded />
    </>
  );
}
export default LayoutSmartLighting;
