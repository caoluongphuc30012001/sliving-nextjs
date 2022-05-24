import React from "react";
import styled from "styled-components";
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

export const Divider = styled("div")`
  width: 56px;
  height: 4px;
  background: linear-gradient(90deg, #5a20ff 0%, #00e0c5 100%);
  margin: 20px auto;
  border-radius: 200px;
  padding-bottom: 60px;
`;

const SectionProduct = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const arrSmartTouch = [
    {
      id: 0,
      title: "Công Tắc Thông Minh",
      subTitle: "Smart Switch",
      image: imgSwitch,
      downloadObjects: [],

      listItem: [
        {
          id: 0,
          title: "Tính năng vượt trội",
          subTitle:
            "Với ngoại hình của dòng công tắc cơ truyền thống đi kèm với các tính năng hiện đại, sản phẩm tạo cảm giác gần gũi, quen thuộc nhưng những trải nghiệm mà sản phẩm mang đến lại hoàn toàn mới mẻ.",
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
          title: "Trải nghiệm mới từ lớp vỏ truyền thống",
          subTitle:
            "Ngoài tính năng điều khiển bật tắt cục bộ như công tắc thường, sản phẩm còn có khả năng kết nối thông qua gateway để điều khiển trên internet. Chạy kịch bản bằng nhấn đơn và nhấn đúp, nhấn giữ, thay đổi các thông số độ nhạy độ sáng, thông báo trạng thái online lên gateway.",
          icon: iconCheckOutline,
        },
      ],
    },
    {
      id: 1,
      title: "Công Tắc Cảm Ứng",
      subTitle: "Touch switch",
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
            "Ngoài tính năng điều khiển bật tắt cục bộ như công tắc thường, sản phẩm còn có khả năng kết nối thông qua gateway để điều khiển trên internet. Chạy kịch bản bằng nhấn đơn và nhấn đúp, nhấn giữ, thay đổi các thông số độ nhạy độ sáng, thông báo trạng thái online lên gateway.",
          icon: iconCheckOutline,
        },
      ],
    },
    {
      id: 2,
      title: "Ứng Dụng Di Động Sliving",
      subTitle: "App Sliving",
      image: imgApp,
      downloadObjects: [
        {
          id: 0,
          img: imgAppStore,
          linkDownload: "https://rgl.mobi/RHQSK",
        },
        {
          id: 1,
          img: imgGooglePlay,
          linkDownload: "https://rgl.mobi/Rqccu",
        },
      ],
      listItem: [
        {
          id: 0,
          title: "Tạo các kịch bản tự động",
          subTitle:
            "Công tắc mini không dây, công tắc điều khiển không dây và khối Cube được tùy chỉnh để tự động hóa một loạt các tác vụ công việc trong nhà Thiết lập công tắc mini không dây để bật chế độ đọc. Chẳng hạn như, chỉ với một nút bấm duy nhất bạn có thể thực hiện 2 tác vụ cùng một lúc như đóng rèm cửa và tự động điều chỉnh ánh sáng đèn theo ý muốn:",

          listChild: [
            "Bật và điều chỉnh độ sáng của đèn",
            "Đóng và mở rèm tự động",
            " Điều khiển từ xa các thiết bị kết nối với phích cắm thông minh",
          ],
          icon: iconCheckOutline,
        },
        {
          id: 1,
          title: "Giám sát & cảnh báo",
          subTitle:
            "Kiểm tra lượng điện nước tiêu thụ mỗi tháng sẽ không còn khó khăn, mất nhiều thời gian và thủ công như trước nữa. Thiết bị cho phép giám sát lượng điện tiêu thụ điện và nước trực tiếp 24/24, đồng thời cho phép thiết lập các ngưỡng tiêu thụ tối đa và gửi các thông tin cảnh báo khi vượt ngưỡng. ",
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
          title: "Dễ dàng chia sẻ thiết bị - Điều khiển từ xa",
          subTitle:
            "Thông qua ứng dụng Sliving - có thể chia sẻ thiết bị cho nhiều người dùng khác nhau. Hỗ trợ điều khiển từ xa tương thích với tỷ lệ mở rèm được cài đặt sẵn.",
          icon: iconCheckOutline,
        },
        {
          id: 1,
          title: "Thiết kế dễ dàng lắp đặt và sử dụng",
          subTitle:
            "Với kích thước nhỏ gọn, phù hợp với nhiều loại hình không gian khác nhau. Toàn bộ phần vỏ bên ngoài đều được làm bằng nhôm cao cấp, có khả năng chịu được lực va chạm mạnh, chịu nhiệt và chống ăn mòn tốt.",
          icon: iconCheckOutline,
        },
        {
          id: 2,
          title: "Hoạt động dựa trên tương tác vật lý",
          subTitle:
            "Khi có sự cố về điện, vẫn có thể dễ dàng mở và đóng rèm một cách nhẹ nhàng. Người tiêu dùng không cần phải quá lo lắng về việc thiết bị ngưng hoạt động và không sử dụng được.",
          icon: iconCheckOutline,
        },
      ],
    },
  ];

  return (
    <section className="section-product-home-page-v3">
      <div className="container-1220">
        <Row className="row-line-center">
          <span className="title-eng-line-center">ABOUT SLIVING</span>
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
              <Col lg={7} className="p-relative">
                {smart?.downloadObjects?.length > 0 && (
                  <div className="d-flex p-absolute download-app-list download-app-list-desktop ">
                    {smart?.downloadObjects.map((object) => (
                      <div className="download-app-item" key={object.id}>
                        <Link to={object.linkDownload}>
                          <img
                            src={object.img}
                            alt=""
                            className="download-app-img"
                          ></img>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}

                <img
                  src={smart.image}
                  alt=""
                  className="card-product-img"
                  style={{ float: `${smart.id % 2 === 0 ? "left" : "right"}` }}
                />
              </Col>
              <Col lg={5} className="">
                <h3 className="card-product-title">{smart.title}</h3>
                <h4 className="card-product-subtitle">{smart.subTitle}</h4>
                <div className="card-product-img-mobile d-none p-relative">
                  {smart?.downloadObjects?.length > 0 && (
                    <div className="d-flex p-absolute download-app-list">
                      {smart?.downloadObjects.map((object) => (
                        <div className="download-app-item" key={object.id}>
                          <Link to={object.linkDownload}>
                            <img
                              src={object.img}
                              alt=""
                              className="download-app-img"
                            ></img>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                  <img src={smart.image} alt="" class="float-none" />
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
                        <p className="card-product-item-des">
                          {item.subTitle}
                          <ul>
                            {item?.listChild &&
                              item?.listChild.map((child) => {
                                <li key={child}>{child}</li>;
                              })}
                          </ul>
                        </p>
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
                  <Link to="/smart-home-v3">
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
