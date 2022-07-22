import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

const SectionHeader = () => {
  const [headerToggle, setheaderToggle] = useState(false);
  const isBrowser = typeof window !== "undefined";

  const { t } = useTranslation();

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
          <h2 className="content-title">{t("aboutUs.header.mainTitle")}</h2>
          <div className="content-subtitle-container">
            <p className="content-subtitle-desktop">
              {t("aboutUs.header.mainDesc")}
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
