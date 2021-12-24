import React from "react";
import "../fonts/Montserrat/Montserrat-ExtraLight.ttf";
import "../style/base/_typography.scss";
import "../i18n/i18n";
import "../style/main.scss";
import favicon from "../images/logo/logo-small.svg";
import { Head } from "@wapps/gatsby-plugin-i18next";
import { withI18next } from "@wapps/gatsby-plugin-i18next";
import HomePageV2 from "./main-page-v2/index";
import { graphql } from "gatsby";

const IndexPage = () => {
  return (
    <>
      <Head hreflang="vn">
        <meta charSet="utf-8" />
        <title>Sliving</title>
        <meta name="description" content={"Sliving"} />
        <link rel="preload" as="font" />
        <link rel="preload" href="./fonts/svn-gilroy/SVN-Gilroy-Regular.ttf" as="font" type="font/ttf" crossorigin />
        <link rel="preload" href="./fonts/svn-gilroy/SVN-Gilroy-Bold.ttf" as="font" type="font/ttf" crossorigin />

        <link rel="shortcut icon" type="image/svg" href={favicon} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanalei+Fill&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HomePageV2 />
    </>
  );
};
export default withI18next()(IndexPage);
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(
      filter: { lng: { eq: $lng }, ns: { eq: "translations" } }
    ) {
      ...LocaleFragment
    }
  }
`;
