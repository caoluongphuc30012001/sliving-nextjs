import React, { useState } from "react";
import item1Img from "../../images/smart-parking-v3/png/img-solution1.png";
import item2Img from "../../images/smart-parking-v3/png/img-solution2.png";

import connector from "../../images/smart-parking-v3/svg/icon-connector.svg";
import tv from "../../images/smart-parking-v3/svg/icon-tv.svg";
import phone from "../../images/smart-parking-v3/svg/icon-phone.svg";
import dualrect from "../../images/smart-parking-v3/svg/icon-dual-rect.svg";
import wifi from "../../images/smart-parking-v3/svg/icon-wifi.svg";
import unicloud_b from "../../images/smart-parking-v3/svg/icon-unicloud.svg";
import security from "../../images/smart-parking-v3/svg/icon-security.svg";

import unicloud from "../../images/smart-parking-v3/png/icon-cloud-w.png";
import connector_b from "../../images/smart-parking-v3/png/icon-connector-b.png";
import tv_b from "../../images/smart-parking-v3/png/icon-tv-b.png";
import phone_b from "../../images/smart-parking-v3/png/icon-phone-b.png";
import dualrect_b from "../../images/smart-parking-v3/png/icon-dual-rect-b.png";
import wifi_b from "../../images/smart-parking-v3/png/icon-wifi-b.png";
import security_b from "../../images/smart-parking-v3/png/icon-security-b.png";
import imgUnderLine from "../../images/home-page-v3/svg/title-line-under.svg";

import ModalAdvise from "../modal/modal-advise/ModalAdvise";
import { Row } from "react-bootstrap";
import style from "./style.module.scss";

import Image from "next/image";
const ListItem = [
  {
    id: 0,
    title: "Giải Pháp Bãi Đỗ Xe Trong Hầm",
    secondTitle: "Giải Pháp Sơ Đồ Bãi Đỗ Xe Trong Hầm",
    mainImg: item1Img,
    iconList: [
      {
        id: 0,
        icon_b: unicloud_b,
        icon: unicloud,
        title: "Smart Cloud",
        text: "Thu thập và xử lý dữ liệu thông tin chính xác, hiệu quả",
      },
      {
        id: 1,
        icon_b: tv_b,
        icon: tv,
        title: "Gói dịch vụ",
        text: "Cung cấp thông tin chi tiết lịch trình xe/dịch vụ điều hướng phương tiện/dịch vụ thanh toán online",
      },
      {
        id: 2,
        icon_b: connector_b,
        icon: connector,
        title: "Điểm kết nối thông minh",
        text: "Kết nối tất cả thiết bị trong khu vực bãi đỗ xe thành mạng lưới",
      },
      {
        id: 3,
        icon_b: wifi_b,
        icon: wifi,
        title: "Thiết bị cảm biến",
        text: "Nhận biết sự thay đổi trạng thái xe ra vào/thu thập thông tin/chuyển đổi tín hiệu",
      },
      {
        id: 4,
        icon_b: dualrect_b,
        icon: dualrect,
        title: "Bảng chỉ dẫn thông minh",
        text: "Hiển thị thông tin số chỗ trống theo thời gian thực/điều hướng xe di chuyển đến địa điểm đỗ nhanh chóng",
      },
      {
        id: 5,
        icon_b: phone_b,
        icon: phone,
        title: "App & Map",
        text: "Tích hợp bản đồ trong ứng dụng/định vị, dò, tìm vị trí/đặt chỗ trống thông qua thiết bị di động",
      },
    ],
  },
  {
    id: 1,
    title: "Giải Pháp Bãi Đỗ Xe Ngoài Trời",
    secondTitle: "Sơ Đồ Giải Pháp Bãi Đỗ Xe Ngoài Trời",
    mainImg: item2Img,
    iconList: [
      {
        id: 0,
        icon_b: unicloud_b,
        icon: unicloud,
        title: "Smart Cloud",
        text: "Thu thập và xử lý dữ liệu thông tin chính xác, hiệu quả",
      },
      {
        id: 1,
        icon_b: tv_b,
        icon: tv,
        title: "Gói dịch vụ",
        text: "Cung cấp thông tin chi tiết lịch trình xe/dịch vụ điều hướng phương tiện/dịch vụ thanh toán online",
      },
      {
        id: 2,
        icon_b: connector_b,
        icon: connector,
        title: "Điểm kết nối thông minh",
        text: "Kết nối tất cả thiết bị trong khu vực bãi đỗ xe thành mạng lưới",
      },
      {
        id: 3,
        icon_b: wifi_b,
        icon: wifi,
        title: "Thiết bị cảm biến",
        text: "Nhận biết sự thay đổi trạng thái xe ra vào/thu thập thông tin/chuyển đổi tín hiệu",
      },
      {
        id: 4,
        icon_b: dualrect_b,
        icon: dualrect,
        title: "Bảng chỉ dẫn thông minh",
        text: "Hiển thị thông tin số chỗ trống theo thời gian thực/điều hướng xe di chuyển đến địa điểm đỗ nhanh chóng",
      },
      {
        id: 5,
        icon_b: phone_b,
        icon: phone,
        title: "App & Map",
        text: "Tích hợp bản đồ trong ứng dụng/định vị, dò, tìm vị trí/đặt chỗ trống thông qua thiết bị di động",
      },
      {
        id: 6,
        icon_b: security_b,
        icon: security,
        title: "Hệ thống bảo vệ",
        text: "Đảm bảo các tính năng của thiết bị được hoạt động tốt nhất khi lắp đặt ngoài trời",
      },
    ],
  },
];

const MobileItem = ({ item }) => {
  return (
    <div className={style["content"]}>
      <div>
        <Image src={item.icon_b} alt="" />
      </div>
      <div className={style["content-title"]}>{item.title}</div>
      <div className={style["content-text"]}>{item.text}</div>
    </div>
  );
};

const IconActive = ({ item, isActive, setActive, id }) => {
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
        <Image src={isActive ? item.icon_b : item.icon} alt="" />
      </div>
    </div>
  );
};

const SolutionItem = ({ item, setModalShow }) => {
  const [active, setActive] = useState(0);
  return (
    <div className={style["solution-item-container"]}>
      <div className={style["solution-title"]}>{item.title}</div>
      <div>
        <Image src={item.mainImg} alt=""></Image>
      </div>
      <div className={style["solution-title"]}>{item.secondTitle}</div>
      <div className={style["solution-content"]}>
        <div className={style["content-container"]}>
          {item.iconList.map((icon) => {
            return active !== icon.id ? (
              <IconActive
                key={icon.id}
                item={icon}
                isActive={false}
                id={icon.id}
                setActive={setActive}
              />
            ) : (
              <IconActive
                key={icon.id}
                item={icon}
                isActive={true}
                id={icon.id}
                setActive={setActive}
              />
            );
          })}
        </div>
        <div
          className={[style["content-container"], style["mobile"]].join(" ")}
        >
          {item.iconList.map((icon) => {
            return <MobileItem key={icon.id} item={icon} />;
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
        <p className={style["button-text"]}>Tư vấn ngay</p>
      </div>
    </div>
  );
};

const SectionParkingSolution = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <section className={style["section-parking-solution"]}>
      <div className={style["parking-solution-container"]}>
        <Row className={style["content"]}>
          <span className={style["sub-title"]}>SMART PARKING</span>
          <h2 className={style["title"]}>Giải Pháp Smart Parking</h2>
          <div className={style["underline"]}></div>
        </Row>
        {ListItem.map((item) => {
          return (
            <>
              <SolutionItem
                item={item}
                key={item.id}
                setModalShow={setModalShow}
              />
            </>
          );
        })}
      </div>
      <ModalAdvise show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
};

export default SectionParkingSolution;
