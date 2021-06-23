import React from "react";
import CardSlideVertical from "@components/card/card-slide-vertical/card-slide-vertical";
import { useTranslation } from 'react-i18next';
const ProductSlide = () => {
    const { t } = useTranslation();
    return (<div className="container-wrap" > <CardSlideVertical isShow={true} infinite={false} rows={4} title={t(`Sliving_IOT_Products`)} isMenu={true} isArrow={false} dots={true} /></div >);
}
export default ProductSlide;
