import React from 'react';
import SupportDetail from "@pages/support-page/body/support-detail";

const SupportPageTemplate = ({ pageContext }) => {
  return (
    pageContext && <SupportDetail data={pageContext.data} node={pageContext.node} />
  )
}
export default SupportPageTemplate;
