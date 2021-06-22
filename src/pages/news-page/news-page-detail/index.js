import React from 'react';
import Body from './news-page-detail';
import Layout from "@components/layout.jsx";
import "../style.scss";
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { graphql } from 'gatsby';
const IndexPage = ({ location }) => {
  return (
    <Layout>
      {
        (location.state && <Body data={location.state.data} slug={location.state.slug} />)
      }
    </Layout>
  )
}
export default withI18next()(IndexPage);
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "translations" } }) {
      ...LocaleFragment
    }
  }
`;

