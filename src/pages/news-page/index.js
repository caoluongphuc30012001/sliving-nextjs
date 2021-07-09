import React from 'react';
import Layout from "@components/layout";
import SlideProductLine from "./body/slide-product-line";
import "./style.scss";
import ProductSuggest from './body/product-suggest';
import PostNews from './body/post-new';
import DataNewsPage from "@query/news-page";
import { useTranslation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { graphql } from 'gatsby';
import { Row, Col } from 'react-bootstrap';
const NewsPage = () => {
    const { t } = useTranslation();
    const data = DataNewsPage();
    if (data === null) {
        return null;
    }
    const dataProductLine = data.dataProductLine.edges;
    const dataPostNew = data.dataPostNew.edges;
    const dataNewsSuggest = data.dataNewsSuggest.edges;
    const dataNewsVideo = data.dataNewsVideo.edges;
    const dataSmartHome = data.dataSmartHome.edges;
    return (
        <Layout>
            <div className="news-page container-wrap">
                <Row className="news-page-wrap">
                    <div className="news-page-left news-page-column">
                        <div className="product-line">
                            <SlideProductLine data={dataProductLine} />
                        </div>
                        <div className="post-news">
                            <PostNews data={dataPostNew} />
                        </div>
                    </div>
                    <div className="news-page-right news-page-column">
                        <ProductSuggest title={t(`Smart_Home`)} data={dataSmartHome} />
                        <ProductSuggest title={t(`Latest_News`)} data={dataNewsSuggest} />
                        <ProductSuggest title={t(`Latest_Video`)} data={dataNewsVideo} isVideo={true} />
                    </div>


                    {/* <div className="news-page-left news-page-column">
                        <div className="product-line">
                            <Row>
                            <Col>
                            <SlideProductLine data={dataProductLine} />
                            </Col>
                            <Col className="news-page-right news-page-column">
                            <ProductSuggest title={t(`Smart_Home`)} data={dataSmartHome} />
                            </Col>
                            </Row>
                        </div>
                    </div> */}
                </Row>
            </div>
        </Layout>
    )
}
export default withI18next()(NewsPage);
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "translations" } }) {
      ...LocaleFragment
    }
  }
`;
