import React from "react";

import ButtonRounded from "@components/button/button-card-rounded";
import NavbarSmartHome from "./navbar-new/smarthome/navbar-smarthome";
import FooterV2 from "./footer/footer-new";

import Seo from "@components/seo";

import "../i18n/i18n";
import "./style.scss";

function LayoutSmartHome({ children, title }) {
  return (
    <>
      <Seo title={title} />
      <div className="page">
        <NavbarSmartHome />
        <main style={{ marginTop: "81px" }}>{children}</main>
        <FooterV2 />
        <ButtonRounded />
      </div>
    </>
  );
}
export default LayoutSmartHome;
