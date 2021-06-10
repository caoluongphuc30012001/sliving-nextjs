import React from 'react';
import Body from './news-page-detail';
import Layout from "@components/layout.jsx";
import "../style.scss"
const IndexPage = ({ location }) => {
    return (
        <Layout>
            {
                (location.state && <Body data={location.state.data} slug={location.state.slug} />)
            }
        </Layout>
    )
}
export default IndexPage;
