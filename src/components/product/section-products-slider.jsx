import { Link } from "gatsby";
import React, { useState } from "react";

import SwiperCore, { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// import BigArrowLeft from "@images/smart-home-v3/svg/big-arrow-left.svg";
import BigArrowLeft from "../../images/smart-home-v3/svg/big-arrow-left.svg";

// import BigArrowRight from "@images/smart-home-v3/svg/big-arrow-right.svg";
import BigArrowRight from "../../images/smart-home-v3/svg/big-arrow-right.svg";
import ModalAdvise from "@components/modal/modal-advise/ModalAdvise";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

SwiperCore.use([Navigation]);

const ProductItemSwiper = ({
  slide,
  swiperIndex,
  setSwiperIndex,
  resetSwiper,
  setResetSwiper,
}) => {
  const [swiper, setSwiper] = useState(null);

  const { i18n } = useTranslation();
  const checkVn = i18n.language.toUpperCase() === "VN" ? true : false;
  useEffect(() => {
    if (resetSwiper) {
      swiper.slideTo(0);
      setResetSwiper(false);
    }
  }, [resetSwiper]);

  return (
    <>
      <div className="swiper__container">
        {slide?.listItem && slide?.listItem.length > 0 && (
          <Swiper
            className="swiper"
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            slidesPerView={1}
            onSwiper={(s) => {
              setSwiper(s);
            }}
            onSlideChange={(s) => {
              setSwiperIndex(s.realIndex);
            }}
          >
            {slide?.listItem.map((slideItem) => (
              <SwiperSlide className="swiper__slide" key={slideItem.id}>
                <img className="slide__img" src={slideItem.imageURL} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      {slide?.listItem && slide?.listItem.length > 1 && (
        <div className="banner-products-btn-group">
          {slide?.listItem.map((btnItem, index) => {
            return (
              <div
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
                className={`${
                  swiperIndex === index
                    ? "products-btn-item active"
                    : "products-btn-item"
                } `}
                onClick={() => {
                  swiper.slideTo(index);
                }}
              >
                <span className="product-item-title">
                  {checkVn ? btnItem.nameVi : btnItem.nameEn}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

const SectionProductsSlider = ({ listSlide }) => {
  const [toggleState, setToggleState] = useState(0);
  const [productName, setProductName] = useState("");
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [resetSwiper, setResetSwiper] = useState(false);

  const { i18n, t } = useTranslation();
  const checkVn = i18n.language.toUpperCase() === "VN" ? true : false;
  const increaseToggleTab = () => {
    setSwiperIndex(0);
    setResetSwiper(true);
    setToggleState(
      toggleState < listSlide.length - 1 ? toggleState + 1 : toggleState
    );
  };

  const decreaseToggleTab = () => {
    setSwiperIndex(0);
    setResetSwiper(true);
    setToggleState((prev) => (prev === 0 ? prev : prev - 1));
  };
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <section className="section-product-slider">
      <div className="products-slider">
        <div
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
          className="btn-big__arrow__left"
          onClick={() => {
            decreaseToggleTab();
          }}
        >
          <img src={BigArrowLeft} alt=""></img>
        </div>
        <div
          role="button"
          tabIndex={0}
          className="btn-big__arrow__right__mobie"
          onClick={() => {
            increaseToggleTab();
          }}
        >
          <img src={BigArrowLeft} alt=""></img>
        </div>
        <div
          className="btn-big__arrow__right"
          onClick={() => increaseToggleTab()}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          <img src={BigArrowRight} alt=""></img>
        </div>
        {listSlide.map((slide, index) => {
          return (
            <div className={index === toggleState ? "slider active" : "slider"}>
              <div className="slider-left__content">
                {!slide?.phoneImg ? (
                  <ProductItemSwiper
                    setSwiperIndex={setSwiperIndex}
                    swiperIndex={swiperIndex}
                    slide={slide}
                    resetSwiper={resetSwiper}
                    setResetSwiper={setResetSwiper}
                  />
                ) : (
                  <div className="product-phone-wrapper">
                    <img src={slide.phoneImg.img} alt=""></img>
                    {slide?.downloadObjects?.length > 0 && (
                      <div className="download-apps-container">
                        {slide?.downloadObjects.map((object) => (
                          <a href={object.link}>
                            <div className="download-app-item">
                              <img
                                src={object.img}
                                alt=""
                                className="download-app-img"
                              ></img>
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="slider-right__content">
                <div className="right-content-container">
                  <div className="content-container">
                    <div className="product-right-content">
                      <h4 className="product-right-subtitle">
                        {slide.subTitle.toUpperCase()}
                      </h4>
                      <h1 className="product-right-title">
                        {checkVn ? slide.titleVi : slide.titleEn}
                      </h1>
                      <div className="product-right-divider"></div>
                      <ul className="product-right-all-contents">
                        {checkVn &&
                          slide?.contentVis &&
                          slide?.contentVis.map((content) =>
                            content.split(":").length > 1 ? (
                              <li
                                className={`product-right-desc-container ${
                                  slide?.contentVis.length > 1 &&
                                  "adding-desc-dot-style"
                                }`}
                              >
                                <span className="product-right-main-title">
                                  {`${content.split(":")[0]}: `}
                                </span>
                                {content.split(":")[1]}
                              </li>
                            ) : (
                              <li
                                className={`product-right-desc-container ${
                                  slide?.contentVis.length > 1 &&
                                  "adding-desc-dot-style"
                                }`}
                              >
                                {content.split(":")[0]}
                              </li>
                            )
                          )}
                        {!checkVn &&
                          slide?.contentEns &&
                          slide?.contentEns.map((content) =>
                            content.split(":").length > 1 ? (
                              <li className="product-right-desc-container">
                                <span className="product-right-main-title">
                                  {`${content.split(":")[0]}: `}
                                </span>
                                {content.split(":")[1]}
                              </li>
                            ) : (
                              <li className="product-right-desc-container">
                                {content.split(":")[0]}
                              </li>
                            )
                          )}
                      </ul>
                      <div className="btn-group">
                        <button
                          className="advise-now-btn"
                          onClick={() => {
                            setProductName(slide.title);
                            setModalShow(true);
                          }}
                        >
                          <span>{t("sectionDropdown.consultNow")}</span>
                        </button>
                        <Link
                          to={
                            slide?.listItem.length > 0
                              ? `/product-detail/${slide?.listItem[swiperIndex]?.id}`
                              : `/smart-home`
                          }
                        >
                          <button type="button" className="learn-more-btn">
                            <span>{t("sectionDropdown.learnMore")}</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="smart__home__bg-left"></div>
      <div className="smart__home__bg-right"></div>
      <ModalAdvise
        productName={productName}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </section>
  );
};
export default SectionProductsSlider;
