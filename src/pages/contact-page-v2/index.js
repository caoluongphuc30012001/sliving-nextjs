import LayoutNew from "@components/layout-new";
import LayoutSmartHome from "@components/layout-smart-home";
import LayoutLighting from "@components/layout-smart-lighting";
import React from "react";
import HeaderImage from "./body/contact-header-img";
import BottomImage from "./body/contact-footer-img";
import ContactForm from "./body/contact-form";
import { PortfolioConsumer } from "@context/context";

import "./style.scss";

const ContactUs = (props) => {
  const BuildBodyContact = () => {
    return (
      <>
        <HeaderImage />
        <ContactForm />
        <BottomImage />
      </>
    );
  };
  if (props.pageContext.isNavbarContact?.isSmartHome) {
    return (
      <PortfolioConsumer>
        {(context) => (
          <LayoutSmartHome title={context?.dataTitles?.dataTitles.contact_page}>
            <BuildBodyContact />
          </LayoutSmartHome>
        )}
      </PortfolioConsumer>
    );
  }
  if (props.pageContext.isNavbarContact?.isSmartLighting) {
    return (
      <PortfolioConsumer>
        {(context) => (
          <LayoutLighting title={context?.dataTitles?.dataTitles.contact_page}>
            <BuildBodyContact />
          </LayoutLighting>
        )}
      </PortfolioConsumer>
    );
  }
  return (
    <PortfolioConsumer>
      {(context) => (
        <LayoutNew title={context?.dataTitles?.dataTitles.contact_page}>
          <BuildBodyContact />
        </LayoutNew>
      )}
    </PortfolioConsumer>
  );
};
export default ContactUs;
