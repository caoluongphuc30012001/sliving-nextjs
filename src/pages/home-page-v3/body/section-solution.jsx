import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import styled from "styled-components";
import imgRight from "@images/home-page-v3/img-solution-smart.png";
import imgLeft from "@images/home-page-v3/img-smart-life.png";

import iconBulb from "@images/icon/icon-bulb.svg";
import iconTouch from "@images/icon/icon-touch.svg";
import iconLight from "@images/icon/icon-light.svg";
import iconSecurity from "@images/icon/icon-security-color.svg";
import iconRemote from "@images/icon/icon-remote.svg";
import iconCurtain from "@images/icon/icon-curtain.svg";
import imgAboutTop from "@images/home-page-v3/png/about-sliving-top.png";
// import imgAboutBottom from "@images/home-page-v3/png/about-sliving-bottom.png";
import imgSolution from "@images/home-page-v3/png/solution-sliving.png";
import imgUnderLine from "@images/home-page-v3/svg/title-line-under.svg";

export const Divider = styled("div")`
  width: 56px;
  height: 4px;
  background: linear-gradient(90deg, #5a20ff 0%, #00e0c5 100%);
  margin: 18px 0;
  border-radius: 200px;
`;

const SectionSolution = () => {
  const arrSolution = [
    {
      id: 0,
      desc: "Smart Home",
    },
    {
      id: 1,
      desc: "Smart Parking",
    },
    {
      id: 2,
      desc: "Smart Lighting",
    },
    {
      id: 3,
      desc: "Smart Security",
    },
  ];

  const arrProd = [
    {
      id: 0,
      desc: "Cài đặt lịch trình tắt / mở đèn",
      icon: iconBulb,
    },
    {
      id: 1,
      desc: "Công tắc cảm ứng",
      icon: iconTouch,
    },
    {
      id: 2,
      desc: "Bộ điều khiển ánh sáng tâm trạng",
      icon: iconLight,
    },
    {
      id: 3,
      desc: "Cảm biến bảo vệ",
      icon: iconSecurity,
    },
    {
      id: 4,
      desc: "Điều khiển từ xa thông minh      ",
      icon: iconRemote,
    },
    {
      id: 5,
      desc: "Hệ thống điều khiển rèm cửa",
      icon: iconCurtain,
    },
  ];
  return (
    <section className="section-solution">
      <div className="container-1220 section-solution-about">
        <Row className="justify-content-around">
          <Col lg={6} className="">
            <Row className="row-line-center m-left-right-12">
              <span className="title-eng-line-center">ABOUT SLIVING</span>
              <h2 className="title-line-center">
                Giải pháp Nhà thông minh hàng đầu Việt Nam
              </h2>
              <div className="img-line-center">
                <Image src={imgUnderLine} style={{ width: 88, height: 4 }} />
              </div>
            </Row>

            <img
              src={imgAboutTop}
              alt=""
              className="solution-about-img-mobile"
            />

            <div className="solution-about-cap d-flex">
              <div className="solution-about-cap-line"></div>
              <span className="solution-about-cap-content d-flex align-items-center">
                "The light is what guides you home, the warmth is what keeps you
                there." - Ellie Rodriguez
              </span>
            </div>
            <span className="detail-v3">
              Sliving cung cấp giải pháp nhà thông minh với thuật toán AI để
              thực hiện giám sát từ xa an toàn và an ninh. Hỗ trợ điều khiển
              bằng giọng nói và ứng dụng Mobile để dễ dàng thao tác, nhận thông
              báo kịp thời với các giải pháp tích hợp như:
            </span>
            <ul className="list-ul-li">
              {arrSolution.map((solution) => (
                <li key={solution.id}>{solution.desc}</li>
              ))}
            </ul>
            <button type="button" className="btn-gradient-blue">
              <span>Khám phá ngay</span>
            </button>
          </Col>
          <Col lg={6} className="">
            <img src={imgRight} alt="" className="solution-about-img" />
          </Col>
        </Row>
      </div>
      <div className="container-1220 section-solution-sliving">
        <Row className="justify-content-between">
          <Col lg={6} className="solution-sliving-img">
            <img src={imgLeft} alt="" />
          </Col>
          <Col lg={6} className=" solution-sliving-col-right ">
            <Row className="row-line-center m-left-right-12">
              <span className="title-eng-line-center">SOLUTION SLIVING</span>
              <h2 className="title-line-center">
                Kiến tạo phong cách sống Hiện Đại Đẳng Cấp
              </h2>
              <div className="img-line-center">
                <Image src={imgUnderLine} style={{ width: 88, height: 4 }} />
              </div>
            </Row>

            <span className="detail-v3">
              Bộ sưu tập các Sản phẩm Nhà thông minh đặt riêng của Sliving được
              thiết kế để bổ sung một cách hiệu quả cho lối sống của bạn với sự
              Thuận tiện, An toàn và Thoải mái.
            </span>
            <Row className="">
              {arrProd.map((prod) => (
                <Col
                  key={prod.id}
                  className="gx-4 gy-3 col-4"
                  lg={4}
                  md={4}
                  sm={4}
                  // md={6}
                >
                  <div className="solution-sliving-card ">
                    <img src={prod.icon} alt="" />
                  </div>
                  <span className="solution-sliving-content">{prod.desc}</span>
                </Col>
              ))}
            </Row>
            <img
              src={imgSolution}
              alt=""
              className="solution-about-img-mobile"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default SectionSolution;
