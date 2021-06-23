import React from 'react';
import iconArrowRight from "@images/icon/icon-arrow right.svg";
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
                        <button className="btn-about-prod" onClick={() => (navigate("/intro-content-page/"))}>
                            <span className="fs-18">{t(`More_Information`)}</span> <img src={iconArrowRight} alt="icon arrow right" />
                        </button>
                    </div>
                </div></div>
        </div>
    )
}
export default SectionHeader;
