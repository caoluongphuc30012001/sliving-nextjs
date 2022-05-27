import React from "react";
import iconCheckOutline from "@images/icon/icon-check-circle-outline.svg";
import imgCurtain from "@images/home-page-v3/img-curtain.png";
import imgSwitch from "@images/home-page-v3/img-switch.png";
import imgApp from "@images/home-page-v3/img-app.png";
import imgTouch from "@images/home-page-v3/img-touch.png";
import imgUnderLine from "@images/home-page-v3/svg/title-line-under.svg";
import imgAppStore from "@images/home-page-v3/png/img-button-app-store.png";
import imgGooglePlay from "@images/home-page-v3/png/img-button-google-play.png";
import ModalAdvise from "@components/modal/modal-advise/ModalAdvise";

import { Col, Image, Row } from "react-bootstrap";
import { Link } from "gatsby";

const SectionProduct = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const arrSmartTouch = [
    {
      id: 0,
      title: "Công Tắc cơ Thông Minh",
      subTitle: "Smart Mechanical Switch",
      image: imgSwitch,
      downloadObjects: [],

      listItem: [
        {
          id: 0,
          title: "Trải nghiệm mới mẻ & hiện đại",
          subTitle:
            "Với ngoại hình của dòng công tắc cơ truyền thống đi kèm với các tính năng hiện đại, sản phẩm tạo cảm giác gần gũi, quen thuộc nhưng  mang lại trải nghiệm hoàn toàn mới mẻ và tiện lợi.",
          icon: iconCheckOutline,
        },
        {
          id: 1,
          title: "Dễ sử dụng",
          subTitle:
            "Thông qua mạng Wifi/Zigbee kết nối các thiết bị chỉ qua vài bước thiết lập đơn giản, giúp bạn bước vào một không gian smart living đẳng cấp.",
          icon: iconCheckOutline,
        },
        {
          id: 2,
          title: "Tính năng vượt trội",
          subTitle:
            "Ngoài tính năng điều khiển bật/ tắt cục bộ như công tắc thường, sản phẩm còn có khả năng kết nối thông qua Gateway để điều khiển trên Internet. Chạy kịch bản bằng thao tác nhấn đơn, nhấn đúp, nhấn giữ, thay đổi các thông số độ nhạy, độ sáng, thông báo trạng thái của thiết bị.",
          icon: iconCheckOutline,
        },
      ],
    },
    {
      id: 1,
      title: "Công Tắc Cảm Ứng thông minh",
      subTitle: "Smart Touch Switch",
      image: imgTouch,
      downloadObjects: [],

      listItem: [
        {
          id: 0,
          title: "Thiết kế sang trọng",
          subTitle:
            "Với thiết kế đơn giản nhưng không kém phần sang trọng, sản phẩm có mặt kính cường lực chống trầy, sở hữu viền nhôm mạ vàng 18k cao cấp với độ dày vừa phải cùng với đường bo cạnh mềm mại, tạo nên sự thân thiện với người sử dụng vừa thuận tiện cho việc lắp đặt, sử dụng, bảo hành.",
          icon: iconCheckOutline,
        },
        {
          id: 1,
          title: "Dễ sử dụng",
          subTitle:
            "Thông qua mạng Wifi/Zigbee kết nối các thiết bị chỉ qua vài bước thiết lập đơn giản, giúp bạn bước vào một không gian smart living đẳng cấp.",
          icon: iconCheckOutline,
        },
        {
          id: 2,
          title: "Tính năng vượt trội",
          subTitle:
            "Với tính năng bật/tắt cục bộ bằng cảm ứng điện dung, sản phẩm còn có khả năng chạy kịch bản thông qua thao tác nhấn đơn, nhấn đúp, nhấn giữ và thay đổi các thông số độ nhạy, độ sáng, thông báo trạng thái online lên Gateway.",
          icon: iconCheckOutline,
        },
      ],
    },
    {
      id: 2,
      title: "Quản lý thông minh với Sliving app",
      subTitle: "Sliving App",
      image: imgApp,
      downloadObjects: [
        {
          id: 0,
          img: imgAppStore,
          linkDownload: "https://1p.io/AppSlivingApple",
        },
        {
          id: 1,
          img: imgGooglePlay,
          linkDownload: "https://1p.io/SlivingAppChplay",
        },
      ],
      listItem: [
        {
          id: 0,
          title: "Dễ dàng thao tác",
          subTitle:
            "Thiết bị có thể thay thế remote điều khiển của TV, quạt, điều hoà, rèm cửa,... bằng cách đọc lệnh IR, RF.",
          icon: iconCheckOutline,
        },
        {
          id: 1,
          title: "Điều khiển thông minh",
          subTitle:
            "Điều khiển từ xa thông qua ứng dụng Sliving, giọng nói, chạy kịch bản hoặc qua trợ lý ảo như Google Assistant, Siri, Alexa,...",
          icon: iconCheckOutline,
        },
        {
          id: 2,
          title: "Giám sát & cảnh báo",
          subTitle:
            "Kiểm soát năng lượng tiêu dùng thông minh nhờ có tính năng kết nối hai chiều với dàn lạnh, vừa có khả năng điều khiển và giám sát các thông số môi trường như nhiệt độ, độ ẩm,... và đưa ra các cảnh báo kịp thời.",
          icon: iconCheckOutline,
        },
      ],
    },
    {
      id: 3,
      title: "Động Cơ Rèm Thông Minh",
      subTitle: "Smart Curtain",
      image: imgCurtain,
      downloadObjects: [],

      listItem: [
        {
          id: 0,
          title: "Hỗ trợ điều khiển từ xa",
          subTitle:
            "Với động cơ rèm thông minh, người dùng dễ dàng điều khiển từ xa thông qua ứng dụng hoặc chạy kịch bản mở/đóng theo nhu cầu sử dụng.",
          icon: iconCheckOutline,
        },
        {
          id: 1,
          title: "Thiết kế chắc chắn & bền bỉ  ",
          subTitle:
            "Toàn bộ sản phẩm bên ngoài được làm bằng nhôm cao cấp, khả năng chịu lực va chạm mạnh, chịu nhiệt và chống ăn mòn cùng với kích thước nhỏ gọn nên phù hợp với nhiều loại hình không gian khác nhau.",
          icon: iconCheckOutline,
        },
        {
          id: 2,
          title: "Hoạt động dễ dàng",
          subTitle:
            "Khi gặp sự cố về điện, thiết bị vẫn có thể hoạt động bình thường thông qua mở và đóng vật lý dễ dàng.",
          icon: iconCheckOutline,
        },
      ],
    },
  ];

  return (
    <section className="section-product-home-page-v3">
      <div className="container-1220">
        <Row className="row-line-center">
          <span className="title-eng-line-center">SMART HOME PRODUCTS</span>
          <h2 className="title-line-center">Sản Phẩm Smart Home</h2>
          <div className="img-line-center">
            <Image src={imgUnderLine} style={{ width: 88, height: 4 }} />
          </div>
        </Row>
        {arrSmartTouch.map((smart) => {
          return (
            <Row
              key={smart.id}
              className={`${
                smart.id % 2 === 0
                  ? "card-product"
                  : "card-product flex-row-reverse"
              } `}
            >
              <Col lg={7} md={6}>
                <div className="p-relative">
                  <img
                    src={smart.image}
                    alt=""
                    className="card-product-img"
                    // style={{
                    //   float: `${smart.id % 2 === 0 ? "left" : "right"}`,
                    // }}
                  />
                  {smart?.downloadObjects?.length > 0 && (
                    <div className="d-flex p-absolute download-app-list download-app-list-desktop ">
                      {smart?.downloadObjects.map((object) => (
                        <div className="download-app-item" key={object.id}>
                          <a
                            href={object.linkDownload}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src={object.img}
                              alt=""
                              className="download-app-img"
                            ></img>
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Col>
              <Col lg={5} md={6} className="">
                <h3 className="card-product-title">{smart.title}</h3>
                <h4 className="card-product-subtitle">{smart.subTitle}</h4>
                <div className="card-product-img-mobile d-none p-relative">
                  {smart?.downloadObjects?.length > 0 && (
                    <div className="d-flex p-absolute download-app-list">
                      {smart?.downloadObjects.map((object) => (
                        <div className="download-app-item" key={object.id}>
                          <a
                            href={object.linkDownload}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src={object.img}
                              alt=""
                              className="download-app-img"
                            ></img>
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                  <img src={smart.image} alt="" className="float-none" />
                </div>
                <ul className="card-product-content">
                  {smart.listItem.map((item) => (
                    <li key={item.id} className="card-product-item">
                      <div className="d-flex align-items-center">
                        <img src={item.icon} alt="" className="mr-2 m" />
                        <h4 className="card-product-item-title">
                          {item.title}
                        </h4>
                      </div>
                      <div>
                        <p className="card-product-item-des">{item.subTitle}</p>
                        <ul>
                          {item?.listChild &&
                            item?.listChild.map((child) => (
                              <li key={child}>{child}</li>
                            ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="btn-group">
                  <button
                    className="advise-now-btn"
                    onClick={() => setModalShow(true)}
                  >
                    <span>Tư vấn ngay</span>
                  </button>
                  <Link to="/smart-home">
                    <button className="learn-more-btn">
                      <span>Tìm hiểu thêm</span>
                    </button>
                  </Link>
                </div>
              </Col>
            </Row>
          );
        })}
      </div>
      <ModalAdvise show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
};

export default SectionProduct;
