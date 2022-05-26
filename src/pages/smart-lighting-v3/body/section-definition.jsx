import React from "react";

import iconMaintain from "../../../images/smart-lighting-v3/svg/icon-maintain.svg";

import iconModernity from "../../../images/smart-lighting-v3/svg/icon-modernity.svg";

import iconParkingPhone from "../../../images/smart-lighting-v3/svg/icon-parking-phone.svg";

import iconParkingTime from "../../../images/smart-lighting-v3/svg/icon-parking-time.svg";

import iconSafety from "../../../images/smart-lighting-v3/svg/icon-safety.svg";

import iconSolving from "../../../images/smart-lighting-v3/svg/icon-solving.svg";

const SectionDefinition = () => {
  const infoItem = {
    title: "Smart Lighting Là Gì ?",
    webContents: [
      {
        id: 0,
        content:
          "Hiểu được vai trò quan trọng của yếu tố" +
          " ánh sáng trong các tòa nhà, căn hộ... Unicloud " +
          "đã cho ra đời giải pháp chiếu sáng thông minh" +
          " Smart Lighting: ứng dụng công nghệ hiện đại để " +
          "điều khiển và tác động vào nguồn sáng nhằm nâng " +
          "cao chất lượng chiếu sáng và tiết kiệm năng " +
          "lượng. ",
      },
      {
        id: 1,
        content:
          "Người dùng có thể dễ dàng điều chỉnh " +
          "các thiết bị chiếu sáng, bật tắt Dimming, đổi màu, điều khiển ánh sáng trong hội trường," +
          " phòng trưng bày sản phẩm, chạy kịch bản chiếu " +
          "sáng, bật/tắt theo ý muốn cá nhân mọi lúc" +
          ", mọi nơi bằng Smartphone hoặc bằng giọng nói.",
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
      { id: 0, title: "Kiểm soát linh hoạt", icon: iconParkingTime },
      { id: 1, title: "Tuỳ chỉnh theo nhu cầu", icon: iconSafety },
      {
        id: 2,
        title: "Tương thích mọi thiết bị",
        icon: iconSolving,
      },
      { id: 3, title: "Tiết kiệm điện năng", icon: iconMaintain },
      { id: 4, title: "Tiết kiệm thời gian", icon: iconParkingPhone },
      { id: 5, title: "An toàn, tiện lợi", icon: iconModernity },
    ],
  };

  return (
    <section className="smart-lighting-definition-v3">
      <div className="content">
        <div className="left-content">
          <h1 className="left-content-title">{infoItem.title}</h1>
          <div className="left-all-description-container">
            <div className="left-all-description">
              {infoItem.webContents.map((descItem) => {
                return (
                  <p key={descItem.id} className="web-content-desc">
                    {descItem.content}
                  </p>
                );
              })}
              {infoItem.mobileContents.map((descItem) => {
                return (
                  <p key={descItem.id} className="mobile-content-desc">
                    {descItem.content}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className="right-content-container">
            {infoItem.listIcon.map((iconItem) => {
              return (
                <div key={iconItem.id} className="right-icon-item">
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
