import React from "react";

import favicon from "../images/logo/logo-small.svg";
import HomePageV2 from "./main-page-v2/index";

import { Helmet } from "react-helmet";
import "../fonts/Montserrat/Montserrat-ExtraLight.ttf";
import "../style/base/_typography.scss";
import "../i18n/i18n";
import "../style/main.scss";


const IndexPage = () => {
  return (
    <>
      <Helmet  >
        <link rel="shortcut icon" type="image/svg" href={favicon} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanalei+Fill&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <HomePageV2 />
    </>
  );
};
export default IndexPage;
