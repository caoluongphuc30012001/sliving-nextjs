import React from "react";
import LayoutSmartHome from "@components/layout-smart-home.jsx";
import ContentDetail from "./body/content-detail";
import BannerTop from "./body/banner-top"
import { withI18next } from "@wapps/gatsby-plugin-i18next";
import { graphql } from 'gatsby';
import "./index.scss"

const IndexPage = ({ pageContext }) => {
  console.log('content',pageContext)
  return (
    <LayoutSmartHome >
      <div className="contentPage container">
        <BannerTop />
        <ContentDetail />
      </div>
    </LayoutSmartHome>
  );
};
export default withI18next()(IndexPage);
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(
      filter: { lng: { eq: $lng }, ns: { eq: "translations" } }
    ) {
      ...LocaleFragment
    }
  }
`;
