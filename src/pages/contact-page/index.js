import React from 'react';
import ContactPages from './contact-page';
import Layout from "@components/layout";
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { graphql } from 'gatsby';
const ContactPage = () => {

    return (<Layout>
        <ContactPages />
    </Layout>)
}
export default withI18next()(ContactPage);
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "translations" } }) {
      ...LocaleFragment
    }
  }
`;
