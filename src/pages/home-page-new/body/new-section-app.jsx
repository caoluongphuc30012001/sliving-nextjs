import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import imgCinema from "@images/new-home-page/app-img/img-cinema.png";
import imgStore from "@images/new-home-page/app-img/img-store.png";
import imgHome from "@images/new-home-page/app-img/img-home.png";
import imgOffice from "@images/new-home-page/app-img/img-office.png";
import imgSchool from "@images/new-home-page/app-img/img-school.png";
import imgLine from "@images/new-home-page/app-img/line.png";

import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

export default function NewSectionApp() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section>
      <div className="home-page-app">
        <div className="container-wrap">
          <Row>
            <Col xl={6} lg={6} md={6} className="app-title">
              <h3>Những loại công trình ứng dụng giải pháp Sliving</h3>
              <img src={imgLine} alt="" />
            </Col>
            <Col xl={6} lg={6} md={6} className="app-desc">
              <p>
                Xu hướng áp dụng công nghệ trong quản lý bất động sản cũng được
                xem là một trong những giải pháp nâng cao khả năng vận hành của
                dự án. Yếu tố này cũng góp phần làm nên khác biệt cho tiêu chuẩn
                về dịch vụ quản lý bất động sản chuyên nghiệp,...
              </p>
            </Col>
          </Row>
        </div>

        <Col className="app-slider">
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slider-item-1">
                <div className="slider-item-icon">
                  <img src={imgCinema} alt="" />
                </div>
                <div className="slider-item-title">
                  <p>Rạp chiếu phim</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item-1">
                <div className="slider-item-icon">
                  <img src={imgStore} alt="" />
                </div>
                <div className="slider-item-title">
                  <p>Cửa hàng</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item-1">
                <div className="slider-item-icon">
                  <img src={imgHome} alt="" />
                </div>
                <div className="slider-item-title">
                  <p>Nhà phố</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item-1">
                <div className="slider-item-icon">
                  <img src={imgOffice} alt="" />
                </div>
                <div className="slider-item-title">
                  <p>Văn phòng</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item-1">
                <div className="slider-item-icon">
                  <img src={imgSchool} alt="" />
                </div>
                <div className="slider-item-title">
                  <p>Trường học</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item-1">
                <div className="slider-item-icon">
                  <img src={imgSchool} alt="" />
                </div>
                <div className="slider-item-title">
                  <p>Rạp chiếu phim</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item-1">
                <div className="slider-item-icon">
                  <img src={imgSchool} alt="" />
                </div>
                <div className="slider-item-title">
                  <p>Rạp chiếu phim</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item-1">
                <div className="slider-item-icon">
                  <img src={imgSchool} alt="" />
                </div>
                <div className="slider-item-title">
                  <p>Rạp chiếu phim</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item-1">
                <div className="slider-item-icon">
                  <img src={imgSchool} alt="" />
                </div>
                <div className="slider-item-title">
                  <p>Rạp chiếu phim</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Col>
      </div>
    </section>
  );
}
