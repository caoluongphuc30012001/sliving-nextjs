import React, { useState, useEffect, useMemo } from "react";

import CardProductV2 from "../card/card-product-v2";
import imgLine from "@images/new-home-page/app-img/line.png";

import Link from "@components/gatsby-link";

import { navigate } from "gatsby";

import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import i18next from "i18next";

import { useLocation } from "@reach/router";

import "../style.scss";

/**
 * Enum for products
 * @readonly
 * @enum {{name: string, value: int}}
 */
const Products = Object.freeze({
  switch: 0,
  led: 1,
  socket: 2,
  sensor: 3,
  zigbee: 4,
  button: 5,
  curtain: 6,
  meter: 7,
  motor: 8,
});

const SlideProduct = ({ data, noTitle, noNavbar, indexProduct }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("productname");
  const lngCurrent = i18next.language;
  const getData = data;
  const [post, setPost] = useState([]);
  const { t } = useTranslation();
  const [arrProduct] = useState([
    {
      title: "navProduct.Switches",
      id: 0,
      isActive: false,
      filterName: "productSwitch",
      searchParam: "switch",
    },
    {
      title: "LED",
      id: 1,
      isActive: false,
      filterName: "productLed",
      searchParam: "led",
    },
    {
      title: "navProduct.Sockets",
      id: 2,
      isActive: false,
      filterName: "productSocket",
      searchParam: "socket",
    },
    {
      title: "navProduct.Sensors",
      id: 3,
      isActive: false,
      filterName: "productSensor",
      searchParam: "sensor",
    },
    {
      title: "navProduct.Zigbee_KIT",
      id: 4,
      isActive: false,
      filterName: "productZigbee",
      searchParam: "zigbee",
    },
    {
      title: "navProduct.Smart_Button",
      id: 5,
      isActive: false,
      filterName: "productSmartButton",
      searchParam: "button",
    },
    {
      title: "navProduct.Smart_Curtain",
      id: 6,
      isActive: false,
      filterName: "productSmartCurtain",
      searchParam: "curtain",
    },
    {
      title: "navProduct.Smart_Meter",
      id: 7,
      isActive: false,
      filterName: "productSmartMeter",
      searchParam: "meter",
    },
    {
      title: "navProduct.Motor",
      id: 8,
      isActive: false,
      filterName: "productMotor",
      searchParam: "motor",
    },
  ]);
  const handleSelect = (filter) => {
    arrProduct.forEach(
      (prod) => (prod.isActive = filter.id === prod.id ? true : false)
    );
    filterProduct(filter.filterName);
    searchParams.delete("productname");
    searchParams.append("productname", filter.searchParam);
    navigate(
      `${location.pathname}?productname=${searchParams.get("productname")}`
    );
  };

  const filterProduct = (filter) => {
    if (getData[filter]?.edges.length > 0) {
      const arrNew = getData[filter].edges;
      const arrFilter = arrNew.filter(
        (element) => element.node.frontmatter.lgn === lngCurrent
      );
      setPost(arrFilter);
    }
  };

  const gotoElement = (elementId) => {
    document
      .getElementById(elementId)
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };

  /* filter data first  time load page */
  const filterData = (filter) => {
    arrProduct.forEach(
      (prod) => (prod.isActive = filter.id === prod.id ? true : false)
    );
    filterProduct(filter.filterName);
  };

  /* filter data first  time load page by query search params */
  const filterDataBySearchParam = (filter) => {
    arrProduct.forEach(
      (prod) => (prod.isActive = filter.id === prod.id ? true : false)
    );
    filterProduct(filter.filterName);
    searchParams.delete("productname");
    searchParams.append("productname", filter.searchParam);
    navigate(
      `${location.pathname}?productname=${searchParams.get("productname")}`
    );
    gotoElement("sliving-products")
  };

  useEffect(() => {
    if (search) {
      filterDataBySearchParam(arrProduct[Products[search] || 0]);
    } else {
      filterData(arrProduct[indexProduct || 0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, arrProduct]);

  const buildSlideProduct = useMemo(() => {
    return (
      <section
        className="container-wrap carousel-product-filter"
        id="sliving-products"
      >
        {noNavbar && noTitle ? (
          ""
        ) : (
          <div className="product-filter-header">
            {noTitle ? (
              ""
            ) : (
              <Row>
                <div className="product-header">
                  <h3>{t(`smart_home_v2.sliving_products`)}</h3>
                  <img src={imgLine} alt="" />
                </div>
              </Row>
            )}
            {noNavbar ? (
              ""
            ) : (
              <Row>
                <Col xl={12} lg={12} md={12} className="product-filter-item">
                  <ul>
                    {arrProduct &&
                      arrProduct.map((item, index) => {
                        return (
                          <div
                            key={index}
                            role="button"
                            className={
                              item.isActive ? "is-active-filter" : null
                            }
                            style={{ cursor: "pointer" }}
                            onClick={() => handleSelect(item)}
                            onKeyPress={() => handleSelect(item)}
                            tabIndex={0}
                          >
                            <span>{t(`${item.title}`)}</span>
                          </div>
                        );
                      })}
                  </ul>
                </Col>
              </Row>
            )}
          </div>
        )}
        <div className="product-list-item carousel-product">
          <Row>
            {post &&
              post.map((product, index) => (
                <Col xl={3} lg={3} md={3} className="product-item" key={index}>
                  <Link
                    to={`/smart-home/products/${product.node.frontmatter.slug}`}
                  >
                    {" "}
                    <CardProductV2 props={product.node.frontmatter} />
                  </Link>
                </Col>
              ))}
          </Row>
        </div>
      </section>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);

  return <>{buildSlideProduct}</>;
};

export default SlideProduct;
