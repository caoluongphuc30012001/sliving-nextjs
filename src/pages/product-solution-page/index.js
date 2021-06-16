import React, { useEffect } from "react";
import "../../i18n/i18n";
import SectionApplication from "./body/section-application";
import SolutionSlide from "./body/solution-slide";
import Layout from "@components/layout";
import "./product.scss";
import ProductSlide from "./body/product-slide";
import DataProductSolution from "@query/product-solution";
const SolutionProduct = ({ pageContext: { url } }) => {
  const queryAllDataProduct = DataProductSolution();
  const [urlSelect, setUrlSelect] = useState("");
  const dataSolutionSlide = queryAllDataProduct.dataSolution.edges;
  useEffect(() => {
    if (url === "solution-id") {
      document.getElementById("solution-id").scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (url === "product-id") {
      document.getElementById("product-id").scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [url])
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
