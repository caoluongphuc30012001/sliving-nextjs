import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Image6 from "@images/intro-content2/image6.png";
const isBrowser = typeof window !== "undefined";
const SectionOutstanding = ({ title }) => {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const { t } = useTranslation();
    useEffect(() => {
        if (isBrowser) {
            window.addEventListener("resize", () => {
                if (window.innerWidth > 768) {
                    setIsDesktop(true);
                    setIsMobile(false);
                } else {
                    setIsDesktop(false);
                    setIsMobile(true);
                }
            });
            if (window.innerWidth > 768) {
                setIsDesktop(true);
                setIsMobile(false);
            } else {
                setIsDesktop(false);
                setIsMobile(true);
            }
        }
    }, [])
    return (
        <article>
            <section>
                <div className="section-introduction__article">
                    <div className="introduction-content3">
                        <Row>
                            <Col>
                                <h4 className="project">{t(`Outstanding_Project`)}</h4>
                            </Col>
                            {isDesktop && (<Col>
                                <p className="seeMore"> {t(`More_Info`)} </p>
                            </Col>)}
                        </Row>
                        <Row noGutters className="article-wrap-container">
                            <Col sm={6} xs={12} className="article-wrap-left">
                                <img className="image6 " src={Image6} class="img-responsive" alt="sliving second banner" />
                            </Col>
                            <Col sm={6} xs={12} className="article-wrap-right">
                                <div>
                                    <div className="article-header-bottom fs-48 fw-bold">
                                        <span> {t(`NAME_CONSTRUCTIN`)}</span>
                                    </div>
                                    <p className="article-title-bottom fs-16">{t(`PRODUCTS_BE_USED`)} </p>
                                    <ul className="article-desctiption-bottom">
                                        <li> The powerful system</li>
                                        <li> The powerful system </li>
                                        <li> The powerful system</li>
                                        <li> The powerful system </li>
                                        <li> The powerful system </li>
                                    </ul>
                                    <p className="article-title-bottom fs-16 mt-4">{t(`USE_THE_SOLUTION`)}</p>
                                    <p className="article-desctiption-bottom">The powerful system hardware integrates the functions of different devices. Convenient operation and excellent interaction make the home life experience more natural and comfortable.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        </article>
    );
}
export default SectionOutstanding