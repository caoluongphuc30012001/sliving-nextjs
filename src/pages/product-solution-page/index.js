import React from "react";
import "../../i18n/i18n";
import SectionApplication from "./body/section-application";
import SolutionSlide from "./body/solution-slide";
import Layout from "@components/layout";
import "./product.scss";
import ProductSlide from "./body/product-slide";
import DataProductSolution from "@query/product-solution";
const SolutionProduct = () => {
  const queryAllDataProduct = DataProductSolution();
  const dataSolutionSlide = queryAllDataProduct.dataSolution.edges;

  return <Layout>
    <div className="solution-page">
      <div className="solution-header">
        <SectionApplication />
      </div>
      <div className="solution-body">
        <SolutionSlide dataSlide={dataSolutionSlide} />
      </div>
      <div className="solution-product-body">
        <ProductSlide />
      </div>
    </div>
  </Layout>
}

export default SolutionProduct;
