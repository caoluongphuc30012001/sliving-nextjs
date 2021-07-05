import React from 'react';
import SectionHorizontalSlide from "@components/section/section-horizontal-slide/section-horizontal-slide";
import { useTranslation } from 'react-i18next';
import DataHomePage from "@query/home-page";
const SectionIntroductLast = () => {
    const { t } = useTranslation();
    const data = DataHomePage();
    return (
        <div className="container-wrap section-outstanding">
            <SectionHorizontalSlide data={data.dataSectionProject.edges} title={t(`Outstanding_Project`)} />
        </div>
    )
}
export default SectionIntroductLast;
