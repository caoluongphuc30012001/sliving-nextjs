import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import img from "@images/home-page/card-project-2.svg";
// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper/core';
// install Swiper modules
SwiperCore.use([Pagination]);
const ProdSlide = ({ slide }) => {
    return (
        <div className="prod-slide">
            <div className="prod-slide-wrap">
                <Swiper spaceBetween={30} pagination={{
                    "clickable": true
                }} loop={true} direction={'vertical'} className="swiper-prod" >
                    {
                        slide && slide.length > 0 ? (
                            slide.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <img className="prod-slide__img" src={item} alt="" />
                                    </SwiperSlide>
                                )
                            })
                        ) : (
                            <>
                                <SwiperSlide >
                                    <div className="swiper-prod-detail">
                                        <div className="prod-slide-wrap__left">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="prod-slide-wrap__right">
                                            <div className="prod-slide-group">
                                                <div className="prod-slide-title fs-48 fw-bold">
                                                    Work with Apple HomeKit
                                                </div>
                                                <div className="prod-slide-subtitle fs-24 fw-bold">
                                                    Work with Apple HomeKit
                                                </div>
                                                <div className="prod-slide-description fs-16 ">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <div className="swiper-prod-detail">
                                        <div className="prod-slide-wrap__left">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="prod-slide-wrap__right">
                                            <div className="prod-slide-group">
                                                <div className="prod-slide-title fs-48 fw-bold">
                                                    Work with Apple HomeKit
                                                </div>
                                                <div className="prod-slide-subtitle fs-24 fw-bold">
                                                    Work with Apple HomeKit
                                                </div>
                                                <div className="prod-slide-description fs-16 ">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <div className="swiper-prod-detail">
                                        <div className="prod-slide-wrap__left">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="prod-slide-wrap__right">
                                            <div className="prod-slide-group">
                                                <div className="prod-slide-title fs-48 fw-bold">
                                                    Work with Apple HomeKit
                                                </div>
                                                <div className="prod-slide-subtitle fs-24 fw-bold">
                                                    Work with Apple HomeKit
                                                </div>
                                                <div className="prod-slide-description fs-16 ">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <div className="swiper-prod-detail">
                                        <div className="prod-slide-wrap__left">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="prod-slide-wrap__right">
                                            <div className="prod-slide-group">
                                                <div className="prod-slide-title fs-48 fw-bold">
                                                    Work with Apple HomeKit
                                                </div>
                                                <div className="prod-slide-subtitle fs-24 fw-bold">
                                                    Work with Apple HomeKit
                                                </div>
                                                <div className="prod-slide-description fs-16 ">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
}
export default ProdSlide;
