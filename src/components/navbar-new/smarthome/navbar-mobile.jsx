import React, { useState, useEffect } from "react";
import { Navbar, Image, Nav, Row, Col, NavDropdown } from "react-bootstrap";
import { Link, graphql, useStaticQuery } from "gatsby";
import logo from "@images/logo/logo-header.svg";
import LanguageSwitcher from "@components/navbar/switterLaguage";
import { slide as Menu } from "react-burger-menu";
import { useTranslation } from "react-i18next";

export default function NavbarSmartHomeMobile() {
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
  }, []);

  const arrMenuSolution = [
    { id: 0, title: "Smart Home" },
    { id: 1, title: "Smart Parking" },
    { id: 2, title: "Smart Security" },
    { id: 3, title: "Energy Saving" },
  ];
  const arrMenuSupport = [
    { id: 0, title: "FAQ" },
    {
      id: 1,
      title: t(`HEADER.HOMEPAGE.SUPPORT.USER_MANUALS`),
    },
    {
      id: 2,
      title: t(`HEADER.HOMEPAGE.SUPPORT.PRODUCT_VIDEOS`),
    },
  ];
  return (
    <>
      <div className=" menu menu-wrapper" id="menu-mobile-wrap-v2">
        <Navbar
          className="nav-header container-wrap"
          collapseOnSelect
          expand="lg"
        >
          <Navbar.Brand href="/" className="logo">
            <Image src={logo} />
          </Navbar.Brand>
        </Navbar>
        <Menu
          itemListElement="div"
          burgerButtonClassName={"btn-toggle-mobile"}
          crossButtonClassName={"toggle-mobile"}
        >
          <Nav className="text-weight nav-mobile" navbarScroll>
            <NavDropdown
              title={t(`HEADER.HOMEPAGE.PRODUCT`)}
              id="basic-nav-dropdown"
            >
              {data &&
                data.map((item) => (
                  <NavDropdown.Item>
                    <div className="hover-product-first">
                      <div className="product-first-item">
                        <div className="product-name">
                          <span>{item.fieldValue}</span>
                        </div>
                        <ul className="product-item">
                          {item.nodes.map((product, index) => (
                            <li key={index}>
                              <a href={`${product.frontmatter.slug}`}>
                                {product.frontmatter.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
            <NavDropdown
              title={t(`HEADER.HOMEPAGE.SOLUTION`)}
              id="basic-nav-dropdown"
            >
              {arrMenuSolution &&
                arrMenuSolution.map((item) => (
                  <NavDropdown.Item>
                    <div className="hover-solution">
                      <div className="solution-list-item">
                        <div className="solution-name">
                          <span>{item.title}</span>
                        </div>
                        <ul className="solution-item"></ul>
                      </div>
                    </div>
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
            <NavDropdown
              title={t(`HEADER.HOMEPAGE.SUPPORT.SUPPORT`)}
              id="basic-nav-dropdown"
            >
              {arrMenuSupport &&
                arrMenuSupport.map((item) => (
                  <NavDropdown.Item>
                    <div className="hover-support">
                      <div className="support-list-item">
                        <div className="support-name">
                          <span>{item.title}</span>
                        </div>
                      </div>
                    </div>
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
            <Nav.Link href="/contact-page-v2">
              {t(`HEADER.HOMEPAGE.CONTACTUS`)}
            </Nav.Link>
            <LanguageSwitcher />
          </Nav>
        </Menu>
      </div>
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
