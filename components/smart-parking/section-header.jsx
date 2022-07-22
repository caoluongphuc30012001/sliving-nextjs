import React from "react";

import background from "../../images/smart-parking-v3/jpg/bg-parking.jpg";
import car_img from "../../images/smart-parking-v3/png/img-car.png";

import style from "./style.module.scss";

import Image from "next/image";

const SmartHeader = () => {
  return (
    <section className={style["section-smart-parking-v3-header"]}>
      <div className={style["smart-parking-v3-header"]}>
        <header className={style["smart-parking-header"]}>
          <div className={style["smart-parking-content"]}>
            <div className={style["content-left"]}>
              <div className={style["content-left-title"]}>SMART PARKING</div>
              <div className={style["content-left-text"]}>
                Là giải pháp quản lý bãi giữ xe hiệu quả của Tập đoàn Unicloud
                được ứng dụng trong hệ thống chung cư, tòa nhà, trung tâm thương
                mại, trường học, bệnh viện,... Người dùng có thể sử dụng ứng
                dụng "Smart Parking" để quản lý xe ra vào, phát hiện chỗ trống,
                hướng dẫn đến vị trí đỗ xe; giúp tiết kiệm thời gian, tối ưu hóa
                chi phí và góp phần tăng hiệu suất bãi đỗ; mang đến cho dân cư
                sự thoải mái và tiện nghi.
              </div>
            </div>
            <div className={style["content-right"]}>
              <Image
                className={style["content-right__img"]}
                src={car_img}
                alt=""
              />
            </div>
          </div>
        </header>
        <div className={style["back-ground"]}>
          <Image
            alt=""
            src={background}
            className={style["back-ground__img"]}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default SmartHeader;
