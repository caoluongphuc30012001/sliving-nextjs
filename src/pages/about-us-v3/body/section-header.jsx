import React from "react";
import background from "../../../images/about-us-v3/png/about-us-banner.png";

const SectionHeader = () => {
  return (
    <header className="section-about-us-header">
      <div className="header-container">
        <div className="header-content">
          <h2 className="content-title">VỀ CHÚNG TÔI</h2>
          <div className="content-subtitle-container">
            <p className="content-subtitle-desktop">
              Hệ sinh thái sản phẩm mang thương hiệu S-living thuộc tập đoàn
              công nghệ Unicloud hướng tới cung cấp cho khách hàng một trải
              nghiệm sống tiện nghi, hiện đại, liền mạch thông qua việc ứng dụng
              các công nghệ tiên tiến vào các giải pháp sản phẩm smart home,
              smart lighting, smart parking và smart security
            </p>
            <p className="content-subtitle-mobile d-none">
              {" "}
              Hệ sinh thái Sliving gồm các giải pháp Smart Home, Smart Lighting,
              Smart Parking và Smart Security.{" "}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default SectionHeader;
