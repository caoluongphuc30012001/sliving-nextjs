import React, { useEffect, useState } from 'react';
import { PortfolioProvider } from "./../context/context";
import { navData, addressData, aboutData } from "./../mock/data";
import ButtonRounded from "@components/button/button-card-rounded";
import { withTranslation } from 'react-i18next';
import NavbarV2 from "./navbar-new/narbar-v2";
import FooterNew from './footer/footer-new';
//import useWindowSize from '../hook/useWindowSize';

import "../i18n/i18n";
import "./style.scss";
function LayoutNew({ children }) {

    // const { isMobile } = useWindowSize();
    const [arrNav, setNavData] = useState({});
    const [infoCompany, setInfoCompany] = useState({});
    useEffect(() => {
        setNavData({ ...navData });
        setInfoCompany({ ...addressData, ...aboutData });
    }, [])
    return (
        <PortfolioProvider value={{ arrNav, infoCompany }}>
            {/* {isMobile && <NavBarMobile />} */}
            <div className="page">
                <NavbarV2 />
                <main>
                    {children}
                </main>
                <FooterNew />
                <ButtonRounded />
            </div>
        </PortfolioProvider>
    )
}

export default withTranslation()(LayoutNew);
