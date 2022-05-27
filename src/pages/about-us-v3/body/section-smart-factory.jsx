import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "swiper/css/navigation";
import { Pagination, Navigation, EffectCoverflow } from "swiper";
import "swiper/css/bundle";
import "swiper/css";
import imgSmartFactory from "@images/about-us-v3/png/smart-factory.png";
import iconLicense from "@images/about-us-v3/svg/icon-license.svg";
import iconHover from "@images/about-us-v3/svg/icon-hover.svg";
import iconPCCC from "@images/about-us-v3/svg/icon-pccc.svg";
import iconSmartFactory from "@images/about-us-v3/svg/icon-smart-factory.svg";
import slideSmartFactory1 from "@images/about-us-v3/png/1.png";
import slideSmartFactory2 from "@images/about-us-v3/png/2.png";
import slideSmartFactory3 from "@images/about-us-v3/png/3.png";
import slideSmartFactory4 from "@images/about-us-v3/png/4.png";
import slideSmartFactory5 from "@images/about-us-v3/png/5.png";
import layoutSmartFactory1 from "@images/about-us-v3/png/layout1.png";
import layoutSmartFactory2 from "@images/about-us-v3/png/layout2.png";
import layoutSmartFactory3 from "@images/about-us-v3/png/layout3.png";
import layoutSmartFactory4 from "@images/about-us-v3/png/layout4.png";
import layoutSmartFactory5 from "@images/about-us-v3/png/layout5.png";
import layoutSmartFactory6 from "@images/about-us-v3/png/layout6.png";
import layoutSmartFactory7 from "@images/about-us-v3/png/layout7.png";
import smart_factory_image from "@images/about-us-v3/png/img-smart-factory.png";
import { Image, Row, Col } from "react-bootstrap";

export const Divider = styled("div")`
  width: 88px;
  height: 4px;
  background: linear-gradient(90deg, #5a20ff 0%, #00e0c5 100%);
  margin: 16px 0px;
  border-radius: 200px;
`;

// const BuildArrowCarousel = ({ funcPrev, funcNext }) => {
//   return (
//     <div className="d-flex align-items-center carousel-cus navigation-cus">
//       <div
//         className="btn-arrow-left"
//         onClick={() => funcPrev()}
//         onKeyDown={() => funcPrev()}
//         tabIndex={0}
//         role="button"
//       />
//       <div
//         className="btn-arrow-right"
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

  const factoryItems = [
    { id: 0, icon: iconLicense, title: "Khu Công Nghệ Cao cấp phép" },
    { id: 1, icon: iconSmartFactory, title: "Nhà máy thông minh 4.0" },
    { id: 2, icon: iconPCCC, title: "Chứng nhận Phòng cháy chữa cháy" },
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
    <section className="section-smart-factory-v3">
      <div className="smart-factory-container-v3">
        <Row className="row-line-center m-left-right-12">
          <span className="title-eng-line-center">SMART FACTORY</span>
          <h2 className="title-line-center">Nhà máy thông minh</h2>
          <div className="img-line-center">
            <Divider />
          </div>
        </Row>

        <Row className="factory-bottom-content">
          <Col lg={6} md={12} sm={12} className="factory-bottom-left-content">
            <div className="factory-produce-content">
              <h1 className="factory-title-paragraph">
                Đầu tư nhà máy hiện đại
              </h1>
              <p className="factory-first-desc">
                Smart Factory của Unicloud được trang bị với hệ thống dây chuyền
                máy móc lắp ráp linh kiện hiện đại, mang tính tự động hoá cao
                cho cả linh kiện dán và cắm, đồng thời cũng đảm bảo các yêu cầu
                cao về quy trình lắp ráp linh kiện tiên tiến nhất. Ngoài ra,
                toàn bộ nhà máy còn được điều khiển bởi hệ thống kết nối IoT
                thông minh được chính Unicloud thiết kế và lắp đặt.
              </p>
              <br />
              <p className="factory-second-desc">
                Với mong muốn mang tới những sản phẩm có chất lượng cao nhất tới
                khách hàng, ngoài quy trình thiết kế khép kín, mỗi sản phẩm điện
                tử của Unicloud còn áp dụng quy trình sản xuất được thực hiện
                một cách khép kín thông qua việc đầu tư vào nhà máy thông minh,
                dây chuyền lắp ráp linh kiện hiện đại.
              </p>
            </div>
            <div className="factory-list-item">
              {factoryItems.map((item) => (
                <div key={item.id} className="factory-item-container">
                  <img src={item.icon} alt=""></img>
                  <span className="factory-item-desc">{item.title}</span>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className="factory-bottom-right-content">
            <img
              src={imgSmartFactory}
              alt=""
              className="smart-factory-img img-factory"
            ></img>
          </Col>
        </Row>

        <div className="factory-second-bottom-content">
          <div className="content-wrap p-relative">
            <div className="factory-second-bottom-left-content">
              <div className="factory-second-produce-content">
                <h1 className="factory-title-paragraph">Đẩy mạnh sản xuất</h1>
                <p className="factory-first-desc">
                  Unicloud Group đã nghiên cứu, sản xuất và cho ra đời các thiết
                  bị và giải pháp phần mềm thông minh phục vụ nhu cầu kinh doanh
                  đa dạng của doanh nghiệp. Các sản phẩm mà Unicloud tự sản xuất
                  được thử nghiệm, thẩm định nghiêm ngặt để đảm bảo chất lượng
                  và độ tin cậy cao trước khi đưa ra thị trường.
                </p>
              </div>
            </div>
            <div className="factory-second-bottom-right-content">
              <img
                src={layoutSmartFactory1}
                alt=""
                className="smart-factory-img smart-factory-layout-1"
              ></img>
              <img
                src={layoutSmartFactory2}
                alt=""
                className="smart-factory-img smart-factory-layout-2"
              ></img>
              <img
                src={layoutSmartFactory3}
                alt=""
                className="smart-factory-img smart-factory-layout-3"
              ></img>
              <img
                src={layoutSmartFactory4}
                alt=""
                className="smart-factory-img smart-factory-layout-4"
              ></img>
              <img
                src={layoutSmartFactory5}
                alt=""
                className="smart-factory-img smart-factory-layout-5"
              ></img>
              <img
                src={layoutSmartFactory6}
                alt=""
                className="smart-factory-img smart-factory-layout-6"
              ></img>
              <img
                src={layoutSmartFactory7}
                alt=""
                className="smart-factory-img smart-factory-layout-7"
              ></img>
            </div>
            <img src={iconHover} alt="" className="icon-hover p-absolute" />
          </div>
          <div className="mobile-content d-none">
            <div className="factory-second-produce-content">
              <h1 className="factory-title-paragraph">Đẩy mạnh sản xuất</h1>
              <p className="factory-first-desc">
                Unicloud Group đã nghiên cứu, sản xuất và cho ra đời các thiết
                bị và giải pháp phần mềm thông minh phục vụ nhu cầu kinh doanh
                đa dạng của doanh nghiệp. Các sản phẩm mà Unicloud tự sản xuất
                được thử nghiệm, thẩm định nghiêm ngặt để đảm bảo chất lượng và
                độ tin cậy cao trước khi đưa ra thị trường.
              </p>
            </div>
            <div className="factory-second-produce-content">
              <img src={smart_factory_image} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-wrapper-container">
        <div className="smart-factory-swiper-container">
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
              <SwiperSlide key={slide.id} className="swiper-smart-factory-img">
                <div className="swiper-item-wrap">
                  <div className="item-wrap">
                    <img src={slide.img} alt="" />
                  </div>
                  <div className="swiper-item-bottom-line" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default SectionSmartFactory;
