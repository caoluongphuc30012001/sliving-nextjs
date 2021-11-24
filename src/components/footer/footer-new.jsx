import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../../images/new-home-page/footer/logo.png";
import iconSwitter from "../../images/new-home-page/footer/icon-switter.png";
import iconFb from "../../images/new-home-page/footer/icon-fb.png";
import iconGg from "../../images/new-home-page/footer/icon-gg.png";
import iconInsta from "../../images/new-home-page/footer/icon-insta.png";
import arrowRight from "../../images/new-home-page/footer/arrow-right.png"

export default function FooterNew() {
  return (
    <>
      <footer className="footer-new container-v2">
        <div className="footer-info-address ">
          <Row>
            <Col lg={7} md={12} sm={12} xs={12} className="footer-left">
              <div className="footer-icon">
                <img src={logo} alt="" />
              </div>
              <div className="footer-info">
                <div className="footer-name">
                  <span>CÔNG TY CỔ PHẦN TẬP ĐOÀN CÔNG NGHỆ UNICLOUD</span>
                </div>
                <div className="footer-address">
                  <span>
                    Địa chỉ: Block 5, Lô I-3B-1, Đường N6, Khu công nghệ cao -
                    Phường Tân Phú - TP Thủ Đức - TP Hồ Chí Minh.
                  </span>
                </div>
              </div>
            </Col>
            <Col lg={5} md={12} sm={12} xs={12} className="footer-right">
              <div className="footer-list-item">
                <img src={iconInsta} alt="" />
                <img src={iconGg} alt="" />
                <img src={iconSwitter} alt="" />
                <img src={iconFb} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
}
