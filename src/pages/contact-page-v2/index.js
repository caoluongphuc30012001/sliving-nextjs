import LayoutNew from "@components/layout-new";
import React from "react";
import HeaderImage from "./body/contact-header-img";
import BottomImage from "./body/contact-footer-img";
import ContactForm from "./body/contact-form";
import ContactSupport from "./body/contact-support";
import RequestSupport from "./body/contact-request-support";
import { withI18next } from "@wapps/gatsby-plugin-i18next";
import { graphql } from 'gatsby';
import "./style.scss";

const ContactUs = () => {
  return (
    <LayoutNew>
      <RequestSupport />
      <ContactSupport />
      <HeaderImage />
      <ContactForm />
      <BottomImage />
    </LayoutNew>
  );
};
export default withI18next()(ContactUs);
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(
      filter: { lng: { eq: $lng }, ns: { eq: "translations" } }
    ) {
      ...LocaleFragment
    }
  }
`;
