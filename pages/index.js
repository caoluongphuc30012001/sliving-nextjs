import React from "react";
import HomePage from "./home-page";
import Layout from "../components/layout";

export default function Home() {
  return (
    <div className="app">
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}
