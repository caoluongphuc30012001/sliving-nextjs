import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import imgRight from "@images/home-page-v3/img-solution-smart.png";
import imgLeft from "@images/home-page-v3/img-smart-life.png";

import iconBulb from "@images/icon/icon-bulb.svg";
import iconTouch from "@images/icon/icon-touch.svg";
import iconLight from "@images/icon/icon-light.svg";
import iconSecurity from "@images/icon/icon-security-color.svg";
import iconRemote from "@images/icon/icon-remote.svg";
import iconCurtain from "@images/icon/icon-curtain.svg";

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
      desc: "Điều khiển từ xa thông minh",
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
      <div className="container-v3 section-solution-about">
        <Row>
          <Col lg={5}>
            <h5 className="detail-sub-v3 text-uppercase">ABOUT SLIVING</h5>
            <h3 className="detail-v3">
              Giải pháp Nhà thông minh hàng đầu Việt Nam
            </h3>
            <Divider />
            <span className="detail-v3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
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
          <Col lg={7} className="d-flex align-items-center justify-content-end">
            <img src={imgRight} alt="" />
          </Col>
        </Row>
      </div>
      <div className="container-v3 section-solution-sliving">
        <Row>
          <Col lg={5} className="d-flex align-items-center justify-content-end">
            <img src={imgLeft} alt="" />
          </Col>
          <Col lg={7}>
            <h5 className="detail-sub-v3 text-uppercase">SOLUTION SLIVING</h5>
            <h3 className="detail-v3">
              Kiến tạo phong cách sống Hiện Đại Đẳng Cấp
            </h3>
            <Divider />
            <span className="detail-v3">
              Bộ sưu tập các Sản phẩm Nhà thông minh đặt riêng của Sliving được
              thiết kế để bổ sung một cách hiệu quả cho lối sống của bạn với sự
              Thuận tiện, An toàn và Thoải mái.
            </span>
            <ul className="list-flex-auto">
              {arrProd.map((prod) => (
                <div key={prod.id} className="flex-auto-item">
                  <img src={prod.icon} alt="" />
                  <div>{prod.desc}</div>
                </div>
              ))}
            </ul>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default SectionSolution;
