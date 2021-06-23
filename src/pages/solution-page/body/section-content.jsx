import React from 'react';
import iconArrowRight from "@images/icon/icon-arrow right.svg";
import { useTranslation } from 'react-i18next';
const SectionContent = ({ imgUrl, title, description }) => {
    const { t } = useTranslation();
    return (
        <article className="solution-section-content container-wrap" id="section-content-1">
            <section className="section-content-wrap row" noGutters>
                <div className="content-wrap__left" xs={12}>
                    <img src={imgUrl} alt="" />
                </div>
                <div className="content-wrap__right" xs={12}>
                    <h4 className="txt-blue fw-bold">This is solution's  long content</h4>
                    <p>We are proud to provide the most comprehensive smart home solution for customers
                        <ul>
                            <li> Smart lighting</li>
                            <li> Smart lighting</li>
                            <li> Smart lighting</li>
                            <li> Smart lighting</li>
                            <li> Smart lighting</li>
                        </ul>
                    </p>
                    <div className="btn-research">
                        <button className="btn-research-wrap d-flex al-center">
                            <span className="fs-18 fw-bold">{t(`More_Information`)}</span> <img src={iconArrowRight} alt="icon arrow right" />
                        </button>
                    </div>
                </div>
            </section>
        </article>
    );
}
export default SectionContent;
