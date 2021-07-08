import React from 'react';
import SectionOutstanding from "@components/section/section-outstanding";
import { useTranslation } from 'react-i18next';
import DataHomePage from "@query/home-page";
const SectionSolutionLast = () => {
    const { t } = useTranslation();
    const data = DataHomePage();
    return (
        <article>
            <section className="solution-section-project container-wrap">
                <SectionOutstanding title={t(`Outstanding_Project`)} />
            </section>
        </article>
    )
}
export default SectionSolutionLast;
