import React, { useState, useContext, useEffect } from "react";
import { Navbar, Image, Nav } from "react-bootstrap";
import { Link } from "gatsby";
import logo from "@images/logo/logo-v2.svg";
import flagVN from "@images/flag/flag-vn/vn-true.svg";
import flagVNflase from "@images/flag/flag-vn/vn-false.svg";
import flagEN from "@images/flag/flags-en/en-true.svg";
import flagENflase from "@images/flag/flags-en/en-false.svg";
import { useTranslation } from 'react-i18next';
import PortfolioContext from "../../context/context";
import { slide as Menu } from "react-burger-menu";
import iconDropDown from "@images/icon/down-arrow.svg";
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
    }, [language, menus]);
    const changeFlag = lgn => {
        i18n.changeLanguage(lgn);
        setIsChange(language === "vn" ? true : false)
    };
    const [isToggle, setIsToggle] = useState(false);
    const HandleToggle = (idMenu) => {
        setIsToggle(false);
        menus.forEach((menu) => {
            menu.isToggle = idMenu === menu.id ? true : false;
        })
    }
    const HandelSubMenu = (menuId, subMemuId) => {
        setIsToggle(false);
        menus.forEach((map) => {
            if (menuId === map.id) {
                map.arrMenu.forEach((item) => {
                    item.isActive = subMemuId === item.id ? true : false;
                })
            }
        })
    }
    useEffect(() => {
        setIsToggle(true);

    }, [isToggle])
    return (
        <>
            <div className=" menu menu-wrapper" id="menu-mobile-wrap">
                <Navbar className="nav-header container-wrap" collapseOnSelect expand="lg"  >
                    <Navbar.Brand href="/" className="logo" >
                        <Image src={logo} />
                    </Navbar.Brand>
                </Navbar>
                <Menu itemListElement="div" burgerButtonClassName={"btn-toggle-mobile"} crossButtonClassName={"toggle-mobile"} >
                    <Nav className="text-weight nav-mobile" >
                        {menus && menus.map((map, index) => {
                            return <>
                                <div className="slidebar-item">
                                    <Link to={map.path} key={index} className="pd-7-1 nav-link" >
                                        {map && (<span className={`item-menu isCount ${map.id === '0' ? 'is-active-mobile' : ''}`}> {t(`${map.title}`)}</span>)}
                                    </Link>
                                    {map.arrMenu && (<div className="icon-subMenu" onClick={() => HandleToggle(map.id)} onKeyPress={() => HandleToggle(map.id)} role="button" tabIndex={0}><img className={`icon-dropdown-submenu ${map.isToggle ? 'is-toggle-icon' : ''}`} src={iconDropDown} alt="icon dropdown sliving" /></div>)}
                                </div>
                                <div className="slidebar-moblie-child">
                                    {map.isToggle && map.arrMenu && map.arrMenu.map((child) => {
                                        return <Link key={child} to={child.path} className={`mobile-child-link ${child.isActive ? 'is-active-subMenu' : ''}`} onClick={() => HandelSubMenu(map.id, child.id)}>{t(`${child.title}`)}</Link>
                                    })}
                                </div>
                            </>
                        })}
                        <Nav className="pd0 icon-leaguage">
                            <Link to="" className="pd0 btn-pointer  " onClick={() => changeFlag(valueFlag.vn)}>
                                <Image src={isChange ? flagVN : flagVNflase} className="d-inline-block align-top image-flag" />
                            </Link>
                            <Nav.Link className="pd0 btn-pointer " onClick={() => changeFlag(valueFlag.en)}>
                                <Image src={!isChange ? flagEN : flagENflase} className="d-inline-block align-top image-flag" />
                            </Nav.Link>
                        </Nav>
                    </Nav>

                </Menu>
            </div>
        </>
    );
}
export default NavBarMobile;
