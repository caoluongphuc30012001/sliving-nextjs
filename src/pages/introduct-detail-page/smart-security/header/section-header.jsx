import React from 'react';
import solutionImg from "@images/introduction-page/smart-security/header.svg";
import { useTranslation } from 'react-i18next';
const IntroductHeader = () => {
    const { t } = useTranslation();
    return (
        <article>
            <section className="introduct-header">
                <div className="introduct-header-img">
                    <img src={solutionImg} alt="" />
                </div>
                <div className="introduct-section-header">
                    <div className="section-header__title"><h3>{t(`Smart-security`)}</h3></div>
                    <div className="section-header__description">
                        <p>
                        {t(`security-description`)}
                         </p>
                    </div>
                </div>
            </section>
        </article>
    )
}
export default IntroductHeader;
