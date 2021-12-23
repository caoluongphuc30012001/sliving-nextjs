import React from "react";

import { Col, Row } from "react-bootstrap";

import logo from "@images/new-home-page/footer/logo.png";
import logoUni from "@images/logo/logo-uni.png";
// import iconFb from "@images/new-home-page/footer/icon-fb.png";
// import iconIns from "@images/new-home-page/footer/icon-insta.png";

import arrowRight from "@images/new-home-page/footer/arrow-right.png";

import { useTranslation } from "react-i18next";

export default function FooterV2() {

  const { t } = useTranslation();

  return (
    <>
      <footer className="footer-new">
        <Row noGutters>
          <Col xs={12}><article className="bottom-contact container-v2">
            <div className="bottom-contact-wrap">
              <div className="contact-wrap-left">
                <h4>{t(`subscribe`)}</h4>
                <p>{t(`get_the_latest_news_from_us`)}</p>
              </div>
              <div className="contact-wrap-right">
                <div className="contact-form">
                  <div className="contact-form-group">
                    <input type="text" placeholder={t(`please_enter_email`)} />
                  </div>
                  <button type="button" className="btn-send">
                    <img src={arrowRight} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </article></Col>
        </Row>
        <div className="footer-info-address container-v2">
          <Row noGutters style={{ alignItems: "flex-end" }}>
            <div >
              <Row>
                <div className="footer-icon">
                  <img src={logo} alt="unicloud" width={72} height={72} />
                </div>
                <div className="footer-icon" style={{ alignSelf: "flex-end" }}>
                  <img src={logoUni} alt="" width={115} />
                </div>
              </Row>
            </div>
            <Col lg={6} style={{ marginTop: "16px" }}>
              <div className="footer-name">
                <span>{t(`company_name`)}</span>
              </div>
            </Col>
          </Row>
          <Row noGutters className="footer-info-company" style={{ marginTop: "16px" }}>
            <Col xs={12} md={6} sm={6}>
              <div className='branch-hn'>

                <p>
                  {t(`HEAD_QUARTERS`)}: Hà Nội
                  <br />
                  {t(`footer_address`)}:  {t(`address_head_quarters`)}
                  <br />
                  {t(`footer_phone`)}: 02473039999
                  <br />
                  {t(`footer_email`)}: hello@unicloud.vn
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} sm={6}>
              <div className='branch-hcm'>
                <p>
                  {t(`branch`)}: Hồ chí Minh
                  <br />
                  {t(`footer_address`)}: {t(`ADDRESS.ADDRESS_COMPANY`)}
                  <br />
                  {t(`footer_phone`)}: 028 71079995
                  {/* MST: 0107432651-001 */}
                </p>
              </div>
            </Col>
          </Row>
          {/* <Row noGutters>
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
                    </Row> */}
        </div>
      </footer>
    </>
  );
}
