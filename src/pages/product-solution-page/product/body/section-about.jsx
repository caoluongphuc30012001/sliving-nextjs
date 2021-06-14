import React from 'react';
import iconArrowRight from "@images/icon/icon-arrow right.svg";
import prodAboutImg from "@images/product/prod-about.svg";
import { navigate } from 'gatsby-link';
import { useTranslation } from 'react-i18next';
const SectionAbout = ({ data }) => {
    const { t } = useTranslation();
    return (
        <div className="container-wrap section-about-prod">
            <div className="about-prod-wrap">
                <div className="prod-about">
                    <div className="prod-about-title fs-64 fw-bold txt-blue">
                        <span className="">Get the latest Sliving Thermostat updates</span>
                    </div>
                    <button className="btn-about-prod" onClick={() => (navigate("/contact-page/"))}>
                        <span className="fs-18">{t(`where-to-sell`)}</span> <img src={iconArrowRight} alt="icon arrow right" />
                    </button>
                </div>
                <div className="prod-about-img">
                    <img src={prodAboutImg} alt="" />
                </div>
            </div>
        </div>
    );
}
export default SectionAbout;
