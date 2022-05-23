import React from "react";

import ButtonRounded from "@components/button/button-card-rounded";

import NavbarV2 from "./navbar-new/navbar-v2";
import FooterHomePage from "./footer/footer-home-page";

function LayoutNew({ children }) {
  return (
    <>
      <NavbarV2 />
      <main>{children}</main>
      <FooterHomePage />
      <ButtonRounded />
    </>
  );
}
export default LayoutNew;
