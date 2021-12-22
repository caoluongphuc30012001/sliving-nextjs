import React from "react";
import LayoutSmartHome from "@components/layout-smart-home.jsx";

import TechnicalSol from "./body/technicalSolution";
import { withI18next } from "@wapps/gatsby-plugin-i18next";
import { graphql } from "gatsby";

const IndexPage = ({ pageContext }) => {
  return (
    <LayoutSmartHome isMainPage>
      <TechnicalSol data={pageContext?.data?.data} />
    </LayoutSmartHome>
  );
};
export default withI18next()(IndexPage);
export const query = graphql`
  query ($lng: String!) {
    locales: allLocale(
      filter: { lng: { eq: $lng }, ns: { eq: "translations" } }
    ) {
      ...LocaleFragment
    }
  }
`;
