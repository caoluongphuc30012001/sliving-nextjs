import React from 'react';
import iconArrowRight from "@images/icon/icon-arrow right.svg";
import iconArrowRightF4 from "@images/icon/icon-arrow-right-F47403.svg";
import { navigate } from 'gatsby';
import { useTranslation } from 'react-i18next';
const SectionHeader = () => {
    const { t } = useTranslation();
    return (
        <div className="section-introduction__header">

            <div className="container-wrap">
                <div className="section-introduction-wrap">
                    <div className="introduction-title fs-48 txt-blue">
                        <span>SLIVING -</span>
                        <span>{t(`Who-are-we`)}</span>
                    </div>
                    <div className="introduction-description fs-16">
                        <p>
                            {t(`Help-users`)}
                        </p>
                    </div>
                    <div className="button-more">
                        <button className="btn-research-wrap d-flex al-center" id='btn-research-wrap' onClick={() => (navigate("/intro-content-page/"))}>
                            <span className="fs-18 fw-bold">{t(`More_Information`)}</span> <img id="btn-research-arrow-F4" src={iconArrowRightF4} alt="icon arrow right" />
                            <img id="btn-research-arrow" src={iconArrowRight} alt="icon arrow right" />
                        </button>
                    </div>
                </div></div>
        </div>
    )
}
export default SectionHeader;
