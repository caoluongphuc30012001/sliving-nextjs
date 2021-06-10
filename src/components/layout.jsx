import React, { useEffect, useState } from 'react';
import { PortfolioProvider } from "./../context/context";
import { navData, addressData, aboutData } from "./../mock/data";
import "../i18n/i18n";
import "./style.scss";
import NavBar from "./navbar/navbar";
import Footer from "./footer/footer";
import ButtonRounded from "@components/button/button-card-rounded";
import NavBarMobile from './navbar/navbar-mobile';
const isBrowser = typeof window !== "undefined";
const Layout = ({ children }) => {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [arrNav, setNavData] = useState({});
    const [infoCompany, setInfoCompany] = useState({});
    useEffect(() => {
        setNavData({ ...navData });
        setInfoCompany({ ...addressData, ...aboutData });
        if (isBrowser) {
            window.addEventListener("resize", () => {
                if (window.innerWidth > 769) {
                    setIsDesktop(true);
                    setIsMobile(false);
                } else {
                    setIsDesktop(false);
                    setIsMobile(true);
                }
            });
            if (window.innerWidth > 769) {
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
            {isMobile && <NavBarMobile />}
            <div className="page">
                {isDesktop && <NavBar />}
                <div className="page-wrap">
                    {children}
                </div>
                <Footer />
                <ButtonRounded />
            </div>
        </PortfolioProvider>
    )
}
export default Layout;
