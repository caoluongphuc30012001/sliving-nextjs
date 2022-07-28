import React from "react";
import { Col, Row } from "react-bootstrap";
import iconCertification1 from "@images/about-us-v3/svg/icon-certification1.svg";
import iconCertification2 from "@images/about-us-v3/svg/icon-certification2.svg";
import iconCertification3 from "@images/about-us-v3/svg/icon-certification3.svg";
import iconCertification4 from "@images/about-us-v3/svg/icon-certification4.svg";
import iconActivity1 from "@images/about-us-v3/png/img-activity1.png";
import iconActivity2 from "@images/about-us-v3/png/img-activity2.png";
import iconActivity3 from "@images/about-us-v3/png/img-activity3.png";
import iconActivity4 from "@images/about-us-v3/png/img-activity4.png";

import { useTranslation } from "react-i18next";

import Image from "next/image";
import style from "../style.module.scss";
function SectionActivity() {
  const { t } = useTranslation("aboutUs");

  const listCertification = [
    {
      id: 1,
      linkIconLogo: iconCertification1,
      title: (
        <span>
          {t("aboutUs.fieldActivity.listItems.title1.1")}
          <br />
          {t("aboutUs.fieldActivity.listItems.title1.2")}
        </span>
      ),
    },
    {
      id: 2,
      linkIconLogo: iconCertification2,
      title: (
        <span style={{ whiteSpace: "nowrap" }}>
          {t("aboutUs.fieldActivity.listItems.title2.1")}
          <br />
          {t("aboutUs.fieldActivity.listItems.title2.2")}
        </span>
      ),
    },
    {
      id: 3,
      linkIconLogo: iconCertification3,
      title: (
        <span>
          {t("aboutUs.fieldActivity.listItems.title3.1")}
          <br />
          {t("aboutUs.fieldActivity.listItems.title3.2")}
        </span>
      ),
    },
    {
      id: 4,
      linkIconLogo: iconCertification4,
      title: (
        <span>
          {t("aboutUs.fieldActivity.listItems.title4.1")}
          <br />
          {t("aboutUs.fieldActivity.listItems.title4.2")}
        </span>
      ),
    },
  ];
  const listActivity = [
    {
      id: 1,
      linkIconLogo: iconActivity1,
      title: "Digital Banking Platform",
    },
    {
      id: 2,
      linkIconLogo: iconActivity2,
      title: "Smart City",
    },
    {
      id: 3,
      linkIconLogo: iconActivity3,
      title: "Digital Transformation",
    },
    {
      id: 4,
      linkIconLogo: iconActivity4,
      title: "Virtual Reality - VR",
    },
  ];
  return (
    <section className={style[`bg-section-activity`]}>
      <div className={style[`section-activity-container`]}>
        <div className={style[`content-container`]}>
          <h3
            className={[
              style[`section-activity-title`],
              style[`first-title`],
            ].join(" ")}
          >
            {t("aboutUs.fieldActivity.groupContents.title1")}
          </h3>
          <div className={style[`max-width-1180`]}>
            <Row md={4} sm={2} xs={2} className={style[`max-width-1180`]}>
              {listActivity.map((item) => (
                <Col key={item.id}>
                  <div className={style[`activity-card`]}>
                    <div className={style[`activity-card-img`]}>
                      <Image src={item.linkIconLogo} />
                    </div>
                    <span className={style[`activity-card-title`]}>
                      {item.title}
                    </span>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <div className={style[`line-separator`]}></div>
        <div className={style[`content-container`]}>
          <h3 className={style[`section-activity-title`]}>
            {t("aboutUs.fieldActivity.groupContents.title2")}
          </h3>
          <Row md={4} sm={2} xs={2} className={style[`max-width-1180`]}>
            {listCertification.map((item, index) => (
              <Col key={index.toString()}>
                <div className={style[`certification-card`]}>
                  <div className={style[`certification-card-img`]}>
                    <Image src={item.linkIconLogo} />
                  </div>
                  <span className={style[`certification-card-title`]}>
                    {item.title}
                  </span>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
}

export default SectionActivity;
