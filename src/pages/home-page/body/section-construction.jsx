import React from "react";
import Slider from "react-slick";
import home from "@images/home-page/body-2/home.svg";
import apartment from "@images/home-page/body-2/apartment.svg";
import hospital from "@images/home-page/body-2/hospital.svg";
import supermarket from "@images/home-page/body-2/supermarket.svg";
import PrevArrow from "@components/button/button-prev-arrow";
import NextArrow from "@components/button/button-next-arrow";
import ButtonContent from "@components/button/button-content";
import { useTranslation } from 'react-i18next';
const SectionConstruction = () => {
    const { t } = useTranslation();
    const settings = {
        dots: false,
        infinite: true,
        loop: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    infinite: true,

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
    return <div className="card-slide container-wrap">
        <div className="title card-slide-title ">
            <span className="section-title fs-32 fw-bold">
                {t(`select-contrucstion`)}
            </span>
        </div>
        <div className="select-ct">
            <ButtonContent boder={'2px solid #F47403'} background={'#ffffff'} color={'#5C5C5C'} title={t(`${'civil-works'}`)} isCnt={true} />
            <ButtonContent boder={'2px solid #F47403'} background={'#ffffff'} color={'#5C5C5C'} title={t(`${'commercial-construction'}`)} isCnt={true} />
        </div>
        <div className="slide-prods">
            <Slider {...settings}>
                <div className="slide-prod">
                    <div className="slide-prod-wrap">
                        <img src={apartment} alt="" />
                        <div className="prod-wrap-title fs-16"><span>{t(`Building`)}</span></div>
                    </div>
                </div>
                <div className="slide-prod">
                    <div className="slide-prod-wrap">
                        <img src={hospital} alt="" />
                        <div className="prod-wrap-title fs-16"><span>{t(`Hospital`)}</span></div>
                    </div>
                </div>
                <div className="slide-prod">
                    <div className="slide-prod-wrap">
                        <img src={supermarket} alt="" />
                        <div className="prod-wrap-title fs-16"><span>{t(`Supermarket`)}</span></div>
                    </div>
                </div>
                <div className="slide-prod">
                    <div className="slide-prod-wrap">
                        <img src={home} alt="" />
                        <div className="prod-wrap-title fs-16"><span>Sub-title Explaining</span></div>
                    </div>
                </div>
                <div className="slide-prod">
                    <div className="slide-prod-wrap">
                        <img src={home} alt="" />
                        <div className="prod-wrap-title fs-16"><span>Sub-title Explaining</span></div>
                    </div>
                </div>
                <div className="slide-prod">
                    <div className="slide-prod-wrap">
                        <img src={home} alt="" />
                        <div className="prod-wrap-title fs-16"><span>Sub-title Explaining</span></div>
                    </div>
                </div>
                <div className="slide-prod">
                    <div className="slide-prod-wrap">
                        <img src={home} alt="" />
                        <div className="prod-wrap-title fs-16"><span>Sub-title Explaining</span></div>
                    </div>
                </div>
                <div className="slide-prod">
                    <div className="slide-prod-wrap">
                        <img src={home} alt="" />
                        <div className="prod-wrap-title fs-16"><span>Sub-title Explaining</span></div>
                    </div>
                </div>
                <div className="slide-prod">
                    <div className="slide-prod-wrap">
                        <img src={home} alt="" />
                        <div className="prod-wrap-title fs-16"><span>Sub-title Explaining</span></div>
                    </div>
                </div>
                <div className="slide-prod">
                    <div className="slide-prod-wrap">
                        <img src={home} alt="" />
                        <div className="prod-wrap-title fs-16"><span>Sub-title Explaining</span></div>
                    </div>
                </div>
            </Slider>
        </div>
    </div>
}
export default SectionConstruction;
