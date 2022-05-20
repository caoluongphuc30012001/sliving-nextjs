import React from "react";

import iconMaintain from "../../../images/smart-parking-v3/svg/icon-maintain.svg";

import iconModernity from "../../../images/smart-parking-v3/svg/icon-modernity.svg";

import iconParkingPhone from "../../../images/smart-parking-v3/svg/icon-parking-phone.svg";

import iconParkingTime from "../../../images/smart-parking-v3/svg/icon-parking-time.svg";

import iconSafety from "../../../images/smart-parking-v3/svg/icon-safety.svg";

import iconSolving from "../../../images/smart-parking-v3/svg/icon-solving.svg";

const SectionDefinition = () => {
  const infoItem = {
    title: "Smart Parking Là Gì ?",
    webContents: [
      {
        id: 0,
        content:
          "Giải pháp quản lý bãi đỗ xe Smart Parking đáp ứng tiêu chí hiện đại và tiện lợi trong việc kiểm soát," +
          " quản lý tình trạng xe ra/vào và cho phép người dùng chủ động lựa chọn được chỗ đỗ xe phù hợp thông qua" +
          " Smart Parking App. Giải pháp bãi đỗ xe thông minh không chỉ đáp ứng được tiêu chí đảm bảo an toàn - an ninh," +
          " kiểm soát nguồn xe ra/ vào hiệu quả mà còn giúp giải quyết tốt các hạn chế của việc giữ xe truyền thống.",
      },
      {
        id: 1,
        content:
          "Với giải pháp Smart Parking của Tập đoàn Unicloud sẽ giúp doanh nghiệp tiết kiệm được nhiều chi phí và nhân lực," +
          " tăng cường trải nghiệm hữu ích và tiện lợi cho cư dân trong việc dò tìm vị trí bãi đỗ xe hay linh hoạt thanh toán qua ứng dụng.",
      },
    ],
    mobileContents: [
      {
        id: 0,
        content:
          "Smart Parking được thiết kế và lắp đặt theo một chu trình khép kín, bao gồm các thiết bị thông minh như: cảm biến," +
          " bảng đèn Led điều hướng, camera thông minh.... Tích hợp vào ứng dụng Smart Parking (App) giúp kiểm soát và quản lý" +
          " xe ra vào, người dùng có thể chủ động đặt chỗ và có sự lựa chọn đỗ xe phù hợp nhất.",
      },
    ],
    listIcon: [
      { id: 0, title: "Tiết kiệm thời gian, nguồn lực", icon: iconParkingTime },
      { id: 1, title: "Đảm bảo an ninh, an toàn", icon: iconSafety },
      {
        id: 2,
        title: "Giải quyết hạn chế của gửi xe truyền thống",
        icon: iconSolving,
      },
      { id: 3, title: "Lắp đặt, bảo trì nhanh chóng", icon: iconMaintain },
      { id: 4, title: "Dễ dàng quản lý qua App", icon: iconParkingPhone },
      { id: 5, title: "Kiểm soát ra/vào hiệu quả", icon: iconModernity },
    ],
  };

  return (
    <section className="smart-parking-definition-v3">
      <div className="content">
        <div className="left-content">
          <h1 className="left-content-title">{infoItem.title}</h1>
          <div className="left-all-description-container">
            <div className="left-all-description">
              {infoItem.webContents.map((descItem) => {
                return <p className="web-content-desc">{descItem.content}</p>;
              })}
              {infoItem.mobileContents.map((descItem) => {
                return (
                  <p className="mobile-content-desc">{descItem.content}</p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className="right-content-container">
            {infoItem.listIcon.map((iconItem) => {
              return (
                <div className="right-icon-item">
                  <img
                    src={iconItem.icon}
                    alt=""
                    className="icon-item-img"
                  ></img>
                  <p className="icon-item-title">{iconItem.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDefinition;
