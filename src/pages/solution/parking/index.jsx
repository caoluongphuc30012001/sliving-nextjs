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
const SmarthomeSolution = () => {
  const data = DataProductNew();
  return (
    <LayoutNew isMainPage pageContext={{ isSmartHome: true }}>
      <div className="introduct-main" id="introduct-main-parking">
        <IntroductHeader />
        <SectionFeatureProduct dataProductHot={data} />
        <div className="container-v2 card-solution">
          <CardSolution
            imgUrl={card1}
            title="Telescopes 101"
            description="History of modern astronomy, there is probably no one greater."
          />
          <CardSolution
            imgUrl={card2}
            title="Moon Gazing"
            description="History of modern astronomy, there is probably no one greater."
          />
          <CardSolution
            imgUrl={card3}
            title="The Amazing Hubble"
            description="History of modern astronomy, there is probably no one greater."
          />
        </div>
        <section className="introSection container">
          <div className="background-image "></div>
          <div>
            <div className="margin-bottom">
              <SectionContent
                imgUrl={imgFirst}
                title="Search for parking space easily"
                subDescription="The solution provides lighting effects adapted to the environment, creating the best ambience for the user. All remote controlled, any time, anywhere with ease"
                description={""}
              />
            </div>

            <div className="section-second margin-bottom">
              <SectionContent
                imgUrl={imgSecond}
                title="Quickly reserve your parking space."
                subDescription="The system is fully automatic, using sensor technology, accurately updates the necessary information for booking such as:
                Number and position of vacancies in each area, basement
                Parking lot hours
                Corresponding parking fees in real-time quickly reserve your parking space"
                description={""}
              />
            </div>
            <div className=" margin-bottom">
              <SectionContent
                imgUrl={imgThird}
                title="Get your parking session notifications"
                subDescription={`After sending the car, users are fully confident of operating when the application updates the information:
                Parking lot status
                Indicate when the enrollment period is about to end to avoid extra charges`}
                description={""}
              />
            </div>
          </div>
        </section>
        <SectionBannerV2
          title="Find other options that are perfect for you."
          desc="We can answer any of your questions, provide product demos, and find the perfect package for you. Please leave a message with us!"
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
