import React from "react";

import "@i18n/i18n";

import LayoutNew from "@components/layout-new";
import LayoutSmartHome from "@components/layout-smart-home";
import LayoutLighting from "@components/layout-smart-lighting";

import HeaderImage from "./body/contact-header-img";
import BottomImage from "./body/contact-footer-img";
import ContactForm from "./body/contact-form";

import { useTranslation } from "react-i18next";

import dataMetaDetails from "@data/dataMeta.json";

import Seo from "@components/seo";

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
      <LayoutSmartHome>
        <Seo
          title={t(`${dataMeta.contact_page.title}`)}
          description={t(`${dataMeta.contact_page.description}`)}
          url={dataMeta.contact_page.url_smart_home}
        />
        <BuildBodyContact />
      </LayoutSmartHome>
    );
  }
  if (props.pageContext.isNavbarContact?.isSmartLighting) {
    return (
      <LayoutLighting>
        <Seo
          title={t(`${dataMeta.contact_page.title}`)}
          description={t(`${dataMeta.contact_page.description}`)}
          url={dataMeta.contact_page.url_smart_lighting}
        />
        <BuildBodyContact />
      </LayoutLighting>
    );
  }
  return (
    <LayoutNew>
      <Seo
        title={t(`${dataMeta.contact_page.title}`)}
        description={t(`${dataMeta.contact_page.description}`)}
        url={dataMeta.contact_page.url}
      />
      <BuildBodyContact />
    </LayoutNew>
  );
};
export default ContactUs;
