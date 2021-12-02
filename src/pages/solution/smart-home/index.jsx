import React from "react";
import LayoutNew from "@components/layout-new";
import { withI18next } from "@wapps/gatsby-plugin-i18next";
import { graphql } from "gatsby";
import IntroductHeader from "./header/section-header";
import { useTranslation } from "react-i18next";
import SectionContent from "./body/section-content";
import "./style.scss";
import SectionFeatureProduct from "@components/section/section-feature-product";
import imgFirst from "@images/solution/smart-home/imgFirst.svg";
import imgSecond from "@images/solution/smart-home/imgSecond.svg";
import imgThird from "@images/solution/smart-home/imgThird.svg";
import imgFour from "@images/solution/smart-home/imgFour.svg";
import imgFive from "@images/solution/smart-home/imgFive.svg";
import imgSix from "@images/solution/smart-home/imgSix.svg";
import SectionBannerV2 from "@components/section/banner/banner";
import DataProductNew from "../../../query/product-hot";
const SmarthomeSolution = () => {
  const { t } = useTranslation();
  const data = DataProductNew();
  return (
    <LayoutNew>
      <div className="introduct-main" id="introduct-main">
        <IntroductHeader />
        <SectionFeatureProduct dataProductHot={data} />
        <div className="background-image">
          <div className="margin-bottom">
            <SectionContent
              imgUrl={imgFirst}
              title="Smart lighting"
              subDescription="On arrival at the parking lot, users can easily reach the vacancy through:
              The fastest browser application.
              Led sign indicating a direction in foundations
              "
              description={""}
            />
          </div>

          <div className="section-second margin-bottom">
            <SectionContent
              imgUrl={imgSecond}
              title="Remote control for air conditioning"
              subDescription="The solution uses equipment to connect the air conditioner to the telephony application. The air conditioner works with other appliances depending on the user scenario and the system is monitored and controlled remotely"
              description={""}
            />
          </div>
          <div className=" margin-bottom">
            <SectionContent
              imgUrl={imgThird}
              title="Smart switch"
              subDescription={`Sliving's smart switch products allow users to control devices via the app, including lights, blinds, air conditioners or embedded multi-device operating scenarios. Different designs ranging from modern touch switches to traditional mechanical switches meet every user's needs and preferences`}
              description={""}
            />
          </div>
          <div className="section-second margin-bottom">
            <SectionContent
              imgUrl={imgFour}
              title="Sensors"
              subDescription="The system of motion sensors, light sensors, door sensors, etc., combined with electrical equipment, creates a business case to meet the safety and comfort demands of the home"
              description={""}
            />
          </div>
          <div className=" margin-bottom">
            <SectionContent
              imgUrl={imgFive}
              title="Smart curtain"
              subDescription="Help remote control the curtain by telephone. The curtain system closes and opens automatically according to the program specified by the user"
              description={""}
            />
          </div>
          <div className="section-second">
            <SectionContent
              imgUrl={imgSix}
              title="Door - gate motor"
              subDescription="The gate - door motor is connected to the Sliving system for remote control via phone, saving users from having to go to the door to open and close, ensuring safety and reducing waiting time"
              description={""}
            />
          </div>
        </div>
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
  query($lng: String!) {
    locales: allLocale(
      filter: { lng: { eq: $lng }, ns: { eq: "translations" } }
    ) {
      ...LocaleFragment
    }
  }
`;
