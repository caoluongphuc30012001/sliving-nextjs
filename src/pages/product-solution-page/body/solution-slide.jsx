import React from "react";
import CarSlideVertical from "@components/card/card-slide-vertical/card-slide-vertical";
const SolutionSlide = (props) => {
  return (<div className="container-wrap"><CarSlideVertical infinite={false} rows={1} data={props.dataSlide} isArrow={true} title={'Gợi ý giải pháp giành cho bạn'} /></div>);

}
export default SolutionSlide;
