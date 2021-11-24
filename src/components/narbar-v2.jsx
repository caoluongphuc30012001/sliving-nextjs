import React, { useContext, useEffect, useRef, useState } from "react";
import { Navbar, Image, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "@wapps/gatsby-plugin-i18next";
import logo from "@images/logo/logo-header.svg";
import PortfolioContext from "../context/context";
import { useLocation } from "@reach/router";
import LanguageSwitcher from "@components/navbar/switterLaguage";


export default function NavbarNew() {

    const [arrMenu] = useState([
        { id: "0", title: "Smart Home", isActive: true },
        { id: "1", title: "Smart Building", isActive: false },
        { id: "2", title: "Fintech IoT", isActive: false },
        { id: "3", title: "Lighting", isActive: false },
        { id: "4", title: "About Us", isActive: false },
    ]);

    const location = useLocation();
    const { arrNav } = useContext(PortfolioContext);
    const { menus } = arrNav;
    const { t } = useTranslation();

    const activePage = (id) => {
        return (
            menus &&
            menus.forEach(
                (itemMenu) => (itemMenu.isActive = itemMenu.id === id ? true : false)
            )
        );
    };

    const HandelActiveSubMenu = (menuId, SubMenuId) => {
        menus.forEach((menu) => {
            if (menuId === menu.id) {
                menu.arrMenu.forEach((item) => {
                    item.isActive = SubMenuId === item.id ? true : false;
                });
            }
        });
    };

    const menuRef = useRef(null);

    const handleAnimationMenu = (e) => {
        var positionCurrent = window.scrollY;
        if (positionCurrent > 101) {
            menuRef.current.style.background = 'unset'
        } else {
            menuRef.current.style.background = '#ffffff'
        }
    }
    // useEffect(() => {
    //     window.addEventListener("scroll", handleAnimationMenu, false)
    //     return () => {
    //         window.removeEventListener("scroll", handleAnimationMenu, false)
    //     }
    // }, [])

    return (
        <>
            <nav className="top-navbar-new">
                <div className="menu" id="menu-topbar" ref={menuRef}>
                    <div className="menu-wrap container-v2">
                        <Navbar
                            className="nav-header text-weight nav-header-v2"
                            collapseOnSelect
                            expand="lg"
                            id="nav-bar"
                        >
                            <Link to="/" className="logo nav-logo nav-brand">
                                <Image className="img-obj-cover" src={logo} alt="sliving" />
                            </Link>
                            <Navbar.Collapse
                                id="responsive-navbar-nav"
                                className="animation-nav animation-nav-v2 "
                            >
                                <Nav className="nav-desktop">
                                    {arrMenu &&
                                        arrMenu.map((nav, index) => {
                                            return (
                                                <Link
                                                    key={index}
                                                    to={nav.path}
                                                    className={`item-menu item-menu-v2 link fs-16  ${nav.isActive ? "is-active" : ""
                                                        }`}
                                                    id="item-menu"
                                                >
                                                    {t(`${nav.title}`)}
                                                </Link>

                                            );
                                        })}
                                    <LanguageSwitcher />
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
            </nav>
        </>
    );
}
