import LayoutNew from "@components/layout-new";
import LayoutSmartHome from "@components/layout-smart-home";
import LayoutLighting from "@components/layout-smart-lighting";
import React from "react";
import HeaderImage from "./body/contact-header-img";
import BottomImage from "./body/contact-footer-img";
import ContactForm from "./body/contact-form";
import ContactSupport from "./body/contact-support";
import RequestSupport from "./body/contact-request-support";
import { withI18next } from "@wapps/gatsby-plugin-i18next";
import { graphql } from 'gatsby';
import "./style.scss";

const ContactUs = (props) => {
  if(props.pageContext.isNavbarContact?.isSmartHome){
    return(
      <LayoutSmartHome>
        <HeaderImage />
        <ContactForm />
        <BottomImage />
      </LayoutSmartHome>
    )
  }
  if(props.pageContext.isNavbarContact?.isSmartLighting){
    return <LayoutLighting>
        <HeaderImage />
        <ContactForm />
        <BottomImage />
    </LayoutLighting>
  }
  return (
    <LayoutNew>
      {/* <RequestSupport />
      <ContactSupport /> */}
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
