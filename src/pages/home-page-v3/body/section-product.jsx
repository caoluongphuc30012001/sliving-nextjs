import React from "react";
import iconCheckOutline from "@images/icon/icon-check-circle-outline.svg";
import imgCurtain from "@images/home-page-v3/img-curtain.png";
import imgSwitch from "@images/home-page-v3/img-switch.png";
import imgApp from "@images/home-page-v3/img-app.png";
import imgTouch from "@images/home-page-v3/img-touch.png";
import imgUnderLine from "@images/home-page-v3/svg/title-line-under.svg";
import imgAppStore from "@images/home-page-v3/png/img-button-app-store.png";
import imgGooglePlay from "@images/home-page-v3/png/img-button-google-play.png";
import ModalAdvise from "@components/modal/modal-advise/ModalAdvise";

import { useTranslation } from "react-i18next";

import { Col, Image, Row } from "react-bootstrap";
import { Link } from "gatsby";

const SectionProduct = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const { t } = useTranslation();

  const arrSmartTouch = [
    {
      id: 0,
      title: t("homePage.products.firstProduct.title"),
      subTitle: "Smart Mechanical Switch",
      image: imgSwitch,
      downloadObjects: [],

      listItem: [
        {
          id: 0,
          title: t("homePage.products.firstProduct.groupDescription.title1"),
          subTitle: t("homePage.products.firstProduct.groupDescription.desc1"),
          icon: iconCheckOutline,
        },
        {
          id: 1,
          title: t("homePage.products.firstProduct.groupDescription.title2"),
          subTitle: t("homePage.products.firstProduct.groupDescription.desc2"),
          icon: iconCheckOutline,
        },
        {
          id: 2,
          title: t("homePage.products.firstProduct.groupDescription.title3"),
          subTitle: t("homePage.products.firstProduct.groupDescription.desc3"),
          icon: iconCheckOutline,
        },
      ],
    },
    {
      id: 1,
      title: t("homePage.products.secondProduct.title"),
      subTitle: "Smart Touch Switch",
      image: imgTouch,
      downloadObjects: [],

      listItem: [
        {
          id: 0,
          title: t("homePage.products.secondProduct.groupDescription.title1"),
          subTitle: t("homePage.products.secondProduct.groupDescription.desc1"),
          icon: iconCheckOutline,
        },
        {
          id: 1,
          title: t("homePage.products.secondProduct.groupDescription.title2"),
          subTitle: t("homePage.products.secondProduct.groupDescription.desc2"),
          icon: iconCheckOutline,
        },
        {
          id: 2,
          title: t("homePage.products.secondProduct.groupDescription.title3"),
          subTitle: t("homePage.products.secondProduct.groupDescription.desc3"),
          icon: iconCheckOutline,
        },
      ],
    },
    {
      id: 2,
      title: t("homePage.products.thirdProduct.title"),
      subTitle: "Sliving App",
      image: imgApp,
      downloadObjects: [
        {
          id: 0,
          img: imgAppStore,
          linkDownload: "https://1p.io/AppSlivingApple",
        },
        {
          id: 1,
          img: imgGooglePlay,
          linkDownload: "https://1p.io/SlivingAppChplay",
        },
      ],
      listItem: [
        {
          id: 0,
          title: t("homePage.products.thirdProduct.groupDescription.title1"),
          subTitle: t("homePage.products.thirdProduct.groupDescription.desc1"),
          icon: iconCheckOutline,
        },
        {
          id: 1,
          title: t("homePage.products.thirdProduct.groupDescription.title2"),
          subTitle: t("homePage.products.thirdProduct.groupDescription.desc2"),
          icon: iconCheckOutline,
        },
        {
          id: 2,
          title: t("homePage.products.thirdProduct.groupDescription.title3"),
          subTitle: t("homePage.products.thirdProduct.groupDescription.desc3"),
          icon: iconCheckOutline,
        },
      ],
    },
    {
      id: 3,
      title: t("homePage.products.fourthProduct.title"),
      subTitle: "Smart Curtain",
      image: imgCurtain,
      downloadObjects: [],

      listItem: [
        {
          id: 0,
          title: t("homePage.products.fourthProduct.groupDescription.title1"),
          subTitle: t("homePage.products.fourthProduct.groupDescription.desc1"),
          icon: iconCheckOutline,
        },
        {
          id: 1,
          title: t("homePage.products.fourthProduct.groupDescription.title2"),
          subTitle: t("homePage.products.fourthProduct.groupDescription.desc2"),
          icon: iconCheckOutline,
        },
        {
          id: 2,
          title: t("homePage.products.fourthProduct.groupDescription.title3"),
          subTitle: t("homePage.products.fourthProduct.groupDescription.desc3"),
          icon: iconCheckOutline,
        },
      ],
    },
  ];

  return (
    <section className="section-product-home-page-v3">
      <div className="container-1220">
        <Row className="row-line-center">
          <span className="title-eng-line-center">SMART HOME PRODUCTS</span>
          <h2 className="title-line-center">
            {t("homePage.products.mainTitle")}
          </h2>
          <div className="img-line-center">
            <Image src={imgUnderLine} style={{ width: 88, height: 4 }} />
          </div>
        </Row>
        {arrSmartTouch.map((smart) => {
          return (
            <Row
              key={smart.id}
              className={`${
                smart.id % 2 === 0
                  ? "card-product"
                  : "card-product flex-row-reverse"
              } `}
            >
              <Col lg={7} md={6}>
                <div className="p-relative">
                  <img
                    src={smart.image}
                    alt=""
                    className="card-product-img"
                    style={{
                      float: `${smart.id % 2 === 0 ? "" : "right"}`,
                    }}
                  />
                  {smart?.downloadObjects?.length > 0 && (
                    <div className="d-flex p-absolute download-app-list download-app-list-desktop ">
                      {smart?.downloadObjects.map((object) => (
                        <div className="download-app-item" key={object.id}>
                          <a
                            href={object.linkDownload}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src={object.img}
                              alt=""
                              className="download-app-img"
                            ></img>
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Col>
              <Col lg={5} md={6} className="">
                <h3 className="card-product-title">{smart.title}</h3>
                <h4 className="card-product-subtitle">{smart.subTitle}</h4>
                <div className="card-product-img-mobile d-none p-relative">
                  {smart?.downloadObjects?.length > 0 && (
                    <div className="d-flex p-absolute download-app-list">
                      {smart?.downloadObjects.map((object) => (
                        <div className="download-app-item" key={object.id}>
                          <a
                            href={object.linkDownload}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src={object.img}
                              alt=""
                              className="download-app-img"
                            ></img>
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                  <img src={smart.image} alt="" className="float-none" />
                </div>
                <ul className="card-product-content">
                  {smart.listItem.map((item) => (
                    <li key={item.id} className="card-product-item">
                      <div className="d-flex align-items-center">
                        <img src={item.icon} alt="" className="mr-2 m" />
                        <h4 className="card-product-item-title">
                          {item.title}
                        </h4>
                      </div>
                      <div>
                        <p className="card-product-item-des">{item.subTitle}</p>
                        <ul>
                          {item?.listChild &&
                            item?.listChild.map((child) => (
                              <li key={child}>{child}</li>
                            ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="btn-group">
                  <button
                    className="advise-now-btn"
                    onClick={() => setModalShow(true)}
                  >
                    <span>{t("homePage.btnGroup.adviseBtn")}</span>
                  </button>
                  <Link to="/smart-home">
                    <button className="learn-more-btn">
                      <span>{t("homePage.btnGroup.learnMoreBtn")}</span>
                    </button>
                  </Link>
                </div>
              </Col>
            </Row>
          );
        })}
      </div>
      <ModalAdvise show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
};

export default SectionProduct;
