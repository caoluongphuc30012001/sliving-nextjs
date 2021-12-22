import React from "react";

import ButtonRounded from "@components/button/button-card-rounded";


import NavbarV2 from "./navbar-new/navbar-v2";
import FooterHomePage from "./footer/footer-home-page";

import "../i18n/i18n";
import "./style.scss";

function LayoutNew({ children }) {
  return (
    <div className="page">
      <NavbarV2 />
      <main style={{ marginTop: "81px" }}>{children}</main>
      <FooterHomePage />
      <ButtonRounded />
    </div>
  );
}
export default LayoutNew;
