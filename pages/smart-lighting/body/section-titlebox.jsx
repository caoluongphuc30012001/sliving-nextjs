import React from "react";

import { useTranslation } from "next-i18next";

export default function SectionTitlebox() {
  const { t } = useTranslation();

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
