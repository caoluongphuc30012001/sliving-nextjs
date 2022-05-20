import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Image } from "react-bootstrap";
import LayoutV3 from "../../components/layout-v3";
import SectionHelpMore from "../../components/help-more/section-help-more";
import iconArrow from "@images/icon/icon-arrow-process.svg";
import iconQuestion from "@images/icon/icon-question-process.svg";
import ModalAdvise from "@components/modal/modal-advise/ModalAdvise";

import "./style.scss";

const ImplementationProcess = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <LayoutV3>
      <main>
        <section className="section-process">
          <Container
            className="padding-left-right"
            fluid
            style={{ maxWidth: 1220 }}
          >
            <h3 className="sub-title-smart-secuirity">PROCESS</h3>
            <h2 className="title-smart-secuirity">
              Quy Trình Triển Khai Gói Giải Pháp
            </h2>
            <div>
              <div className="div-under-smart-security"></div>
            </div>
            <Row className="gx-5 gy-5 row-main-process">
              <Col md={6}>
                <p className="title-process-sliving">
                  <Image
                    src={iconArrow}
                    className="img-fluid img-arrow-process"
                  />
                  01. <span>Tiếp nhận nhu cầu và gửi báo giá sơ bộ</span>
                </p>
                <p className="detail-process-sliving">
                  Khách hàng liên hệ đến Sliving và cung cấp các thông tin về
                  nhu cầu lắp đặt gói giải pháp thông minh. Bộ phận chuyên gia
                  của chúng tôi sẽ tư vấn sơ bộ về các giải pháp, thiết bị phù
                  hợp với nhu cầu, điều kiện của khách hàng và gửi báo giá sơ bộ
                  để dễ dàng tham khảo.
                </p>
              </Col>
              <Col md={6}>
                <p className="title-process-sliving">
                  <Image
                    src={iconArrow}
                    className="img-fluid img-arrow-process"
                  />
                  02. <span>Khảo sát và gửi báo giá chi tiết</span>
                </p>
                <p className="detail-process-sliving">
                  Sau khi đã hiểu rõ nhu cầu khách hàng, chúng tôi sẽ có một
                  buổi khảo sát thực tế tại vị trí thi công lắp đặt, để hiểu rõ
                  hơn về quy mô dự án, phối cảnh, phong cách thiết kế. Đội kỹ
                  thuật dự án của Sliving sẽ trao đổi kỹ lưỡng, thống nhất các
                  giải pháp áp dụng và gửi báo giá cụ thể cho khách hàng.
                </p>
              </Col>
              <Col md={6}>
                <p className="title-process-sliving">
                  <Image
                    src={iconArrow}
                    className="img-fluid img-arrow-process"
                  />
                  03. <span>Ký hợp đồng và đặt cọc</span>
                </p>
                <p className="detail-process-sliving">
                  Hai bên thoả thuận và tiến hành ký kết hợp đồng sau khi đã
                  chốt phương án cuối cùng. Khách hàng sẽ cọc một khoản chi phí
                  hợp lý để giúp đội ngũ Sliving triển khai bản vẽ chi tiết,
                  điều phối kỹ thuật và tiến hành phương án thi công thuận lợi,
                  nhanh chóng hơn.
                </p>
              </Col>
              <Col md={6}>
                <p className="title-process-sliving">
                  <Image
                    src={iconArrow}
                    className="img-fluid img-arrow-process"
                  />
                  04.<span>Theo dõi tiến độ dự án</span>
                </p>
                <p className="detail-process-sliving">
                  Đội ngũ kỹ thuật của Sliving sẽ trực tiếp triển khai lắp đặt
                  để đảm bảo tiến độ dự án theo đúng kế hoạch và tính nhất quán
                  với bản thiết kế ban đầu. Ngoài ra chúng tôi cũng phối hợp với
                  các bên liên quan theo từng giai đoạn thi công để đảm bảo chất
                  lượng dự án tốt nhất.
                </p>
              </Col>
              <Col md={6}>
                <p className="title-process-sliving">
                  <Image
                    src={iconArrow}
                    className="img-fluid img-arrow-process"
                  />
                  05.<span>Bàn giao dự án, hỗ trợ, bảo trì 24/24</span>
                </p>
                <p className="detail-process-sliving">
                  Tiến hành nghiệm thu số lượng thiết bị đã lắp đặt, tính năng
                  hệ thống đáp ứng đúng và đủ như yêu cầu. Đại diện Sliving sẽ
                  hướng dẫn cách sử dụng thiết bị và cam kết bảo hành thiết bị,
                  hỗ trợ kỹ thuật cho khách hàng vào tất cả các ngày trong tuần.
                </p>
              </Col>
              <Col md={6}>
                <div className="div-wrapper-answers">
                  <p className="title-answers-process">
                    <Image src={iconQuestion} />
                    <span>Giải đáp</span>
                  </p>
                  <p className="detail-answers-process">
                    Giải đáp mọi thắc mắc của khách hàng về nhu cầu lắp đặt gói
                    giải pháp thông minh và quy trình triển khai dự án.
                  </p>
                  <button type="button" onClick={() => setModalShow(true)}>
                    <span>Tư vấn ngay</span>
                  </button>
                </div>
              </Col>
            </Row>
            <Row className="gx-5 row-main-process"></Row>
            <Row className="gx-5 row-main-process"></Row>
          </Container>
        </section>
        <SectionHelpMore />
      </main>
      <ModalAdvise show={modalShow} onHide={() => setModalShow(false)} />
    </LayoutV3>
  );
};

export default ImplementationProcess;
