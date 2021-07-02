import React from 'react';
import { Image, Row, Col } from "react-bootstrap";
import Logo from "@images/logo/LOGO.png";
import arrowRight from "@images/icon/arrow_right_alt.svg";
import { Link } from "gatsby"
import { useTranslation } from 'react-i18next';
const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="main-footer">
            <div className="container-wrap">
                <div className="main-footer-wrap">

                    <Row className="footer-wrap__left">
                        <Col className="footer-wrap__left-sub">
                            <ul className="list-unstyled double-space">
                                <li className="fw-bold">{t(`Product`)}</li>
                                <li className="">{t(`Employee_database`)}</li>
                                <li className="">{t(`Payroll`)}</li>
                                <li className="">{t(`Absences`)}</li>
                                <li className="">{t(`Time_tracking`)}</li>
                                <li className="">{t(`Shift_planner`)}</li>
                                <li className="">{t(`Recruiting`)}</li>
                            </ul>
                        </Col>
                        <Col className="footer-wrap__left-sub">
                            <ul className="list-unstyled double-space">
                                <li className="fw-bold">{t(`Information`)}</li>
                                <li className="">{t(`FAQ`)}</li>
                                <li className="">{t(`Blog`)}</li>
                                <li className="">{t(`Support`)}</li>
                            </ul>
                        </Col>
                        <Col className="footer-wrap__left-sub">
                            <ul className="list-unstyled double-space">
                                <li className="fw-bold">{t(`Company`)}</li>
                                <li className="">{t(`About_us`)}</li>
                                <li className="">{t(`Careers`)}</li>
                                <li className="">{t(`Contact_us`)}</li>
                                <li className="">{t(`Lift_media`)}</li>
                            </ul>
                        </Col>
                    </Row>

                    <div className="footer-wrap__right">
                        <div className="footer-wrap__right-search">
                            <div className="search-group">
                                <div className="search-group-wrapper">
                                    <span className="fw-bold fs-16">{t(`Stay_in_touches`)}</span>
                                </div>
                                <div className="search-group-wrapper search-group-input">
                                    <input type="text" id="inputEmail" placeholder={t(`Your_Email`)} />
                                    <button type="button" className="btn btn-default " aria-label="arrow right"><img src={arrowRight} alt="icon arrow right" /></button>
                                </div>
                                <div className="search-group-wrapper">
                                    <span className="fs-16 search-group-wrapper__sub">Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                <Row className="logo-wrap" >
                    <div className="logo-wrap-left">
                        <Link to="/"> <Image src={Logo} className="img-obj-cover" alt="sliving sunshine tech" /> </Link>
                    </div>
                    <div className="logo-wrap-right">
                        <div className="logo-wrap-item">
                            <Link to="/" className="logo-wrap-rignt__nav fw-bold fs-16">{t(`Terms`)}</Link>
                        </div >
                        <div className="logo-wrap-item">
                            <Link to="/" className="logo-wrap-rignt__nav fw-bold fs-16">{t(`Privacy`)}</Link>
                        </div>
                        <div className="logo-wrap-item">
                            <Link to="/" className="logo-wrap-rignt__nav fw-bold fs-16">Cookies</Link>
                        </div>
                    </div>
                </Row>
            </div>
        </div>
    );
}
export default Footer;
