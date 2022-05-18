import React from "react";
import background1 from "../../../images/smart-lighting-v3/png/bg-header1.png";
import background2 from "../../../images/smart-lighting-v3/png/bg-header2.png";
import background3 from "../../../images/smart-lighting-v3/png/bg-header3.png";

import background1_1 from "../../../images/smart-lighting-v3/png/bg-header1-1.png";
import background2_1 from "../../../images/smart-lighting-v3/png/bg-header2-1.png";
import background3_1 from "../../../images/smart-lighting-v3/png/bg-header3-1.png";

const SectionHeader = () => {
  return (
    <header className="section-smart-lighting-header">
      <div className="content-container">
        <div className="content">
          <h1 className="content-title">SMART LIGHTING</h1>
          <div className="content-subtitle-container">
            <p className="content-subtitle">
              Smart Lighting đem đến giải pháp chiếu sáng thông minh, tiện lợi
              cho các không gian như: trung tâm thương mại, tòa nhà, văn phòng,
              căn hộ,.. mang lại cảm giác thoải mái và hiện đại. Unicloud hướng
              tới xây dựng hệ thống Smart Lighting không chỉ đáp ứng nhu cầu
              chiếu sáng mà còn đáp ứng được nhu cầu hoạt động thông minh.
            </p>
          </div>
        </div>
      </div>
      <img src={background1} className="header-background" />
      <img src={background2} className="header-background" />
      <img src={background3} className="header-background" />

      <img src={background1_1} className="header-background mobile" />
      <img src={background2_1} className="header-background mobile" />
      <img src={background3_1} className="header-background mobile" />
    </header>
  );
};
export default SectionHeader;
