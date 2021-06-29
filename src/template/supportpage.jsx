import React from 'react';
import SupportDetail from "@pages/support-page/body/support-detail";
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { graphql } from 'gatsby';
const SupportPageTemplate = ({ pageContext }) => {
  return (
    pageContext && <SupportDetail data={pageContext.data} node={pageContext.node} />
  )
}
export default withI18next()(SupportPageTemplate);
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "translations" } }) {
      ...LocaleFragment
    }
  }
`;
