import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
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
import LayoutV3 from "../../components/layout-v3";
import Seo from "../../components/seo";

const AboutPage = () => {
  return (
    <LayoutV3>
      <Seo
        title="Về Unicloud"
        description="Unicloud là một tập đoàn công nghệ quốc tế có trụ sở tại Hà Nội,
         nhà máy và bộ phận nghiên cứu R&D tại Khu công nghệ cao Tp. Hồ Chí Minh"
      />
      <main id="about_us_page">
        <SectionHeader />
        <SectionIntro />
        <SectionBrandStory />
        <SectionCustomerCentric />
        <SectionSmartFactory />
        <SectionActivity />
        <SectionOurPartner />
        <SectionHelpMore />
      </main>
    </LayoutV3>
  );
};

export default AboutPage;
