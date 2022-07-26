import React from "react";
import HomePage from "./home-page";
import Layout from "../components/layout";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
};

export default function Home(props) {
  return (
    <div className="app">
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}
