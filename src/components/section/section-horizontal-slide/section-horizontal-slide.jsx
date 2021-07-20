import React, { useState, useEffect } from 'react';
import CardTitleHeader from "../../card/card-title-header";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper/core';
import { useTranslation } from 'react-i18next';
// install Swiper modules
SwiperCore.use([Pagination]);
const SectionHorizontalSlide = (props) => {
    const { t } = useTranslation();
    const [post, setPost] = useState([]);
    useEffect(() => {
        setPost(props.data);
        post.forEach((item, index) => {
            item.isActive = index === 0 ? true : false;
        })
    }, [post, props.data]);
    return (
        <div className="section-horizontal-slide">
            <div className="container-wrap">
                <CardTitleHeader title={props.title} />
                <div className="horizontal-slide">
                    <Swiper spaceBetween={30} pagination={{
                        "clickable": true
                    }} loop={true} className="section-swiper">
                        {post && post.map(({ node }) => {
                            return (
                                <SwiperSlide key={node.frontmatter.id}>
                                    <div className="horizontal-slide-wrap">
                                        <div className="horizontal-slide__left">
                                            <img
                                                src={node.frontmatter.featuredImage.publicURL}
                                                alt={node.frontmatter.alt} />
                                        </div>
                                        <div className="horizontal-slide__right">
                                            {node.frontmatter && (
                                                <div className="horizontal-slide__group">
                                                    <div className="horizontal__group-wrap">
                                                        <div className="horizontal-slide__title fs-48 fw-bold swiper-no-swiping">
                                                            {/* <span>  {node.frontmatter.title}</span> */}
                                                            <span>{t(`name_of_construction_works`)}</span>
                                                        </div>
                                                        <div className="horizontal-slide__des swiper-no-swiping" >
                                                            <span className="fw-bold fs-16">{t(`PRODUCTS_BE_USED`)}</span>
                                                            <ul>
                                                                <li>
                                                                    <span>The powerful system</span>
                                                                </li>
                                                                <li>
                                                                    <span>The powerful system</span>
                                                                </li>
                                                                <li>
                                                                    <span>The powerful system</span>
                                                                </li>
                                                                <li>
                                                                    <span>The powerful system</span>
                                                                </li>
                                                                <li>
                                                                    <span>The powerful system</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="horizontal-slide__des">
                                                            <span className="fw-bold">{t(`USE_THE_SOLUTION`)}</span>
                                                            <div>
                                                                <span>The powerful system hardware integrates the functions of different devices. Convenient operation and excellent interaction make the home life experience more natural and comfortable.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>)}
                                        </div>
                                    </div>
                                </SwiperSlide>)
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
export default SectionHorizontalSlide;
