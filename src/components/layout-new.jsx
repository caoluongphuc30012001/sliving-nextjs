import React from "react";
import ButtonRounded from "@components/button/button-card-rounded";
import { withTranslation } from "react-i18next";
import NavbarV2 from "./navbar-new/navbar-v2";
import NavbarSmartHome from "./navbar-new/navbar-smarthome";
import NavbarLighting from "./navbar-new/navbar-lighting"
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
  const selectItemNav=()=>{
    if(isBrowser){
      switch (window.location.pathname){
        case "/en/":
        case "/vn/":
          return <NavbarV2 />
        case "/en/smart-home/":
        case "/vn/smart-home/":
          return <NavbarSmartHome></NavbarSmartHome>;
        case "/en/smart-lighting-v2/":
        case "/vn/smart-lighting-v2/":
        case "/en/contact-page-v2/":
        case "/vn/contact-page-v2/":
          return <NavbarLighting></NavbarLighting>;
        default:
          return <NavbarSmartHome></NavbarSmartHome>
      }
    }
  }
  return (
    <PortfolioProvider value={{ arrNav, infoCompany }}>
      {/* {isMobile && <NavBarMobile />} */}
      <div className="page">
        {selectItemNav()}
        <main>{children}</main>
        <FooterNew />
        <ButtonRounded />
      </div>
    </PortfolioProvider>
  );
}
export default withTranslation()(LayoutNew);
