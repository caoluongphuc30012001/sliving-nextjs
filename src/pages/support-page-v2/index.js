import React from 'react';
import LayoutV2 from "@components/layout-new.jsx";
import TechnicalSolution from "./body/technicalSolution";


const IndexPage = ({ pageContext }) => {
  console.log();
  return (
    <LayoutV2>
      <TechnicalSolution data={pageContext.data.data} />
    </LayoutV2>
  );
};
export default IndexPage;
