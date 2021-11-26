import React from "react";
import { Row } from "react-bootstrap";

import imgStar from "@images/new-home-page/banner/icon-star.png";
import imgArrow from "@images/new-home-page/banner/arrow-button.png";

export default function NewSectionBanner() {
  return (
    <section>
      <div className="home-page-banner">
        <div className="container-wrap">
          <Row>
            <div className="banner-icon">
              <img src={imgStar} alt="" />
            </div>
          </Row>
          <Row>
            <div className="banner-title">
              <h3>Lý do bạn nên lựa chọn Sliving</h3>
            </div>
          </Row>
          <Row className="row-banner-desc">
            <div className="banner-desc">
              <p>
                If you are in the market for a computer, there are a number of
                factors to consider. Will it be used for your home, your office
                or perhaps even
              </p>
            </div>
          </Row>
          <Row className="row-banner-button">
            <button className="banner-button">
              <img src={imgArrow} alt="" />
            </button>
          </Row>
        </div>
      </div>
    </section>
  );
}
