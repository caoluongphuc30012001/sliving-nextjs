import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import subBackground from "@images/smart-lighting-v3/png/sub-background.png";
import ModalAdvise from "@components/common/modal/ModalAdvise/ModalAdvise";
import { useTranslation } from "next-i18next";

import style from "./style.module.scss";
const SectionDropdown = ({ listItem }) => {
  const [current, setCurrent] = useState(0);
  const [modalShow, setModalShow] = React.useState(false);
  const { t } = useTranslation("smartLighting");

  return (
    <section className={style["section-drop-down"]}>
      <div className={style["title-box"]}>
        <p className={style["sub-title"]}>{t("sectionDropdown.title")}</p>
        <p className={style["title"]}>{t("sectionDropdown.subTitle")}</p>
        {/* <p className={style["title"]}>Các Giải Pháp Chiếu Sáng123</p> */}
        <div className={style["item-border"]}></div>
      </div>
      <div className={style["drop-down-wrap"]}>
        <div className={style["left-part"]}>
          <Accordion defaultActiveKey={0}>
            {listItem.map((item) => {
              return (
                <Accordion.Item eventKey={item.id} key={item.id}>
                  <Accordion.Header
                    onClick={() => {
                      setCurrent(item.id);
                    }}
                  >
                    <p className={style["title"]}>{item.title}</p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className={style["content"]}>{item.content}</p>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
          <div className={style["advise-box"]}>
            <button
              className={style["btn-advise"]}
              onClick={() => setModalShow(true)}
            >
              <div className={style["content"]}>
                {t("sectionDropdown.consultNow")}
              </div>
            </button>
          </div>
        </div>
        <div className={style["right-part"]}>
          <img
            src={listItem[current].image.src}
            className={style["main-image"]}
            alt=""
          />
          <img src={subBackground.src} alt="" className={style["sub-background"]} />
          <div className={style["hide"]}></div>
        </div>
      </div>
      <ModalAdvise show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
};

export default SectionDropdown;
