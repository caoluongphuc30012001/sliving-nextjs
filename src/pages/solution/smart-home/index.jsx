import React from "react";
import LayoutNew from "@components/layout-new";
import { withI18next } from "@wapps/gatsby-plugin-i18next";
import { graphql } from "gatsby";
import IntroductHeader from "./header/section-header";
import SectionContent from "./body/section-content";
import "./style.scss";
import SectionFeatureProduct from "@components/section/section-feature-product";
import imgFirst from "@images/solution/smart-home/imgFirst.svg";
import imgSecond from "@images/solution/smart-home/imgSecond.png";
import imgThird from "@images/solution/smart-home/imgThird.png";
import imgFour from "@images/solution/smart-home/imgFour.png";
import imgFive from "@images/solution/smart-home/imgFive.svg";
import imgSix from "@images/solution/smart-home/imgSix.png";
import SectionBannerV2 from "@components/section/banner/banner";
import DataProductNew from "../../../query/product-hot";
import { useTranslation } from "react-i18next";
const SmarthomeSolution = () => {
  const { t } = useTranslation();
  const data = DataProductNew();
  return (
    <LayoutNew isMainPage pageContext={{ isSmartHome: true }}>
      <div className="introduct-main" id="introduct-main-smarthome">
        <IntroductHeader />
        <SectionFeatureProduct dataProductHot={data} />
        <section className="introSection container">
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
        </section>
        <br />
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
