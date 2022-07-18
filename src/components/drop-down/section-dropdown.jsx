import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import subBackground from "@images/smart-lighting-v3/png/sub-background.png";
import ModalAdvise from "@components/modal/modal-advise/ModalAdvise";
import { useTranslation } from "react-i18next";

const SectionDropdown = ({ listItem }) => {
  const [current, setCurrent] = useState(0);
  const [modalShow, setModalShow] = React.useState(false);
  const { t } = useTranslation();

  return (
    <section className="section-drop-down">
      <div className="title-box">
        <p className="sub-title">{t("sectionDropdown.title")}</p>
        <p className="title">{t("sectionDropdown.subTitle")}</p>
        {/* <p className="title">Các Giải Pháp Chiếu Sáng123</p> */}
        <div className="item-border"></div>
      </div>
      <div className="drop-down-wrap">
        <div className="left-part">
          <Accordion defaultActiveKey={0}>
            {listItem.map((item) => {
              return (
                <Accordion.Item eventKey={item.id} key={item.id}>
                  <Accordion.Header
                    onClick={() => {
                      setCurrent(item.id);
                    }}
                  >
                    <p className="title">{item.title}</p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="content">{item.content}</p>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
          <div className="advise-box">
            <button className="btn-advise" onClick={() => setModalShow(true)}>
              <div className="content">{t("sectionDropdown.consultNow")}</div>
            </button>
          </div>
        </div>
        <div className="right-part">
          <img src={listItem[current].image} className="main-image" alt="" />
          <img src={subBackground} alt="" className="sub-background" />
          <div className="hide"></div>
        </div>
      </div>
      <ModalAdvise show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
};

export default SectionDropdown;
