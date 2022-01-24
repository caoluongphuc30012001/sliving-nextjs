import React from "react";

import "@i18n/i18n";

import IntroductionHeader from "./header/section-header";
import SectionContent from "./body/section-content";

import imgFirst from "@images/solution/parking/imgFirst.png";
import imgSecond from "@images/solution/parking/imgSecond.png";
import imgThird from "@images/solution/parking/imgThird.png";

import card1 from "@images/solution/parking/card1.svg";
import card2 from "@images/solution/parking/card2.svg";
import card3 from "@images/solution/parking/card3.svg";

import LayoutSmartHome from "@components/layout-smart-home";
import SectionBannerV2 from "@components/section/banner/banner";
import CardSolution from "@components/card/card-solution/card-solution";

import dataMetaDetails   from "@data/dataMeta.json";

import { useTranslation } from "react-i18next";

import Seo from "@components/seo";


import "./style.scss";

const SmartHomeSolution = () => {
  const { t } = useTranslation();
const dataMeta = dataMetaDetails["dataMeta"];

  const BuildThreeSolution = ()=> {
    return (<div className="container-wrap card-solution">
    <CardSolution
      imgUrl={card1}
      title={t(`solution.parking.card_1.title`)}
      description={t(`solution.parking.card_1.description`)}
    />
    <CardSolution
      imgUrl={card2}
      title={t(`solution.parking.card_2.title`)}
      description={t(`solution.parking.card_2.description`)}
    />
    <CardSolution
      imgUrl={card3}
      title={t(`solution.parking.card_3.title`)}
      description={t(`solution.parking.card_3.description`)}
    />
  </div>);
  }
  const BuildThreeContent = () => {
    return (<section className="introSection container">
    <div className="background-image "></div>
    <div>
      <div className="margin-bottom">
        <SectionContent
          imgUrl={imgFirst}
          title={t(`solution.parking.section_1.title`)}
          subDescription={t(`solution.parking.section_1.description`)}
          description={""}
        />
      </div>

      <div className="section-second margin-bottom">
        <SectionContent
          imgUrl={imgSecond}
          title={t(`solution.parking.section_2.title`)}
          subDescription={t(`solution.parking.section_2.description`)}
          description={""}
        />
      </div>
      <div className=" margin-bottom">
        <SectionContent
          imgUrl={imgThird}
          title={t(`solution.parking.section_3.title`)}
          subDescription={t(`solution.parking.section_3.description`)}
          description={""}
        />
      </div>
    </div>
  </section>)
  }

  return (
    <LayoutSmartHome >
    <Seo title={t(`${dataMeta.smart_parking.title}`)} description={t(`${dataMeta.smart_parking.description}`)} url={dataMeta.smart_parking.url}  />
    <div className="introduct-main" id="introduct-main-parking">
      <IntroductionHeader />
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
