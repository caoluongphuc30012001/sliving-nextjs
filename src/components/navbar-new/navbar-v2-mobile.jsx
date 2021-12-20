import React, { useState, useEffect } from "react";
import { Navbar, Image, Nav, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
import logo from "@images/logo/logo-header.svg";
import LanguageSwitcher from "@components/navbar/switterLanguage";
import DataProductMenu from "../../query/product-menu";
// import DataSolutionMenu from "../../query/solution-menu";

import iconBook from "../../images/new-home-page/solution/icon-book.svg";
import iconComment from "../../images/new-home-page/solution/icon-comment.svg";
import iconVideo from "../../images/new-home-page/solution/icon-video.svg";

export default function NavbarChild() {
  const dataProductMenu = DataProductMenu();
  // const dataProductSolution = DataSolutionMenu();

  const arrMenu = [
    { id: "0", title: "Smart Home", isActive: true, path: "/smart-home" },
    { id: "1", title: "Product", isActive: false, path: "#" },
    { id: "2", title: "Solution", isActive: false, path: "#" },
    { id: "3", title: "Support", isActive: false, path: "#" },
    { id: "4", title: "Contact Us", isActive: false, path: "#" },
  ];

  const arrMenuSolution = [
    { id: 0, title: "Smarthome" },
    { id: 1, title: "Smart Parking" },
    { id: 2, title: "Smart Security" },
    { id: 3, title: "Energy Saving" },
  ];

  const arrMenuSupport = [
    { id: 0, title: "FAQ", img: iconBook },
    { id: 1, title: "User Manuals", img: iconComment },
    { id: 2, title: "Product Videos", img: iconVideo },
  ];

  const [arrNameProduct, setArrNameProduct] = useState([]);
  const filterProductNew = (filter) => {
    if (dataProductMenu[filter].edges.length > 0) {
      const arrNew = dataProductMenu[filter].edges;
      return arrNew;
    }
  };
  useEffect(() => {
    const arrLed = filterProductNew("menuProductLed");
    const arrSwitch = filterProductNew("menuProductSwitch");
    const arrSocket = filterProductNew("menuProductSocket");
    const arrZigbee = filterProductNew("menuProductZiggbe");

    setArrNameProduct((arrCurrent) =>
      arrCurrent
        .concat({ id: 0, products: arrLed, title: "LED", url: "#" })
        .concat({ id: 1, products: arrSwitch, title: "Smart Switch", url: "#" })
        .concat({ id: 2, products: [], title: "Smart Curtain", url: "#" })
        .concat({
          id: 3,
          products: arrSocket,
          title: "Smart Sockets",
          url: "#",
        })
        .concat({ id: 4, products: [], title: "Thermostat", url: "#" })
        .concat({ id: 5, products: [], title: "Smart Measurement", url: "#" })
        .concat({ id: 6, products: [], title: "Door/ Gate Motor", url: "#" })
        .concat({ id: 7, products: arrZigbee, title: "Zigbee Kit", url: "#" })
    );
  }, []);

  // const [arrNameSolution, setArrNameSolution] = useState([]);
  // const filterSolutionNew = (filter) => {
  //   if (dataProductSolution[filter].edges.length > 0) {
  //     const arrNew = dataProductSolution[filter].edges;
  //     return arrNew;
  //   }
  // };
  // useEffect(() => {
  //   const arrSmartHome = filterSolutionNew("menuSolutionHome");
  // const arrSmartParking = filterSolutionNew("menuSolutionParking");
  // const arrSmartSecurity = filterSolutionNew("menuSolutionSecurity");
  // const arrEnergySaving = filterSolutionNew("menuSolutionSaving");
  //   setArrNameSolution((arrCurrent) =>
  //     arrCurrent
  //       .concat({ id: 0, products: arrSmartHome, title: "Smarthome" })
  //       .concat({ id: 1, products: [], title: "Smart Parking" })
  //       .concat({ id: 2, products: [], title: "Smart Security" })
  //       .concat({ id: 3, products: [], title: "Energy Saving" })
  //   );
  // }, []);

  return (
    <>
      <nav className="top-navbar-new">
        <div className="menu" id="menu-topbar">
          <div className="menu-wrap container-v2">
            <Navbar
              className="nav-header text-weight nav-header-child"
              collapseOnSelect
              expand="lg"
              id="nav-bar"
            >
              <Link to="/" className="logo nav-logo nav-brand">
                <Image className="img-obj-cover" src={logo} alt="sliving" />
              </Link>
              <Navbar.Collapse
                id="responsive-navbar-nav"
                className="animation-nav animation-nav-v2"
              >
                <Nav className="nav-desktop">
                  {arrMenu &&
                    arrMenu.map((nav, index) => {
                      return (
                        <Link
                          key={index}
                          to={nav.path}
                          className={`item-menu item-menu-child link fs-16  ${nav.isActive ? "is-active" : ""
                            }`}
                          id="item-menu"
                        >
                          {nav.title}
                        </Link>
                      );
                    })}

                  {/* HOver menu Product*/}
                  <div className="nav-hover-product">
                    <Row>
                      {arrNameProduct &&
                        arrNameProduct.map((item) => (
                          <Col
                            xl={3}
                            lg={3}
                            md={3}
                            key={item.id}
                            className="product-mt"
                          >
                            <div className="hover-product-first">
                              <div className="product-first-item">
                                <div className="product-name">
                                  <span>{item.title}</span>
                                </div>
                                <ul className="product-item">
                                  {item.products.map((product, index) => (
                                    <li key={index}>
                                      <a href="/#">
                                        {product.node.frontmatter.title}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                                <div className="product-more">
                                  {item.products.length > 4 ? (
                                    <a href={item.url}>More Product</a>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </div>
                            </div>
                          </Col>
                        ))}
                    </Row>
                  </div>

                  {/* Hover menu Solution */}
                  <div className="nav-hover-solution">
                    <Row>
                      {arrMenuSolution &&
                        arrMenuSolution.map((item) => (
                          <Col
                            xl={3}
                            lg={3}
                            md={3}
                            key={item.id}
                            className="solution-mt"
                          >
                            <div className="hover-solution">
                              <div className="solution-list-item">
                                <div className="solution-name">
                                  <span>{item.title}</span>
                                </div>
                                <ul className="solution-item">
                                  {/* {item.products.map((product, index) => (
                                    <li key={index}>
                                      <a href="/#">
                                        {product.node.frontmatter.alt}
                                      </a>
                                    </li>
                                  ))} */}
                                </ul>
                              </div>
                            </div>
                          </Col>
                        ))}
                    </Row>
                  </div>

                  {/* Hover menu Support */}
                  <div className="nav-hover-support">
                    <Row>
                      {arrMenuSupport &&
                        arrMenuSupport.map((item) => (
                          <Col
                            xl={4}
                            lg={4}
                            md={4}
                            key={item.id}
                            className="support-mt"
                          >
                            <div className="hover-support">
                              <div className="support-list-item">
                                <div className="support-image">
                                  <img src={item.img} alt="" />
                                </div>
                                <div className="support-name">
                                  <span>{item.title}</span>
                                </div>
                              </div>
                            </div>
                          </Col>
                        ))}
                    </Row>
                  </div>
                </Nav>
              </Navbar.Collapse>
              <LanguageSwitcher />
            </Navbar>
          </div>
        </div>
      </nav>
    </>
  );
}
