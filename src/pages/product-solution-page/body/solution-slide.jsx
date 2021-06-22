import React from "react";
import CarSlideVertical from "@components/card/card-slide-vertical/card-slide-vertical";
import { useTranslation } from 'react-i18next';
const SolutionSlide = (props) => {
  const { t } = useTranslation();
  return (<div className="container-wrap"><CarSlideVertical infinite={false} rows={1} data={props.dataSlide} isArrow={true} title={t(`Solution_Suggestions`)} /></div>);
}
export default SolutionSlide;
