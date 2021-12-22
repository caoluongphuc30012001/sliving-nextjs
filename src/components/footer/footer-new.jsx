import React from "react";

import { Col, Row } from "react-bootstrap";

import logo from "@images/new-home-page/footer/logo.png";
import iconFb from "@images/new-home-page/footer/icon-fb.png";
import iconIns from "@images/new-home-page/footer/icon-insta.png";


import { useTranslation } from "react-i18next";

export default function FooterV2() {

  const { t } = useTranslation();

  return (
    <>
      <footer className="footer-new">
        <div className="footer-info-address container-v2">
          <Row noGutters style={{ alignItems: "flex-end" }}>
            <Col lg={1} >
              <div className="footer-icon">
                <img src={logo} alt="" />
              </div>
            </Col>
            <Col lg={6} >
              <div className="footer-name">
                <span>{t(`company_name`)}</span>
              </div>
            </Col>
          </Row>
          <Row noGutters>
            <Col lg={6} md={6} sm={12} xs={12} className="footer-left">
              <div className="footer-info">
                <div className="footer-info-detail">
                  <span>
                    {t(`HEAD_QUARTERS`)}:
                  </span>
                  <span>
                    Hà Nội
                  </span>
                </div>
              </div>
              <div className="footer-info">
                <div className="footer-info-detail">
                  <span>
                    {t(`footer_address`)}:
                  </span>
                  <span>
                    {t(`address_head_quarters`)}
                  </span>
                </div>
              </div>
              <div className="footer-info">
                <div className="footer-info-detail">
                  <span>
                    {t(`footer_phone`)}:
                  </span>
                  <span>
                    02473039999
                  </span>
                </div>
              </div>
              <div className="footer-info">
                <div className="footer-info-detail">
                  <span>
                    {t(`footer_email`)}:
                  </span>
                  <span style={{ textTransform: ' lowercase' }}>
                    hello@sliving.vn
                  </span>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} className="footer-right">
              <div className="footer-info">
                <div className="footer-info-detail">
                  <span>
                    {t(`branch`)}:
                  </span>
                  <span>
                    Hồ Chí Minh
                  </span>
                </div>
              </div>
              <div className="footer-info">
                <div className="footer-info-detail" >
                  <span style={{ alignSelf: "stretch", whiteSpace: 'nowrap' }}>
                    {t(`footer_address`)}:
                  </span>
                  <span>
                    {t(`ADDRESS.ADDRESS_COMPANY`)}
                  </span>
                </div>
              </div>
              <div className="footer-info">
                <div className="footer-info-detail">
                  <span>
                    {t(`footer_phone`)}:
                  </span>
                  <span>
                    028 71079995
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          <Row noGutters>
            <Col lg={12} md={12} sm={12} xs={12} className="footer-social">
              <div className="footer-list-item">
                <a href="https://www.facebook.com/UnicloudCareers" target='_blank'
                  rel="noreferrer"
                  aria-label='Github'><img src={iconIns} alt="" /></a>
                <a href="https://www.facebook.com/UnicloudCareers" target='_blank'
                  rel="noreferrer"
                  aria-label='Github'><img src={iconFb} alt="facebook unicloud" /></a>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
}
