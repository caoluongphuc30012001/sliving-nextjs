import React from "react";
// import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from "react-bootstrap";
import iconV from "../../../images/smart-security-v3/icon-tick-v-smart-security.svg";
import iconTechnology from "../../../images/smart-security-v3/icon-technology-smart-security.svg";
import iconPartnership from "../../../images/smart-security-v3/icon-partner-smart-security.svg";
import logoDahua from "../../../images/smart-security-v3/logo-dahua.svg";

function SectionTechnologyDoorLocks() {
  return (
    <section className="bg-technology-smart-security">
      <Container className="max-width-1180 padding-left-right">
        <Row className="gx-md-5 gy-4">
          <Col md={6} className="position-relative">
            <div className="div-wrapper-technology-security">
              <h3 className="title-technology-smart-security">
                Công Nghệ Sử Dụng
              </h3>
              <p className="title-smart-door-2">
                <Image src={iconV} />
                <span>Thẻ từ</span>
              </p>
              <p className="sub-title-smart-door">
                Nhận biết thẻ &#60;2cm
                <br />
                Đọc mã thẻ &#60;0.5s
              </p>
              <p className="title-smart-door-2">
                <Image src={iconV} />
                <span>Cảm biến</span>
              </p>
              <p className="sub-title-smart-door">
                Cảm biến vân tay điện dung Tỉ lệ sai &#60;0.0002
              </p>
              <p className="title-smart-door-2">
                <Image src={iconV} />
                <span>Mật khẩu</span>
              </p>
              <p className="sub-title-smart-door">Trộn lẫn số ngẫu nhiên</p>
              <p className="title-smart-door-2">
                <Image src={iconV} />
                <span>Bộ nhớ lưu trữ</span>
              </p>
              <p className="sub-title-smart-door">
                100 thẻ, 100 vân tay, 100 Password, 8 Bluetooth
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
                src={logoDahua}
                className="img-fluid img-logo-technologo-security"
              />
              <p className="detail-partnership-security">
                Hiện tại Unicloud đang cộng tác cùng thương hiệu khoá cửa thông
                minh Dahua.
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
export default SectionTechnologyDoorLocks;
