import React from "react";
import ButtonRounded from "@components/button/button-card-rounded";
import NavbarV2 from "./navbar-new/navbar-v2";
import NavbarSmartHome from "./navbar-new/navbar-smart-home";
import NavbarLighting from "./navbar-new/navbar-lighting"
import FooterNew from "./footer/footer-new";
import "../i18n/i18n";
import "./style.scss";

function LayoutNew({ children, pageContext, isMainPage }) {
  return (
    <div className="page">
      {pageContext?.isSmartHome ? <NavbarSmartHome /> : pageContext?.isSmartLighting ? <NavbarLighting /> : <NavbarV2 />}
      <main>{children}</main>
      <FooterNew isMainPage={isMainPage} />
      <ButtonRounded />
    </div>
  );
}
export default LayoutNew;
