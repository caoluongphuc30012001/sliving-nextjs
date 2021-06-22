import React from 'react';
import CardSlideVertical from "@components/card/card-slide-vertical/card-slide-vertical";
import DataHomePage from "@query/home-page";
import { useTranslation } from 'react-i18next';
const SectionSlides = () => {
  const { t } = useTranslation();
  const data = DataHomePage();
  const post = data.dataSectionSlides.edges.slice(0, 10);
  return (
    <div className="section-slide">
      <div className="slide-solution-wrap">
        <CardSlideVertical id={1} infinite={true} rows={1} data={post} title={t(`Solution_Suggestions`)} isArrow={true} />
      </div>
      <div className="slide-product-wrap">
        <CardSlideVertical id={2} infinite={true} rows={1} data={post} title={t(`Sliving_IOT_Products`)} isMenu={true} isArrow={true} />
      </div>
    </div>
  );
}
export default SectionSlides;
