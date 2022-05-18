import React, { useState } from "react";
import  { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const ContentLeft = ({ listProduct, current, setCurrent }) => {
    return (
        <div className="content-left">
            <div className="top-menu">
                {listProduct.map((item) => {
                    return (
                    <div
                        className={`item-box ${item.id === current ? "active" : ""}`}
                        key={item.id}
                        onClick={() => {
                        setCurrent(item.id);
                        }}
                    >
                        <div className="label">{item.title}</div>
                        <div className="item-border"></div>
                    </div>
                    );
                })}
            </div>
        </div>
    );
};
const ContentRight = ({ listProduct }) => {
    return (
        <div className="content-right">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                grabCursor={true}
                loop={true}
            >
            {
                listProduct.map((listProduct) => {
                    return listProduct.listProduct.map((item) => {
                        return (
                            <SwiperSlide key={item.id} className="list-product">
                                <div className="item-box">
                                <img src={item.image} alt="" />
                                <div className="description">{item.description}</div>
                                </div>
                            </SwiperSlide>
                        );
                    }
                )
            })}
            </Swiper>
        </div>
    );
};
const SectionProductMobile = ({listProduct}) => {
    const [current, setCurrent] = useState(0);
    return (
        <section className="section-product-v3-mobile ">
            <div className="product-container">
                <div className="title-box">
                    <div className="sub-title">SLIVING PRODUCTS</div>
                    <div className="title">Sản phẩm Sliving</div>
                    <div className="item-border"></div>
                </div>
                <div className="content">
                    <ContentLeft
                        listProduct={listProduct}
                        current={current}
                        setCurrent={setCurrent}
                    />
                    <ContentRight listProduct={listProduct[current].listProduct} />
                </div>
            </div>
        </section>
    );
};

export default SectionProductMobile;
