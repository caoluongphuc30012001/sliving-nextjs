import React from "react";
import { Col, Row } from "react-bootstrap";
import bgCloud from "../../../images/business-step1-v3/png/bg-cloud.png";
import bgLinear from "../../../images/business-step1-v3/png/bg-linear.png";
import bgBuilding from "../../../images/business-step1-v3/png/building.png";

function SectionHeader() {
  return (
    <header className="section-business-header-v3 ">
      <img src={bgCloud} alt="" />
      <img src={bgLinear} alt="" />
      <img src={bgBuilding} alt="" />
      <div className="container-v3">
        <Row>
          <Col md={5}>
            <h2 className="text-white business-header-title">Gói Giải Pháp</h2>
            <h4 className="text-white business-header-subtitle">
              Dành Cho Doanh Nghiệp
            </h4>
            <p className="text-white business-header-desc">
              Cung cấp các giải pháp chiếu sáng, điều khiển thông minh, giải
              pháp an ninh cho tòa nhà, căn hộ, văn phòng, trung tâm thương
              mại... với đa dạng lựa chọn và chi phí hợp lý nhất.
            </p>
          </Col>
          <Col md={7}></Col>
        </Row>
      </div>
    </header>
  );
}

export default SectionHeader;
