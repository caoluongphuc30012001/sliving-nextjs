import React from "react";
import { Col, Row } from "react-bootstrap";

import imgLine from "@images/new-home-page/app-img/line.png";
import imgVR from "@images/new-home-page/solution/img-vr.png";
import imgCity from "@images/new-home-page/solution/img-city.png";
import imgChip from "@images/new-home-page/solution/img-chip.png";
import arrowSolution from "@images/new-home-page/solution/arrow-right.png";

export default function NewSectionSolution() {
  return (
    <section>
      <div className="home-page-solution">
        <div className="container-wrap">
          <Row>
            <div className="solution-content">
              <h3>Giải pháp dành cho bạn</h3>
              <img src={imgLine} alt="" />
            </div>
          </Row>
          <Row>
            <div className="solution-img">
              <Col xl={6} lg={6} md={6} className="solution-left">
                <div className="solution-item-1">
                  <img src={imgChip} alt="" />
                  <div className="item-hover-1">
                    <div className="item-hover-top">
                      <span>UI/UX & Dev</span>
                    </div>
                    <div className="item-hover-content">
                      <div className="item-title">
                        <p>
                          Odading Market eCommerce Website Design and
                          Development
                        </p>
                      </div>
                      <div className="item-redirect">
                        <span>Đọc thêm</span>
                        <img src={arrowSolution} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="solution-item-2">
                  <img src={imgVR} alt="" />
                  <div className="item-hover-2">
                    <div className="item-hover-top">
                      <span>UI/UX & Dev</span>
                    </div>
                    <div className="item-hover-content">
                      <div className="item-title">
                        <p>
                          Odading Market eCommerce Website Design and
                          Development
                        </p>
                      </div>
                      <div className="item-redirect">
                        <span>Đọc thêm</span>
                        <img src={arrowSolution} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={6} lg={6} md={6} className="solution-right">
                <div className="solution-item-1">
                  <img src={imgCity} alt="" />
                  <div className="item-hover-1">
                    <div className="item-hover-top">
                      <span>UI/UX & Dev</span>
                    </div>
                    <div className="item-hover-content">
                      <div className="item-title">
                        <p>
                          Odading Market eCommerce Website Design and
                          Development
                        </p>
                      </div>
                      <div className="item-redirect">
                        <span>Đọc thêm</span>
                        <img src={arrowSolution} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="solution-item-2">
                  <img src={imgChip} alt="" />
                  <div className="item-hover-2">
                    <div className="item-hover-top">
                      <span>UI/UX & Dev</span>
                    </div>
                    <div className="item-hover-content">
                      <div className="item-title">
                        <p>
                          Odading Market eCommerce Website Design and
                          Development
                        </p>
                      </div>
                      <div className="item-redirect">
                        <span>Đọc thêm</span>
                        <img src={arrowSolution} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </div>
      </div>
    </section>
  );
}
