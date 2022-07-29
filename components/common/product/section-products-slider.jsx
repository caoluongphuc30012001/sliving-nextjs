import Link from 'next/link'
import React, { useState } from 'react'

import SwiperCore, { Navigation } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// import BigArrowLeft from "@images/smart-home-v3/svg/big-arrow-left.svg";
import BigArrowLeft from '@images/smart-home-v3/svg/big-arrow-left.svg'

// import BigArrowRight from "@images/smart-home-v3/svg/big-arrow-right.svg";
import BigArrowRight from '@images/smart-home-v3/svg/big-arrow-right.svg'
import ModalAdvise from '@components/common/modal/ModalAdvise/ModalAdvise'
import { useTranslation } from 'next-i18next'
import { useEffect } from 'react'

import style from './style.module.scss'
SwiperCore.use([Navigation])

const ProductItemSwiper = ({ slide, swiperIndex, setSwiperIndex, resetSwiper, setResetSwiper }) => {
  const [swiper, setSwiper] = useState(null)

  const { i18n } = useTranslation()
  // const checkVn = i18n.language.toUpperCase() === "VN" ? true : false;
  const checkVn = true
  useEffect(() => {
    if (resetSwiper) {
      swiper.slideTo(0)
      setResetSwiper(false)
    }
  }, [resetSwiper])

  return (
    <>
      <div className={style["swiper__container"]}>
        {slide?.listItem && slide?.listItem.length > 0 && (
          <Swiper
            className={style["swiper"]}
            navigation={{
              prevEl: '.prev',
              nextEl: '.next',
            }}
            slidesPerView={1}
            onSwiper={(s) => {
              setSwiper(s)
            }}
            onSlideChange={(s) => {
              setSwiperIndex(s.realIndex)
            }}
          >
            {slide?.listItem.map((slideItem) => (
              <SwiperSlide className={style["swiper__slide"]} key={slideItem.id}>
                <img className={style["slide__img"]} src={slideItem.imageURL.src} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      {slide?.listItem && slide?.listItem.length > 1 && (
        <div className={style["banner-products-btn-group"]}>
          {slide?.listItem.map((btnItem, index) => {
            const id = index + 1
            return (
              <div
                key={id}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
                className={`${
                  swiperIndex === index ? 'products-btn-item active' : 'products-btn-item'
                } `}
                onClick={() => {
                  swiper.slideTo(index)
                }}
              >
                <span className={style["product-item-title"]}>
                  {checkVn ? btnItem.nameVi : btnItem.nameEn}
                </span>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

const SectionProductsSlider = ({ listSlide }) => {
  const [toggleState, setToggleState] = useState(0)
  const [productName, setProductName] = useState('')
  const [swiperIndex, setSwiperIndex] = useState(0)
  const [resetSwiper, setResetSwiper] = useState(false)

  const { t } = useTranslation('smartLighting')
  // const checkVn = i18n.language.toUpperCase() === "VN" ? true : false;
  const checkVn = true
  const increaseToggleTab = () => {
    setSwiperIndex(0)
    setResetSwiper(true)
    setToggleState(toggleState < listSlide.length - 1 ? toggleState + 1 : toggleState)
  }

  const decreaseToggleTab = () => {
    setSwiperIndex(0)
    setResetSwiper(true)
    setToggleState((prev) => (prev === 0 ? prev : prev - 1))
  }
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <section className={style["section-product-slider"]}>
      <div className={style["products-slider"]}>
        <div
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
          className={style["btn-big__arrow__left"]}
          onClick={() => {
            decreaseToggleTab()
          }}
        >
          <img src={BigArrowLeft.src} alt=""/>
        </div>
        <div
          role="button"
          tabIndex={0}
          className={style["btn-big__arrow__right__mobie"]}
          onClick={() => {
            increaseToggleTab()
          }}
        >
          <img src={BigArrowLeft.src} alt=""/>
        </div>
        <div
          className={style["btn-big__arrow__right"]}
          onClick={() => increaseToggleTab()}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          <img src={BigArrowRight.src} alt=""/>
        </div>
        {listSlide.map((slide, index) => {
          return (
            <div className={index === toggleState ? 'slider active' : 'slider'} key={slide.id}>
              <div className={style["slider-left__content"]}>
                {!slide?.phoneImg ? (
                  <ProductItemSwiper
                    setSwiperIndex={setSwiperIndex}
                    swiperIndex={swiperIndex}
                    slide={slide}
                    resetSwiper={resetSwiper}
                    setResetSwiper={setResetSwiper}
                  />
                ) : (
                  <div className={style["product-phone-wrapper"]}>
                    <img src={slide.phoneImg.img.src} alt=""></img>
                    {slide?.downloadObjects?.length > 0 && (
                      <div className={style["download-apps-container"]}>
                        {slide?.downloadObjects.map((object) => (
                          <a href={object.link} key={object.id}>
                            <div className={style["download-app-item"]}>
                              <img src={object.img} alt="" className={style["download-app-img"]}></img>
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className={style["slider-right__content"]}>
                <div className={style["right-content-container"]}>
                  <div className={style["content-container"]}>
                    <div className={style["product-right-content"]}>
                      <h4 className={style["product-right-subtitle"]}>{slide.subTitle.toUpperCase()}</h4>
                      <h1 className={style["product-right-title"]}>
                        {checkVn ? slide.titleVi : slide.titleEn}
                      </h1>
                      <div className={style["product-right-divider"]}></div>
                      <ul className={style["product-right-all-contents"]}>
                        {checkVn &&
                          slide?.contentVis &&
                          slide?.contentVis.map((content) =>
                            content.split(':').length > 1 ? (
                              <li className={style["product-right-desc-container"]}>
                                <span className={style["product-right-main-title"]}>
                                  {`${content.split(':')[0]}: `}
                                </span>
                                {content.split(':')[1]}
                              </li>
                            ) : (
                              <li className={style["product-right-desc-container"]}>
                                {content.split(':')[0]}
                              </li>
                            ),
                          )}
                        {!checkVn &&
                          slide?.contentEns &&
                          slide?.contentEns.map((content) =>
                            content.split(':').length > 1 ? (
                              <li className={style["product-right-desc-container"]}>
                                <span className={style["product-right-main-title"]}>
                                  {`${content.split(':')[0]}: `}
                                </span>
                                {content.split(':')[1]}
                              </li>
                            ) : (
                              <li className={style["product-right-desc-container"]}>
                                {content.split(':')[0]}
                              </li>
                            ),
                          )}
                      </ul>
                      <div className={style["btn-group"]}>
                        <button
                          className={style["advise-now-btn"]}
                          onClick={() => {
                            setProductName(slide.title)
                            setModalShow(true)
                          }}
                        >
                          <span>{t('sectionDropdown.consultNow')}</span>
                        </button>
                        <Link
                          href={
                            slide?.listItem.length > 0
                              ? `/product-detail/${slide?.listItem[swiperIndex]?.id}`
                              : `/smart-home`
                          }
                        >
                          <button type="button" className={style["learn-more-btn"]}>
                            <span>{t('sectionDropdown.learnMore')}</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className={style["smart__home__bg-left"]}></div>
      <div className={style["smart__home__bg-right"]}></div>
      <ModalAdvise productName={productName} show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  )
}
export default SectionProductsSlider
