import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import icon1 from "@images/smart-security-v3/icon-smart-door-lock.svg";
import icon2 from "@images/smart-security-v3/icon-smart-elevator.svg";
import icon3 from "@images/smart-security-v3/icon-smart-turmstile.svg";
import icon4 from "@images/smart-security-v3/icon-face-id-time.svg";
import { useTranslation } from "react-i18next";

function SectionSmartParking() {
  const { t } = useTranslation();

  return (
    <section className="bg-smart-parking-security">
      <Container className="max-width-1180 padding-left-right">
        <h3 className="sub-title-smart-secuirity">
          {t("smartBuilding.sectionSystem.subTitle")}
        </h3>
        <h2 className="title-smart-secuirity">
          {t("smartBuilding.sectionSystem.title")}
        </h2>
        <div>
          <div className="div-under-smart-security"></div>
        </div>
        <Row className="gx-md-5 gy-md-5 gy-4 px-0 mt-3">
          <Col md={6}>
            <a href="#smart-door-locks">
              <div className="div-wrapper-smart-parking">
                <Row className="row-smart-parking-security gy-4">
                  <Col md={4} lg={3} className="d-flex justify-content-center">
                    <Image src={icon1} className="img-fluid" />
                  </Col>
                  <Col md={8} lg={9} className="div-wrapper-door">
                    <h3 className="title-smart-parking-security desktop">
                      {t("smartBuilding.sectionSystem.smartDoorLock.title1")}{" "}
                      <br />{" "}
                      {t("smartBuilding.sectionSystem.smartDoorLock.title2")}
                    </h3>
                    <h3 className="title-smart-parking-security mobile">
                      {t("smartBuilding.sectionSystem.smartDoorLock.title3")}
                    </h3>
                    <p className="sub-title-smart-parking-security">
                      {t("smartBuilding.sectionSystem.smartDoorLock.subTitle")}
                    </p>
                  </Col>
                </Row>
              </div>
            </a>
          </Col>
          <Col md={6}>
            <a href="#smart-elevator">
              <div className="div-wrapper-smart-parking">
                <Row className="row-smart-parking-security gy-4">
                  <Col md={4} lg={3} className="d-flex justify-content-center">
                    <Image src={icon2} className="img-fluid" />
                  </Col>
                  <Col md={8} lg={9} className="">
                    <h3 className="title-smart-parking-security">
                      {t("smartBuilding.sectionSystem.smartElevator.title")}
                    </h3>
                    <p className="sub-title-smart-parking-security">
                      {t("smartBuilding.sectionSystem.smartElevator.subTitle")}
                    </p>
                  </Col>
                </Row>
              </div>
            </a>
          </Col>
          <Col md={6}>
            <a href="#smart-turnstile">
              <div className="div-wrapper-smart-parking">
                <Row className="row-smart-parking-security gy-4">
                  <Col md={4} lg={3} className="d-flex justify-content-center">
                    <Image src={icon3} className="img-fluid" />
                  </Col>
                  <Col md={8} lg={9} className="">
                    <h3 className="title-smart-parking-security">
                      {t("smartBuilding.sectionSystem.smartTurnstile.title")}
                    </h3>
                    <p className="sub-title-smart-parking-security">
                      {t("smartBuilding.sectionSystem.smartTurnstile.subTitle")}
                    </p>
                  </Col>
                </Row>
              </div>
            </a>
          </Col>
          <Col md={6}>
            <a href="#face-id-attendance">
              <div className="div-wrapper-smart-parking">
                <Row className="row-smart-parking-security gy-4">
                  <Col md={4} lg={3} className="d-flex justify-content-center">
                    <Image src={icon4} className="img-fluid" />
                  </Col>
                  <Col md={8} lg={9} className="">
                    <h3 className="title-smart-parking-security">
                      {t("smartBuilding.sectionSystem.smartFaceId.title")}
                    </h3>
                    <p className="sub-title-smart-parking-security">
                      {t("smartBuilding.sectionSystem.smartFaceId.subTitle")}
                    </p>
                  </Col>
                </Row>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default SectionSmartParking;
