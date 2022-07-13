import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import imgUnderLine from "@images/home-page-v3/svg/title-line-under.svg";
import iconBusiness from "@images/home-page-v3/svg/icon-business.svg";
import iconSupport from "@images/home-page-v3/svg/icon-support.svg";
import iconMedia from "@images/home-page-v3/svg/icon-media.svg";

const SectionHelpMore = () => {
  const listItemCard = [
    {
      id: 0,
      linkImg: iconBusiness,
      title: "Kinh Doanh",
      desc: "sales@unicloud.com.vn",
    },
    {
      id: 1,
      linkImg: iconSupport,
      title: "Hỗ Trợ Khách Hàng",
      desc: "supports@unicloud.com.vn",
    },
    {
      id: 2,
      linkImg: iconMedia,
      title: "Truyền Thông",
      desc: "media@unicloud.com.vn",
    },
  ];
  return (
    <section className="bg-ground-help-more">
      <div className="container-1220 help-more-container">
        <Row className="row-line-center m-left-right-12">
          <span className="title-eng-line-center">CONTACT US</span>
          <h2 className="title-line-center">Bạn Cần Sự Giúp Đỡ Nhiều Hơn?</h2>
          <div className="img-line-center d-flex justify-content-center">
            <Image src={imgUnderLine} style={{ width: 88, height: 4 }} />
          </div>
          <p className="description-line-center">
            Chúng tôi luôn sẵn sàng tư vấn và giải đáp mọi thắc mắc của bạn.
          </p>
        </Row>
        <Row lg={3} md={3} xs={1} className="help-more-cards m-left-right-12">
          {listItemCard.map((itemCard) => (
            <Col key={itemCard.id} className="gx-4 gy-4">
              <div className="help-more-card">
                <Image
                  src={itemCard.linkImg}
                  alt="img-card-description"
                  className="help-more-card-image"
                />
                <h3 className="help-more-card-title">{itemCard.title}</h3>
                <span className="help-more-card-des">{itemCard.desc}</span>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};
export default SectionHelpMore;
