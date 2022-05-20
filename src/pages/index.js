import React from "react";
import HomePageV3 from "./home-page-v3/index";
import DataProductNew from "../query/product-hot";
const IndexPage = (props) => {
  console.log(DataProductNew());
  return <HomePageV3 />;
};
export default IndexPage;
