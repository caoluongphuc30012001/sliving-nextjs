import React, { useContext, useEffect } from "react";
import { Navbar, Image, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "@wapps/gatsby-plugin-i18next";
import logo from "@images/logo/logo-sliving-new.png";
import PortfolioContext from "../../context/context";
import { useLocation } from "@reach/router";

import LanguageSwitcher from "../navbar/switterLaguage";

const isBrowser = typeof window !== "undefined";

export default function NavbarNew() {
  const location = useLocation();
  const pathName = location.pathname;
  const { arrNav } = useContext(PortfolioContext);
  const { menus } = arrNav;
  const { t } = useTranslation();
  menus.forEach((element) => {
    element.isActive =
      pathName.indexOf(element.path) > -1 ||
        (pathName.indexOf("introduct-detail-page") > -1 && element.id === "0")
        ? true
        : false;
    if (element.id !== "1" && element.arrMenu) {
      element.arrMenu.map((nav) => {
        nav.isActive = pathName.indexOf(nav.path) > -1 ? true : false;
      });
    }
  });

  const activePage = (id) => {
    return (
      menus &&
      menus.map(
        (itemMenu) => (itemMenu.isActive = itemMenu.id === id ? true : false)
      )
    );
  };

  const HandelActiveSubMenu = (menuId, SubMenuId) => {
    menus.map((menu) => {
      if (menuId === menu.id) {
        menu.arrMenu.map((item) => {
          item.isActive = SubMenuId === item.id ? true : false;
        });
      }
    });
  };

  return (
    <>
      <div className="top-navbar-new">
        <div className="menu" id="menu-topbar">
          <div className="menu-wrap container-wrap">
            <Navbar
              className="nav-header text-weight"
              collapseOnSelect
              expand="lg"
              id="nav-bar"
            >
              <Link to="/" className="logo nav-logo nav-brand">
                <Image className="img-obj-cover" src={logo} alt="sliving" />
              </Link>
              <Navbar.Collapse
                id="responsive-navbar-nav"
                className="animation-nav"
              >
                <Nav className="nav-desktop">
                  {menus &&
                    menus.map((nav) => {
                      return (
                        <div
                          className={`fs-16 link-menu ${nav.arrNav ? "mega-menu" : ""
                            } `}
                          id={`nav-id-${nav.id}`}
                          key={nav.id}
                          onClick={() => activePage(nav.id)}
                          role="button"
                          tabIndex={0}
                          onKeyPress={() => activePage(nav.id)}
                        >
                          {nav && (
                            <>
                              <Link
                                to={nav.path}
                                className={`item-menu link  ${nav.isActive ? "is-active" : ""
                                  }`}
                                id="item-menu"
                              >
                                {t(`${nav.title}`)}
                              </Link>
                              <div className="nav-childs">
                                <div className="nav-child">
                                  <div className="nav-child-wrap">
                                    {nav.arrMenu &&
                                      nav.arrMenu.map((menu, indexMenu) => {
                                        return (
                                          <div
                                            key={indexMenu}
                                            className={`child-wrap-item ${menu.isActive
                                                ? "is-acitve-subMenu"
                                                : ""
                                              }`}
                                          >
                                            <Link
                                              to={menu.path ? menu.path : "/"}
                                            >
                                              <span
                                                className="child-wrap-item__title"
                                                onClick={() =>
                                                  HandelActiveSubMenu(
                                                    nav.id,
                                                    menu.id
                                                  )
                                                }
                                              >
                                                {t(`${menu.title}`)}
                                              </span>
                                            </Link>
                                          </div>
                                        );
                                      })}
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      );
                    })}
                  <LanguageSwitcher />
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
}
