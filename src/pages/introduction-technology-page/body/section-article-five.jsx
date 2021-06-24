import React from 'react';
import { Row, Col } from 'react-bootstrap';
import iconArrowRight from "@images/icon/icon-arrow right.svg";
import { useTranslation } from 'react-i18next';
import Image5 from "@images/intro-content2/image5.png";
const SectionArticleThird = () => {
    const { t } = useTranslation();
    return (
        <div className="section-introduction__article">
            <div className="introduction-content2">
                <Row noGutters className="article-wrap-container">
                    <Col xs={5} className="article-wrap-left-third">
                        <div>
                            <div className="article-header-third fs-48 fw-bold txt-blue">
                                <span>{t(`Smart-management`)}</span>
                            </div>
                            <div className="article-description-third fs-16">{t(`Create-solution`)}
                                <ul>
                                    <li> {t(`Resident-management`)}</li>
                                    <li>  {t(`Managing-Building`)}</li>
                                    <li>  {t(`Managing revenue`)}</li>
                                    <li>  {t(`Provide-residents`)}</li>
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
                        <img className="image5" src={Image5} alt="sliving third banner" />

                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default SectionArticleThird;
