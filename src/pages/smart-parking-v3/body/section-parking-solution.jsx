import { React, useState } from "react";
import item1Img from "../../../images/smart-parking-v3/png/img-solution1.png";
import item2Img from "../../../images/smart-parking-v3/png/img-solution2.png";

import connector from "../../../images/smart-parking-v3/svg/icon-connector.svg";
import tv from "../../../images/smart-parking-v3/svg/icon-tv.svg";
import phone from "../../../images/smart-parking-v3/svg/icon-phone.svg";
import dualrect from "../../../images/smart-parking-v3/svg/icon-dual-rect.svg";
import wifi from "../../../images/smart-parking-v3/svg/icon-wifi.svg";
import unicloud_b from "../../../images/smart-parking-v3/svg/icon-unicloud.svg";
import security from "../../../images/smart-parking-v3/svg/icon-security.svg";

import unicloud from "../../../images/smart-parking-v3/png/icon-cloud-w.png";
import connector_b from "../../../images/smart-parking-v3/png/icon-connector-b.png";
import tv_b from "../../../images/smart-parking-v3/png/icon-tv-b.png";
import phone_b from "../../../images/smart-parking-v3/png/icon-phone-b.png";
import dualrect_b from "../../../images/smart-parking-v3/png/icon-dual-rect-b.png";
import wifi_b from "../../../images/smart-parking-v3/png/icon-wifi-b.png";
import security_b from "../../../images/smart-parking-v3/png/icon-security-b.png";

const ListItem = [
  {
    id: 0,
    title: "Giải Pháp Bãi Đỗ Xe Trong Hầm",
    secondTitle: "Sơ Đồ Giải Pháp Bãi Đỗ Xe Trong Hầm",
    mainImg: item1Img,
    content: {
      title: "Smart Cloud",
      text: "Thu thập và xử lý dữ liệu thông tin chính xác, hiệu quả",
      icon: unicloud,
    },
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
    title: "Bãi Đỗ Xe Ngoài Trời",
    secondTitle: "Sơ Đồ Bãi Đỗ Xe Ngoài Trời",
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
    <div className="content">
      <div>
        <img src={item.icon_b} alt="" />
      </div>
      <div className="content-title">{item.title}</div>
      <div className="content-text">{item.text}</div>
    </div>
  );
};

const IconActive = ({ item }) => {
  return (
    <div className="icon-active">
      <div className="content">
        <div className="content-title">{item.title}</div>
        <div className="content-text">{item.text}</div>
      </div>
      <div className="icon">
        <img src={item.icon_b} alt="" />
      </div>
    </div>
  );
};

const SolutionItem = ({ item }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="solution-item-container">
      <div className="solution-title">{item.title}</div>
      <div>
        <img src={item.mainImg} alt=""></img>
      </div>
      <div className="solution-title">{item.secondTitle}</div>
      <div className="solution-content">
        <div className="content-container">
          {item.iconList.map((icon) => {
            return active !== icon.id ? (
              <div>
                <img
                  className="img"
                  src={icon.icon}
                  alt=""
                  onClick={() => setActive(icon.id)}
                />
              </div>
            ) : (
              <IconActive item={icon} />
            );
          })}
        </div>
        <div className="content-container mobile">
          {item.iconList.map((icon) => {
            return <MobileItem item={icon} />;
          })}
        </div>
      </div>
      <div className="solution-button">
        <p className="button-text">Tư vấn ngay</p>
      </div>
    </div>
  );
};

export const SectionParkingSolution = () => {
  return (
    <section className="section-parking-solution">
      <div className="parking-solution-container">
        <div className="content">
          <h2 className="sub-title">SMART PARKING</h2>
          <span className="title">Giải Pháp Smart Parking</span>
          <div className="underline"></div>
        </div>
        {ListItem.map((item) => {
          return <SolutionItem item={item} key={item.id} />;
        })}
      </div>
    </section>
  );
};
