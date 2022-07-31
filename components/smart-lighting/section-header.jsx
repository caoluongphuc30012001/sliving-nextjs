import React from "react";
import background1 from "@images/smart-lighting-v3/png/bg-header1.png";
import background2 from "@images/smart-lighting-v3/png/bg-header2.png";
import background3 from "@images/smart-lighting-v3/png/bg-header3.png";

import background1_1 from "@images/smart-lighting-v3/png/bg-header1-1.png";
import background2_1 from "@images/smart-lighting-v3/png/bg-header2-1.png";
import background3_1 from "@images/smart-lighting-v3/png/bg-header3-1.png";

import { useTranslation } from "next-i18next";
import style from "./style.module.scss";
const SectionHeader = () => {
  const { t } = useTranslation("smartLighting");

  return (
    <header className={style["section-smart-lighting-header"]}>
      <div className={style["content-container"]}>
        <div className={style["content"]}>
          <h1 className={style["content-title"]}>
            {t("sectionSmartLightingHeader.title")}
          </h1>
          <div className={style["content-subtitle-container"]}>
            <p className={style["content-subtitle"]}>
              {t("sectionSmartLightingHeader.subTitle")}
            </p>
          </div>
        </div>
      </div>
      <img alt="" src={background1.src} className={style["header-background"]} />
      <img alt="" src={background2.src} className={style["header-background"]} />
      <img alt="" src={background3.src} className={style["header-background"]} />

      <img
        alt=""
        src={background1_1.src}
        className={`${style["header-background"]} ${style["mobile"]}`}
      />
      <img
        alt=""
        src={background2_1.src}
        className={`${style["header-background"]} ${style["mobile"]}`}
      />
      <img
        alt=""
        src={background3_1.src}
        className={`${style["header-background"]} ${style["mobile"]}`}
      />
    </header>
  );
};
export default SectionHeader;
