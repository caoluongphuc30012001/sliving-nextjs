import React from 'react';
import solutionImg from "@images/solution-page/header/header.svg";
import { useTranslation } from 'react-i18next';
const SolutionHeader = () => {
    const { t } = useTranslation();
    return (
        <article>
            <section className="solution-header">
                <div className="solution-header-img">
                    <img src={solutionImg} alt="" />
                </div>
                <div className="solution-section-header">
                    <div className="section-header__title"><h3>{t(`lighting`)}</h3></div>
                    <div className="section-header__description">
                        <p>
                        {t(`core-feature`)}
                        </p>
                    </div>
                </div>
            </section>
        </article>
    )
}
export default SolutionHeader;
