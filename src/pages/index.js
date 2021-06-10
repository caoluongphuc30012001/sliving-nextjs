import React from 'react';
import { Helmet } from 'react-helmet';
import HomePage from "./home-page/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
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
            </Helmet>
            <HomePage />
        </>
    );
};
export default IndexPage;
