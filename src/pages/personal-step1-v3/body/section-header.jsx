import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import bgCloud from "../../../images/business-step1-v3/png/bg-cloud.png";
import bgLinear from "../../../images/business-step1-v3/png/bg-linear.png";
import bgBuilding from "../../../images/business-step1-v3/png/building.png";
import bgBuildingMobile from "../../../images/business-step1-v3/png/building-mobile.png";

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
                {t("personalPackage.header.mainTitle")}
              </h2>
              <h4 className="text-top-solution-2">
                {t("personalPackage.header.subTitle")}
              </h4>
              <p className="text-top-solution-3">
                {t("personalPackage.header.mainDesc")}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SectionHeader;
