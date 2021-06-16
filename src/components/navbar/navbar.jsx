import React, { useContext, useState, useEffect } from "react";
import { Navbar, Image, Nav, Dropdown, InputGroup, FormControl } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { Link } from 'gatsby';
import logo from "@images/logo/logo-v2.svg";
import PortfolioContext from "../../context/context";
// import imgIn from "@images/icon/social/v2-linkedin.svg";
// import imgFace from "@images/icon/social/v2-facebook.svg";
// import imgtwit from "@images/icon/social/v2-twitter.svg";
import imgSearch from "@images/icon/icon-search.svg";
const isBrowser = typeof window !== "undefined";
const NavBar = () => {
    const [language, setLanguage] = useState("");
    const [isChange, setIsChange] = useState(false);
    useEffect(() => {
        setLanguage(localStorage.getItem("i18nextLng"));
        setIsChange(language === "vn" ? true : false);
        if (isBrowser) {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 0) {
                    if (document.getElementById("menu-topbar")) {
                        document.getElementById("menu-topbar").style.transform = "translate(0px,-62px)";
                        document.getElementById("header-nav").style.transform = "translate(0px,-62px)";
                    }
                } else {
                    if (document.getElementById("menu-topbar")) {
                        document.getElementById("menu-topbar").style.transform = "translate(0px,0px)";
                        document.getElementById("header-nav").style.transform = "translate(0px,0px)";

                    }
                }
            }, true)
        }

    }, [language, isChange]);
    const valueFlag = ({ vn: "vn", en: "en" });
    const { arrNav } = useContext(PortfolioContext);
    const { menus } = arrNav;
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    function changeFlag(lgn) {
        i18n.changeLanguage(lgn)
        setIsChange(lgn === "vn" ? true : false);
    };
    function activePage(id) {
        menus && (menus.map((itemMenu) => (
            itemMenu.isActive = itemMenu.id === id ? true : false
        )))
    };
    return (
        <div className="top-navbar">
            <div className="header-nav d-flex al-center just-cont-fl-end" id="header-nav">
                <div className="header-nav-wrap d-flex al-center ">
                    <div className="header-nav-wrap_left d-flex al-center">
                        <div className="nav-language" >
                            <Dropdown className="dropdown-language">
                                <Dropdown.Toggle className="drop-toggle dropdown-toggle" variant="#ffffff" id="dropdown-basic">
                                    <span>  {isChange ? 'Việt Nam' : 'English'}</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-customize" id="dropdown-customize">
                                    <Dropdown.Item onClick={() => changeFlag(valueFlag.vn)}>Việt Nam</Dropdown.Item>
                                    <Dropdown.Item onClick={() => changeFlag(valueFlag.en)}>English</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="nav-social d-flex al-center just-cont-bt" >
                            {/* <div className="nav-social-wrap"><img src={imgIn} alt="in" /></div>
                            <div className="nav-social-wrap"><img src={imgFace} alt="in" /></div>
                            <div className="nav-social-wrap"><img src={imgtwit} alt="in" /></div> */}
                        </div>
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
                                    return <Link to={nav.path} className={`fs-16 link-menu ${nav.arrNav ? 'mega-menu' : ''} `} id={`nav-id-${nav.id}`} key={nav.id} onClick={() => activePage(nav.id)} >
                                        {nav && (<>
                                            <span className={`item-menu link  ${nav.isActive ? 'is-active' : ''}`} id="item-menu" > {t(`${nav.title}`)}</span>
                                            <div className="nav-childs">
                                                <div className="nav-child">
                                                    <div className="nav-child-wrap">
                                                        {nav.arrMenu && nav.arrMenu.map((menu, indexMenu) => {
                                                            return <div key={indexMenu} className="child-wrap-item"><span className="child-wrap-item__title">{t(`${menu.title}`)}</span></div>
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </>)}
                                    </Link>
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
