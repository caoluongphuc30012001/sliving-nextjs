import React from "react";
import { Navbar, Image, Nav } from "react-bootstrap";
import Link from "@components/gatsby-link";
import logo from "@images/logo/logo-header.svg";
import LanguageSwitcher from "@components/navbar/switterLanguage";

import { useTranslation } from "react-i18next";

export default function NavbarNew() {

  const { t } = useTranslation();
  const arrMenu = [
    { id: "0", title: "Smart Home", isActive: true, path: "/smart-home/" },
    { id: "1", title: "Fintech IoT", isActive: false, path: "#" },
    { id: "2", title: t(`HEADER.HOMEPAGE.LIGHTING`), isActive: false, path: "/smart-lighting-v2/" },
    { id: "3", title: t(`HEADER.HOMEPAGE.ABOUTUS`), isActive: false, path: "#" },
  ];

  return (
    <>
      <nav className="top-navbar-new">
        <div className="menu" id="menu-topbar">
          <div className="menu-wrap container-v2">
            <Navbar
              className="nav-header text-weight nav-header-v2"
              collapseOnSelect
              expand="lg"
              id="nav-bar"
            >
              <Link to="/" className="logo nav-logo nav-brand">
                <img
                  className="img-obj-cover"
                  src={logo}
                  width={202}
                  height={44}
                  alt="sliving"
                />
              </Link>
              <Navbar.Collapse
                id="responsive-navbar-nav"
                className="animation-nav animation-nav-v2 "
              >
                <Nav className="nav-desktop navbarItem">
                  <div>
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
                            {nav.title}
                            {nav.title === t(`HEADER.HOMEPAGE.ABOUTUS`) ? <ul className="subNav">
                              <Link><li>{t(`HEADER.HOMEPAGE.STORY`)} </li></Link>
                              <Link to='/contact-page'><li>{t(`HEADER.HOMEPAGE.CONTACTUS`)}</li></Link>
                            </ul> : ""}
                          </Link>
                        );
                      })}
                  </div>
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
