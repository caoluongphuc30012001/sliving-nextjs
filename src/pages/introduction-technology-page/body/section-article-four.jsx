import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import iconArrowRight from "@images/icon/icon-arrow right.svg";
import iconArrowRightF4 from "@images/icon/icon-arrow-right-F47403.svg";
import Image4 from "@images/intro-content2/image4.png";
import { Link } from "gatsby";
import useGetLgn from "@hook/useGetLgn";
const SectionArticleFour = () => {
    const { t } = useTranslation();
    const Lgn = useGetLgn();
    return (
        <div className="section-introduction__article">
            <div className="introduction-content2">
                <Row noGutters className="article-wrap-container">
                    <Col xs={7} className="article-wrap-left">
                        <img className="image4" src={Image4} alt="sliving second banner" />
                    </Col>
                    <Col xs={5} className="article-wrap-right section-outstanding-project">
                        <div>
                            <div className="article-header fs-48 fw-bold txt-blue">
                                <span>{t(`Security-control`)}</span>
                            </div>
                            <div className="article-description fs-16">{t(`facial-recognition`)}
                                <ul>
                                    <li> {t(`Face-ID`)}</li>
                                    <li>  {t(`Identify-strangers`)}</li>
                                    <li>  {t(`recognition-camera`)}</li>
                                    <li>  {t(`Control-elevators`)}</li>
                                </ul>
                            </div>
                            <div className="btn-research">
                                <Link to={`${Lgn}introduct-detail-page/smart-security/`}>
                                    <button className="btn-research-wrap d-flex al-center" id='btn-research-wrap'>
                                        <span className="fs-18 fw-bold">{t(`More_Information`)}</span> <img id="btn-research-arrow-F4" src={iconArrowRightF4} alt="icon arrow right" />
                                        <img id="btn-research-arrow" src={iconArrowRight} alt="icon arrow right" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default SectionArticleFour;
