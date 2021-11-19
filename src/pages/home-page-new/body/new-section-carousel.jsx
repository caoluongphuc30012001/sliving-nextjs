import React from "react";
import { Row } from "react-bootstrap";

import imgLine from "@images/new-home-page/app-img/line.png";
import imgTest from "@images/new-home-page/carousel/img-1.png";

// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { EffectCards } from "swiper";

// SwiperCore.use([EffectCards]);

export default function NewSectionCarousel() {
  return (
    <section>
      <div className="new-page-carousel">
        <div className="container-wrap">
          <Row>
            <div className="carousel-header">
              <h3>Những dự án nổi vật sử dụng sản phẩm Sliving</h3>
              <img src={imgLine} alt="" />
            </div>
          </Row>
        </div>
        <div className="list-carousel">
          {/* <Swiper effect={"cards"} grabCursor={true} className="mySwiperCarousel">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper> */}
        </div>
      </div>
    </section>
  );
}
