import React from 'react';
import { Row, Col } from 'react-bootstrap';
import iconArrowRight from "@images/icon/icon-arrow right.svg";
import iconArrowRightF4 from "@images/icon/icon-arrow-right-F47403.svg";
import { useTranslation } from 'react-i18next';
import Image5 from "@images/intro-content2/image5.png";
import { Link } from 'gatsby';
import useGetLgn from "@hook/useGetLgn";
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
                            <div className="btn-research">
                                <Link to={`${useGetLgn}introduct-detail-page/smart-energy/`}>
                                    <button className="btn-research-wrap d-flex al-center" id='btn-research-wrap'>
                                        <span className="fs-18 fw-bold">{t(`More_Information`)}</span> <img id="btn-research-arrow-F4" src={iconArrowRightF4} alt="icon arrow right" />
                                        <img id="btn-research-arrow" src={iconArrowRight} alt="icon arrow right" />
                                    </button>
                                </Link>
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
