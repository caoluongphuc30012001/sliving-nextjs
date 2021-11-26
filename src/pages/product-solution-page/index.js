import React, { useState, useEffect, useRef } from "react";
import "../../i18n/i18n";
import "./product.scss";
import SectionApplication from "./body/section-application";
import SolutionSlide from "./body/solution-slide";
import Layout from "@components/layout";
import ProductSlide from "./body/product-slide";
import DataProductSolution from "@query/product-solution";
import { withI18next } from "@wapps/gatsby-plugin-i18next";
import { graphql } from "gatsby";
const SolutionProduct = ({ location, pageContext: { url } }) => {
  const [params, setParams] = useState();
  const refView = useRef(null);
  const queryAllDataProduct = DataProductSolution();
  const dataSolutionSlide = queryAllDataProduct.dataSolution.edges;
  useEffect(() => {
    if (url === "solution-id") {
      document
        .getElementById("solution-id")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (url === "product-id") {
      document
        .getElementById("product-id")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [url]);

  useEffect(() => {
    const url = new URLSearchParams(location.search);
    setParams(url.get("id"));
    if (params) {
      refView.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <Layout>
      <div className="solution-page">
        <div className="solution-header">
          <SectionApplication />
        </div>
        <div className="solution-body" id="solution-id">
          <SolutionSlide dataSlide={dataSolutionSlide} />
        </div>
        <div className="solution-product-body" id="product-id" ref={refView}>
          <ProductSlide params={params} />
        </div>
      </div>
    </Layout>
  );
};

export default withI18next()(SolutionProduct);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(
      filter: { lng: { eq: $lng }, ns: { eq: "translations" } }
    ) {
      ...LocaleFragment
    }
  }
`;
