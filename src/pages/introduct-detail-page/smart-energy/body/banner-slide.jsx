import React from 'react';
import imgSlide from "@images/introduction-page/smart-home/banner.svg";
import { Carousel } from "react-bootstrap";
const BannerSlide = () => {
    return (
        <div className="section-introduction__slide">
            <div className="section-introduction__slide-wrap">
                <Carousel>
                    <Carousel.Item>
                        <div className="slide-img">
                            <img src={imgSlide} alt="" />
                        </div >
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="slide-img">
                            <img src={imgSlide} alt="" />
                        </div >
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="slide-img">
                            <img src={imgSlide} alt="" />
                        </div >
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="slide-img">
                            <img src={imgSlide} alt="" />
                        </div >
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}
export default BannerSlide;