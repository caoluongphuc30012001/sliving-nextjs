import React from 'react';
import Slider from "react-slick";
import vector from "@images/solution-page/body/Vector.svg";
import rectangle1 from "@images/introduction-page/smart-energy/slide-1.svg";
import rectangle2 from "@images/introduction-page/smart-energy/slide-2.svg";
import rectangle3 from "@images/introduction-page/smart-energy/slide-3.svg";
import PrevArrow from "@components/button/button-prev-arrow";
import NextArrow from "@components/button/button-next-arrow";
const IntroductSlides = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
    const SlideChill = ({ imgUrl, title, subtitle }) => {
        return (
            <div className="slides-chill" >
                <img src={imgUrl} alt="" className="slides-cill_img" />
                <div className="slides-chill__body d-flex al-center">
                    <div className="chill__body-left">
                        <div>{subtitle}</div>
                        <div className="fw-bold">{title}</div>
                    </div>
                    <div className="chill__body-right">
                        <div className="btn-slides_chill">
                            <img src={vector} alt="icon vector" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <article>
            <section className="section-slides container-wrap" id="section-introducts-slide">
                <div className="section-slides__title txt-blue fw-bold">
                    <h3>SLIVING - Giải pháp an ninh thông minh cho bạn</h3>
                </div>
                <div className="section-slides__slide">
                    <div>
                        <Slider {...settings}>
                            <SlideChill title={"SMART ENERGY"} subtitle={"Solution content"} imgUrl={rectangle1} />
                            <SlideChill title={"SMART ENERGY"} subtitle={"Solution content"} imgUrl={rectangle2} />
                            <SlideChill title={"CHUNG ENERGY"} subtitle={"Solution content"} imgUrl={rectangle3} />
                            <SlideChill title={"SMART ENERGY"} subtitle={"Solution content"} imgUrl={rectangle1} />
                        </Slider>
                    </div>
                </div>
            </section>
        </article>
    );
}
export default IntroductSlides;
