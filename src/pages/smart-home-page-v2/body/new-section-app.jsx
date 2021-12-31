import React from "react";
import { Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import imgCinema from "@components/svg/cinema";
import imgStore from "@components/svg/store";
import imgHome from "@components/svg/house";
import imgOffice from "@components/svg/office";
import imgSchool from "@components/svg/school";
import imgLine from "@images/new-home-page/app-img/line.png";
import iconPrevEl from "@images/icon/arrow-down-left-v2.svg";
import iconNextEl from "@images/icon/arrow-down-right-v2.svg";

import { useTranslation } from "react-i18next"



import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);

export default function NewSectionApp() {

  const { t } = useTranslation();

  const listItemSlider = [
    {
      id: 1,
      img: imgCinema,
      name: "construction.cinema",
    },
    {
      id: 2,
      img: imgStore,
      name: "construction.building",
    },
    {
      id: 3,
      img: imgHome,
      name: "construction.apartment",
    },
    {
      id: 4,
      img: imgOffice,
      name: "construction.Office",
    },
    {
      id: 5,
      img: imgSchool,
      name: "construction.school",
    },
    {
      id: 6,
      img: imgSchool,
      name: "construction.villa",
    },

  ];
  const BuildNextEl = () => {
    return (
      <div className="btn-next btn-carousel btn-carousel-right">
        <img src={iconNextEl} alt="icon" />
      </div>
    );
  };

  const BuildPrevEl = () => {
    return (
      <div className="btn-prev btn-carousel btn-carousel-left">
        <img src={iconPrevEl} alt="icon" />
      </div>
    );
  };
  return (
    <section  className="container-v2">
      <div className="home-page-app">
        <div className="container-wrap">
          <Row>
            <Col xl={6} lg={6} md={6} className="app-title">
              <h3>{t(`smart_home_v2.project_types_that_use_Sliving_solutions`)}</h3>
              <img src={imgLine} alt="" />
            </Col>
            <Col xl={6} lg={6} md={6} className="app-desc">
              <p>
                {t(`smart_home_v2.the_trend_towards_the_application`)}
              </p>
            </Col>
          </Row>
        </div>

        <Col className="app-slider">
          <Swiper
            slidesPerView={4}
            slidesPerGroup={1}
            spaceBetween={32}
            navigation={{
              nextEl: ".btn-next",
              prevEl: ".btn-prev",
            }}
            className="swiper-solution"
          >
            {listItemSlider.map((item, index) => <SwiperSlide key={index}>
              <div className="slider-item">
                <div className="slider-item-icon">
                  <item.img />
                </div>
                <div className="slider-item-title">
                  <p>{t(`${item.name}`)}</p>
                </div>
              </div>
            </SwiperSlide>)}
            <BuildPrevEl />
            <BuildNextEl />
          </Swiper>
        </Col>
      </div>
    </section>
  );
}
