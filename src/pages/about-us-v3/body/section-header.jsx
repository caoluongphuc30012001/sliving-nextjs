import React from "react";
import background from "../../../images/about-us-v3/png/about-us-banner.png";

const SectionHeader = () => {
  return (
    <header className="about-us-v3">
      <div className="about-us-content">
        <h1 className="about-us-title">VỀ CHÚNG TÔI</h1>
        <p className="about-us-subtitle">
          Hệ sinh thái sản phẩm mang thương hiệu S-living thuộc tập đoàn công
          nghệ Unicloud hướng tới cung cấp cho khách hàng một trải nghiệm sống
          tiện nghi, hiện đại, liền mạch thông qua việc ứng dụng các công nghệ
          tiên tiến vào các giải pháp sản phẩm smart home, smart lighting, smart
          parking và smart security
        </p>
      </div>
      <img className="about-us-background" src={background} />
    </header>
  );
};
export default SectionHeader;
