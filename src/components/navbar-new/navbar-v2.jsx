import React from "react";
import { Navbar, Image, Nav } from "react-bootstrap";
import Link from "@components/gatsby-link";
import logo from "@images/logo/logo-header.svg";
import LanguageSwitcher from "@components/navbar/switterLanguage";

export default function NavbarNew() {
  const arrMenu = [
    { id: "0", title: "Smart Home", isActive: true, path: "/smart-home" },
    { id: "1", title: "Smart Building", isActive: false, path: "#" },
    { id: "2", title: "Fintech IoT", isActive: false, path: "#" },
    { id: "3", title: "Lighting", isActive: false, path: "/smart-lighting-v2" },
    { id: "4", title: "About Us", isActive: false, path: "/contact-page-v2" },
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
                <Image
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
                <Nav className="nav-desktop">
                  {arrMenu &&
                    arrMenu.map((nav, index) => {
                      return (
                        <Link
                          key={index}
                          to={nav.path}
                          className={`item-menu item-menu-v2 link fs-16  ${
                            nav.isActive ? "is-active" : ""
                          }`}
                          id="item-menu"
                        >
<<<<<<< HEAD
                            <Link to="/" className="logo nav-logo nav-brand">
                                <Image className="img-obj-cover" src={logo} alt="sliving" width={202} height={44} />
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
                                                    {nav.title}
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
=======
                          {nav.title}
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
>>>>>>> bfe3f48b28049ced5ce80e5eb6556f22749b9e33
}
