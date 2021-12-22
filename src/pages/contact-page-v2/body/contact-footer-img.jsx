import React from "react";
import bottomImage from "@images/contact-page-v2/image111.svg";
import underLine from "@images/contact-page-v2/Rectangle1256.png";
import { useTranslation } from "react-i18next";

const BottomImage = () => {
  const { t } = useTranslation();
  return (
    <section className="bottomImage mb-5">
      <div>
        <img src={bottomImage} alt="Bottom" />
        <div className="contentImage">
          <h1>{t(`Contact.Revolution`)}
            <img src={underLine} alt="underline" />
          </h1>
        </div>
      </div>
    </section>
  );
};
export default BottomImage;
