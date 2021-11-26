import React from "react";
import { Col, Row } from "react-bootstrap";

import productImg1 from "@images/new-home-page/product/product-1.png";
import productImg2 from "@images/new-home-page/product/product-2.png";
import productImg3 from "@images/new-home-page/product/product-3.png";
import productImg4 from "@images/new-home-page/product/product-4.png";
import productImg5 from "@images/new-home-page/product/product-5.png";
import productImg6 from "@images/new-home-page/product/product-6.png";
import imgLine from "@images/new-home-page/app-img/line.png";
import arrowBottom from "@images/new-home-page/product/arrow-bottom.png";

export default function NewSectionProduct() {
  const listProduct = [
    {
      id: 1,
      img: productImg1,
      title: "Advice Looking",
      name: "Shooting Stars",
      desc: "While it was just a TV show, that little speech at the beginning",
    },
    {
      id: 2,
      img: productImg2,
      title: "Advice Looking",
      name: "Shooting Stars",
      desc: "While it was just a TV show, that little speech at the beginning",
    },
    {
      id: 3,
      img: productImg3,
      title: "Advice Looking",
      name: "Shooting Stars",
      desc: "While it was just a TV show, that little speech at the beginning",
    },
    {
      id: 4,
      img: productImg4,
      title: "Advice Looking",
      name: "Shooting Stars",
      desc: "While it was just a TV show, that little speech at the beginning",
    },
    {
      id: 5,
      img: productImg5,
      title: "Advice Looking",
      name: "Shooting Stars",
      desc: "While it was just a TV show, that little speech at the beginning",
    },
    {
      id: 6,
      img: productImg6,
      title: "Advice Looking",
      name: "Shooting Stars",
      desc: "While it was just a TV show, that little speech at the beginning",
    },
  ];

  return (
    <section>
      <div className="home-page-product">
        <div className="container-wrap">
          <Row>
            <div className="product-header">
              <h3>Sliving products</h3>
              <img src={imgLine} alt="" />
            </div>
          </Row>
          <div className="product-list-header">
            <Row>
              <Col xl={12} lg={12} md={12} className="list-header-item">
                <ul>
                  <li>
                    <a href="/#">LED</a>
                  </li>
                  <li>
                    <a href="/#">Công tắc</a>
                  </li>
                  <li>
                    <a href="/#">Ổ cấm</a>
                  </li>
                  <li>
                    <a href="/#">Cảm biến</a>
                  </li>
                  <li>
                    <a href="/#">Hệ thống điều hòa</a>
                  </li>
                  <li>
                    <a href="/#">Rèm thông minh</a>
                  </li>
                  <li>
                    <a href="/#">Đo lường thông minh</a>
                  </li>
                  <li>
                    <a href="/#">Động cơ cửa - cổng</a>
                  </li>
                  <li>
                    <a href="/#">Zigbee Kit</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
          <div className="product-list-item">
            <Row>
              {listProduct.map((product, index) => (
                <Col xl={4} lg={4} md={4} className="product-item" key={index}>
                  <div className="product-item-img">
                    <img src={product.img} alt="" />
                  </div>
                  <div className="product-item-info">
                    <div className="product-item-title">
                      <span>{product.title}</span>
                    </div>
                    <div className="product-item-name">
                      <span>{product.name}</span>
                    </div>
                    <div className="product-item-desc">
                      <p>{product.desc}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div className="product-button">
            <button>
              <img src={arrowBottom} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
