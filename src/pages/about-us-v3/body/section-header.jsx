import React, { useState, useEffect } from "react";

const SectionHeader = () => {
  const [headerToggle, setheaderToggle] = useState(false);
  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener("scroll", OnScroll);
    }
    return () => {
      window.removeEventListener("scroll", OnScroll);
    };
  }, []);

  function OnScroll() {
    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      setheaderToggle(true);
    } else {
      setheaderToggle(false);
    }
  }
  return (
    <header className="section-about-us-header">
      <div className="header-container">
        <div
          className={headerToggle ? "header-content hide" : "header-content"}
        >
          <h2 className="content-title">VỀ CHÚNG TÔI</h2>
          <div className="content-subtitle-container">
            <p className="content-subtitle-desktop">
              Hệ sinh thái sản phẩm mang thương hiệu Sliving thuộc tập đoàn công
              nghệ Unicloud hướng tới cung cấp cho khách hàng một trải nghiệm
              sống tiện nghi, hiện đại, liền mạch thông qua việc ứng dụng các
              công nghệ tiên tiến vào các giải pháp sản phẩm Smart Home, Smart
              Lighting, Smart Parking và Smart Building
            </p>
            <p className="content-subtitle-mobile d-none">
              Hệ sinh thái Sliving gồm các giải pháp Smart Home, Smart Lighting,
              Smart Parking và Smart Building.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default SectionHeader;
