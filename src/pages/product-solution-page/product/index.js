import React from 'react';
import Layout from "@components/layout";
import SectionNavBar from './body/section-NavBar';
import SectionAbout from "./body/section-about";
import ProdSlide from "./body/prod-slide";
import Thermostat from './body/thermostat';
import ProdDetail from './body/prod-detail';
import Specitification from './body/spectification';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { graphql } from 'gatsby';
const Product = (props) => {
  return (<Layout>
    <SectionNavBar />
    <SectionAbout />
    <ProdSlide />
    <Thermostat />
    <ProdDetail />
    <Specitification />
  </Layout>)
}
export default withI18next()(Product);
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "translations" } }) {
      ...LocaleFragment
    }
  }
`;
