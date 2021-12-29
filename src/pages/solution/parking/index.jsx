import React from "react";

import IntroductHeader from "./header/section-header";
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

import { useTranslation } from "react-i18next";

import "./style.scss";

const SmartHomeSolution = () => {
  const { t } = useTranslation();
  return (
    <LayoutSmartHome>
      <div className="introduct-main" id="introduct-main-parking">
        <IntroductHeader />
        <div className="container-wrap card-solution">
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
        </div>
        <section className="introSection container">
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
        </section>
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
