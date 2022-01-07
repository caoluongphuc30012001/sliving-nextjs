import React from "react";

import ButtonRounded from "@components/button/button-card-rounded";
import FooterV2 from "./footer/footer-new";
import NavbarLighting from "./navbar-new/navbar-lighting";

import Seo from "@components/seo";
import LoadingPage from "@components/loading-page";

import "../i18n/i18n";
import "./style.scss";

function LayoutSmartLighting({ children ,title}) {
  return (
    <>
      <Seo title={title} />
      <div className="page">
        <NavbarLighting />
        <main>{children}</main>
        <FooterV2 />
        <ButtonRounded />
      </div>
    </>
  );
}
export default LayoutSmartLighting;
