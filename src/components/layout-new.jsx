import React from "react";
import ButtonRounded from "@components/button/button-card-rounded";
import { withTranslation } from "react-i18next";
import NavbarV2 from "./navbar-new/navbar-v2";
import NavbarSmartHome from "./navbar-new/navbar-smarthome";
import FooterNew from "./footer/footer-new";
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
          <NavbarSmartHome />
        )}
        <main>{children}</main>
        <FooterNew />
        <ButtonRounded />
      </div>
    </PortfolioProvider>
  );
}
export default withTranslation()(LayoutNew);
