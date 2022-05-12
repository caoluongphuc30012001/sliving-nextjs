import React,{useState} from 'react';
import arrowLeft from "../../images/smart-home-v3/svg/arrow-left.svg";
import arrowRight from "../../images/smart-home-v3/svg/arrow-right.svg";
import  { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
const SectionPopularProduct = ({ listProduct }) => {
    const [current, setCurrent] = useState(1);
    return (
        <section
            className='section-popular-product-v3'
        >
            <div className="popular-product-container">
                <div className="title-box">
                    <p className="sub-title">FEATURED PRODUCTS</p>
                    <p className="title">Sản Phẩm Nổi Bật</p>
                    <div className="item-border"></div>
                </div>
                <div className="content-container">
                    <div className="swiper-container-v3">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            centeredSlides={true}
                            grabCursor={true}
                            loop={true}            
                            navigation={{
                                nextEl: ".button-next-slider",
                                prevEl: ".button-prev-slider",
                            }}
                                modules={[Pagination, Navigation]}
                                onSlideChange={(swiper) => {
                                    setCurrent(swiper.activeIndex % listProduct.length + 1);
                            }}
                            className="container-cover"
                        >
                            {listProduct.map((item) => {
                                return (
                                    <SwiperSlide key={item.id} className="list-product">
                                        <div className="item-box">
                                            <div className="img-box">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="description-box">
                                                <p className="sub-title">{item.description}</p>
                                                <p className="title">{item.title}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                    <div className="nav-swiper-box">
                        <img src={arrowLeft} alt="" className="button-prev-slider" />
                        <p className="page-current">{`${current}/${listProduct.length}`}</p>
                        <img src={arrowRight} alt="" className="button-next-slider" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionPopularProduct;