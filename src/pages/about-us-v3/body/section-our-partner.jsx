import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import imgUnderLine from "../../../images/home-page-v3/svg/title-line-under.svg";
import iconPartner1 from "../../../images/about-us-v3/svg/icon-partner1.svg";
import iconPartner2 from "../../../images/about-us-v3/svg/icon-partner2.svg";
import iconPartner3 from "../../../images/about-us-v3/svg/icon-partner3.svg";
import iconPartner4 from "../../../images/about-us-v3/svg/icon-partner4.png";
import iconPartner5 from "../../../images/about-us-v3/svg/icon-partner5.png";
import iconPartner6 from "../../../images/about-us-v3/svg/icon-partner6.svg";
import iconPartner7 from "../../../images/about-us-v3/svg/icon-partner7.svg";
import iconPartner8 from "../../../images/about-us-v3/svg/icon-partner8.svg";
import iconPartner9 from "../../../images/about-us-v3/svg/icon-partner9.svg";
import iconPartner10 from "../../../images/about-us-v3/svg/icon-partner10.svg";
import iconPartner11 from "../../../images/about-us-v3/svg/icon-partner11.svg";
import iconPartner12 from "../../../images/about-us-v3/svg/icon-partner12.png";

import { useTranslation } from "react-i18next";
import { useTransition } from "react";

function SectionOurPartner() {
  const { t } = useTranslation();

  const listItemLogo = [
    {
      id: 1,
      linkIconLogo: iconPartner1,
    },
    {
      id: 2,
      linkIconLogo: iconPartner2,
    },
    {
      id: 3,
      linkIconLogo: iconPartner3,
    },
    {
      id: 4,
      linkIconLogo: iconPartner4,
    },
    {
      id: 5,
      linkIconLogo: iconPartner5,
    },
    {
      id: 6,
      linkIconLogo: iconPartner6,
    },
    {
      id: 7,
      linkIconLogo: iconPartner7,
    },
    {
      id: 8,
      linkIconLogo: iconPartner8,
    },
    {
      id: 9,
      linkIconLogo: iconPartner9,
    },
    {
      id: 10,
      linkIconLogo: iconPartner10,
    },
    {
      id: 11,
      linkIconLogo: iconPartner11,
    },
    {
      id: 12,
      linkIconLogo: iconPartner12,
    },
  ];
  return (
    <section className="bg-section-our-partner">
      <div className="max-width-1180  our-partner-container">
        <Row className="row-line-center">
          <span className="title-eng-line-center">OUR PARTNERS</span>
          <h2 className="title-line-center">
            {t("aboutUs.ourPartner.mainTitle")}
          </h2>
          <div className="img-line-center d-flex justify-content-center">
            <Image src={imgUnderLine} style={{ width: 88, height: 4 }} />
          </div>
          <p className="description-line-center">
            {t("aboutUs.ourPartner.mainDesc")}
          </p>
        </Row>
        <Row lg={6} xs={4} className="logo-items">
          {listItemLogo.map((itemLogo) => (
            <Col key={itemLogo.id} className="logo-item-content">
              <div className="logo-item-img">
                <Image src={itemLogo.linkIconLogo} className="" />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default SectionOurPartner;
