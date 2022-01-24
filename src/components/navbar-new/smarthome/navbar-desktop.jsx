import React, { useState, useEffect } from "react";

import "@i18n/i18n";

import { Navbar, Image, Nav, Row, Col } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import { useTranslation } from "react-i18next";

import logo from "@images/logo/logo-header.svg";

import LanguageSwitcher from "@components/navbar/switterLanguage";
import Link from "@components/gatsby-link";

export default function NavbarSmartHomeDesktop() {
  
  const dataProductMenu = DataProductMenu();
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const cutArray = (array) => {
    if (array.length > 8) return array.slice(0, 8);
    return [];
  };
  useEffect(() => {
    if (i18n.language === "en") {
      setData(cutArray(dataProductMenu["en"].group));
    } else {
      setData(cutArray(dataProductMenu["vn"].group));
    }
  }, [i18n, dataProductMenu]);
  const arrMenu = [
    {
      id: "1",
      title: t(`HEADER.HOMEPAGE.PRODUCT`),
      isActive: false,
      path: "/smart-home/products",
    },
    {
      id: "2",
      title: t(`HEADER.HOMEPAGE.SOLUTION`),
      isActive: false,
      path: "#",
    },
    {
      id: "3",
      title: t(`HEADER.HOMEPAGE.SUPPORT.SUPPORT`),
      isActive: false,
      path: "/support",
    },
    {
      id: "4",
      title: t(`HEADER.HOMEPAGE.CONTACTUS`),
      isActive: false,
      path: "/smart-home/contact/",
    },
  ];
  const arrMenuSolution = [
    { id: 0, title: "Smart Home", path: "/solutions/smart-home/" },
    { id: 1, title: "Smart Parking", path: "/solutions/smart-parking/" },
    { id: 2, title: "Smart Security", path: "/solutions/smart-security/" },
    { id: 3, title: "Smart Lighting", path: "/smart-lighting/" },
  ];
  // const arrMenuSupport = [
  //   { id: 0, title: "FAQ", img: iconBook },
  //   {
  //     id: 1,
  //     title: t(`HEADER.HOMEPAGE.SUPPORT.USER_MANUALS`),
  //     img: iconComment,
  //   },
  //   {
  //     id: 2,
  //     title: t(`HEADER.HOMEPAGE.SUPPORT.PRODUCT_VIDEOS`),
  //     img: iconVideo,
  //   },
  // ];
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
              <Navbar.Brand aria-label="Link to home">
               <Link to="/">
               <Image
                  className="img-obj-cover"
                  src={logo}
                  alt="sliving"
                  width={202}
                  height={44}
                />
               </Link>
              </Navbar.Brand>

              <Navbar.Collapse
                id="responsive-navbar-nav"
                className="animation-nav animation-nav-v2"
              >
                <Nav className="nav-desktop">
                  <Link
                    to="/smart-home/"
                    className="item-menu item-menu-child link fs-16 1"
                    id="item-menu-parent"
                  >
                    Smart Home
                  </Link>
                  {arrMenu &&
                    arrMenu.map((nav, index) => {
                      return (
                        <Link
                          key={index}
                          to={nav.path}
                          className={`item-menu item-menu-child link fs-16  ${nav.isActive ? "is-active" : ""
                            }`}
                          id={`item-menu${index}`}
                        >
                          {nav.title}
                        </Link>
                      );
                    })}

                  {/* HOver menu Product*/}
                  <div className="nav-hover-product">
                    <Row>
                      {data &&
                        data.map((item,index) => (
                          <Col
                            xl={3}
                            lg={3}
                            md={3}
                            key={index}
                            className="product-mt"
                          >
                            <div className="hover-product-first">
                              <div className="product-first-item">
                                <div className="product-name">
                                  <span>{item.fieldValue}</span>
                                </div>
                                <ul className="product-item">
                                  {item.nodes.map((product, index) => (
                                    <li key={index}>
                                      <Link
                                        to={`/smart-home/products/${product.frontmatter.slug}`}
                                      >
                                        {product.frontmatter.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
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
                        arrMenuSolution.map((item,index) => (
                          <Col
                            xl={3}
                            lg={3}
                            md={3}
                            key={index}
                            className="solution-mt"
                          >
                            <div className="hover-solution">
                              <div className="solution-list-item">
                                <div className="solution-name">
                                  <Link to={item.path}>
                                    <span>{item.title}</span>
                                  </Link>
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
                  {/* <div className="nav-hover-support">
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
                  </div> */}
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
const DataProductMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      en: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/(contents/product-v2/)/" }
          frontmatter: { lgn: { eq: "en" } }
        }
        sort: { fields: frontmatter___date }
      ) {
        group(field: frontmatter___type, limit: 4) {
          fieldValue
          nodes {
            frontmatter {
              id
              title
              slug
            }
          }
        }
      }
      vn: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/(contents/product-v2/)/" }
          frontmatter: { lgn: { eq: "vn" } }
        }
        sort: { fields: frontmatter___date }
      ) {
        group(field: frontmatter___type, limit: 4) {
          fieldValue
          nodes {
            frontmatter {
              id
              title
              slug
            }
          }
        }
      }
    }
  `);

  return data;
};
