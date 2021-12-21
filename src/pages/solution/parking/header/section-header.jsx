import React from "react";

import header from "@images/solution/parking/header/header.png";
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
            {t(`solution.parking.header`)}
            <img src={underLine} alt="underline" />
          </h1>
          <p>{t(`solution.parking.subHeader`)}</p>
        </div>
      </div>
    </section>
  );
};
export default BottomImage;
