import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function SectionHeader() {
  const { t } = useTranslation();
  return (
    <section className="section-top-solution-package">
      <Container className="max-width-1300 padding-left-right">
        <Row className="gx-5">
          <Col md={2} lg={5} xl={7}></Col>
          <Col md={10} lg={7} xl={5}>
            <div className="container-header">
              <h2 className="text-top-solution-1">
                {t("business.header.title")}
              </h2>
              <h4 className="text-top-solution-2">
                {t("business.header.subTitle")}
              </h4>
              <p className="text-top-solution-3">
                {t("business.header.description")}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SectionHeader;
