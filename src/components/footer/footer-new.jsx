import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "@images/new-home-page/footer/logo.png";
import iconFb from "@images/new-home-page/footer/icon-fb.png";
import iconIns from "@images/new-home-page/footer/icon-insta.png";
import SectionMap from "@components/map";
export default function FooterNew({ isMainPage }) {
  const BuildSectionMap = () => {
    return <SectionMap />
  };
  return (
    <>
      <footer className="footer-new">
        <Row noGutters>
          {isMainPage && (<Col xs={12}><BuildSectionMap /></Col>)}
        </Row>
        <div className="footer-info-address container-v2">
          <Row>
            <Col lg={8} md={12} sm={12} xs={12} className="footer-left">
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
            <Col lg={4} md={12} sm={12} xs={12} className="footer-right">
              <div className="footer-list-item">
                <a href="https://www.facebook.com/UnicloudCareers"><img src={iconIns} alt="" /></a>
                <a href="https://www.facebook.com/UnicloudCareers"><img src={iconFb} alt="facebook unicloud" /></a>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
}
