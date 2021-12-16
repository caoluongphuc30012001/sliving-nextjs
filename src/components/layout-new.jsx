import React from "react";
import ButtonRounded from "@components/button/button-card-rounded";
import { withTranslation } from "react-i18next";
import NavbarV2 from "./navbar-new/navbar-v2";
import FooterNew from "./footer/footer-new";
import "../i18n/i18n";
import "./style.scss";
function LayoutNew({ children, pageContext, isMainPage }) {
  return (
    <div className="page">
      <NavbarV2 pageContext={pageContext} />
      <main>{children}</main>
      <FooterNew isMainPage={isMainPage} />
      <ButtonRounded />
    </div>
  );
}
export default withTranslation()(LayoutNew);
