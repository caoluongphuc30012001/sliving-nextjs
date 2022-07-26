import React, { useState } from "react";
import icon_ellipse from "@images/smart-parking-v3/png/icon-ellipse.png";
import barrier from "@images/smart-parking-v3/png/img-barrier.png";
import cam1 from "@images/smart-parking-v3/png/img-camera.png";
import cam2 from "@images/smart-parking-v3/png/img-camera2.png";
import machine1 from "@images/smart-parking-v3/png/img-machine.png";
import machine2 from "@images/smart-parking-v3/png/img-machine2.png";
import screen from "@images/smart-parking-v3/png/img-screen.png";
import ip13 from "@images/smart-parking-v3/png/img-ip13.png";
import ip_phone from "@images/smart-parking-v3/png/icon-iphone-phone.png";
import ip_map from "@images/smart-parking-v3/png/icon-iphone-map.png";
import style from "./style.module.scss";

import Image from "next/image";
import { useTranslation } from "next-i18next";

const imgHardwareItemList = [
  [barrier, cam1, cam2],
  [machine1, machine2, screen],
];
const iconAppMappContentList = [ip_phone, ip_map];

const HardwareItem = ({ listItem }) => {
  return (
    <div className={style["item-container"]}>
      <div className={style["title"]}>
        <div className={style["text"]}>{listItem.title}</div>
        <div className={style["underline"]}></div>
      </div>
      {listItem.contentList?.map((item) => {
        return (
          <div key={item.id} className={style["item-sub-container"]}>
            <div className={style["item-content"]}>
              <div className={style["content-left"]}>
                <img
                  className={style["content-left"]}
                  src={imgHardwareItemList[listItem.id][item.id].src}
                  alt=""
                />
              </div>
              <div className={style["content-right"]}>
                <div className={style["content-right-title"]}>{item.title}</div>
                <div className={style["content-right-desc"]}>
                  {item.descList.map((item, index) => {
                    const id = index + 1;
                    return (
                      <div key={id} className={style["desc-text"]}>
                        {item}
                      </div>
                    );
                  })}
                </div>
                <div className={style["attribute-list"]}>
                  <div className={style["attribute-left"]}>
                    {item.attributeList?.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className={style["attribute-left-title"]}
                        >
                          {item.title}
                        </div>
                      );
                    })}
                  </div>
                  <div className={style["attribute-right"]}>
                    {item.attributeList.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className={style["attribute-right-content"]}
                        >
                          <div className={style["text"]}>:</div>
                          <div className={style["text"]}>{item.value}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className={style["underline"]}></div>
          </div>
        );
      })}
    </div>
  );
};

const SectionParkingSystem = () => {
  const { t } = useTranslation("smartParking");

  const softwareContentList = t(
    "smartParking.sectionParkingSystem.software.contentList",
    { returnObjects: true }
  );

  const hardwareItemList = t(
    "smartParking.sectionParkingSystem.hardware.itemList",
    { returnObjects: true }
  );

  const appMapContent = t(
    "smartParking.sectionParkingSystem.appMapContentList",
    { returnObjects: true }
  );
  const [seclection, setSeclection] = useState(0);
  return (
    <section className={style["section-parking-system"]}>
      <div className={style["parking-system-container"]}>
        <div className={style["header"]}>
          <h2 className={style["sub-title"]}>SMART PARKING</h2>
          <span className={style["title"]}>Hệ Thống</span>
          <div className={style["underline"]}></div>
        </div>
        <div className={style["software"]}>
          <div className={style["software-title"]}>Phần Mềm</div>
          <div className={style["software-content"]}>
            <div className={style["option-list"]}>
              {softwareContentList.map((item) => {
                return (
                  <div
                    key={item.id}
                    onClick={() => setSeclection(item.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={() => {}}
                    className={style["option"]}
                  >
                    <div
                      className={
                        seclection === item.id
                          ? [style["text"], style["active"]].join(" ")
                          : style["text"]
                      }
                    >
                      {item.title}
                    </div>
                    <div
                      className={
                        seclection === item.id
                          ? [style["underline"], style["active"]].join(" ")
                          : style["underline"]
                      }
                    ></div>
                  </div>
                );
              })}
            </div>
            <div className={style["content-container"]}>
              <div className={style["content"]}>
                <div className={style["content-title"]}>
                  Chức năng
                  <div className={style["content-img"]}>
                    <img src={icon_ellipse.src} alt=""/>
                  </div>
                </div>
                <ul className={style["content-text"]}>
                  {softwareContentList[`${seclection}`].content.feature.map(
                    (item) => {
                      return <li key={item.id}>{item.text}</li>;
                    }
                  )}
                </ul>
              </div>
              <div className={style["content"]}>
                <div className={style["content-title"]}>
                  Mô tả chi tiết
                  <div className={style["content-img"]}>
                    <img src={icon_ellipse.src} alt=""/>
                  </div>
                </div>
                <ul className={style["content-text"]}>
                  {softwareContentList[`${seclection}`].content.desc.map(
                    (item) => {
                      return <li key={item.id}>{item.text}</li>;
                    }
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={style["hardware"]}>
          <div className={style["hardware-title"]}>Phần Cứng</div>
          {hardwareItemList.map((item) => {
            return <HardwareItem key={item.id} listItem={item} />;
          })}
          <div className={style["item-container"]}>
            <div className={style["title"]}>
              <div className={style["text"]}>App &amp; Map</div>
              <div className={style["underline"]}></div>
            </div>
            <div className={style["appNmap-container"]}>
              <div className={style["appNmap-img"]}>
              <img src={ip13.src} alt=""></img>
              </div>
              <div className={style["appNmap-content-container"]}>
                {appMapContent.map((item, index) => {
                  const id = index + 1;
                  return (
                    <div key={id} className={style["appNmap-content"]}>
                      <div className={style["appNmap-left"]}>
                      <img src={iconAppMappContentList[item.id].src} alt="" />
                      </div>
                      <div className={style["appNmap-right"]}>
                        <div className={style["appNmap-right-title"]}>
                          {item.title}
                        </div>
                        <div className={style["appNmap-right-text"]}>
                          {item.content.map((item) => {
                            return <div key={item.id}>{item.content}</div>;
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={style["underline"]}></div>
            </div>
            <div className={style["hardware-background"]}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionParkingSystem;
