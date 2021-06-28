import React from 'react';
import CardSlideVertical from "@components/card/card-slide-vertical/card-slide-vertical";
import DataHomePage from "@query/home-page";
const SectionSlidesProduct = ({ title }) => {
    const data = DataHomePage();
    const post = data.dataSectionSlides.edges.slice(0, 10);
    return (
        <article>
            <section className="solution-slides-product container-wrap">
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
