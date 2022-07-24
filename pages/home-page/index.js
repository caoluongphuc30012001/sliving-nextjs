import React from "react";

//import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    // props: {
    //   ...(await serverSideTranslations(locale, ["common"])),
    // },
    props: {
      locale,
    },
  };
}

const HomePage = (props) => {
  const { t } = useTranslation();
  return <h1>{props.locale}</h1>;
  //<div>{t("common:helloText")}</div>;
};

export default HomePage;
