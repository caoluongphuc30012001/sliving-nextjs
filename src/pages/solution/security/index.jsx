import React from "react";
import LayoutNew from "@components/layout-new";
import { withI18next } from "@wapps/gatsby-plugin-i18next";
import { graphql } from "gatsby";
import IntroductHeader from "./header/section-header";
import SectionContent from "./body/section-content";
import "./style.scss";
import SectionFeatureProduct from "@components/section/section-feature-product";
import imgFirst from "@images/solution/security/imgFirst.svg";
import imgSecond from "@images/solution/security/imgSecond.svg";
import imgThird from "@images/solution/security/imgThird.svg";
import card1 from "@images/solution/security/card1.svg";
import card2 from "@images/solution/security/card2.svg";
import card3 from "@images/solution/security/card3.svg";
import SectionBannerV2 from "@components/section/banner/banner";
import DataProductNew from "../../../query/product-hot";
import CardSolution from "@components/card/card-solution/card-solution";
const SmarthomeSolution = () => {
  const data = DataProductNew();
  return (
    <LayoutNew isMainPage pageContext={{ isSmartHome: true }}>
      <div className="introduct-main" id="introduct-main-security">
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
                title="Smart lock"
                subDescription="Use fingerprinting to open or close the door
                Built-in magnetic card reader, passcode
                There are LEDs and bright tones for the suitcases
                Can be unlocked from a distance via the phone's Bluetooth function"
                description={""}
              />
            </div>

            <div className="section-second margin-bottom">
              <SectionContent
                imgUrl={imgSecond}
                title="Smart revolving door"
                subDescription="Zone safety management feature combined with proprietary software:
                Integrated facial recognition and magnetic card system
                Combine with intelligent elevator to call floors automatically
                Open the gate automatically in case of an emergency notification"
                description={""}
              />
            </div>
            <div className=" margin-bottom">
              <SectionContent
                imgUrl={imgThird}
                title="Face recognition"
                subDescription={`Using biometric technology to extract facial recognition features:
                Authenticate residents, control access to areas to be monitored as well as used to call elevators, open barriers
                Integrated into a security camera
                Can recognize multiple faces at the same time`}
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
