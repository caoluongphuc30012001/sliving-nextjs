import React from "react";
import Introduction from "../../../components/section/introduction/introduction";
import url1 from "@images/lighting-page/family.png";
import url2 from "@images/lighting-page/smart.png";
import url3 from "@images/lighting-page/phone.png";
import { useTranslation } from "react-i18next";
const IntroMain = () => {
  const { t } = useTranslation();
  return (
    <section className="position-relative">
      <div className="lightingBackground"></div>
      <div className="lightingIntro container">
        <Introduction
          imgUrl={url1}
          title={t(`solution.lighting.section_1.title`)}
          subDescription={t(`solution.lighting.section_1.description`)}
        />
        <Introduction
          imgUrl={url2}
          revert
          title={t(`solution.lighting.section_2.title`)}
          subDescription={t(`solution.lighting.section_2.description`)}
        />
        <Introduction
          imgUrl={url3}
          title={t(`solution.lighting.section_3.title`)}
          subDescription={t(`solution.lighting.section_3.description`)}
        />
      </div>
    </section>
  );
};
export default IntroMain;
