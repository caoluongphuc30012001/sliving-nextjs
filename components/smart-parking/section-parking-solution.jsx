import React, { useState } from "react";
import item1Img from "@images/smart-parking-v3/png/img-solution1.png";
import item2Img from "@images/smart-parking-v3/png/img-solution2.png";

import connector from "@images/smart-parking-v3/svg/icon-connector.svg";
import tv from "@images/smart-parking-v3/svg/icon-tv.svg";
import phone from "@images/smart-parking-v3/svg/icon-phone.svg";
import dualrect from "@images/smart-parking-v3/svg/icon-dual-rect.svg";
import wifi from "@images/smart-parking-v3/svg/icon-wifi.svg";
import unicloud_b from "@images/smart-parking-v3/svg/icon-unicloud.svg";
import security from "@images/smart-parking-v3/svg/icon-security.svg";

import unicloud from "@images/smart-parking-v3/png/icon-cloud-w.png";
import connector_b from "@images/smart-parking-v3/png/icon-connector-b.png";
import tv_b from "@images/smart-parking-v3/png/icon-tv-b.png";
import phone_b from "@images/smart-parking-v3/png/icon-phone-b.png";
import dualrect_b from "@images/smart-parking-v3/png/icon-dual-rect-b.png";
import wifi_b from "@images/smart-parking-v3/png/icon-wifi-b.png";
import security_b from "@images/smart-parking-v3/png/icon-security-b.png";
import imgUnderLine from "@images/home-page-v3/svg/title-line-under.svg";

import ModalAdvise from "../common/modal/modal-advise/ModalAdvise";
import { Row } from "react-bootstrap";
import style from "./style.module.scss";

import Image from "next/image";
import { useTranslation } from "next-i18next";
const imgIconList = [
  [
    { icon_b: unicloud_b, icon: unicloud },
    { icon_b: tv_b, icon: tv },
    { icon_b: connector_b, icon: connector },
    { icon_b: wifi_b, icon: wifi },
    { icon_b: dualrect_b, icon: dualrect },
    { icon_b: dualrect_b, icon: dualrect },
    { icon_b: phone_b, icon: phone },
  ],
  [
    { icon_b: unicloud_b, icon: unicloud },
    { icon_b: tv_b, icon: tv },
    { icon_b: connector_b, icon: connector },
    { icon_b: wifi_b, icon: wifi },
    { icon_b: dualrect_b, icon: dualrect },
    { icon_b: phone_b, icon: phone },
    { icon_b: security_b, icon: security },
  ],
];
const mainImgList = [item1Img, item2Img];

const MobileItem = ({ item, parentId }) => {
  const { icon_b } = imgIconList[parentId][item.id];
  return (
    <div className={style["content"]}>
      <div>
        <img src={icon_b.src} alt="" />
      </div>
      <div className={style["content-title"]}>{item.title}</div>
      <div className={style["content-text"]}>{item.text}</div>
    </div>
  );
};

const IconActive = ({ item, isActive, setActive, id, parentId }) => {
  const { icon_b, icon } = imgIconList[parentId][item.id];
  return (
    <div
      onClick={() => setActive(id)}
      role="button"
      tabIndex={0}
      onKeyDown={() => {}}
      className={
        isActive
          ? style["icon-active"]
          : [style["icon-active"], style["deactive"]].join(" ")
      }
    >
      {isActive && (
        <div className={style["content"]}>
          <div className={style["content-title"]}>{item.title}</div>
          <div className={style["content-text"]}>{item.text}</div>
        </div>
      )}
      <div className={style["icon"]}>
        <img src={isActive ? icon_b.src : icon.src} alt="" />
      </div>
    </div>
  );
};

const SolutionItem = ({ item, setModalShow }) => {
  const [active, setActive] = useState(0);
  const { t, ready } = useTranslation("smartParking");
  return (
    <div className={style["solution-item-container"]}>
      <div className={style["solution-title"]}>{item.title}</div>
      <div>
        <img src={mainImgList[item.id].src} alt=""></img>
      </div>
      <div className={style["solution-title"]}>{item.secondTitle}</div>
      <div className={style["solution-content"]}>
        <div className={style["content-container"]}>
          {item?.iconList?.map((icon) => {
            return active !== icon.id ? (
              <IconActive
                key={icon.id}
                item={icon}
                isActive={false}
                id={icon.id}
                setActive={setActive}
                parentId={item.id}
              />
            ) : (
              <IconActive
                key={icon.id}
                item={icon}
                isActive={true}
                id={icon.id}
                setActive={setActive}
                parentId={item.id}
              />
            );
          })}
        </div>
        <div
          className={[style["content-container"], style["mobile"]].join(" ")}
        >
          {item?.iconList?.map((icon) => {
            return <MobileItem key={icon.id} item={icon} parentId={item.id} />;
          })}
        </div>
      </div>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={() => {}}
        onClick={() => setModalShow(true)}
        className={style["solution-button"]}
      >
        <p className={style["button-text"]}>
          {t("smartParking.sectionParkingSolution.buttonAdvise")}
        </p>
      </div>
    </div>
  );
};

const SectionParkingSolution = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const { t, ready } = useTranslation("smartParking");
  const ListItem = t("smartParking.sectionParkingSolution.listItem", {
    returnObjects: true,
  });
  return (
    <section className={style["section-parking-solution"]}>
      <div className={style["parking-solution-container"]}>
        <Row className={style["content"]}>
          <span className={style["sub-title"]}>
            {t("smartParking.sectionParkingSolution.title")}
          </span>
          <h2 className={style["title"]}>
            {t("smartParking.sectionParkingSolution.subTitle")}
          </h2>
          <div className={style["underline"]}></div>
        </Row>
        {ListItem?.map((item) => {
          return (
              <SolutionItem
                item={item}
                key={item.id}
                setModalShow={setModalShow}
              />
          );
        })}
      </div>
      <ModalAdvise show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
};

export default SectionParkingSolution;
