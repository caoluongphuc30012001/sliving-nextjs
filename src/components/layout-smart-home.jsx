import React from "react";

import ButtonRounded from "@components/button/button-card-rounded";
import NavbarSmartHome from "@components/navbar-new/smarthome/navbar-smarthome";
import FooterV2 from "@components/footer/footer-new";

import Seo from "@components/seo";

function LayoutSmartHome({ children, title , url,description ,metaImage}) {
  return (
    <>
      <Seo title={title} url={url} description={description} metaImage={metaImage} />
      <NavbarSmartHome />
        <main>{children}</main>
        <FooterV2 />
        <ButtonRounded />
    </>
  );
}
export default LayoutSmartHome;
