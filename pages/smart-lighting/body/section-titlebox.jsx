import React from "react";

import { useTranslation } from "next-i18next";

import style from "../style.module.scss"
export default function SectionTitlebox() {
  const { t } = useTranslation("smartLighting");

  return (
    <section className={style["section-title-box"]}>
      <div className={style["title-box"]}>
        <p className={style["sub-title"]}> {t("sectionTitlebox.title")}</p>
        <p className={style["title"]}>{t("sectionTitlebox.subTitle")}</p>
        <div className={style["item-border"]}></div>
      </div>
    </section>
  );
}
