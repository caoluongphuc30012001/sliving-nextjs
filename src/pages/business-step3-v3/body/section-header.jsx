import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import bgCloud from "../../../images/business-step1-v3/png/bg-cloud.png";
import bgLinear from "../../../images/business-step1-v3/png/bg-linear.png";
import bgBuilding from "../../../images/business-step1-v3/png/building.png";
import bgBuildingMobile from "../../../images/business-step1-v3/png/building-mobile.png";

function SectionHeader() {
  return (
    <section className="section-top-solution-package">
      <Container className="max-width-1300 padding-left-right">
        <Row className="gx-5">
          <Col md={2} lg={5} xl={7}></Col>
          <Col md={10} lg={7} xl={5}>
            <div className="container-header">
              <h2 className="text-top-solution-1">Gói Giải Pháp</h2>
              <h4 className="text-top-solution-2">Dành Cho Doanh Nghiệp</h4>
              <p className="text-top-solution-3">
                Cung cấp các giải pháp chiếu sáng, điều khiển thông minh, giải
                pháp an ninh cho tòa nhà, căn hộ, văn phòng, trung tâm thương
                mại... với đa dạng lựa chọn và chi phí hợp lý nhất.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SectionHeader;
