import React, { useEffect, useState } from 'react';
import { PortfolioProvider } from "./../context/context";
import { navData, addressData, aboutData } from "./../mock/data";
import "../i18n/i18n";
import "./style.scss";
import ButtonRounded from "@components/button/button-card-rounded";
import { withTranslation } from 'react-i18next';
import NavbarNew from "./navbar-new/navbar-new";
import FooterNew from './footer/footer-new';
import NavbarV2 from './narbar-v2';
const isBrowser = typeof window !== "undefined";

function LayoutNew({ children }) {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [arrNav, setNavData] = useState({});
    const [infoCompany, setInfoCompany] = useState({});
    useEffect(() => {
        setNavData({ ...navData });
        setInfoCompany({ ...addressData, ...aboutData });
        if (isBrowser) {
            window.addEventListener("resize", () => {
                if (window.innerWidth > 836) {
                    setIsDesktop(true);
                    setIsMobile(false);
                } else {
                    setIsDesktop(false);
                    setIsMobile(true);
                }
            });
            if (window.innerWidth > 836) {
                setIsDesktop(true);
                setIsMobile(false);
            } else {
                setIsDesktop(false);
                setIsMobile(true);
            }
        }
    }, [])
    return (
        <PortfolioProvider value={{ arrNav, infoCompany }}>
            {/* {isMobile && <NavBarMobile />} */}
            <div className="page">
                {isDesktop && <NavbarV2 />}
                {/* {isDesktop && <NavBar/>} */}
                <main>
                    <div className="page-wrap-new" id="page-main">
                        {children}
                    </div>
                </main>
                <FooterNew />
                <ButtonRounded />
            </div>
        </PortfolioProvider>
    )
}

export default withTranslation()(LayoutNew);
