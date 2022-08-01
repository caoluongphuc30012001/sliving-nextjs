import React, { useState } from 'react';
import arrowLeft from '@images/smart-home-v3/svg/arrow-left.svg';
import arrowRight from '@images/smart-home-v3/svg/arrow-right.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import ModalAdvise from '@components/common/modal/ModalAdvise/ModalAdvise';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import style from './style.module.scss';
const SectionPopularProduct = ({ listProduct }) => {
  const [current, setCurrent] = useState(1);
  const [productName, setProductName] = useState('');
  const [modalShow, setModalShow] = React.useState(false);
  const { t, i18n } = useTranslation('smartLighting');
  const checkVn = i18n.language.toUpperCase() === 'VI' ? true : false;
  return (
    <section className={style['section-popular-product-v3']}>
      <div className={style['popular-product-container']}>
        <div className={style['title-box']}>
          <p className={style['sub-title']}>FEATURED PRODUCTS</p>
          <p className={style['title']}>{t('sectionPopularProduct.titleMain')}</p>
          {/* <p className={style["title"]}>Sản Phẩm Nổi Bật</p> */}
          <div className={style['item-border']}></div>
        </div>
        <div className={style['content-container']}>
          <div className={style['swiper-container-v3']}>
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              // centeredSlides={true}
              grabCursor={true}
              loop={true}
              navigation={{
                nextEl: `.button-next-slider`,
                prevEl: '.button-prev-slider',
              }}
              modules={[Pagination, Navigation]}
              onSlideChange={(swiper) => {
                setCurrent((swiper.activeIndex % listProduct.length) + 1);
              }}
              className={style['container-cover']}
            >
              {listProduct.length > 0 &&
                listProduct.map((item) => {
                  return (
                    <SwiperSlide key={item.id} className={style['list-product']}>
                      <div className={style['item-box']}>
                        <Link href={`/product-detail/${item.id}`}>
                          <div className={style['img-box']}>
                            <div className={style['box-shadow']}></div>
                            <img src={item.imageURL} alt="" />
                          </div>
                        </Link>
                        <div className={style['description-box']}>
                          <p className={style['sub-title']}>{item.nameEn}</p>
                          <p className={style['title']}>{checkVn ? item.nameVi : item.nameEn}</p>
                          <div className={style['btn-group']}></div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
          <div className={style['nav-swiper-box']}>
            <img src={arrowLeft.src} alt="" className={'button-prev-slider'} />
            <img src={arrowRight.src} alt="" className={'button-next-slider'} />
          </div>
        </div>
      </div>
      <ModalAdvise productName={productName} show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
};

export default SectionPopularProduct;
