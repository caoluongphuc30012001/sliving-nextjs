import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Image6 from "../../../images/intro-content2/image6.png";
const SectionArticleSecond = () => {
    const { t } = useTranslation();
    return (
        <div className="section-introduction__article">
            <div className="introduction-content3">
                <Row>
                    <Col>
                        <h4 className="project">{t(`Outstanding_Project`)}</h4>
                    </Col>

                    <Col>
                        <p className="seeMore"> {t(`More_Info`)} </p>
                    </Col>
                </Row>

                <Row noGutters className="article-wrap-container">
                    <Col xs={6} className="article-wrap-left">
                        <img className="image6" src={Image6} alt="sliving second banner" />
                    </Col>
                    <Col xs={6} className="article-wrap-right">
                        <div>
                            <div className="article-header-bottom fs-48 fw-bold">
                                <span> {t(`NAME_CONSTRUCTIN`)}</span>
                            </div>
                            <p className="article-title-bottom fs-16">{t(`PRODUCTS_BE_USED`)} </p>
                            <ul className="article-desctiption-bottom">
                                <li> The powerful system</li>
                                <li> The powerful system </li>
                                <li> The powerful system</li>
                                <li> The powerful system </li>
                                <li> The powerful system </li>
                            </ul>
                            <p className="article-title-bottom fs-16 mt-4">{t(`USE_THE_SOLUTION`)}</p>
                            <p className="article-desctiption-bottom">The powerful system hardware integrates the functions of different devices. Convenient operation and excellent interaction make the home life experience more natural and comfortable.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default SectionArticleSecond;