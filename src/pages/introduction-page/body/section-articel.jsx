import React from 'react';
import { Row, Col } from 'react-bootstrap';
import imgArticle from "@images/introduction-page/section-article.svg";
import iconArrowRight from "@images/icon/icon-arrow right.svg";
import { useTranslation } from 'react-i18next';
import { Link } from "gatsby";
import useGetLgn from "@hook/useGetLgn";
const SectionArticle = () => {
    const { t } = useTranslation();
    const Lgn = useGetLgn();
    return (
        <div className="section-introduction__article">
            <div className="introduction__article-wrap">
                <Row noGutters className="article-wrap__group">
                    <Col  className="article-wrap__group-left">
                        <img src={imgArticle} alt="sliving introduction" />
                    </Col>
                    <Col  className="article-wrap__group-right">
                        <div>
                            <div className="article-title fs-48 fw-bold txt-blue">
                                <h3>{t(`Vision-Mission`)}</h3>
                            </div>
                            <div className="article-description fs-16">
                                <span>{t(`Leading-company`)}
                                </span>
                            </div>
                            <div className="button-more">
                                <Link to={`${Lgn}intro-content-page/`}>
                                    <button className="btn-about-prod">
                                        <span className="fs-18">{t(`More_Information`)}</span> <img src={iconArrowRight} alt="icon arrow right" />
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
export default SectionArticle;
