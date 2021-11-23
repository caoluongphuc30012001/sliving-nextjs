import React from "react";
import { Col, Row } from "react-bootstrap";

import imgLed from "@images/new-home-page/header/img-led.png";
import imgCamera from "@images/new-home-page/header/img-camera.png";
import imgRoom from "@images/new-home-page/header/img-room.png";
import imgArrowHeader from "@images/new-home-page/header/imgArrow.png";

export default function NewSectionHeader() {
  return (
    <section>
      <div className="home-page-header">
        <div className="container-wrap">
          <Row>
            <Col xl={6} lg={6} md={6} className="header-left">
              <div className="header-left-title">
                <h1>The era of intelligent life.</h1>
              </div>
              <div className="header-left-desc">
                <p>
                  Complex project management experience. When selecting an
                  offshore software development company, ensure that they have
                </p>
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} className="header-right">
              <div className="header-right-image-1">
                <img src={imgLed} alt="" />
              </div>
              <div className="header-right-image-2">
                <img src={imgCamera} alt="" />
              </div>
              <div className="header-right-image-3">
                <img src={imgRoom} alt="" />
              </div>
            </Col>
          </Row>
          <div className="header-button">
            <button className="btn">
              <img src={imgArrowHeader} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
