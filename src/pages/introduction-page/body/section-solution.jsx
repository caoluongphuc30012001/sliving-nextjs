import React from 'react';
import CardSlideVertical from "@components/card/card-slide-vertical/card-slide-vertical";
import DataHomePage from "@query/home-page";
import { useTranslation } from 'react-i18next';
const SectionSolution = () => {
    const { t } = useTranslation();
    const data = DataHomePage();
    const post = data.dataSectionSlides.edges.slice(0, 10);
    return (
        <div className="section-introduction__solution">
            <div className="introduction__solution-wrap container-wrap">
                <CardSlideVertical id={1} infinite={true} rows={1} data={post} title={t(`Solution_Suggestions`)} isArrow={true} />
            </div>
        </div>
    );
}
export default SectionSolution;
