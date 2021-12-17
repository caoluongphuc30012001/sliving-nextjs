import React, { useState, useEffect } from "react";
import { Navbar, Image, Nav } from "react-bootstrap";
import { Link, graphql, useStaticQuery, navigate } from "gatsby";
import logo from "@images/logo/logo-header.svg";
import LanguageSwitcher from "@components/navbar/switterLaguage";
import { useTranslation } from "react-i18next";

export default function NavbarSmartHome() {
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
  const arrMenu = [
    { id: "0", title: "Lighting", isActive: true, path: "/en/smart-lighting-v2/" },
    {
      id: "1",
      title: t(`HEADER.HOMEPAGE.PRODUCT`),
      isActive: false,
      path: "/en/smart-lighting-v2/",
    },
    {
      id: "2",
      title: t(`HEADER.HOMEPAGE.CONTACTUS`),
      isActive: false,
      path: "/en/contact-page-v2/",
    },
  ];
  console.log("in navbar", window.location);
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
                          className={`item-menu item-menu-child link fs-16  ${
                            nav.isActive ? "is-active" : ""
                          }`}
                          id="item-menu"
                          onMouseDown={()=>{
                              console.log(document.location)
                            if(nav.title==='Products'){
                                if(document.location.pathname!==nav.path) navigate(`${nav.path}`)
                                return setTimeout(() => {
                                    const errorElements = document.getElementById("productLighting");
                                    errorElements.scrollIntoView({ block: 'center', behavior: 'smooth' });
                                }, 100);
                            }
                            navigate(`${nav.path}`)
                            // if(document.location.path==='/en/smart-lighting-v2/')
                          }}
                        >
                          {nav.title}
                        </Link>
                      );
                    })}
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
