import React from "react";
import { Col, Row } from "react-bootstrap";

import logo from "@images/new-home-page/footer/logo.png";
import logoUni from "@images/logo/logo-uni.png";

// import iconFb from "@images/new-home-page/footer/icon-fb.png";
// import iconIns from "@images/new-home-page/footer/icon-insta.png";
import arrowRight from "@images/new-home-page/footer/arrow-right.png";

import { useTranslation } from "react-i18next";

export default function FooterHomePage() {
  const { t } = useTranslation();

  return (
    <>
      <footer className="footer-new">
        <article className="bottom-contact container-wrap">
          <Row className="bottom-contact-wrap">
            <Col xs={6} md={6} className="contact-form">
              <h2>{t(`subscribe`)}</h2>
              <p>{t(`get_the_latest_news_from_us`)}</p>
              <div className="contact-form-group">
                <input type="text" placeholder={t(`please_enter_email`)} />
                <button
                  type="button"
                  className="btn-right-algin"
                  aria-label="Center Align"
                >
                  <img src={arrowRight} alt="" width={24} height={24} />
                </button>
              </div>
            </Col>
          </Row>
        </article>
        <div className="footer-info-address">
          <div className="container-wrap">
          <Row style={{ alignItems: "flex-end" }}>
            <div>
              <Row>
                <div className="footer-icon">
                  <img src={logo} alt="unicloud" width={50} height={50} />
                </div>
                <div className="footer-icon" style={{ alignSelf: "flex-end" }}>
                  <img src={logoUni} alt="" width={"auto"} height={50} />
                </div>
              </Row>
            </div>
            <Col lg={6} style={{ marginTop: "16px" }}>
              <div className="footer-name">
                <span>{t(`company_name`)}</span>
              </div>
            </Col>
          </Row>
          <Row className="footer-info-company" style={{ marginTop: "16px" }}>
            <Col xs={12} md={6} sm={6}>
              <div className="branch-hn">
                <p>
                  {t(`HEAD_QUARTERS`)}: {t(`Ha_Noi`)}
                  <br />
                  {t(`footer_address`)}: {t(`address_head_quarters`)}
                  <br />
                  {t(`footer_phone`)}: 024 7303 9999
                  <br />
                  {t(`footer_email`)}: <a href = "mailto: hello@sliving.vn">hello@sliving.vn</a> 
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} sm={6}>
              <div className="branch-hcm">
                <p>
                  {t(`branch`)}: {t(`Ho_Chi_Minh`)}
                  <br />
                  {t(`footer_address`)}: {t(`ADDRESS.ADDRESS_COMPANY`)}
                  <br />
                  {t(`footer_phone`)}: 028 7107 9995
                  {/* MST: 0107432651-001 */}
                </p>
              </div>
            </Col>
          </Row>
          </div>
          {/* <Row  >
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
