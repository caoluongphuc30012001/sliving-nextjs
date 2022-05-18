import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import imgUnderLine from "../../../images/home-page-v3/svg/title-line-under.svg";
import imgCustomerCentric from "../../../images/about-us-v3/png/img-customer-centric.png";
import imgService from "../../../images/about-us-v3/svg/icon-service-customer-centric.svg";
import imgProduct from "../../../images/about-us-v3/svg/icon-product-customer-centric.svg";
import imgProduce from "../../../images/about-us-v3/svg/icon-produce-customer-centric.svg";

function SectionCustomerCentric() {
  const listCertification = [
    {
      id: 1,
      title: "Dịch vụ",
      linkImg: imgService,
      content: [
        "Kinh nghiệm triển khai lắp đặt tại các dự án lớn",
        "Dịch vụ bảo hành, trainning và chuyển giao dự án cho đối tác chuyên nghiệp.",
      ],
    },
    {
      id: 2,
      title: "Sản phẩm",
      linkImg: imgProduct,
      content: [
        "Hệ sinh thái sản phẩm đa dạng, liên kết cao, made in Vietnam.",
        "Hệ các sản phẩm có thể điều chỉnh theo nhu cầu từng khách hàng",
        "Hệ thống sản phẩm mở cho phép kết nối với các đối tác dịch vụ",
        "Qui trình thiết kế, thử nghiệm khép kín được kiểm soát chất lượng chặt chẽ.",
      ],
    },
    {
      id: 3,
      title: "Sản xuất",
      linkImg: imgProduce,
      content: [
        "Hệ thống máy móc hiện đại cùng tiêu chuẩn phòng sạch đáp ứng tiêu chuẩn khắt khe của lắp ráp. ",
        "Qui trình sản xuất áp dụng ISO xxx",
      ],
    },
  ];
  return (
    <section className="bg-section-customer-centric">
      <div className="max-width-1180  section-customer-centric container-v3">
        <Row className="row-line-center">
          <span className="title-eng-line-center">CUSTOMER CENTRIC</span>
          <h2 className="title-line-center">Lấy khách hàng làm trung tâm</h2>
          <div className="img-line-center d-flex justify-content-center">
            <img className="underline-img" src={imgUnderLine} />
          </div>
        </Row>
        <Row md={2} xs={1} className="customer-centric-row">
          <Col>
            {listCertification.map((item) => (
              <div className="customer-centric-card" key={item.id}>
                <div className="customer-centric-icon">
                  <img src={item.linkImg} />
                </div>
                <div className="customer-centric-content">
                  <h4 className="customer-centric-title">{item.title}</h4>
                  {item.content.map((itemChild) => (
                    <span className="customer-centric-item">- {itemChild}</span>
                  ))}
                </div>
              </div>
            ))}
          </Col>
          <Col>
            <img src={imgCustomerCentric} />
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default SectionCustomerCentric;
