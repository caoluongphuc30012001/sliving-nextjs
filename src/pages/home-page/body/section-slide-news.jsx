import React from "react";
import Image1 from "@images/news-page/news-v1.svg";
import Image2 from "@images/news-page/news-v2.svg";
import Image3 from "@images/news-page/news-v3.svg";
import Slider from "react-slick";
import CardTitleHeader from "@components/card/card-title-header";
import PrevArrow from "@components/button/button-prev-arrow";
import NextArrow from "@components/button/button-next-arrow";
const SectionSlideNews = () => {
    const settings = {
        dots: false,
        infinite: false,
        loop: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <div className="news-slide">
            <div className="container-wrap news-slide-wrap">
                <CardTitleHeader title={"Tin Tức"} />
                <div className="slide-wrap">
                    <Slider {...settings}>
                        <div className="news-wrap">
                            <div className="news-wrap-item">
                                <div className="news-wrap-img">
                                    <img src={Image1} alt="image1" />
                                </div>
                                <div className="news-wrap-description">
                                    <div className="description_content">The powerful system hardware integrates the functions of different devices. Convenient operation and excellent interaction make the home life experience more natural and and comfortable.</div>
                                </div>
                            </div>
                        </div>
                        <div className="news-wrap">
                            <div className="news-wrap-item">
                                <div className="news-wrap-img">
                                    <img src={Image2} alt="image1" />
                                </div>
                                <div className="news-wrap-description">
                                    <div className="description_content">The powerful system hardware integrates the functions of different devices. Convenient operation and excellent interaction make the home life experience more natural and and comfortable.</div>
                                </div>
                            </div>
                        </div>
                        <div className="news-wrap">
                            <div className="news-wrap-item">
                                <div className="news-wrap-img">
                                    <img src={Image3} alt="image1" />
                                </div>
                                <div className="news-wrap-description">
                                    <div className="description_content">The powerful system hardware integrates the functions of different devices. Convenient operation and excellent interaction make the home life experience more natural and and comfortable.</div>
                                </div>
                            </div>
                        </div>
                        <div className="news-wrap">
                            <div className="news-wrap-item">
                                <div className="news-wrap-img">
                                    <img src={Image3} alt="image1" />
                                </div>
                                <div className="news-wrap-description">
                                    <div className="description_content">The powerful system hardware integrates the functions of different devices. Convenient operation and excellent interaction make the home life experience more natural and and comfortable.</div>
                                </div>
                            </div>
                        </div>
                        <div className="news-wrap">
                            <div className="news-wrap-item">
                                <div className="news-wrap-img">
                                    <img src={Image3} alt="image1" />
                                </div>
                                <div className="news-wrap-description">
                                    <div className="description_content">The powerful system hardware integrates the functions of different devices. Convenient operation and excellent interaction make the home life experience more natural and and comfortable.</div>
                                </div>
                            </div>
                        </div>
                        <div className="news-wrap">
                            <div className="news-wrap-item">
                                <div className="news-wrap-img">
                                    <img src={Image3} alt="image1" />
                                </div>
                                <div className="news-wrap-description">
                                    <div className="description_content">The powerful system hardware integrates the functions of different devices. Convenient operation and excellent interaction make the home life experience more natural and and comfortable.</div>
                                </div>
                            </div>
                        </div>
                        <div className="news-wrap">
                            <div className="news-wrap-item">
                                <div className="news-wrap-img">
                                    <img src={Image3} alt="image1" />
                                </div>
                                <div className="news-wrap-description">
                                    <div className="description_content">The powerful system hardware integrates the functions of different devices. Convenient operation and excellent interaction make the home life experience more natural and and comfortable.</div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}
export default SectionSlideNews;
