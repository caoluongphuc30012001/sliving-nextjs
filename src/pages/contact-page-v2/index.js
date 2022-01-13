import LayoutNew from "@components/layout-new";
import LayoutSmartHome from "@components/layout-smart-home";
import LayoutLighting from "@components/layout-smart-lighting";
import React from "react";
import HeaderImage from "./body/contact-header-img";
import BottomImage from "./body/contact-footer-img";
import ContactForm from "./body/contact-form";
import { PortfolioConsumer } from "@context/context";

import { useTranslation } from "react-i18next";

import "./style.scss";

const ContactUs = (props) => {

  const {t} = useTranslation();

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
          <LayoutSmartHome title={t(`${context?.dataTitles?.dataTitles.contact_page.title}`)}>
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
          <LayoutLighting title={t(`${context?.dataTitles?.dataTitles.contact_page.title}`)}>
            <BuildBodyContact />
          </LayoutLighting>
        )}
      </PortfolioConsumer>
    );
  }
  return (
    <PortfolioConsumer>
      {(context) => (
        <LayoutNew title={t(`${context?.dataTitles?.dataTitles.contact_page.title}`)}>
          <BuildBodyContact />
        </LayoutNew>
      )}
    </PortfolioConsumer>
  );
};
export default ContactUs;
