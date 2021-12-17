import React from "react";
import LayoutV2 from "@components/layout-new";
import NewSectionVideo from "./body/new-section-video";
import NewSectionHeader from "./body/new-section-header";
import NewSectionApp from "./body/new-section-app";
import NewSectionImg360 from "./body/new-section-img360";
import NewSectionSolution from "./body/new-section-solution";
import NewSectionCarousel from "./body/new-section-carousel";
import NewSectionProduct from "./body/new-section-product";
import "./style.scss";
<<<<<<< HEAD

export default function Index({ pageContext }) {
=======
import { withI18next } from "@wapps/gatsby-plugin-i18next";
import { graphql } from "gatsby";
const HomePageNew=()=> {
>>>>>>> 78534119f23c41261da1eb72fbf2354938aca30b
  return (
    <LayoutV2 pageContext={pageContext} >
      <div className="smart-home-page-v2">
        <NewSectionHeader />
        <NewSectionApp />
        <NewSectionImg360 />
        <NewSectionProduct />
        <NewSectionCarousel />
        <NewSectionSolution />
        <NewSectionVideo />
      </div>
    </LayoutV2>
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
