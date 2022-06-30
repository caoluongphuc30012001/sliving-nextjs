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
                Là giải pháp quản lý bãi giữ xe hiệu quả của Tập đoàn Unicloud
                được ứng dụng trong hệ thống chung cư, tòa nhà, trung tâm thương
                mại, trường học, bệnh viện,... Người dùng có thể sử dụng ứng
                dụng "Smart Parking App "để quản lý xe ra vào, phát hiện chỗ
                trống, hướng dẫn đến vị trí đỗ xe; giúp tiết kiệm thời gian, tối
                ưu hóa chi phí và góp phần tăng hiệu suất bãi đỗ; mang đến cho
                dân cư sự thoải mái và tiện nghi.
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
