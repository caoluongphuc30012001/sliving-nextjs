import React, { useState, useEffect } from "react";
import "../../i18n/i18n";
import SectionApplication from "./body/section-application";
import SolutionSlide from "./body/solution-slide";
import Layout from "@components/layout";
import "./product.scss";
import ProductSlide from "./body/product-slide";
import DataProductSolution from "@query/product-solution";
const isBrowser = typeof window !== "undefined";
const SolutionProduct = () => {
  const queryAllDataProduct = DataProductSolution();
  const [urlSelect, setUrlSelect] = useState("");
  const dataSolutionSlide = queryAllDataProduct.dataSolution.edges;
  useEffect(() => {
    setUrlSelect(window.localStorage.getItem("click-url"));
    if (urlSelect === "solution-id") {
      document.getElementById("solution-id").scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (isBrowser) {
        window.localStorage.setItem("click-url", "");
      }
    }
    if (urlSelect === "product-id") {
      document.getElementById("product-id").scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.localStorage.setItem("click-url", "");
    }
  }, [urlSelect])
  return <Layout>
    <div className="solution-page">
      <div className="solution-header">
        <SectionApplication />
      </div>
      <div className="solution-body" id="solution-id">
        <SolutionSlide dataSlide={dataSolutionSlide} />
      </div>
      <div className="solution-product-body" id="product-id">
        <ProductSlide />
      </div>
    </div>
  </Layout>
}

export default SolutionProduct;
