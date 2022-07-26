import React, { useState, useEffect } from "react";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation, i18n } from "next-i18next";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
};

const HomePage = (props) => {
  const { t } = useTranslation("home");

  const [lng, setLng] = useState("en");

  useEffect(() => {
    i18n.changeLanguage(lng);
  }, [lng]);

  const handleClick = () => {
    setLng("en");
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>{t("hello")}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default HomePage;
