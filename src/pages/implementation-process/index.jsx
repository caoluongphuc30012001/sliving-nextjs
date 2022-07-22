import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import LayoutV3 from "@components/layout-v3";
import SectionHelpMore from "@components/help-more/section-help-more";
import iconArrow from "@images/icon/icon-arrow-process.svg";
import iconQuestion from "@images/icon/icon-question-process.svg";
import ModalAdvise from "@components/modal/modal-advise/ModalAdvise";
import "./style.scss";
import Seo from "@components/seo";
import { useTranslation } from "react-i18next";

const ImplementationProcess = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const { t } = useTranslation();

  return (
    <LayoutV3>
      <Seo
        title="Quy Trình Triển Khai Gói Giải Pháp"
        description="Quy Trình Triển Khai Gói Giải Pháp | Sliving"
        url="/implementation-process/"
        metaImage="/thumbnail.png"
      />
      <main>
        <section className="section-process">
          <Container
            className="padding-left-right"
            fluid
            style={{ maxWidth: 1220 }}
          >
            <h3 className="sub-title-smart-secuirity">
              {t("processPage.subTitle")}
            </h3>
            <h2 className="title-smart-secuirity">{t("processPage.title")}</h2>
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
                  01. <span>{t("processPage.process.step1.title")}</span>
                </p>
                <p className="detail-process-sliving">
                  {t("processPage.process.step1.subTitle")}
                </p>
              </Col>
              <Col md={6}>
                <p className="title-process-sliving">
                  <Image
                    src={iconArrow}
                    className="img-fluid img-arrow-process"
                  />
                  02. <span>{t("processPage.process.step2.title")}</span>
                </p>
                <p className="detail-process-sliving">
                  {t("processPage.process.step2.subTitle")}
                </p>
              </Col>
              <Col md={6}>
                <p className="title-process-sliving">
                  <Image
                    src={iconArrow}
                    className="img-fluid img-arrow-process"
                  />
                  03. <span>{t("processPage.process.step3.title")}</span>
                </p>
                <p className="detail-process-sliving">
                  {t("processPage.process.step3.subTitle")}
                </p>
              </Col>
              <Col md={6}>
                <p className="title-process-sliving">
                  <Image
                    src={iconArrow}
                    className="img-fluid img-arrow-process"
                  />
                  04.<span>{t("processPage.process.step4.title")}</span>
                </p>
                <p className="detail-process-sliving">
                  {t("processPage.process.step4.subTitle")}
                </p>
              </Col>
              <Col md={6}>
                <p className="title-process-sliving">
                  <Image
                    src={iconArrow}
                    className="img-fluid img-arrow-process"
                  />
                  05.<span>{t("processPage.process.step5.title")}</span>
                </p>
                <p className="detail-process-sliving">
                  {t("processPage.process.step5.subTitle")}
                </p>
              </Col>
              <Col md={6}>
                <div className="div-wrapper-answers">
                  <p className="title-answers-process">
                    <Image src={iconQuestion} />
                    <span>{t("processPage.process.answerProcess.title")}</span>
                  </p>
                  <p className="detail-answers-process">
                    {t("processPage.process.answerProcess.subTitle")}
                  </p>
                  <button type="button" onClick={() => setModalShow(true)}>
                    <span>{t("processPage.process.buttonAdvise")}</span>
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
