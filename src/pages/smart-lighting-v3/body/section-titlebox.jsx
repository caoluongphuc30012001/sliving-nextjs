import React from "react";
import { useTranslation } from "react-i18next";

export default function SectionTitlebox() {
  const { i18n, t } = useTranslation();

  return (
    <section className="section-title-box">
      <div className="title-box">
        <p className="sub-title"> {t("sectionTitlebox.title")}</p>
        <p className="title">{t("sectionTitlebox.subTitle")}</p>
        <div className="item-border"></div>
      </div>
    </section>
  );
}
