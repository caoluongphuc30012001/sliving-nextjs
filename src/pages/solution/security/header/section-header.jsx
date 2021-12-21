import React from "react";
import header from "@images/solution/security//header/header.svg";
import underLine from "@images/contact-page-v2/Rectangle1256.png";
import { useTranslation } from "react-i18next";
const BottomImage = () => {
  const { t } = useTranslation();
  return (
    <section className="bottomImage mb-5">
      <div>
        <img src={header} alt="Bottom" />
        <div className="contentImage">
          <h1>
            {t(`solution.security.header`)}
            <img src={underLine} alt="underline" />
          </h1>
          <p>{t(`solution.security.subHeader`)}</p>
        </div>
      </div>
    </section>
  );
};
export default BottomImage;
