import React, { useState } from "react";

import SwiperCore, { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// import BigArrowLeft from "@images/smart-home-v3/svg/big-arrow-left.svg";
import BigArrowLeft from "../../images/smart-home-v3/svg/big-arrow-left.svg";

// import BigArrowRight from "@images/smart-home-v3/svg/big-arrow-right.svg";
import BigArrowRight from "../../images/smart-home-v3/svg/big-arrow-right.svg";

SwiperCore.use([Navigation]);

const ProductItemSwiper = ({ slide }) => {
  const [swiper, setSwiper] = useState(null);
  const [swiperIndex, setSwiperIndex] = useState(0);
  return (
    <div className="product-left-content">
      {slide?.listItem && slide?.listItem.length > 0 && (
        <Swiper
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          className="banner-products-slider"
          slidesPerView={1}
          onSwiper={(s) => {
            setSwiper(s);
          }}
          onSlideChange={(s) => {
            setSwiperIndex(s.realIndex);
          }}
        >
          {slide?.listItem.map((slideItem) => (
            <>
              <SwiperSlide key={slideItem.id}>
                <img className="swiper-image" src={slideItem.img} alt="" />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      )}
      {slide?.titles && slide?.titles.length > 0 && (
        <div className="banner-products-btn-group">
          {slide?.titles.map((btnItem) => {
            return (
              <div
                className={`${
                  swiperIndex === btnItem.id
                    ? "products-btn-item active"
                    : "products-btn-item"
                } `}
                onClick={() => {
                  swiper.slideTo(btnItem.id);
                }}
              >
                <span className="product-item-title">{btnItem.title}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const SectionProductsSlider = ({ listSlide }) => {
  const [toggleState, setToggleState] = useState(0);

  const increaseToggleTab = () => {
    setToggleState((prev) => (prev === listSlide.length - 1 ? prev : prev + 1));
  };

  const decreaseToggleTab = () => {
    setToggleState((prev) => (prev === 0 ? prev : prev - 1));
  };

  return (
    <section className="section-product-slider">
      <div className="smart-home-bg-left">
        <div
          className="btn-big-arrow-left"
          onClick={() => {
            decreaseToggleTab();
          }}
        >
          <img src={BigArrowLeft} alt=""></img>
        </div>
        <div
          className="btn-big-arrow-right-mobie"
          onClick={() => {
            increaseToggleTab();
          }}
        >
          <img src={BigArrowLeft} alt=""></img>
        </div>
      </div>
      <div className="smart-home-bg-right">
        <div
          className="btn-big-arrow-right"
          onClick={() => increaseToggleTab()}
        >
          <img src={BigArrowRight} alt=""></img>
        </div>
      </div>
      <div className="products-slider">
        {listSlide.map((slide) => (
          <div
            className={
              toggleState === slide.id
                ? "product-slide-wrapper product-slide-wrapper-active"
                : "product-slide-wrapper"
            }
            key={slide.id}
          >
            <div className="left-content-container animate fadeUp">
              {!slide.phoneImg && slide?.downloadObjects?.length === 0 && (
                <ProductItemSwiper slide={slide} />
              )}
              {slide?.phoneImg && (
                <div className="product-phone-wrapper">
                  <img src={slide.phoneImg.img} alt=""></img>
                  {slide?.downloadObjects?.length > 0 && (
                    <div className="download-apps-container">
                      {slide?.downloadObjects.map((object) => (
                        <div className="download-app-item">
                          <img
                            src={object.img}
                            alt=""
                            className="download-app-img"
                          ></img>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="right-content-container animate fadeUp">
              <div className="product-right-content">
                <h4 className="product-right-subtitle">{slide.subTitle}</h4>
                <h1 className="product-right-title">{slide.title}</h1>
                <div className="product-right-divider"></div>
                <div className="product-right-all-contents">
                  {slide?.contents &&
                    slide?.contents.map((content) => (
                      <p className="product-right-desc-container">
                        <span className="product-right-main-title">
                          {content.title}
                        </span>
                        {content.desc}
                      </p>
                    ))}
                </div>
                <div className="btn-group">
                  <button className="advise-now-btn">
                    <span>Tư vấn ngay</span>
                  </button>
                  <button type="button" className="learn-more-btn">
                    <span>Tìm hiểu thêm</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default SectionProductsSlider;
