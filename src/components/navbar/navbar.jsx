import React, { useContext, useEffect } from "react";
import { Navbar, Image, Nav, InputGroup, FormControl } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { Link } from 'gatsby';
import logo from "@images/logo/logo-v2.svg";
import PortfolioContext from "@context/context";
import imgSearch from "@images/icon/icon-search.svg";
import LanguageSwitcher from "./switterLanguage";
import { useLocation } from "@reach/router";
const isBrowser = typeof window !== "undefined";
const NavBar = () => {
    const location = useLocation();
    const pathName = location.pathname;
    const { arrNav } = useContext(PortfolioContext);
    const { menus } = arrNav;
    const { t } = useTranslation();
    menus.forEach(element => {
        element.isActive = (pathName.indexOf(element.path) > -1 || pathName.indexOf("introduct-detail-page") > -1) && element.id === "0" ? true : false;
        if (element.id !== "1" && element.arrMenu) {
            element.arrMenu.forEach((nav) => {
                nav.isActive = pathName.indexOf(nav.path) > -1 ? true : false;
            })
        }
    })
    useEffect(() => {
        if (isBrowser) {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 0) {
                    if (document.getElementById("menu-topbar")) {
                        document.getElementById("menu-topbar").style.transform = "translate(0px,-72px)";
                        document.getElementById("header-nav").style.transform = "translate(0px,-72px)";
                    }
                } else {
                    if (document.getElementById("menu-topbar")) {
                        document.getElementById("menu-topbar").style.transform = "translate(0px,0px)";
                        document.getElementById("header-nav").style.transform = "translate(0px,0px)";
                    }
                }
            }, true)
        }
        return () => {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 0) {
                    if (document.getElementById("menu-topbar")) {
                        document.getElementById("menu-topbar").style.transform = "translate(0px,-72px)";
                        document.getElementById("header-nav").style.transform = "translate(0px,-72px)";
                    }
                } else {
                    if (document.getElementById("menu-topbar")) {
                        document.getElementById("menu-topbar").style.transform = "translate(0px,0px)";
                        document.getElementById("header-nav").style.transform = "translate(0px,0px)";
                    }
                }
            }, true)
        }
    }, [menus]);
    const activePage = (id) => {
        return menus && (menus.forEach((itemMenu) => (
            itemMenu.isActive = itemMenu.id === id ? true : false
        )))
    }
    const HandelActiveSubMenu = (menuId, SubMenuId) => {
        menus.forEach((menu) => {
            if (menuId === menu.id) {
                menu.arrMenu.forEach((item) => {
                    item.isActive = SubMenuId === item.id ? true : false;
                })
            }
        })
    }
    return (
        <div className="top-navbar">
            <div className="header-nav d-flex al-center just-cont-fl-end" id="header-nav">
                <div className="header-nav-wrap d-flex al-center ">
                    <div className="header-nav-wrap_left d-flex al-center">
                        <div className="nav-language" >
                            <LanguageSwitcher />
                        </div>
                        {/* <div className="nav-social d-flex al-center just-cont-bt" >
                            <div className="nav-social-wrap"><img src={imgIn} alt="in" /></div>
                            <div className="nav-social-wrap"><img src={imgFace} alt="in" /></div>
                            <div className="nav-social-wrap"><img src={imgtwit} alt="in" /></div>
                        </div> */}
                    </div>
                    <div className="nav-group-search">
                        <InputGroup className="group-search-wrap">
                            <FormControl
                                placeholder={t(`HEADER.SEARCH_KEY_WORD`)}
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <div className="btn-search">
                                <div><img src={imgSearch} alt="button search" /></div>
                            </div>
                        </InputGroup>
                    </div>
                </div>
            </div>
            <div className="menu" id="menu-topbar">
                <div className="menu-wrap container-wrap">
                    <Navbar className="nav-header text-weight" collapseOnSelect expand="lg" id="nav-bar">
                        <Link to="/" className="logo nav-logo nav-brand"><Image className="img-obj-cover" src={logo} alt="sliving" /></Link>
                        <Navbar.Collapse id="responsive-navbar-nav" className="animation-nav" >
                            <Nav className=" nav-desktop" >
                                {menus && menus.map((nav) => {
                                    return <div className={`fs-16 link-menu ${nav.arrNav ? 'mega-menu' : ''} `} id={`nav-id-${nav.id}`} key={nav.id} onClick={() => activePage(nav.id)} role="button"
                                        tabIndex={0} onKeyPress={() => activePage(nav.id)}>
                                        {nav && (<>
                                            <Link to={nav.path} className={`item-menu link  ${nav.isActive ? 'is-active' : ''}`} id="item-menu" > {t(`${nav.title}`)}</Link>
                                            <div className="nav-childs">
                                                <div className="nav-child">
                                                    <div className="nav-child-wrap">
                                                        {nav.arrMenu && nav.arrMenu.map((menu, indexMenu) => {
                                                            return <div key={indexMenu} className={`child-wrap-item ${menu.isActive ? 'is-acitve-subMenu' : ''}`}><Link to={menu.path ? menu.path : '/'} ><span className="child-wrap-item__title" onClick={() => HandelActiveSubMenu(nav.id, menu.id)} onKeyPress={() => HandelActiveSubMenu(nav.id, menu.id)} tabIndex={0} role="button" >{t(`${menu.title}`)}</span></Link></div>
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </>)}
                                    </div>
                                })}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </div>
    );
}
export default NavBar;
