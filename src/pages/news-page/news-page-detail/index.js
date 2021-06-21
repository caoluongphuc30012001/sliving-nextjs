import React from 'react';
import Body from './news-page-detail';
import Layout from "@components/layout.jsx";
import "../style.scss"
const IndexPage = ({ pageContext }) => {
    return (
        <Layout>
            {
                (pageContext && <Body data={pageContext.data} node={pageContext.node} />)
            }
        </Layout>
    )
}
export default IndexPage;
