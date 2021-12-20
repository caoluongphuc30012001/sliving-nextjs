import React from "react";
import { Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import imgCinema from "@components/svg/cinema";
import imgStore from "@components/svg/store";
import imgHome from "@components/svg/house";
import imgOffice from "@components/svg/office";
import imgSchool from "@components/svg/school";
import imgLine from "@images/new-home-page/app-img/line.png";

import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

export default function NewSectionApp() {
  const listItemSlider = [
    {
      id: 1,
      img: imgCinema,
      name: "Cinema",
    },
    {
      id: 2,
      img: imgStore,
      name: "Store",
    },
    {
      id: 3,
      img: imgHome,
      name: "Home",
    },
    {
      id: 4,
      img: imgOffice,
      name: "Office",
    },
    {
      id: 5,
      img: imgSchool,
      name: "School",
    },
    {
      id: 6,
      img: imgSchool,
      name: "School",
    },
    {
      id: 7,
      img: imgSchool,
      name: "School",
    },
  ];

  return (
    <section>
      <div className="home-page-app">
        <div className="container-wrap">
          <Row>
            <Col xl={6} lg={6} md={6} className="app-title">
              <h3>Project types that use Sliving solutions.</h3>
              <img src={imgLine} alt="" />
            </Col>
            <Col xl={6} lg={6} md={6} className="app-desc">
              <p>
                The trend towards the application of technology in property
                management is also seen as one way to improve the operational
                capacity of the project. This factor also helps make a
                difference in the standard of professional property management
                services,...
              </p>
            </Col>
          </Row>
        </div>

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
  );
}
