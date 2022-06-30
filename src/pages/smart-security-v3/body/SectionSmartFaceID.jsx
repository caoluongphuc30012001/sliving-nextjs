import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import imgLeft from "../../../images/smart-security-v3/img-face-id.png";
import iconV from "../../../images/smart-security-v3/icon-tick-v-smart-security.svg";

function SectionSmartFaceID() {
  return (
    <section className="bg-smart-door-locks" id="face-id-attendance">
      <Container className="max-width-1180 padding-left-right-smart-door">
        <h3 className="sub-title-smart-secuirity">FACE ID TIME ATTENDANCE</h3>
        <h2 className="title-smart-secuirity">
          Hệ Thống Chấm Công Bằng Khuôn Mặt
        </h2>
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
              <span>Nhận diện nhanh & chính xác</span>
            </p>
            <p className="sub-title-smart-door">
              Có thể xác thực từ khoảng cách xa mà không cần tiếp xúc thiết bị
              với tốc độ nhận diện gương mặt nhanh chóng và chính xác.
            </p>
            <p className="title-smart-door-2">
              <Image src={iconV} />
              <span>Tính bảo mật cao</span>
            </p>
            <p className="sub-title-smart-door">
              Giải pháp chấm công hiện đại với độ bảo mật cao, tránh được tình
              trạng rò rỉ thông tin và hỗ trợ quản lý, xử lý dữ liệu an toàn.
            </p>
            <p className="title-smart-door-2">
              <Image src={iconV} />
              <span>Dễ dàng tích hợp</span>
            </p>
            <p className="sub-title-smart-door">
              Có thể tích hợp FaceID với hệ thống thiết bị thông minh ở cửa ra
              vào, thang máy, khu chung cư, toà nhà nhằm mục đích tăng cường bảo
              mật và chấm công tiện lợi.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default SectionSmartFaceID;
