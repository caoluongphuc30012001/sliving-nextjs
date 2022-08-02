import icon24Line from "@images/icon/icon-24h-line.svg";
import iconPhone from "@images/home-page-v3/svg/icon-phone.svg";
import iconSettings from "@images/icon/icon-setting.svg";
import iconSupport from "@images/icon/icon-support.svg";
import imgBg from "@images/home-page-v3/bg-home-page.jpg";
import imgBg2 from "@images/home-page-v3/bg-home-page2.jpg";
import imgBgMobile from "@images/home-page-v3/bg-home-page-mobile.png";
import imgBgMobile2 from "@images/home-page-v3/bg-home-page2-mobile.png";
import iconEarth from "@images/home-page-v3/svg/icon-earth.svg";
import React from "react";
import { Col, Row } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

import { useTranslation } from "react-i18next";

const SectionHeader = () => {
  const { t } = useTranslation("homePage");

  const arrService = [
    {
      id: 0,
      title: t("homePage.header.groupServices.title1"),
      desc: t("homePage.header.groupServices.desc1"),
      icon: iconSettings,
    },
    {
      id: 1,
      title: t("homePage.header.groupServices.title2"),
      desc: t("homePage.header.groupServices.desc2"),
      icon: iconSupport,
    },
    {
      id: 2,
      title: t("homePage.header.groupServices.title3"),
      desc: t("homePage.header.groupServices.desc3"),
      icon: icon24Line,
    },
  ];
  const imgBackground = [
    { id: 0, imgUrl: imgBg },
    { id: 1, imgUrl: imgBg2 },
  ];
  const imgBackgroundMobile = [
    { id: 0, imgUrl: imgBgMobile },
    { id: 1, imgUrl: imgBgMobile2 },
  ];
  return (
    <header className="home-page-v3">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper slider-desktop"
      >
        {imgBackground.map((item) => (
          <SwiperSlide
            key={item.id}
            className="back-ground-desktop"
            style={{
              backgroundImage: `url(${item.imgUrl})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              marginRight: "30px",
            }}
          >
            {/* <div className="view-360">
              <button>
                <span>
                  Xem 360 <sup>0</sup>
                </span>
                <img src={iconEarth} alt="" />
              </button>
            </div> */}
            {/* <img src={item.imgUrl} alt="" className="bg-img" /> */}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper slider-mobile"
      >
        {imgBackgroundMobile.map((item) => (
          <SwiperSlide key={item.id} className="back-ground-mobile d-none">
            {/* <div className="view-360">
              <button>
                <span>
                  Xem 360 <sup>0</sup>
                </span>
                <img src={iconEarth} alt="" />
              </button>
            </div> */}
            <img src={item.imgUrl} alt="" className="bg-img" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="home-page-tag">
        <div className="container-1220">
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={3} className="gy-3">
              <div className="group-contact-header">
                <img
                  src={iconPhone}
                  width={48}
                  height={48}
                  alt="icon phone fill"
                />
                <div className="contact-header-wrap">
                  <span className="hotline">Hotline</span>
                  <span>19006054</span>
                </div>
              </div>
            </Col>
            <Col lg={9} className="gy-3">
              <Row className="group-service-tag" md={3}>
                {arrService.map((service) => (
                  <Col key={service.id} className="gx-4 card-sub-tag-col">
                    <div className="card-sub-tag">
                      <img
                        height={48}
                        src={service.icon}
                        alt="icon settings"
                        loading="eager"
                        className="card-sub-tag-icon"
                      />
                      <h4 className="card-sub-tag-title">{service.title}</h4>
                      <span className="card-sub-tag-des">{service.desc}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </header>
  );
};
export default SectionHeader;
