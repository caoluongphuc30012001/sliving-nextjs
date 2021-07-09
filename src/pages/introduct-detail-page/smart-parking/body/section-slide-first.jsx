import React from 'react';
import CardSlideVertical from "@components/card/card-slide-vertical/card-slide-vertical";
import DataHomePage from "@query/home-page";
import { useTranslation } from 'react-i18next';
const SectionSlidesProduct = ({ title }) => {
    const data = DataHomePage();
    const post = data.dataSectionSlides.edges.slice(0, 10);
    const {t} = useTranslation();
    return (
        <article>
            <section className="solution-slides-product container-wrap">
                <div className="product-title txt-blue fw-bold">
                    <h4> {t(`Smart-parking-product`)}</h4>
                </div>
                <div className="slides-product__title fw-bold">
                    <span>{title}</span>
                </div>
                <div className="slides-product__content">
                    <CardSlideVertical infinite={true} rows={1} data={post} isArrow={true} />
                </div>
            </section>
        </article>
    );
}
export default SectionSlidesProduct;
