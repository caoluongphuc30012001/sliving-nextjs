import React from "react";
import LayoutSmartHome from "@components/layout-smart-home";
import IntroductionHeader from "./header/section-header";
import SectionContent from "./body/section-content";

import imgFirst from "@images/solution/security/imgFirst.jpg";
import imgSecond from "@images/solution/security/imgSecond.jpg";
import imgThird from "@images/solution/security/imgThird.jpg";
import card1 from "@images/solution/security/card1.jpg";
import card2 from "@images/solution/security/card2.jpg";
import card3 from "@images/solution/security/card3.jpg";

import SectionBannerV2 from "@components/section/banner/banner";
import SectionFeatureProduct from "@components/section/section-feature-product";
import CardSolution from "@components/card/card-solution/card-solution";

import DataProductNew from "@query/product-hot";
import { useTranslation } from "react-i18next";

import "./style.scss";

const SmartHomeSolution = () => {
  const { t } = useTranslation();
  const data = DataProductNew();

  const BuildThreeSolution = () => {
    return (
      <div className="container-wrap card-solution">
        <CardSolution
          imgUrl={card1}
          title={t(`solution.security.card_1.title`)}
          description={t(`solution.security.card_1.description`)}
        />
        <CardSolution
          imgUrl={card2}
          title={t(`solution.security.card_2.title`)}
          description={t(`solution.security.card_2.description`)}
        />
        <CardSolution
          imgUrl={card3}
          title={t(`solution.security.card_3.title`)}
          description={t(`solution.security.card_3.description`)}
        />
      </div>
    );
  };

  const BuildThreeContent = () => {
    return (
      <section className="introSection container">
        <div className="background-image "></div>
        <div>
          <div className="margin-bottom">
            <SectionContent
              imgUrl={imgFirst}
              title={t(`solution.security.section_1.title`)}
              subDescription={t(`solution.security.section_1.description`)}
              description={""}
            />
          </div>

          <div className="section-second margin-bottom">
            <SectionContent
              imgUrl={imgSecond}
              title={t(`solution.security.section_2.title`)}
              subDescription={t(`solution.security.section_2.description`)}
              description={""}
            />
          </div>
          <div className=" margin-bottom">
            <SectionContent
              imgUrl={imgThird}
              title={t(`solution.security.section_3.title`)}
              subDescription={t(`solution.security.section_3.description`)}
              description={""}
            />
          </div>
        </div>
      </section>
    );
  };
  return (
    <LayoutSmartHome>
      <div className="introduct-main" id="introduct-main-security">
        <IntroductionHeader />
        <SectionFeatureProduct dataProductHot={data} />
        <BuildThreeSolution />
        <BuildThreeContent />
        <SectionBannerV2
          title={t(`solution.footer`)}
          desc={t(`solution.subFooter`)}
          btnContact={true}
        />
      </div>
    </LayoutSmartHome>
  );
};
export default SmartHomeSolution;
