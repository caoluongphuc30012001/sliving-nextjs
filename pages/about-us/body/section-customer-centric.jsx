import React from "react";
import { Col, Row } from "react-bootstrap";
import imgUnderLine from "@images/home-page-v3/svg/title-line-under.svg";
import imgCustomerCentric from "@images/about-us-v3/png/img-customer-centric.png";
import imgService from "@images/about-us-v3/svg/icon-service-customer-centric.svg";
import imgProduct from "@images/about-us-v3/svg/icon-product-customer-centric.svg";
import imgProduce from "@images/about-us-v3/svg/icon-produce-customer-centric.svg";

import { useTranslation } from "react-i18next";
import Image from "next/image";

import style from "../style.module.scss";
function SectionCustomerCentric() {
  const { t } = useTranslation("aboutUs");
  const listCertification = [
    {
      id: 1,
      title: t("aboutUs.customerCentric.groupServices.title1"),
      linkImg: imgService,
      content: [
        t("aboutUs.customerCentric.groupServices.desc1.1"),
        t("aboutUs.customerCentric.groupServices.desc1.2"),
      ],
    },
    {
      id: 2,
      title: t("aboutUs.customerCentric.groupServices.title2"),
      linkImg: imgProduct,
      content: [
        t("aboutUs.customerCentric.groupServices.desc2.1"),
        t("aboutUs.customerCentric.groupServices.desc2.2"),
        t("aboutUs.customerCentric.groupServices.desc2.3"),
        t("aboutUs.customerCentric.groupServices.desc2.4"),
      ],
    },
    {
      id: 3,
      title: t("aboutUs.customerCentric.groupServices.title3"),
      linkImg: imgProduce,
      content: [
        t("aboutUs.customerCentric.groupServices.desc3.1"),
        t("aboutUs.customerCentric.groupServices.desc3.2"),
      ],
    },
  ];
  return (
    <section className={style[`bg-section-customer-centric`]}>
      <div className={style[`section-customer-centric`]}>
        <Row className={style[`top-content`]}>
          <span className={style[`title`]}>CUSTOMER CENTRIC</span>
          <h2 className={style[`main-title`]}>
            {t("aboutUs.customerCentric.mainTitle")}
          </h2>
          <div className={style[`underline`]}>
            <Image
              className={style[`underline-img`]}
              src={imgUnderLine}
              alt=""
            />
          </div>
        </Row>
        <Row className={style[`customer-centric-row`]}>
          <Col lg={6} md={12} sm={12}>
            {listCertification.map((item) => (
              <div className={style[`customer-centric-card`]} key={item.id}>
                <div className={style[`customer-centric-icon`]}>
                  <Image src={item.linkImg} alt="" />
                </div>
                <div className={style[`customer-centric-content`]}>
                  <h4 className={style[`customer-centric-title`]}>
                    {item.title}
                  </h4>
                  {item.content.map((itemChild, index) => (
                    <span
                      className={style[`customer-centric-item`]}
                      key={index.toString()}
                    >
                      - {itemChild}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Col>
          <Col lg={6} md={12} sm={12}>
            <Image
              src={imgCustomerCentric}
              className={style[`img-customer-centric`]}
            />
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default SectionCustomerCentric;
