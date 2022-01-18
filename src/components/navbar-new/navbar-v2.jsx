import React from "react";

import "@i18n/i18n";

import { Navbar, Nav } from "react-bootstrap";

import logo from "@images/logo/logo-header.svg";

import Link from "@components/gatsby-link";
import LanguageSwitcher from "@components/navbar/switterLanguage";

import {navigate} from "gatsby";

import { useTranslation } from "react-i18next";


export default function NavbarNew() {
  
  const { t ,i18n} = useTranslation();
  const arrMenu = [
    { id: "0", title: "Smart Home", isActive: true, path: "/smart-home/" },
    { id: "1", title: "Fintech IoT", isActive: false, path: "#" },
    { id: "2", title: t(`HEADER.HOMEPAGE.LIGHTING`), isActive: false, path: "/smart-lighting/" },
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
              <Link to="/" aria-label="Link to home" className="logo nav-logo nav-brand">
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
                            id={`item-menu${index}`}
                          >
                            {nav.title}
                            {nav.title === t(`HEADER.HOMEPAGE.ABOUTUS`) ? <ul className="subNav">
                            <li>{t(`HEADER.HOMEPAGE.STORY`)} </li>
                            <div style={{padding:" 15px 30px 15px 30px"}}  role="button" tabIndex={0} onClick={()=> navigate(`/${i18n.language}/contact-page/`)} onKeyPress={()=> navigate(`/${i18n.language}/contact-page/`)}>  {t(`HEADER.HOMEPAGE.CONTACTUS`)}</div>
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
