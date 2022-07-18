import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import imgSecurity from "@images/smart-security-v3/img-top-security.png";

function SectionTopSmartSecurity() {
  const { t } = useTranslation();

  return (
    <section className="bg-top-smart-security">
      <Container className="max-width-1600 px-0">
        <Row className="gx-md-5 padding-left-right row-main-top-security">
          <Col md={6} className="col-img-top-security">
            <Image src={imgSecurity} className="img-fluid img-top-security" />
          </Col>
          <Col md={6} className="order-first order-md-last">
            <h2 className="title-top-smart-security">
              {t("smartBuilding.sectionTop.title")}
            </h2>
            <p className="detail-top-smart-security">
              {t("smartBuilding.sectionTop.subTitle")}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default SectionTopSmartSecurity;
