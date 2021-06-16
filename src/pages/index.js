import React from 'react';
import { Helmet } from 'react-helmet';
import HomePage from "./home-page/index";
import "../i18n/i18n";
import "../style/main.scss";
import slivingicon from "../images/logo/logo-small.svg";

const IndexPage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{'Sliving'}</title>
                <meta name="description" content={'Gatsby Simplefolio'} />
                <link rel="shortcut icon" type="image/svg" href={slivingicon} />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Hanalei+Fill&display=swap" rel="stylesheet" />
            </Helmet>
            <HomePage />
        </>
    );
};
export default IndexPage;
