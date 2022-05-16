import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import imgParking1 from "../../../images/smart-parking-v3/png/img-parking-equipment-1.png";

function SectionHardware() {
  return (
    <section className="bg-hardware-smart-parking">
      <Container className="max-width-1180 px-0">
        <Row className="padding-left-right">
          <div className="div-wrapper-hardware">
            <h2>Phần Cứng</h2>
          </div>
          <h3 className="title-hardware-smart-parking px-0">
            Thiết bị quản lý bãi đỗ
          </h3>
          <div className="div-under-hareware-parking"></div>
          <Row className="gx-5 row-main-hardware-parking">
            <Col md={6}>
              <Image src={imgParking1} className="img-fluid" />
            </Col>
            <Col md={6}>
              <p>Thanh chắn (Barrier)</p>
              <p>
                Hỗ trợ nhân viên kiểm soát hoặc tự động (sau khi hệ thống trích
                xuất và rà soát thông tin chính xác) đảm bảo an toàn an ninh
                trong bãi đỗ.
              </p>
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
}
export default SectionHardware;
