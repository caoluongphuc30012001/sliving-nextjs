import React from "react";
import LayoutNew from "@components/layout-new";
import NewSectionVideo from "./body/new-section-video";
import NewSectionHeader from "./body/new-section-header";
import NewSectionApp from "./body/new-section-app";
import NewSectionImg360 from "./body/new-section-img360";
import NewSectionSolution from "./body/new-section-solution";
import NewSectionCarousel from "./body/new-section-carousel";
import NewSectionProduct from "./body/new-section-product";
import "./style.scss";
import { withI18next } from "@wapps/gatsby-plugin-i18next";
import { graphql } from "gatsby";
const HomePageNew=()=> {
  return (
    <LayoutNew>
      <div className="smart-home-page-v2">
        <NewSectionHeader />
        <NewSectionApp />
        <NewSectionImg360 />
        <NewSectionProduct />
        <NewSectionCarousel />
        <NewSectionSolution />
        <NewSectionVideo />
      </div>
    </LayoutNew>
  );
}
export default withI18next()(HomePageNew);
export const query = graphql`
  query ($lng: String!) {
    locales: allLocale(
      filter: { lng: { eq: $lng }, ns: { eq: "translations" } }
    ) {
      ...LocaleFragment
    }
  }
`;
