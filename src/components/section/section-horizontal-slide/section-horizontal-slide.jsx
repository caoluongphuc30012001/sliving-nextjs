import React, { useState, useEffect } from 'react';
import CardTitleHeader from "../../card/card-title-header";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, {
    Autoplay,
    Pagination
} from 'swiper/core';
// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);
const SectionHorizontalSlide = (props) => {
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
                    <Swiper spaceBetween={30} autoplay={{
                        "delay": 3000,
                        "disableOnInteraction": false,
                        "pauseOnMouseEnter": true
                    }} pagination={{
                        "clickable": true
                    }} loop={true} className="section-swiper">
                        {post && post.map(({ node }) => {
                            return (
                                <SwiperSlide key={node.frontmatter.id}>
                                    <div className="horizontal-slide-wrap">
                                        <div className="horizontal-slide__left">
                                            <img
                                                src={node.frontmatter.featuredImage.childImageSharp.fluid.src}
                                                alt={node.frontmatter.alt} />
                                        </div>
                                        <div className="horizontal-slide__right">
                                            {post && post.map(({ node }) => {
                                                return (node.frontmatter.isActive && (
                                                    <div key={node.frontmatter.id} className="horizontal-slide__group">
                                                        <div className="horizontal__group-wrap">
                                                            <div className="horizontal-slide__title fs-48 fw-bold swiper-no-swiping">
                                                                <span>  {node.frontmatter.title}</span>
                                                            </div>
                                                            <div className="horizontal-slide__des swiper-no-swiping" >
                                                                <span className="fw-bold fs-16">SẢN PHẨM ĐƯỢC SỬ DỤNG</span>
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
                                                                <span className="fw-bold">GIẢI PHÁP SỬ DỤNG</span>
                                                                <div>
                                                                    <span>The powerful system hardware integrates the functions of different devices. Convenient operation and excellent interaction make the home life experience more natural and comfortable.</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>))
                                            })}
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
