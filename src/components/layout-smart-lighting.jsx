import React from "react";

import ButtonRounded from "@components/button/button-card-rounded";
import FooterV2 from "./footer/footer-new";
import NavbarLighting from "./navbar-new/navbar-lighting";

import Seo from "@components/seo";

function LayoutSmartLighting({ children, title, url, description, metaImage }) {
  return (
    <>
      <Seo
        title={title}
        url={url}
        description={description}
        metaImage={metaImage}
      />
      <NavbarLighting />
      <main>{children}</main>
      <FooterV2 />
      <ButtonRounded />
    </>
  );
}
export default LayoutSmartLighting;
