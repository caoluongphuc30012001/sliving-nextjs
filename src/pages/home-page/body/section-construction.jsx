import React from "react";
import Slider from "react-slick";
import PrevArrow from "@components/button/button-prev-arrow";
import NextArrow from "@components/button/button-next-arrow";
import ButtonContent from "@components/button/button-content";
import { useTranslation } from 'react-i18next';
import apartment from "@images/home-page/body-2/SLIVING_Icons_v1.0_aprtment.svg";
import villa from "@images/home-page/body-2/SLIVING_Icons_v1.0_villa.svg";
import Cinema from "@images/home-page/body-2/SLIVING_Icons_v1.0_Cinema.svg";
import hospital from "@images/home-page/body-2/SLIVING_Icons_v1.0_hospital.svg";
import Office from "@images/home-page/body-2/SLIVING_Icons_v1.0_Office.svg";
import restaurant from "@images/home-page/body-2/SLIVING_Icons_v1.0_restaurant.svg";
import school from "@images/home-page/body-2/SLIVING_Icons_v1.0_school.svg";
import store from "@images/home-page/body-2/SLIVING_Icons_v1.0_store.svg";
import townhouse from "@images/home-page/body-2/SLIVING_Icons_v1.0_townhouse.svg";
import factory from "@images/home-page/body-2/SLIVING_Icons_v1.0_factory.svg";
const SectionConstruction = () => {
    const { t } = useTranslation();
    const settings = {
        dots: false,
        infinite: true,
        loop: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: false

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    const arrImg = [
        {
            imgURl: villa, id: 0, title: "construction.villa"
        },
        {
            imgURl: Cinema, id: 1, title: "construction.cinema"
        },
        {
            imgURl: hospital, id: 2, title: "construction.hospital"
        },
        {
            imgURl: Office, id: 3, title: "construction.Office"
        },
        {
            imgURl: restaurant, id: 4, title: "construction.restaurant"
        },
        {
            imgURl: school, id: 5, title: "construction.school"
        },
        {
            imgURl: store, id: 6, title: "construction.store"
        },
        {
            imgURl: townhouse, id: 7, title: "construction.townhouse"
        },
        {
            imgURl: factory, id: 8, title: "construction.factory"
        },
        {
            imgURl: apartment, id: 9, title: "construction.apartment"
        },
    ]
    return <div className="card-slide container-wrap">
        <div className="title card-slide-title ">
            <span className="section-title fs-32 fw-bold">
                {t(`select_contrucstion`)}
            </span>
        </div>
        <div className="select-ct">
            <ButtonContent border={'2px solid #F47403'} background={'#ffffff'} color={'#5C5C5C'} title={t(`${'civil_works'}`)} isCnt={true} />
            <ButtonContent border={'2px solid #F47403'} background={'#ffffff'} color={'#5C5C5C'} title={t(`${'commercial_construction'}`)} isCnt={true} />
        </div>
        <div className="slide-prods">
            <Slider {...settings}>
                {arrImg && (arrImg.map((img) => {
                    return (<div className="slide-prod" key={img.id}>
                        <div className="slide-prod-wrap">
                            <img src={img.imgURl} alt="" />
                            <div className="prod-wrap-title fs-16"><span>{t(`${img.title}`)}</span></div>
                        </div>
                    </div>)
                }))}
            </Slider>
        </div>
    </div>
}
export default SectionConstruction;
