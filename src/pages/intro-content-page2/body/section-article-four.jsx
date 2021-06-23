import React from 'react';
import { Row, Col } from 'react-bootstrap';
import iconArrowRight from "@images/icon/icon-arrow right.svg";
import { useTranslation } from 'react-i18next';
import Image4 from "../../../images/intro-content2/image4.png";
const SectionArticleFour = () => {
    const { t } = useTranslation();
    return (
        <div className="section-introduction__article">
            <div className="introduction-content2">
                <Row noGutters className="article-wrap-container">
                    <Col xs={7} className="article-wrap-left">
                        <img className="image4" src={Image4} alt="sliving second banner" />
                    </Col>
                    <Col xs={5} className="article-wrap-right">
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
                            <div className="button-more-info1">
                                <button className="btn-about-prod">
                                    <span className="fs-18">{t(`More_Information`)}</span> <img src={iconArrowRight} alt="icon arrow right" />
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default SectionArticleFour;