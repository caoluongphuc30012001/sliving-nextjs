import React from 'react';
import SectionSlides from "./body/section-Slides";
import Layout from "@components/layout.jsx";
import Sectionorizontal from "@components/section/section-horizontal/section-horizontal";
import imgIot from "@images/home-page/info/iot.svg";
import "./home-page.scss";
import SectionHeader from "./body/section-header";
import SectionBannerSuport from "./body/section-banner-support";
import SectionConstruction from './body/section-construction';
import SectionIntroduce from "./body/section-introduce";
import SectionBannerReason from "./body/section-banner-reason";
import SectionProject from "./body/section-project";
import SectionVideo from "./body/section-Video";
import SectionSlideNews from "./body/section-slide-news";
import { useTranslation } from 'react-i18next';
import { withTranslation } from 'react-i18next';
const HomePage = () => {
    const { t } = useTranslation();
    return (
        <Layout>
            <div className="home-page-main">
                <SectionHeader />
                <SectionBannerSuport />
                <SectionConstruction />
                <SectionIntroduce />
                <SectionSlides />
                <SectionBannerReason />
                <Sectionorizontal title={t(`who_are_we`)} urlImg={imgIot} url={'/introduction-page/'}>
                    <span>
                        <span>{t(`specialized-business`)}</span>
                        <ul>
                            <li>{t(`Designing-interfaces`)}</li>
                            <li>{t(`Design-hardware`)}</li>
                            <li>{t(`Producing-smart`)}</li>
                            <li>{t(`Building-computer`)}</li>
                            <li>{t(`AI`)}</li>
                        </ul>
                        {t(`Over-the-years`)}
                    </span>
                </Sectionorizontal>
                <SectionVideo />
                <SectionProject />
                <SectionSlideNews />
            </div>
        </Layout>
    );
}
export default withTranslation()(HomePage);
