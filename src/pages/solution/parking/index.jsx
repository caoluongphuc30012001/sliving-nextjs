import React from "react";
import LayoutNew from "@components/layout-new";
import { withI18next } from "@wapps/gatsby-plugin-i18next";
import { graphql } from "gatsby";
import IntroductHeader from "./header/section-header";
import SectionContent from "./body/section-content";
import "./style.scss";
import SectionFeatureProduct from "@components/section/section-feature-product";
import imgFirst from "@images/solution/parking/imgFirst.svg";
import imgSecond from "@images/solution/parking/imgSecond.svg";
import imgThird from "@images/solution/parking/imgThird.svg";
import card1 from "@images/solution/parking/card1.svg";
import card2 from "@images/solution/parking/card2.svg";
import card3 from "@images/solution/parking/card3.svg";
import SectionBannerV2 from "@components/section/banner/banner";
import DataProductNew from "../../../query/product-hot";
import CardSolution from "@components/card/card-solution/card-solution";
import { useTranslation } from "react-i18next";
const SmarthomeSolution = () => {
  const { t } = useTranslation();
  const data = DataProductNew();
  return (
    <LayoutNew isMainPage pageContext={{ isSmartHome: true }}>
      <div className="introduct-main" id="introduct-main-parking">
        <IntroductHeader />
        <SectionFeatureProduct dataProductHot={data} />
        <div className="container-v2 card-solution">
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
    </LayoutNew>
  );
};
export default withI18next()(SmarthomeSolution);
export const query = graphql`
  query ($lng: String!) {
    locales: allLocale(
      filter: { lng: { eq: $lng }, ns: { eq: "translations" } }
    ) {
      ...LocaleFragment
    }
  }
`;
