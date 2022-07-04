import React from "react";
// import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from "react-bootstrap";
import icon1 from "../../../images/smart-security-v3/icon-smart-door-lock.svg";
import icon2 from "../../../images/smart-security-v3/icon-smart-elevator.svg";
import icon3 from "../../../images/smart-security-v3/icon-smart-turmstile.svg";
import icon4 from "../../../images/smart-security-v3/icon-face-id-time.svg";

function SectionSmartParking() {
  return (
    <section className="bg-smart-parking-security">
      <Container className="max-width-1180 padding-left-right">
        <h3 className="sub-title-smart-secuirity">SMART PARKING</h3>
        <h2 className="title-smart-secuirity">
          Hệ Thống Trong Giải Pháp Smart Parking
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
                  <Col md={8} lg={9} className="">
                    <h3 className="title-smart-parking-security">
                      Smart Door Locks
                    </h3>
                    <p className="sub-title-smart-parking-security">
                      Hệ Thống Khoá Cửa Thông Minh
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
                      SMART ELEVATOR
                    </h3>
                    <p className="sub-title-smart-parking-security">
                      Hệ Thống Thang Máy Thông Minh
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
                      SMART TURNSTILE
                    </h3>
                    <p className="sub-title-smart-parking-security">
                      Hệ Thống Cửa Quay Thông Minh
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
                      FACE ID TIME ATTENDANCE
                    </h3>
                    <p className="sub-title-smart-parking-security">
                      Hệ Thống Chấm Công Bằng Khuôn Mặt
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
