import React from 'react';
import IntroContent from './intro-content';
import Layout from "@components/layout";
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { graphql } from 'gatsby';
const introContent = () => {
  return (<Layout>
    <IntroContent />
  </Layout>)
}
export default withI18next()(introContent);
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "translations" } }) {
      ...LocaleFragment
    }
  }
`;

