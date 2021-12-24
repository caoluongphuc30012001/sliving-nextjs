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
    { id: "2", title: "Lighting", isActive: false, path: "/smart-lighting-v2/" },
    { id: "3", title: "About Us", isActive: false, path: "#" },
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
                            {nav.title === "About Us" ? <ul className="subNav">
                              <li><Link>Brand Story</Link></li>
                              <li><Link>News</Link></li>
                              <li><Link to='/contact-page-v2'>Contact us</Link></li>
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
