import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";
import playIcon from "../../images/smart-home-v3/svg/play-btn.svg";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.scss";

// import required modules
const SectionSwiperVideo = ({ listVideo }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { i18n, t } = useTranslation();

  return (
    <section className="section-swiper-video-v3">
      <div className="swiper-video-container">
        <div className="title-box">
          <p className="sub-title">SLIVING PRODUCT EXPERIENCE</p>
          <div className="title">{t("sectionSwiperVideoV3.titleMain")}</div>
          {/* <p className="title">Trải Nghiệm Smart Home</p> */}
          <div className="item-border"></div>
        </div>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          //   loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {listVideo.map((item) => (
            <SwiperSlide key={item.id}>
              <ReactPlayer
                //   ref={ref}
                className="iframe-youtube-sliving"
                url={item.url}
                controls
                playing
                config={{
                  file: {
                    attributes: {
                      controlsList: "nodownload",
                    },
                  },
                }}
                light={item.image}
                playIcon={<Image src={playIcon} />}
                // width={1180}
                // onStart=
              />
              {/* <img src={item.image} alt="" /> */}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="container-swiper-thumb">
          <Swiper
            onSwiper={setThumbsSwiper}
            // loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1.5,
              },
              550: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
            }}
          >
            {listVideo.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="wrap-item">
                    <div className="img-box">
                      <img src={item.image} alt="" className="img" />
                    </div>
                    <div className="item-border"></div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SectionSwiperVideo;
