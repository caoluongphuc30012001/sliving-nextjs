import React from 'react';
import CardSlideVertical from "@components/card/card-slide-vertical/card-slide-vertical";
import DataHomePage from "@query/home-page";
const SectionSlides = () => {
  const data = DataHomePage();
  const post = data.dataSectionSlides.edges.slice(0, 10);
  return (
    <div className="container-wrap">
      <div className="slide-solution-wrap">
        <CardSlideVertical infinite={true} rows={1} data={post} title={'Gợi ý giải pháp giành cho bạn'} isArrow={true} />
      </div>
      <div className="slide-product-wrap">
        <CardSlideVertical infinite={true} rows={1} data={post} title={'Sản phẩm Sliving IOT'} isMenu={true} isArrow={true} />
      </div>
    </div>
  );
}
export default SectionSlides;
