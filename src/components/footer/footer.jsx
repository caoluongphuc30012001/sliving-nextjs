import React from "react";
import { Image, Row } from "react-bootstrap";
import Logo from "@images/logo/LOGO.png";
import arrowRight from "@images/icon/arrow_right_alt.svg";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";
import useGetLgn from "@hook/useGetLgn";
import LogoUni from "@images/logo/unicloud-white.svg";

const Footer = () => {
  const { t } = useTranslation();
  const Lgn = useGetLgn();
  return (
    <div className="main-footer">
      <div className="container-wrap">
        <div className="main-footer-wrap">
          <div className="footer-wrap__left">
            <div className="footer-left">
              <div className="footer-info">
                <Row className="footer-name ">
                  <div className="footer-icon">
                    <img src={LogoUni} alt="" />
                  </div>
                  <span className="fs-16 footer-name-wrap">
                    CÔNG TY CỔ PHẦN TẬP ĐOÀN CÔNG NGHỆ UNICLOUD
                  </span>
                </Row>
                <div className="footer-address">
                  <span>Địa chỉ:</span>
                  <span className="fs-16">
                    Block 5, Lô I-3B-1, Đường N6, Khu công nghệ cao - Phường Tân
                    Phú - TP Thủ Đức - TP Hồ Chí Minh.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-wrap__right">
            <div className="footer-wrap__right-search">
              <div className="search-group">
                <div className="search-group-wrapper">
                  <span className="fw-bold fs-16">{t(`Stay_in_touches`)}</span>
                </div>
                <div className="search-group-wrapper search-group-input">
                  <input
                    type="text"
                    id="inputEmail"
                    placeholder={t(`Your_Email`)}
                  />
                  <button
                    type="button"
                    className="btn btn-default "
                    aria-label="arrow right"
                  >
                    <img src={arrowRight} alt="icon arrow right" />
                  </button>
                </div>
                <div className="search-group-wrapper">
                  <span className="fs-16 search-group-wrapper__sub">
                    {t(`footer-description`)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <Row className="logo-wrap">
          <div className="logo-wrap-left">
            <Link to={`${Lgn}`}>
              {" "}
              <Image
                src={Logo}
                className="img-obj-cover"
                alt="sliving sunshine tech"
              />{" "}
            </Link>
          </div>
          <div className="logo-wrap-right">
            <div className="logo-wrap-item">
              <Link to="/" className="logo-wrap-rignt__nav fw-bold fs-16">
                {t(`Terms`)}
              </Link>
            </div>
            <div className="logo-wrap-item">
              <Link to="/" className="logo-wrap-rignt__nav fw-bold fs-16">
                {t(`Privacy`)}
              </Link>
            </div>
            <div className="logo-wrap-item">
              <Link to="/" className="logo-wrap-rignt__nav fw-bold fs-16">
                Cookies
              </Link>
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
};
export default Footer;
