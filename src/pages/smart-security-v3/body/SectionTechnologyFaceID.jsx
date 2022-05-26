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
                <span>Công nghệ nhận diện khuôn mặt Face ID</span>
              </p>
              <p className="title-smart-door-2">
                <Image src={iconV} />
                <span>Giải thuật sinh trắc học khuôn mặt</span>
              </p>
              <p className="title-smart-door-2">
                <Image src={iconV} />
                <span>Trí tuệ nhân tạo (AI)</span>
              </p>
              <p className="title-smart-door-2">
                <Image src={iconV} />
                <span>Machine Learning</span>
              </p>
              <p className="title-smart-door-2">
                <Image src={iconV} />
                <span>Deep Learning</span>
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
                Unicloud hiện tại đang cung cấp toàn bộ hệ thống Face ID cho
                khách hàng với các dự án nằm trong trung tâm thương mại, tòa
                nhà, chung cư, văn phòng,...
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
