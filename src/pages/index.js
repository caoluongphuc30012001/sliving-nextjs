import React from 'react';
import HomePage from "./home-page/index";
import "../i18n/i18n";
import "../style/main.scss";
import slivingicon from "../images/logo/logo-small.svg";
import { Head } from '@wapps/gatsby-plugin-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { graphql } from 'gatsby';
const IndexPage = () => {
    return (
        <>
            <Head hreflang>
                <meta charSet="utf-8" />
                <title>Sliving</title>
                <meta name="description" content={'Sliving'} />
                <link rel="shortcut icon" type="image/svg" href={slivingicon} />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Hanalei+Fill&display=swap" rel="stylesheet" />
            </Head>
            <HomePage />
        </>
    );
};
export default withI18next()(IndexPage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "translations" } }) {
      ...LocaleFragment
    }
  }
`;
