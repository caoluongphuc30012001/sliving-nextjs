import React from 'react';
import iconArrowRight from "@images/icon/icon-arrow right.svg";
import prodAboutImg from "@images/product/prod-about.svg";
import { navigate } from 'gatsby-link';
import { useTranslation } from 'react-i18next';
const SectionAbout = ({ banner }) => {
    const { t } = useTranslation();
    return (
        <div className="section-about-prod">
            {
                banner ? (
                    <div className="section-about-banner">
                        <img className="section-about__img" src={banner} alt="" />
                        <button className="btn-about-prod" onClick={() => (navigate("/contact-page/"))}>
                            <span className="fs-18">{t(`where_to_sell`)}</span> <img src={iconArrowRight} alt="icon arrow right" />
                        </button>
                    </div>
                ) : (
                    <div className="container-wrap  about-prod-wrap">
                        <div className="prod-about">
                            <div className="prod-about-title fs-64 fw-bold txt-blue">
                                <span className="">Get the latest Sliving Thermostat updates</span>
                            </div>
                            <button className="btn-about-prod" onClick={() => (navigate("/contact-page/"))}>
                                <span className="fs-18">{t(`where_to_sell`)}</span> <img src={iconArrowRight} alt="icon arrow right" />
                            </button>
                        </div>
                        <div className="prod-about-img">
                            <img src={prodAboutImg} alt="" />
                        </div>
                    </div>
                )
            }
        </div>
    );
}
export default SectionAbout;
