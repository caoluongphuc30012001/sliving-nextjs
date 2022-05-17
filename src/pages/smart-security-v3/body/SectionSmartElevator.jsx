import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import imgLeft from "../../../images/smart-security-v3/img-smart-elevator.png";
import iconV from "../../../images/smart-security-v3/icon-tick-v-smart-security.svg";

function SectionSmartElevator() {
  return (
    <section className="bg-smart-door-locks" id="smart-elevator">
      <Container className="max-width-1180 px-0">
        <Row className="padding-left-right-smart-door">
          <h3 className="sub-title-smart-secuirity">SMART ELEVATOR</h3>
          <h2 className="title-smart-secuirity">
            Hệ Thống Thang Máy Thông Minh
          </h2>
          <div>
            <div className="div-under-smart-security"></div>
          </div>
          <Row className="gx-md-4 gy-4 px-0  ">
            <Col md={6} className="px-0">
              <div className="div-wrapper-img-smart-security">
                <Image
                  src={imgLeft}
                  className="img-fluid img-left-smart-door-locks"
                />
              </div>
            </Col>
            <Col md={6} className="col-main-smart-door">
              <p className="title-smart-door-1">Tiện Ích</p>
              <p className="title-smart-door-2">
                <Image src={iconV} />
                <span>Tiết kiệm thời gian</span>
              </p>
              <p className="sub-title-smart-door">
                Hệ thống sẽ tính toán sao cho việc di chuyển thang máy ở các
                tầng trong thời gian ngắn và hợp lý nhất.
              </p>
              <p className="title-smart-door-2">
                <Image src={iconV} />
                <span>Kiểm soát quyền di chuyển bằng thẻ từ</span>
              </p>
              <p className="sub-title-smart-door">
                Mỗi khách hàng có 1 thẻ định danh riêng biệt, được cấp quyền di
                chuyển đến các tầng cụ thể. Đem đến sự kiểm soát an ninh tuyệt
                đối với các trường hợp người lạ vào tòa nhà.
              </p>
              <p className="title-smart-door-2">
                <Image src={iconV} />
                <span>Kiểm soát bằng nhận diện khuôn mặt</span>
              </p>
              <p className="sub-title-smart-door">
                Nhận diện khuôn mặt để gọi thang máy, mở rào chắn khu vực gửi
                xe, tuỳ chọn chuông hình hoặc qua ứng dụng giúp chủ căn hộ có
                thể gọi thang máy đến đúng căn hộ của mình cách chính xác.
              </p>
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
}
export default SectionSmartElevator;
