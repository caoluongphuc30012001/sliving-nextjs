import React from 'react';
import Slider from "react-slick";
import rectangle1 from "@images/introduction-page/smart-energy/slide-1.svg";
import rectangle2 from "@images/introduction-page/smart-energy/slide-2.svg";
import rectangle3 from "@images/introduction-page/smart-energy/slide-3.svg";
import PrevArrow from "@components/button/button-prev-arrow";
import NextArrow from "@components/button/button-next-arrow";
import { useTranslation } from 'react-i18next';
const IntroductSlides = () => {
    const { t } = useTranslation();
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
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
                    {/* <div className="chill__body-right">
                        <div className="btn-slides_chill">
                            <img src={vector} alt="icon vector" />
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
    return (
        <article>
            <section className="section-slides container-wrap" id="section-introducts-slide">
                <div className="section-slides__title txt-blue fw-bold">
                    <h3>SLIVING - {t(`Smart-security-solution`)}</h3>
                </div>
                <div className="section-slides__slide">
                    <div>
                        <Slider {...settings}>
                            <SlideChill title={t(`smart-energy`)} subtitle={"Solution content"} imgUrl={rectangle1} />
                            <SlideChill title={t(`smart-energy`)} subtitle={"Solution content"} imgUrl={rectangle2} />
                            <SlideChill title={t(`smart-energy`)} subtitle={"Solution content"} imgUrl={rectangle3} />
                            <SlideChill title={t(`smart-energy`)} subtitle={"Solution content"} imgUrl={rectangle1} />
                        </Slider>
                    </div>
                </div>
            </section>
        </article>
    );
}
export default IntroductSlides;
