import React from "react";
import CardSlideVertical from "@components/card/card-slide-vertical/card-slide-vertical";
const ProductSlide = () => {
    return (<div className="container-wrap" > <CardSlideVertical infinite={false} rows={4} title={'Sản phẩm Sliving IoT'} isMenu={true} isArrow={false} dots={true} /></div >);
}
export default ProductSlide;
