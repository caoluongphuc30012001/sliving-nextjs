import React from "react";

import ButtonRounded from "@components/button/button-card-rounded";
import NavbarSmartHome from "./navbar-new/smarthome/navbar-smarthome";
import FooterV2 from "./footer/footer-new";

import Seo from "@components/seo";

function LayoutSmartHome({ children, title }) {
  return (
    <>
      <Seo title={title} />
      <div className="page">
        <NavbarSmartHome />
        <main>{children}</main>
        <FooterV2 />
        <ButtonRounded />
      </div>
    </>
  );
}
export default LayoutSmartHome;
