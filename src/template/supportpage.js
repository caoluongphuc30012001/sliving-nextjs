import React from 'react';
import Layout from "@components/layout";
import SupportDetail from "../pages/support-page/body/support-detail";
const SupportPageTemplate = ({ data }) => {
  return (
    <Layout>
      {/* <div dangerouslySetInnerHTML={{__html : pageContext.data.html}}/> */}
      <SupportDetail data={data} />
    </Layout>
  )
}

export default SupportPageTemplate
