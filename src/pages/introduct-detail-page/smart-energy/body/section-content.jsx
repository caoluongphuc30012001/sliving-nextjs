import React from 'react';
import iconArrowRightF4 from "@images/icon/icon-arrow-orange.svg";
import iconArrowRight from "@images/icon/icon-arrow white.svg";
import { useTranslation } from 'react-i18next';
import { Row } from 'react-bootstrap';
const SectionContent = ({ imgUrl, title, description }) => {
    const { t } = useTranslation();
    return (
        <article className="introduct-section-content container-wrap" id="section-content-1">
            <section>
                <Row noGutters className="section-content-wrap">
                    <div className="content-wrap__left" xs={12}>
                        <img src={imgUrl} alt="" />
                    </div>
                    <div className="content-wrap__right" xs={12}>
                        <h4 className="txt-blue fw-bold">{title}</h4>
                        {description}
                        <div className="btn-research">
                            <button className="btn-research-wrap d-flex al-center" id='btn-research-wrap'>
                                <span className="fs-18 fw-bold">{t(`More_Information`)}</span> <img id="btn-research-arrow-F4" src={iconArrowRightF4} alt="icon arrow right" />
                                <img id="btn-research-arrow" src={iconArrowRight} alt="icon arrow right" />
                            </button>
                        </div>
                    </div>
                </Row>
            </section>
        </article>
    );
}
export default SectionContent;
