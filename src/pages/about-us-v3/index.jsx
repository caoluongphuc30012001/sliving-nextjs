import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import "swiper/css/bundle";

import SectionHeader from "./body/section-header";
import SectionIntro from "./body/section-intro";
import SectionSmartFactory from "./body/section-smart-factory";
import SectionHelpMore from "../../components/help-more/section-help-more";
import SectionOurPartner from "./body/section-our-partner";
import SectionActivity from "./body/section-field-activity";
import SectionCustomerCentric from "./body/section-customer-centric";
import SectionBrandStory from "./body/section-brand-story";

const AboutPage = () => {
  return (
    <main>
      <SectionHeader />
      <SectionIntro />
      <SectionBrandStory />
      <SectionCustomerCentric />
      <SectionSmartFactory />
      <SectionActivity />
      <SectionOurPartner />
      <SectionHelpMore />
    </main>
  );
};

export default AboutPage;
