import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import iconCertification1 from "../../../images/about-us-v3/svg/icon-certification1.svg";
import iconCertification2 from "../../../images/about-us-v3/svg/icon-certification2.svg";
import iconCertification3 from "../../../images/about-us-v3/svg/icon-certification3.svg";
import iconCertification4 from "../../../images/about-us-v3/svg/icon-certification4.svg";
import iconActivity1 from "../../../images/about-us-v3/png/img-activity1.png";
import iconActivity2 from "../../../images/about-us-v3/png/img-activity2.png";
import iconActivity3 from "../../../images/about-us-v3/png/img-activity3.png";
import iconActivity4 from "../../../images/about-us-v3/png/img-activity4.png";
import a from "../../../images/about-us-v3/png/bg-activity.png";

function SectionActivity() {
  const listCertification = [
    {
      id: 1,
      linkIconLogo: iconCertification1,
      title: "Chứng nhận Đầu tư Khu công nghệ cao",
    },
    {
      id: 2,
      linkIconLogo: iconCertification2,
      title: "Chứng nhận Cleanroom Fiel - Phòng Sạch",
    },
    {
      id: 3,
      linkIconLogo: iconCertification3,
      title: "Chứng nhận EMV Level",
    },
    {
      id: 4,
      linkIconLogo: iconCertification4,
      title: "Chứng nhận CE-FCC",
    },
  ];
  const listActivity = [
    {
      id: 1,
      linkIconLogo: iconActivity1,
      title: "Fintech",
    },
    {
      id: 2,
      linkIconLogo: iconActivity2,
      title: "Smart City",
    },
    {
      id: 3,
      linkIconLogo: iconActivity3,
      title: "Digital Tranformation",
    },
    {
      id: 4,
      linkIconLogo: iconActivity4,
      title: "Virtual Reality - VR",
    },
  ];
  return (
    <section className="bg-section-activity">
      <div className="section-activity-container">
        <div className="content-container ">
          <h3 className="section-activity-title">Lĩnh Vực Hoạt Động</h3>
          <div className="max-width-1390 p-relative">
            <Row md={4} xs={2} className="activity-row max-width-1180 ">
              {listActivity.map((item) => (
                <Col key={item.id} className="col-mw-200">
                  <div className="activity-card">
                    <div className="activity-card-img">
                      <Image src={item.linkIconLogo} />
                    </div>
                    <span className="activity-card-title ">{item.title}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <div className="content-container">
          <h3 className="section-activity-title">Chứng Nhận</h3>
          <Row
            md={4}
            xs={2}
            className="max-width-1180 d-flex justify-content-center"
          >
            {listCertification.map((item) => (
              <Col>
                <div className="certification-card">
                  <div className="certification-card-img">
                    <Image src={item.linkIconLogo} />
                  </div>
                  <span className="certification-card-title">{item.title}</span>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
}

export default SectionActivity;
