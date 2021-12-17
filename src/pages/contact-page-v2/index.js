import LayoutNew from "@components/layout-new";
import React from "react";
import HeaderImage from "./body/contact-header-img";
import BottomImage from "./body/contact-footer-img";
import ContactForm from "./body/contact-form";
import ContactSupport from "./body/contact-support";
import RequestSupport from "./body/contact-request-support";

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
export default ContactUs;
