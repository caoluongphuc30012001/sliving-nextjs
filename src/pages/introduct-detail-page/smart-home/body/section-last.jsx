import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionOutstanding from "@components/section/section-outstanding";
import DataHomePage from "@query/home-page";
const SectionIntroductLast = () => {
    const { t } = useTranslation();
    const data = DataHomePage();
    return (
        <div className="container-wrap section-outstanding">
            <SectionOutstanding data={data.dataSectionProject.edges} title={t(`Outstanding_Project`)} />
        </div>
    )
}
export default SectionIntroductLast;
