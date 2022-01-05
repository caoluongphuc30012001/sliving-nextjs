import React from "react";
import { Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import imgCinema from "@components/svg/cinema";
import imgStore from "@components/svg/store";
import imgHome from "@components/svg/house";
import imgOffice from "@components/svg/office";
import imgSchool from "@components/svg/school";
import TitleSection from "@components/section/title/title-section";
import { useTranslation } from "react-i18next";
SwiperCore.use([Pagination, Navigation]);

const LightingProduct=()=>{
    const { t } = useTranslation();
    const listItemSlider = [
        {
          id: 1,
          img: imgCinema,
          name: t(`solution.Cinema`),
        },
        {
          id: 2,
          img: imgStore,
          name: t(`solution.Store`),
        },
        {
          id: 3,
          img: imgHome,
          name: t(`solution.Home`),
        },
        {
          id: 4,
          img: imgOffice,
          name: t(`solution.Office`),
        },
        {
          id: 5,
          img: imgSchool,
          name: t(`solution.School`),
        },
        {
          id: 6,
          img: imgSchool,
          name: t(`solution.Villa`),
        },
      ];
    
    return <section className="smart-lighting-page-v2 container">
        <TitleSection content={t(`solution.titleSolution`)} color={'bold'} direction={'center'}/>
    <div className="home-page-app">
      <Col className="app-slider">
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          className="mySwiper"
        >
          {listItemSlider.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="slider-item">
                <div className="slider-item-icon">
                  <item.img />
                </div>
                <div className="slider-item-title">
                  <p>{item.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>
    </div>
  </section>
}
export default LightingProduct;
