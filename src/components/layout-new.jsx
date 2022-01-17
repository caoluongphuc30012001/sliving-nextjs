import React from "react";

import ButtonRounded from "@components/button/button-card-rounded";

import NavbarV2 from "./navbar-new/navbar-v2";
import FooterHomePage from "./footer/footer-home-page";

import Seo from "@components/seo";

function LayoutNew({ children, title, description,url }) {
  return (
    <>
      <Seo title={title} description={description} url={url}/>
      <NavbarV2 />
      <main>{children}</main>
      <FooterHomePage />
      <ButtonRounded />
    </>
  );
}
export default LayoutNew;
