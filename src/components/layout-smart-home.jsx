import React from "react";

import ButtonRounded from "@components/button/button-card-rounded";
import NavbarSmartHome from "@components/navbar-new/smarthome/navbar-smarthome";
import FooterV2 from "@components/footer/footer-new";


function LayoutSmartHome({ children}) {
  
  return (
    <>
      <NavbarSmartHome />
        <main>{children}</main>
        <FooterV2 />
        <ButtonRounded />
    </>
  );
}
export default LayoutSmartHome;
