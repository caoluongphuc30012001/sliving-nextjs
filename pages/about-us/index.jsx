import React, { useState } from "react";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useRouter } from "next/router";

import SectionHeader from "./body/section-header";
import SectionIntro from "./body/section-intro";
import SectionBrandStory from "./body/section-brand-story";
import SectionCustomerCentric from "./body/section-customer-centric";
import SectionSmartFactory from "./body/section-smart-factory";
import SectionActivity from "./body/section-field-activity";
import SectionOurPartner from "./body/section-our-partner";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "aboutUs"])),
      locale: locale,
    },
  };
};
const AboutPage = ({ locale }) => {
  const router = useRouter();
  const changeLng = () => {
    router.push(router.asPath, undefined, {
      locale: locale === "en" ? "vi" : "en",
      scroll: false,
    });
  };
  return (
    <div>
      <button
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 100000,
        }}
        onClick={changeLng}
      >
        click
      </button>
      <SectionHeader />
      <SectionIntro />
      <SectionBrandStory />
      <SectionCustomerCentric />
      <SectionSmartFactory />
      <SectionActivity />
      <SectionOurPartner />
    </div>
  );
};

export default AboutPage;
