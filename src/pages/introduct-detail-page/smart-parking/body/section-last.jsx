import React from 'react';
import SectionHorizontalSlide from "@components/section/section-horizontal-slide/section-horizontal-slide";
import { useTranslation } from 'react-i18next';
import DataHomePage from "@query/home-page";
const SectionSolutionLast = () => {
    const { t } = useTranslation();
    const data = DataHomePage();
    return (
        <article>
            <section className="solution-section-project container-wrap">
            <SectionHorizontalSlide data={data.dataSectionProject.edges} title={t(`Outstanding_Project`)} />
            </section>
        </article>
    )
}
export default SectionSolutionLast;
