import React from "react";
import IntroductionHeader from "./header/section-header";
import SectionContent from "./body/section-content";

import imgFirst from "@images/solution/smart-home/imgFirst.webp";
import imgSecond from "@images/solution/smart-home/imgSecond.webp";
import imgThird from "@images/solution/smart-home/imgThird.webp";
import imgFour from "@images/solution/smart-home/imgFour.webp";
import imgFive from "@images/solution/smart-home/imgFive.webp";
import imgSix from "@images/solution/smart-home/imgSix.webp";

import SectionFeatureProduct from "@components/section/section-feature-product";
import SectionBannerV2 from "@components/section/banner/banner";
import LayoutSmartHome from "@components/layout-smart-home";

import DataProductNew from "@query/product-hot";

import { useTranslation } from "react-i18next";
import { PortfolioConsumer } from "@context/context";

import "./style.scss";

const SmartHomeSolution = () => {
  const { t } = useTranslation();
  const data = DataProductNew();
  const BuildFiveContent = () => {
    return (<section className="introSection container">
    <div className="background-image "></div>
    <div>
      <div className="margin-bottom">
        <SectionContent
          imgUrl={imgFirst}
          title={t(`solution.smart-home.section_1.title`)}
          subDescription={t(`solution.smart-home.section_1.description`)}
          description={""}
        />
      </div>

      <div className="section-second margin-bottom">
        <SectionContent
          imgUrl={imgSecond}
          title={t(`solution.smart-home.section_2.title`)}
          subDescription={t(`solution.smart-home.section_2.description`)}
          description={""}
        />
      </div>
      <div className=" margin-bottom">
        <SectionContent
          imgUrl={imgThird}
          title={t(`solution.smart-home.section_3.title`)}
          subDescription={t(`solution.smart-home.section_3.description`)}
          description={""}
        />
      </div>
      <div className="section-second margin-bottom">
        <SectionContent
          imgUrl={imgFour}
          title={t(`solution.smart-home.section_4.title`)}
          subDescription={t(`solution.smart-home.section_4.description`)}
          description={""}
        />
      </div>
      <div className=" margin-bottom">
        <SectionContent
          imgUrl={imgFive}
          title={t(`solution.smart-home.section_5.title`)}
          subDescription={t(`solution.smart-home.section_5.description`)}
          description={""}
        />
      </div>
      <div className="section-second margin-bottom">
        <SectionContent
          imgUrl={imgSix}
          title={t(`solution.smart-home.section_6.title`)}
          subDescription={t(`solution.smart-home.section_6.description`)}
          description={""}
        />
      </div>
    </div>
  </section>)
  }
  return (
    <PortfolioConsumer>
      {context => (<LayoutSmartHome  title={context?.dataTitles?.dataTitles.smart_home}>
      <div className="introduct-main" id="introduct-main-smarthome">
        <IntroductionHeader />
        <SectionFeatureProduct dataProductHot={data} />
        <BuildFiveContent />
        <br />
        <SectionBannerV2
          title={t(`solution.footer`)}
          desc={t(`solution.subFooter`)}
          btnContact={true}
        />
      </div>
    </LayoutSmartHome>)}
    </PortfolioConsumer>
  );
};
export default SmartHomeSolution;
