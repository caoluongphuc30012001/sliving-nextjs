import LayoutNew from "@components/layout-new";
import LayoutSmartHome from "@components/layout-smart-home";
import LayoutLighting from "@components/layout-smart-lighting";
import React from "react";
import HeaderImage from "./body/contact-header-img";
import BottomImage from "./body/contact-footer-img";
import ContactForm from "./body/contact-form";

import { useTranslation } from "react-i18next";

import dataMetaDetails   from "@data/dataMeta.json";
import "./style.scss";

const ContactUs = (props) => {
  const { t } = useTranslation();
const dataMeta = dataMetaDetails["dataMeta"];

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
      <LayoutSmartHome
        title={t(`${dataMeta.contact_page.title}`)}
        description={t(`${dataMeta.contact_page.description}`)}
      >
        <BuildBodyContact />
      </LayoutSmartHome>
    );
  }
  if (props.pageContext.isNavbarContact?.isSmartLighting) {
    return (
      <LayoutLighting
        title={t(`${dataMeta.contact_page.title}`)}
        description={t(`${dataMeta.contact_page.description}`)}
      >
        <BuildBodyContact />
      </LayoutLighting>
    );
  }
  return (
    <LayoutNew
      title={t(`${dataMeta.contact_page.title}`)}
      description={t(`${dataMeta.contact_page.description}`)}
    >
      <BuildBodyContact />
    </LayoutNew>
  );
};
export default ContactUs;
