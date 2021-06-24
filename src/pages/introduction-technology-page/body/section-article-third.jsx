import React from 'react';
import { Row, Col } from 'react-bootstrap';
import iconArrowRight from "@images/icon/icon-arrow right.svg";
import { useTranslation } from 'react-i18next';
import Image3 from "@images/intro-content2/image3.png";
const SectionArticleThird = () => {
    const { t } = useTranslation();
    return (
        <div className="section-introduction__article">
            <div className="introduction-content2">
                <Row noGutters className="article-wrap-container">
                    <Col xs={5} className="article-wrap-left-third">
                        <div>
                            <div className="article-header-third fs-48 fw-bold txt-blue">
                                <span>{t(`Smart-Parking`)}</span>
                            </div>
                            <div className="article-description-third fs-16">{t(`Pioneering`)}
                                <ul>
                                    <li> {t(`Reservation`)}</li>
                                    <li>  {t(`Directions`)}</li>
                                    <li>  {t(`Find-parking`)}</li>
                                    <li>  {t(`parking-vacancies`)}</li>
                                </ul>
                            </div>
                            <div className="button-more-info1">
                                <button className="btn-about-prod">
                                    <span className="fs-18">{t(`More_Information`)}</span> <img src={iconArrowRight} alt="icon arrow right" />
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={7} className="article-wrap-right">
                        <img className="image3" src={Image3} alt="sliving third banner" />

                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default SectionArticleThird;
