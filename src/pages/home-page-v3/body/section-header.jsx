import icon24Line from "@images/icon/icon-24h-line.svg";
import iconPhone from "@images/icon/icon-phone.svg";
import iconSettings from "@images/icon/icon-setting.svg";
import iconSupport from "@images/icon/icon-support.svg";
import imgBg from "@images/home-page-v3/bg-home-page.png";
import imgBg2 from "@images/home-page-v3/bg-home-page2.png";
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
const SectionHeader = () => {
  const arrService = [
    {
      id: 0,
      title: "Thiết lập và cài đặt",
      desc: "Dễ dàng thao tác với cấu hình tùy chỉnh để giám sát từ xa và kiểm soát năng lượng tiêu dùng.",
      icon: iconSettings,
    },
    {
      id: 1,
      title: "Tư vấn thi công",
      desc: "Sẵn sàng tư vấn thi công cho khách hàng lắp đặt và sử dụng tiện lợi với không gian sống.",
      icon: iconSupport,
    },
    {
      id: 2,
      title: "Hỗ trợ 24/7",
      desc: "Đồng hành cùng khách hàng 24/7, sẵn sàng hỗ trợ và tư vấn tất cả các ngày trong tuần.",
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
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper slider-desktop"
      >
        {imgBackground.map((item) => (
          <SwiperSlide key={item.id} className="back-ground-desktop">
            <div className="view-360">
              <button>
                <span>
                  Xem 360 <sup>0</sup>
                </span>
                <img src={iconEarth} alt="" />
              </button>
            </div>
            <img src={item.imgUrl} alt="" className="bg-img" />
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
            <div className="view-360">
              <button>
                <span>
                  Xem 360 <sup>0</sup>
                </span>
                <img src={iconEarth} alt="" />
              </button>
            </div>
            <img src={item.imgUrl} alt="" className="bg-img" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="home-page-tag">
        <div className="container-1220">
          <Row
            noGutters={true}
            className="d-flex justify-content-center align-items-center"
          >
            <Col lg={3} className="gy-3 px-0">
              <div className="group-contact-header">
                <img
                  src={iconPhone}
                  width={48}
                  height={48}
                  alt="icon phone fill"
                />
                <div className="contact-header-wrap">
                  <span className="hotline">Hotline</span>
                  <span>(023) 2665 5559</span>
                </div>
              </div>
            </Col>
            <Col lg={9} className="gy-3 px-0">
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
