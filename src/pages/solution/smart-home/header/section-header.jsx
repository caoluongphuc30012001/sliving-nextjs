import React from 'react';
import solutionImg from "@images/solution/smart-home/header/header.svg";
import rectangleImg from "@images/solution/smart-home/header/rectangle.png";
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
                    <div className="section-header__title"><h3>New intelligent style for your home</h3>
                        <img src={rectangleImg} alt="" /></div>

                    <div className="section-header__description">
                        <p>
                            The Smart Home solution makes it possible for appliances to connect together in a smart system. Users use apps on phones to remotely control lighting, air conditioners, drapes, doors, etc. From there, they function more efficiently, more economically, and more efficiently. Improve the user experience.
                        </p>
                    </div>
                </div>
            </section>
        </article >
    )
}
export default IntroductHeader;
