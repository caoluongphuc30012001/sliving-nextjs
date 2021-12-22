import React from "react";
import header from "@images/solution/smart-home//header/header.png";
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
            {t(`solution.smart-home.header`)}
            <img src={underLine} alt="underline" width="1440" height="900" />
          </h1>
          <p>{t(`solution.smart-home.subHeader`)}</p>
        </div>
      </div>
    </section>
  );
};
export default BottomImage;
