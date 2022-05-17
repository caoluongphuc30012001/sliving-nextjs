import React from "react";
// import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from "react-bootstrap";
import iconV from "../../../images/smart-security-v3/icon-tick-v-smart-security.svg";
import iconTechnology from "../../../images/smart-security-v3/icon-technology-smart-security.svg";
import iconPartnership from "../../../images/smart-security-v3/icon-partner-smart-security.svg";

function SectionTechnologyTurnstile() {
  return (
    <section className="bg-technology-smart-security">
      <Container className="max-width-1180 px-0">
        <Row className="padding-left-right gx-md-5 gy-4">
          <Col md={6} className="position-relative">
            <div className="div-wrapper-technology-security">
              <h3 className="title-technology-smart-security">
                Công Nghệ Sử Dụng
              </h3>
              <p className="title-smart-door-2">
                <Image src={iconV} />
                <span>Camera FaceID nhận diện khuôn mặt</span>
              </p>
              <p className="title-smart-door-2">
                <Image src={iconV} />
                <span>Công nghệ định danh 4.0 eKYC</span>
              </p>
              <p className="title-smart-door-2">
                <Image src={iconV} />
                <span>Mật khẩu</span>
              </p>
              <p className="title-smart-door-2">
                <Image src={iconV} />
                <span>Thẻ quét để mở cửa</span>
              </p>
              <p className="title-smart-door-2">
                <Image src={iconV} />
                <span>Phần mềm gửi cảnh báo đến Server chủ</span>
              </p>
              <div className="div-wrapper-icon-security">
                <Image src={iconTechnology} className="img-fluid" />
              </div>
            </div>
          </Col>
          <Col md={6} className="position-relative">
            <div className="div-wrapper-technology-security">
              <h3 className="title-technology-smart-security">
                Thương Hiệu Cộng Tác
              </h3>
              <p className="detail-partnership-security">
                Hệ thống phần mềm và phần cứng của Unicloud có thể tích hợp với
                mọi sản phẩm cửa xoay có Trigger.
              </p>
              <div className="div-wrapper-icon-security">
                <Image src={iconPartnership} className="img-fluid" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default SectionTechnologyTurnstile;
