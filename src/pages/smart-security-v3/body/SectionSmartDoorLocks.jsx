import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import imgLeft from "../../../images/smart-security-v3/bg-smart-security-4.png";
import iconV from "../../../images/smart-security-v3/icon-tick-v-smart-security.svg";

function SectionSmartDoorLocks() {
  return (
    <section className="bg-smart-door-locks" id="smart-door-locks">
      <Container className="max-width-1180 padding-left-right-smart-door">
        <h3 className="sub-title-smart-secuirity">SMART DOOR LOCKS</h3>
        <h2 className="title-smart-secuirity">Hệ Thống Khoá Cửa Thông Minh</h2>
        <div>
          <div className="div-under-smart-security"></div>
        </div>
        <Row className="gx-md-4 gy-4 mt-3">
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
              <span>Tích hợp cách mở khóa hiện đại</span>
            </p>
            <p className="sub-title-smart-door">
              Hỗ trợ các chế độ truy cập như: thẻ từ, mã số, vân tay, chìa khoá,
              chuông cửa có hình, điều khiển từ xa...
            </p>
            <p className="title-smart-door-2">
              <Image src={iconV} />
              <span>Bảo vệ an toàn tuyệt đối</span>
            </p>
            <p className="sub-title-smart-door">
              Bảo vệ an toàn tuyệt đối cho căn hộ với các tính năng bảo mật như:
              báo động âm thanh khi khóa bị tác động một lực mạnh bên ngoài, tự
              động vô hiệu hóa khi nhập sai mật khẩu nhiều lần liên tiếp,...
            </p>
            <p className="title-smart-door-2">
              <Image src={iconV} />
              <span>Kiểm soát lịch trình vào/ra chi tiết</span>
            </p>
            <p className="sub-title-smart-door">
              Tăng cường kết nối cho phép bạn khóa và mở cửa từ xa. Tự động gửi
              tin nhắn, báo cáo lịch sử ra vào. Cung cấp giải pháp ưu việt cho
              chủ nhà trọ, Homestay để bảo vệ tài sản và quản lý dễ dàng hơn.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default SectionSmartDoorLocks;
