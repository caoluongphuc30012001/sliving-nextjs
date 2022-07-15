import React from "react";
// import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from "react-bootstrap";
import imgSecurity from "../../../images/smart-security-v3/img-top-security.png";

function SectionTopSmartSecurity() {
  return (
    <section className="bg-top-smart-security">
      <Container className="max-width-1600 px-0">
        <Row className="gx-md-5 padding-left-right row-main-top-security">
          <Col md={6} className="col-img-top-security">
            <Image src={imgSecurity} className="img-fluid img-top-security" />
          </Col>
          <Col md={6} className="order-first order-md-last">
            <h2 className="title-top-smart-security">SMART BUILDING</h2>
            <p className="detail-top-smart-security">
              Chúng tôi tự hào mang đến cho các dự án BĐS - chung cư, toà nhà
              văn phòng,... một hàng rào an ninh được ứng dụng công nghệ số kiên
              cố, vững chắc, hiện đại, và an toàn.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default SectionTopSmartSecurity;
