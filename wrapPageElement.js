import React from "react";
// import Layout from "@components/layout-new";
import Layout from "./src/components/layout-v3";

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export default wrapPageElement;
