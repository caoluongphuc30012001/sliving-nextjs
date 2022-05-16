import React from "react";
// import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from "react-bootstrap";
import iconV from "../../../images/smart-security-v3/icon-tick-v-smart-security.svg";
import iconTechnology from "../../../images/smart-security-v3/icon-technology-smart-security.svg";
import iconPartnership from "../../../images/smart-security-v3/icon-partner-smart-security.svg";
import logoMitsubishi from "../../../images/smart-security-v3/logo-mitsubishi.svg";

function SectionTechnologyElevator() {
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
                <span>Thiết bị đọc thẻ RFID/NFC</span>
              </p>

              <p className="title-smart-door-2">
                <Image src={iconV} />
                <span>Hệ thống điều khiển thang máy</span>
              </p>

              <p className="title-smart-door-2">
                <Image src={iconV} />
                <span>Hệ thống Server điều phối</span>
              </p>
              <p className="title-smart-door-2">
                <Image src={iconV} />
                <span>Ứng dụng gọi thang máy trên Smartphone</span>
              </p>
              <p className="title-smart-door-2">
                <Image src={iconV} />
                <span>Chuông hình</span>
              </p>
              <p className="title-smart-door-2">
                <Image src={iconV} />
                <span>Thiết bị nhận diện khuôn mặt</span>
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
              <Image
                src={logoMitsubishi}
                className="img-fluid img-logo-technologo-security"
              />
              <p className="detail-partnership-security">
                Hiện tại Unicloud đang cộng tác phần cứng cùng thương hiệu thang
                máy Mitsubishi.
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
export default SectionTechnologyElevator;
