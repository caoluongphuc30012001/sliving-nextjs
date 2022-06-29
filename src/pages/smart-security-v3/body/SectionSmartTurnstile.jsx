import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import imgLeft from "../../../images/smart-security-v3/img-smart-turnstile.png";
import iconV from "../../../images/smart-security-v3/icon-tick-v-smart-security.svg";

function SectionSmartTurnstile() {
  return (
    <section className="bg-smart-door-locks" id="smart-turnstile">
      <Container className="max-width-1180 padding-left-right-smart-door">
        <h3 className="sub-title-smart-secuirity">SMART TURNSTILE</h3>
        <h2 className="title-smart-secuirity">Hệ Thống Cửa Quay Thông Minh</h2>
        <div>
          <div className="div-under-smart-security"></div>
        </div>
        <Row className="gx-md-12 gx-lg-4 gy-4 mt-3">
          <Col md={12} lg={6} className="px-0">
            <div className="div-wrapper-img-smart-security">
              <Image
                src={imgLeft}
                className="img-fluid img-left-smart-door-locks"
              />
            </div>
            <Image
              src={imgLeft}
              className="img-fluid img-left-smart-door-locks"
              style={{ opacity: "0" }}
            />
          </Col>
          <Col md={12} lg={6} className="col-main-smart-door">
            <p className="title-smart-door-1">Tiện Ích</p>
            <p className="title-smart-door-2">
              <Image src={iconV} />
              <span>Tích hợp công nghệ định danh eKYC </span>
            </p>
            <p className="sub-title-smart-door">
              Thiết bị nhận diện khuôn mặt 4.0 eKYC ở cửa quay giúp việc nhận
              diện, phân biệt và theo dấu người ra vào khu vực chính xác.
            </p>
            <p className="title-smart-door-2">
              <Image src={iconV} />
              <span>Tự động khoá thông minh</span>
            </p>
            <p className="sub-title-smart-door">
              Tính năng tự động khoá và chống bám đuôi sẽ được kích hoạt sau vài
              giây khi có một người đi qua và chỉ cho một người đi qua một lần.
            </p>
            <p className="title-smart-door-2">
              <Image src={iconV} />
              <span>Tăng cường an ninh</span>
            </p>
            <p className="sub-title-smart-door">
              Nhận diện khuôn mặt để gọi thang máy, mở rào chắn khu vực gửi xe,
              tuỳ chọn chuông hình hoặc qua ứng dụng giúp chủ căn hộ có thể gọi
              thang máy đến đúng căn hộ của mình cách chính xác.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default SectionSmartTurnstile;
