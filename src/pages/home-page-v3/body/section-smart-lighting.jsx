import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import imgUnderLine from "@images/home-page-v3/svg/title-line-under.svg";
import imgSmartLightingLeft from "@images/home-page-v3/png/img-smart-lighting-left.png";
import imgSmartLightingRight from "@images/home-page-v3/png/img-smart-lighting-right.png";
import imgSmartRemoteControl from "@images/home-page-v3/svg/icon-remote-control.svg";
import imgSmartBrightnessControl from "@images/home-page-v3/svg/icon-brightness-control.svg";
import imgSmartEnergy from "@images/home-page-v3/svg/icon-energy.svg";
import ModalAdvise from "@components/modal/modal-advise/ModalAdvise";
import { Link } from "gatsby";

function SectionSmartLighting() {
  const [modalShow, setModalShow] = React.useState(false);

  const listItemCard = [
    {
      id: 0,
      linkImg: imgSmartRemoteControl,
      title: "Điều khiển từ xa",
    },
    {
      id: 1,
      linkImg: imgSmartBrightnessControl,
      title: "Tăng giảm độ sáng",
    },
    {
      id: 2,
      linkImg: imgSmartEnergy,
      title: "Tiết kiệm năng lượng",
    },
  ];
  return (
    <section className="bg-ground-smart-lighting">
      <div className="container-1220">
        <div className="row-line-center">
          <span className="title-eng-line-center">SMART LIGHTING</span>
          <h1 className="title-line-center">
            Hệ Thống Điều Khiển Ánh Sáng Thông Minh
          </h1>
          <div className="img-line-center">
            <Image src={imgUnderLine} style={{ width: 88, height: 4 }} />
          </div>
        </div>
        <Row className="smart-lighting-row gx-5">
          <Col lg={7} md={6} sm={12} className="smart-lighting-col-left">
            <div className="smart-lighting-des-desktop">
              <p className="smart-lighting-des">
                Chiếu sáng sử dụng công nghệ điều khiển tác động vào nguồn sáng
                nhằm đạt hai mục tiêu: nâng cao chất lượng chiếu sáng (về độ
                rọi, độ chói, CRI, thẩm mỹ) và tiết kiệm điện năng. Vì thế, hệ
                thống sản phẩm chiếu sáng của Sliving không chỉ đáp ứng nhu cầu
                chiếu sáng mà còn đáp ứng được nhu cầu hoạt động thông minh.
              </p>
              <br />
              <p className="smart-lighting-des">
                Tích hợp, thử nghiệm thành công và đưa ra thị trường bộ điều
                khiển panel LED, LED Downlight cho phép bật tắt, Dimming, đổi
                màu từ xa bằng công nghệ RF. Điều khiển trên Smartphone bằng
                công nghệ không dây, nhằm mục đích điều khiển chiếu sáng hội
                trường, phòng trưng bày sản phẩm, bộ điều khiển tòa nhà có nhiều
                kịch bản chiếu sáng theo yêu cầu của khách hàng.
              </p>
            </div>
            <div className="smart-lighting-des-mobile d-none">
              <p className="smart-lighting-des">
                Unicloud đã tích hợp, thử nghiệm thành công và đưa ra thị trường
                bộ điều khiển panel LED, LED Downlight cho phép bật tắt,
                Dimming, đổi màu từ xa bằng công nghệ RF. Điều khiển trên
                Smartphone bằng công nghệ không dây, nhằm mục đích điều khiển
                chiếu sáng hội trường, phòng trưng bày sản phẩm, bộ điều khiển
                tòa nhà có nhiều kịch bản chiếu sáng theo yêu cầu của khách
                hàng.
              </p>
            </div>
            <div className="btn-group">
              <button
                className="advise-now-btn"
                onClick={() => setModalShow(true)}
              >
                <span>Tư vấn ngay</span>
              </button>
              <Link to="/smart-lighting">
                <button className="learn-more-btn">
                  <span>Tìm hiểu thêm</span>
                </button>
              </Link>
            </div>
            <Image
              src={imgSmartLightingLeft}
              className="smart-lighting-img-left w-100"
            />
          </Col>
          <Col lg={5} md={6} sm={12} className="smart-lighting-col-right">
            <Row className="smart-lighting-group">
              {listItemCard.map((itemCard) => (
                <Col className="smart-lighting-card" key={itemCard.id}>
                  <div className="smart-lighting-top">
                    <Image
                      src={itemCard.linkImg}
                      className="smart-lighting-img"
                    />
                  </div>
                  <div className="smart-lighting-bottom">
                    <span className="smart-lighting-content">
                      {itemCard.title}
                    </span>
                  </div>
                </Col>
              ))}
            </Row>
            <Image
              src={imgSmartLightingRight}
              className="smart-lighting-img-right w-100"
            />
            <Image
              src={imgSmartLightingLeft}
              className="smart-lighting-img-left-mobile d-none w-100"
            />
          </Col>
        </Row>
      </div>
      <ModalAdvise show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
}

export default SectionSmartLighting;
