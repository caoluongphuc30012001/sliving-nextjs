import React, { useState } from "react";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useRouter } from "next/router";

import SectionProductsSlider from "./body/section-products-slider";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "smartHome"])),
      locale: locale,
    },
  };
};
const SmartHome = ({ locale }) => {
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
      {/* <SectionProductsSlider /> */}
    </div>
  );
};

export default SmartHome;
