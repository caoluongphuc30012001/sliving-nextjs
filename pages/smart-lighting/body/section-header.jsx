import React from "react";
import background1 from "@images/smart-lighting-v3/png/bg-header1.png";
import background2 from "@images/smart-lighting-v3/png/bg-header2.png";
import background3 from "@images/smart-lighting-v3/png/bg-header3.png";

import background1_1 from "@images/smart-lighting-v3/png/bg-header1-1.png";
import background2_1 from "@images/smart-lighting-v3/png/bg-header2-1.png";
import background3_1 from "@images/smart-lighting-v3/png/bg-header3-1.png";

import { useTranslation } from "next-i18next";

const SectionHeader = () => {
  const { t } = useTranslation();

  return (
    <header className="section-smart-lighting-header">
      <div className="content-container">
        <div className="content">
          <h1 className="content-title">
            {t("sectionSmartLightingHeader.title")}
          </h1>
          <div className="content-subtitle-container">
            <p className="content-subtitle">
              {t("sectionSmartLightingHeader.subTitle")}
            </p>
          </div>
        </div>
      </div>
      <img alt="" src={background1} className="header-background" />
      <img alt="" src={background2} className="header-background" />
      <img alt="" src={background3} className="header-background" />

      <img alt="" src={background1_1} className="header-background mobile" />
      <img alt="" src={background2_1} className="header-background mobile" />
      <img alt="" src={background3_1} className="header-background mobile" />
    </header>
  );
};
export default SectionHeader;
