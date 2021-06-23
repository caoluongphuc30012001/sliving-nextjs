import React, { useState, useContext, useEffect } from "react";
import { Navbar, Image, Nav } from "react-bootstrap";
import { Link } from "@wapps/gatsby-plugin-i18next";
import logo from "@images/logo/logo-v2.svg";
import flagVN from "@images/flag/flag-vn/vn-true.svg";
import flagVNflase from "@images/flag/flag-vn/vn-false.svg";
import flagEN from "@images/flag/flags-en/en-true.svg";
import flagENflase from "@images/flag/flags-en/en-false.svg";
import { useTranslation } from 'react-i18next';
import PortfolioContext from "../../context/context";
const NavBarMobile = () => {
    const valueFlag = ({ vn: "vn", en: "en" })
    const [language, setLanguage] = useState("");
    const [isChange, setIsChange] = useState(true);
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const { arrNav } = useContext(PortfolioContext);
    const { menus } = arrNav;
    useEffect(() => {
        setLanguage(localStorage.getItem("i18nextLng"));
        setIsChange(language === "vn" ? true : false)
    }, [language]);
    const changeFlag = lgn => {
        i18n.changeLanguage(lgn);
        setIsChange(language === "vn" ? true : false)
    };
    return (
        <div className=" menu menu-wrapper" id="menu-mobile-wrap">
            <Navbar className="nav-header" collapseOnSelect expand="lg"  >
                <Navbar.Brand href="/" className="logo" >
                    <Image src={logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="animation-nav" >
                    <Nav className="ml-auto text-weight nav-mobile" >
                        {menus && menus.map((map, index) => {
                            return <Link to={map.path} key={index} className="pd-7-1 nav-link" >
                                {map && <span className={`item-menu isCount ${map.id === '0' ? 'is-active-mobile' : ''}`}> {t(`${map.title}`)}</span>}
                            </Link>
                        })}
                        <Nav className="pd0 icon-leaguage"> <Link to="" className="pd0 btn-pointer  " onClick={() => changeFlag(valueFlag.vn)}>
                            <Image src={isChange ? flagVN : flagVNflase} className="d-inline-block align-top image-flag" />
                        </Link> <Nav.Link className="pd0 btn-pointer " onClick={() => changeFlag(valueFlag.en)}>
                                <Image src={!isChange ? flagEN : flagENflase} className="d-inline-block align-top image-flag" />
                            </Nav.Link></Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
export default NavBarMobile;
