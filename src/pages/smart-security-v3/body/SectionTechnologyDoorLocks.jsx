import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import iconPartnership from "@images/smart-security-v3/icon-partner-smart-security.svg";
import logoDahua from "@images/smart-security-v3/logo-dahua.svg";
import { useTranslation } from "react-i18next";
import RowTechnology from "./RowTechnology";

function SectionTechnologyDoorLocks() {
  const { t, ready } = useTranslation();

  const technologies = t(
    "smartBuilding.sectionTechnologyDoorLocks.technologies",
    { returnObjects: true }
  );

  return (
    <section className="bg-technology-smart-security">
      <Container className="max-width-1180 padding-left-right">
        <Row className="gx-md-5 gy-4">
          <Col md={6} className="position-relative">
            {ready && <RowTechnology technologies={technologies} />}
          </Col>
          <Col md={6} className="position-relative">
            <div className="div-wrapper-technology-security">
              <h3 className="title-technology-smart-security">
                {t(
                  "smartBuilding.sectionTechnologyDoorLocks.collaborativeBrand.title"
                )}
              </h3>
              <Image
                src={logoDahua}
                className="img-fluid img-logo-technologo-security"
              />
              <p className="detail-partnership-security">
                {t(
                  "smartBuilding.sectionTechnologyDoorLocks.collaborativeBrand.subTitle"
                )}
              </p>
              <div className="div-wrapper-icon-security">
                <Image src={iconPartnership} className="img-fluid" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default SectionTechnologyDoorLocks;
