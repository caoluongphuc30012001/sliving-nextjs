import React from 'react';
import Layout from "../../components/layout.jsx";
import TechnicalSolution from "./body/technicalSolution.jsx";
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { graphql } from 'gatsby';
const SupportPage = () => {
    return (
        <Layout>
            <TechnicalSolution />
        </Layout>
    );
};
export default withI18next()(SupportPage);
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "translations" } }) {
      ...LocaleFragment
    }
  }
`;
