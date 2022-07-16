import React from "react";
import { Col, Row } from "react-bootstrap";
import imgUnderLine from "../../../images/home-page-v3/svg/title-line-under.svg";
import imgCustomerCentric from "../../../images/about-us-v3/png/img-customer-centric.png";
import imgService from "../../../images/about-us-v3/svg/icon-service-customer-centric.svg";
import imgProduct from "../../../images/about-us-v3/svg/icon-product-customer-centric.svg";
import imgProduce from "../../../images/about-us-v3/svg/icon-produce-customer-centric.svg";

import { useTranslation } from "react-i18next";

function SectionCustomerCentric() {
  const { t } = useTranslation();
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
    <section className="bg-section-customer-centric">
      <div className="max-width-1180  section-customer-centric container-v3">
        <Row className="row-line-center">
          <span className="title-eng-line-center">CUSTOMER CENTRIC</span>
          <h2 className="title-line-center">
            {t("aboutUs.customerCentric.mainTitle")}
          </h2>
          <div className="img-line-center d-flex justify-content-center">
            <img className="underline-img" src={imgUnderLine} alt="" />
          </div>
        </Row>
        <Row className="customer-centric-row">
          <Col lg={6} md={12} sm={12}>
            {listCertification.map((item) => (
              <div className="customer-centric-card" key={item.id}>
                <div className="customer-centric-icon">
                  <img src={item.linkImg} alt="" />
                </div>
                <div className="customer-centric-content">
                  <h4 className="customer-centric-title">{item.title}</h4>
                  {item.content.map((itemChild, index) => (
                    <span
                      className="customer-centric-item"
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
            <img src={imgCustomerCentric} className="img-customer-centric" />
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default SectionCustomerCentric;
