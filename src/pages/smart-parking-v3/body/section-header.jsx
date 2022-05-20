import React from "react";

import background from "../../../images/smart-parking-v3/jpg/bg-parking.jpg";
import car_img from "../../../images/smart-parking-v3/png/img-car.png";

const SmartHeader = () => {
  return (
    <section className="section-smart-parking-v3-header">
      <div className="smart-parking-v3-header">
        <header className="smart-parking-header">
          <div className="smart-parking-content">
            <div className="content-left">
              <div className="content-left-title">SMART PARKING</div>
              <div className="content-left-text">
                Smart Parking là giải pháp quản lý bãi giữ xe hiệu quả của
                Unicloud được ứng dụng trong hệ thống chung cư, tòa nhà, trung
                tâm thương mại. Người dùng có thể sử dụng Smart Parking App để
                quản lý xe ra vào, phát hiện chỗ trống, hướng dẫn đến vị trí đỗ
                xe giúp tiết kiệm thời gian, giảm nguồn nhân lực, góp phần tăng
                hiệu quả sức chứa cho tòa nhà mang đến cho cư dân sự thoải mái
                và tiện nghi.
              </div>
            </div>
            <div className="content-right">
              <img className="content-right__img" src={car_img} alt="" />
            </div>
          </div>
        </header>
        <div className="back-ground">
          <img alt="" src={background} className="back-ground__img"></img>
        </div>
      </div>
    </section>
  );
};

export default SmartHeader;
