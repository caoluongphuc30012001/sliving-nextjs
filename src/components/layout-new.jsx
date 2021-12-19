import React, { useEffect, useState } from "react";
import { PortfolioProvider } from "./../context/context";
import { navData, addressData, aboutData } from "./../mock/data";
import ButtonRounded from "@components/button/button-card-rounded";
import { withTranslation } from "react-i18next";
import NavbarV2 from "./navbar-new/narbar-v2";
import NavbarSmartHome from "./navbar-new/navbar-smarthome";
import NavbarLighting from "./navbar-new/navbar-lighting"
import FooterNew from "./footer/footer-new";
//import useWindowSize from '../hook/useWindowSize';

import "../i18n/i18n";
import "./style.scss";

const isBrowser = typeof window !== "undefined";

function LayoutNew({ children }) {
  // const { isMobile } = useWindowSize();
  const [arrNav, setNavData] = useState({});
  const [infoCompany, setInfoCompany] = useState({});
  useEffect(() => {
    setNavData({ ...navData });
    setInfoCompany({ ...addressData, ...aboutData });
  }, []);
  return (
    <PortfolioProvider value={{ arrNav, infoCompany }}>
      {/* {isMobile && <NavBarMobile />} */}
      <div className="page">
        {isBrowser &&
        (window.location.pathname === "/en/" ||
          window.location.pathname === "/vn/") ? (
          <NavbarV2 />
        ) : (
            (document.location.pathname === "/en/smart-home/" ||
            document.location.pathname === "/vn/smart-home/") ? <NavbarSmartHome></NavbarSmartHome>:<NavbarLighting></NavbarLighting>
          
        )}
        <main>{children}</main>
        <FooterNew />
        <ButtonRounded />
      </div>
    </PortfolioProvider>
  );
}

export default withTranslation()(LayoutNew);
