import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import imgLeft from "@images/smart-security-v3/img-face-id.png";
import { useTranslation } from "react-i18next";
import RowUtilities from "./RowUtilities";

function SectionSmartFaceID() {
  const { t } = useTranslation();

  return (
    <section className="bg-smart-door-locks" id="face-id-attendance">
      <Container className="max-width-1180 padding-left-right-smart-door">
        <h3 className="sub-title-smart-secuirity">
          {t("smartBuilding.sectionSmartTurnstile.subTitle")}
        </h3>
        <h2 className="title-smart-secuirity">
          {t("smartBuilding.sectionSmartTurnstile.title")}
        </h2>
        <div>
          <div className="div-under-smart-security"></div>
        </div>
        <Row className="gx-md-12 gx-lg-4 gy-4 mt-3">
          <Col md={12} lg={6} className="px-0">
            <div className="div-wrapper-img-smart-security">
              <Image
                src={imgLeft}
                className="img-fluid img-left-smart-door-locks"
              />
            </div>
            <Image
              src={imgLeft}
              className="img-fluid img-left-smart-door-locks"
              style={{ opacity: "0" }}
            />
          </Col>
          <Col md={12} lg={6} className="col-main-smart-door">
            <RowUtilities
              utilities={t("smartBuilding.sectionSmartFaceID.utilities", {
                returnObjects: true,
              })}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default SectionSmartFaceID;
