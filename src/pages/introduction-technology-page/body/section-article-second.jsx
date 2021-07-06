import React from 'react';
import { Row, Col } from 'react-bootstrap';
import iconArrowRight from "@images/icon/icon-arrow right.svg";
import iconArrowRightF4 from "@images/icon/icon-arrow-right-F47403.svg";
import { useTranslation } from 'react-i18next';
import Image2 from "@images/intro-content2/image2.png";
import { Link } from "gatsby";
import useGetLgn from "@hook/useGetLgn";
const SectionArticleSecond = () => {
    const { t } = useTranslation();
    const Lgn = useGetLgn();
    return (
        <div className="section-introduction__article">
            <div className="introduction-content2">
                <Row noGutters className="article-wrap-container">
                    <Col xs={7} className="article-wrap-left">
                        <img className="image2" src={Image2} alt="sliving second banner" />
                    </Col>
                    <Col xs={5} className="article-wrap-right">
                        <div>
                            <div className="article-header fs-48 fw-bold txt-blue">
                                <span> {t(`Smart-home`)}</span>
                            </div>
                            <div className="article-description-third fs-16">{t(`Comprehensive-Shome`)}
                                <ul>
                                    <li> {t(`lighting`)}</li>
                                    <li> {t(`conditioner`)} </li>
                                    <li>  {t(`electricity-water`)}</li>
                                    <li> {t(`curtain`)} </li>
                                    <li> {t(`speaker`)} </li>
                                </ul>
                            </div>
                            <div className="btn-research">
                                <Link to={`${Lgn}/introduct-detail-page/smart-home`}>
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
export default SectionArticleSecond;
