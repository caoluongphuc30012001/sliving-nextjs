import React from "react";
import { Row } from "react-bootstrap";

import imgStar from "@images/new-home-page/banner/icon-star.png";
import imgArrow from "@images/new-home-page/banner/arrow-button.png";
import imgArrowRight from "@images/new-home-page/banner/arrowRight.svg";
import Link from "@components/gatsby-link";
import { useTranslation } from "react-i18next";
import "../../style.scss";

export default function SectionBannerV2({ url, title, desc, btnContact }) {
  const { t } = useTranslation();
  return (
    <section className="section-banner-v2">
      <div className="banner-wrap-v2 container-v2">
        <div className="banner-wrap container-wrap">
          <Row className="center-row">
            <div className="banner-icon">
              <img src={imgStar} alt="banner" />
            </div>
          </Row>
          <Row className="center-row">
            <div className="banner-title">
              <h3>
                {t(`${title}`)}
              </h3>
            </div>
          </Row>
          <Row className="row-banner-desc center-row">
            <div className="banner-desc">
              <p>
                {t(`${desc}`)}
              </p>
            </div>
          </Row>
          <Row className="row-banner-button center-row">
            {!btnContact ? (
              <Link to="/reason">
                <button className="banner-btn-v2">
                  <img src={imgArrow} alt="arrow" />
                </button>{" "}
              </Link>
            ) : (
              <button
                className="btn-research-wrap d-flex al-center"
                id="btn-research-wrap"
              >
                <span className="fs-18 fw-bold">{t(`Contact_us`)}</span>
                <img src={imgArrowRight} alt="arrow right" />
              </button>
            )}
          </Row>
        </div>
      </div>
    </section>
  );
}
