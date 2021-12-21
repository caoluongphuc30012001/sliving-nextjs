import React from 'react';
import LayoutV2 from "@components/layout-new.jsx";
import TechnicalSol from './body/technicalSolution';
import { withI18next } from "@wapps/gatsby-plugin-i18next";
import {graphql} from "gatsby"
const IndexPage = ({pageContext}) => {
  console.log("pageContext",pageContext);
  return (
    <LayoutV2 isMainPage pageContext={{isSmartHome:true}}>
      <TechnicalSol data={pageContext?.data?.data} />
    </LayoutV2>
  );
};
export default withI18next()(IndexPage);
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(
      filter: { lng: { eq: $lng }, ns: { eq: "translations" } }
    ) {
      ...LocaleFragment
    }
  }
`;
