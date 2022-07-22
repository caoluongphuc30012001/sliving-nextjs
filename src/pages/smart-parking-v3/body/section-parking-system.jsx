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
import { useTranslation } from "react-i18next";

const imgHardwareItemList = [
  [barrier, cam1, cam2],
  [machine1, machine2, screen],
];

const iconAppMappContentList = [ip_phone, ip_map];

const HardwareItem = ({ listItem }) => {
  return (
    <div className="item-container">
      <div className="title">
        <div className="text">{listItem.title}</div>
        <div className="underline"></div>
      </div>
      {listItem.contentList?.map((item) => {
        return (
          <div key={item.id} className="item-sub-container">
            <div className="item-content">
              <img
                className="content-left"
                src={imgHardwareItemList[listItem.id][item.id]}
                alt=""
              />
              <div className="content-right">
                <div className="content-right-title">{item.title}</div>
                <div className="content-right-desc">
                  {item.descList.map((item) => {
                    return (
                      <div key={item.id} className="desc-text">
                        {item}
                      </div>
                    );
                  })}
                </div>
                <div className="attribute-list">
                  <div className="attribute-left">
                    {item.attributeList?.map((item) => {
                      return (
                        <div key={item.id} className="attribute-left-title">
                          {item.title}
                        </div>
                      );
                    })}
                  </div>
                  <div className="attribute-right">
                    {item.attributeList.map((item) => {
                      return (
                        <div key={item.id} className="attribute-right-content">
                          <div className="text">:</div>
                          <div className="text">{item.value}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="underline"></div>
          </div>
        );
      })}
    </div>
  );
};

const SectionParkingSystem = () => {
  const [seclection, setSeclection] = useState(0);

  const { t, ready } = useTranslation();

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

  return (
    <section className="section-parking-system">
      <div className="parking-system-container">
        <div className="header">
          <h2 className="sub-title">
            {ready && t("smartParking.sectionParkingSystem.subTitle")}
          </h2>
          <span className="title">
            {ready && t("smartParking.sectionParkingSystem.title")}
          </span>
          <div className="underline"></div>
        </div>
        <div className="software">
          <div className="software-title">
            {ready && t("smartParking.sectionParkingSystem.software.title")}
          </div>
          <div className="software-content">
            <div className="option-list">
              {ready &&
                softwareContentList.map((item) => {
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSeclection(item.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={() => {}}
                      className="option"
                    >
                      <div
                        className={
                          seclection === item.id ? "text active" : "text"
                        }
                      >
                        {item.title}
                      </div>
                      <div
                        className={
                          seclection === item.id
                            ? "underline active"
                            : "underline"
                        }
                      ></div>
                    </div>
                  );
                })}
            </div>
            <div className="content-container">
              <div className="content">
                <div className="content-title">
                  {ready &&
                    t(
                      "smartParking.sectionParkingSystem.software.featureTitle"
                    )}
                  <img src={icon_ellipse} className="content-img" alt=""></img>
                </div>
                <ul className="content-text">
                  {ready &&
                    softwareContentList[`${seclection}`].content.feature.map(
                      (item) => {
                        return <li key={item.id}>{item.text}</li>;
                      }
                    )}
                </ul>
              </div>
              <div className="content">
                <div className="content-title">
                  {ready &&
                    t(
                      "smartParking.sectionParkingSystem.software.specificationTitle"
                    )}
                  <img src={icon_ellipse} className="content-img" alt=""></img>
                </div>
                <ul className="content-text">
                  {ready &&
                    softwareContentList[`${seclection}`].content.desc.map(
                      (item) => {
                        return <li key={item.id}>{item.text}</li>;
                      }
                    )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="hardware">
          <div className="hardware-title">
            {ready && t("smartParking.sectionParkingSystem.hardware.title")}
          </div>
          {ready &&
            hardwareItemList.map((item) => {
              return <HardwareItem key={item.id} listItem={item} />;
            })}
          <div className="item-container">
            <div className="title">
              <div className="text">App &amp; Map</div>
              <div className="underline"></div>
            </div>
            <div className="appNmap-container">
              <div className="appNmap-img">
                <img src={ip13} alt=""></img>
              </div>
              <div className="appNmap-content-container">
                {ready &&
                  appMapContent.map((item) => {
                    return (
                      <div className="appNmap-content">
                        <div className="appNmap-left">
                          <img src={iconAppMappContentList[item.id]} alt="" />
                        </div>
                        <div className="appNmap-right">
                          <div className="appNmap-right-title">
                            {item.title}
                          </div>
                          <div className="appNmap-right-text">
                            {item.content.map((item) => {
                              return <div>{item.content}</div>;
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="underline"></div>
            </div>
            <div className="hardware-background"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionParkingSystem;
