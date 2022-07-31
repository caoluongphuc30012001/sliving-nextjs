import React from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import 'swiper/css/navigation';
import { Pagination, Navigation, EffectCoverflow } from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css';
import imgSmartFactory from '@images/about-us-v3/png/smart-factory.png';
import iconLicense from '@images/about-us-v3/svg/icon-license.svg';
import iconHover from '@images/about-us-v3/svg/icon-hover.svg';
import iconPCCC from '@images/about-us-v3/svg/icon-pccc.svg';
import iconSmartFactory from '@images/about-us-v3/svg/icon-smart-factory.svg';
import slideSmartFactory1 from '@images/about-us-v3/png/1.png';
import slideSmartFactory2 from '@images/about-us-v3/png/2.png';
import slideSmartFactory3 from '@images/about-us-v3/png/3.png';
import slideSmartFactory4 from '@images/about-us-v3/png/4.png';
import slideSmartFactory5 from '@images/about-us-v3/png/5.png';
import layoutSmartFactory1 from '@images/about-us-v3/png/layout1.png';
import layoutSmartFactory2 from '@images/about-us-v3/png/layout2.png';
import layoutSmartFactory3 from '@images/about-us-v3/png/layout3.png';
import layoutSmartFactory4 from '@images/about-us-v3/png/layout4.png';
import layoutSmartFactory5 from '@images/about-us-v3/png/layout5.png';
import layoutSmartFactory6 from '@images/about-us-v3/png/layout6.png';
import layoutSmartFactory7 from '@images/about-us-v3/png/layout7.png';
import smart_factory_image from '@images/about-us-v3/png/img-smart-factory.png';
import { Row, Col } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import style from './style.module.scss';
export const Divider = styled('div')`
  width: 88px;
  height: 4px;
  background: linear-gradient(90deg, #5a20ff 0%, #00e0c5 100%);
  border-radius: 200px;
`;

// const BuildArrowCarousel = ({ funcPrev, funcNext }) => {
//   return (
//     <div className={style[`d-flex align-items-center carousel-cus navigation-cus">
//       <div
//         className={style[`btn-arrow-left"
//         onClick={() => funcPrev()}
//         onKeyDown={() => funcPrev()}
//         tabIndex={0}
//         role="button"
//       />
//       <div
//         className={style[`btn-arrow-right"
//         tabIndex={0}
//         role="button"
//         onClick={() => funcNext()}
//         onKeyDown={() => funcNext()}
//       />
//     </div>
//   );
// };

const SectionSmartFactory = () => {
  // const [current, setCurrent] = useState(1);
  // const [swip, setSwip] = useState(null);

  const { t } = useTranslation('aboutUs');

  const factoryItems = [
    {
      id: 0,
      icon: iconLicense,
      title: (
        <>
          {t('aboutUs.smartFactory.listItems.title1.1')}
          <br />
          {t('aboutUs.smartFactory.listItems.title1.2')}
        </>
      ),
    },
    {
      id: 1,
      icon: iconSmartFactory,
      title: (
        <>
          {t('aboutUs.smartFactory.listItems.title2.1')}
          <br />
          {t('aboutUs.smartFactory.listItems.title2.2')}
        </>
      ),
    },
    {
      id: 2,
      icon: iconPCCC,
      title: (
        <>
          {t('aboutUs.smartFactory.listItems.title3.1')}
          <br />
          {t('aboutUs.smartFactory.listItems.title3.2')}
        </>
      ),
    },
  ];

  const listSlide = [
    {
      id: 1,
      img: slideSmartFactory1,
    },
    {
      id: 2,
      img: slideSmartFactory2,
    },
    {
      id: 3,
      img: slideSmartFactory3,
    },
    {
      id: 4,
      img: slideSmartFactory4,
    },
    {
      id: 5,
      img: slideSmartFactory5,
    },
  ];

  return (
    <section className={style[`section-smart-factory-v3`]}>
      <div className={style[`smart-factory-container-v3`]}>
        <Row className={style[`top-content`]}>
          <span className={style[`title`]}>SMART FACTORY</span>
          <h2 className={style[`main-title`]}>{t('aboutUs.smartFactory.mainTitle')}</h2>
          <div className={style[`underline`]}>
            <Divider />
          </div>
        </Row>

        <Row className={style[`factory-bottom-content`]}>
          <Col lg={6} md={12} sm={12} className={style[`factory-bottom-left-content`]}>
            <div className={style[`factory-produce-content`]}>
              <h1 className={style[`factory-title-paragraph`]}>
                {t('aboutUs.smartFactory.groupContent.title1')}
              </h1>
              <p className={style[`factory-first-desc`]}>
                {t('aboutUs.smartFactory.groupContent.desc1.1')}
              </p>
              <br />
              <p className={style[`factory-second-desc`]}>
                {t('aboutUs.smartFactory.groupContent.desc1.2')}
              </p>
            </div>
            <div className={style[`factory-list-item`]}>
              {factoryItems.map((item) => (
                <div key={item.id} className={style[`factory-item-container`]}>
                  <img src={item.icon.src} alt="" />
                  <span className={style[`factory-item-desc`]}>{item.title}</span>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className={style[`factory-bottom-right-content`]}>
            <img
              src={imgSmartFactory.src}
              alt=""
              className={style[`smart-factory-img img-factory`]}
            />
          </Col>
        </Row>

        <div className={style[`factory-second-bottom-content`]}>
          <div className={style[`content-wrap`]}>
            <div className={style[`factory-second-bottom-left-content`]}>
              <div className={style[`factory-second-produce-content`]}>
                <h1 className={style[`factory-title-paragraph`]}>
                  {t('aboutUs.smartFactory.groupContent.title2')}
                </h1>
                <p className={style[`factory-first-desc`]}>
                  {t('aboutUs.smartFactory.groupContent.desc2')}
                </p>
              </div>
            </div>
            {/* Nhờ Phúc Chỉnh lại */}
            <div className={style[`factory-second-bottom-right-content`]}>
              <img
                src={layoutSmartFactory1.src}
                alt=""
                className={[style[`smart-factory-img`], style[`smart-factory-layout-1`]].join(' ')}
              />
              <img
                src={layoutSmartFactory2.src}
                alt=""
                className={[style[`smart-factory-img`], style[`smart-factory-layout-2`]].join(' ')}
              />
              <img
                src={layoutSmartFactory3.src}
                alt=""
                className={[style[`smart-factory-img`], style[`smart-factory-layout-3`]].join(' ')}
              />
              <img
                src={layoutSmartFactory4.src}
                alt=""
                className={[style[`smart-factory-img`], style[`smart-factory-layout-4`]].join(' ')}
              />
              <img
                src={layoutSmartFactory5.src}
                alt=""
                className={[style[`smart-factory-img`], style[`smart-factory-layout-5`]].join(' ')}
              />
              <img
                src={layoutSmartFactory6.src}
                alt=""
                className={[style[`smart-factory-img`], style[`smart-factory-layout-6`]].join(' ')}
              />
              <img
                src={layoutSmartFactory7.src}
                alt=""
                className={[style[`smart-factory-img`], style[`smart-factory-layout-7`]].join(' ')}
              />
            </div>
            <img src={iconHover.src} alt="" className={style[`icon-hover`]} />
          </div>
          <div className={style[`mobile-content`]}>
            <div className={style[`factory-second-produce-content`]}>
              <h1 className={style[`factory-title-paragraph`]}>
                {t('aboutUs.smartFactory.groupContent.title2')}
              </h1>
              <p className={style[`factory-first-desc`]}>
                {t('aboutUs.smartFactory.groupContent.desc2')}
              </p>
            </div>
            <div className={style[`factory-second-produce-content`]}>
              <img src={smart_factory_image.src} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className={style[`swiper-wrapper-container`]}>
        <div className={style[`smart-factory-swiper-container`]}>
          <Swiper
            // onSlideChange={(swiper) => setCurrent(swiper.realIndex + 1)}
            effect={"coverflow"}
            grabCursor={true}
            slidesPerView={1}
            //spaceBetween={40}
            centeredSlides={true}
            loop={true}
            navigation={{
              nextEl: ".button-next-slider",
              prevEl: ".button-prev-slider",
            }}
            breakpoints={{
              400: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1000: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, Navigation, EffectCoverflow]}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 1,
              slideShadows: false,
            }}
          >
            {listSlide.map((slide) => (
              <SwiperSlide
                key={slide.id}
                className={style[`swiper-smart-factory-img`]}
              >
                <div className={style[`swiper-item-wrap`]}>
                  <div className={style[`item-wrap`]}>
                    <Image src={slide.img} alt="" />
                  </div>
                  <div className={style[`swiper-item-bottom-line`]} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div> */}
    </section>
  );
};
export default SectionSmartFactory;
