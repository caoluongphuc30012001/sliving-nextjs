import React from "react";
import { Col, Row } from "react-bootstrap";
import bgCloud from "../../../images/business-step1-v3/png/bg-cloud.png";
import bgLinear from "../../../images/business-step1-v3/png/bg-linear.png";
import bgBuilding from "../../../images/business-step1-v3/png/building.png";
import bgBuildingMobile from "../../../images/business-step1-v3/png/building-mobile.png";

function SectionHeader() {
  return (
    <header className="section-business-header-v3 ">
      <img src={bgBuilding} alt="" className="img-building" />
      <img
        src={bgBuildingMobile}
        alt=""
        style={{ hight: "362", width: "302" }}
        className="img-building-mobile d-none"
      />
      <div className="container-v3">
        <Row>
          <Col md={7}>
            <div className="container-header">
              <h2 className="text-white business-header-title">
                Gói Giải Pháp
              </h2>
              <h4 className="text-white business-header-subtitle">
                Dành Cho Doanh Nghiệp
              </h4>
              <p className="text-white business-header-desc">
                Cung cấp các giải pháp chiếu sáng, điều khiển thông minh, giải
                pháp an ninh cho tòa nhà, căn hộ, văn phòng, trung tâm thương
                mại... với đa dạng lựa chọn và chi phí hợp lý nhất.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </header>
  );
}

export default SectionHeader;
