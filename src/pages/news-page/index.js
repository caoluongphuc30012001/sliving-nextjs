import React from 'react';
import Layout from "@components/layout";
import SlideProductLine from "./body/slide-product-line";
import "./style.scss";
import ProductSuggest from './body/product-suggest';
import PostNews from './body/post-new';
import DataNewsPage from "@query/news-page";
import { useTranslation } from 'react-i18next';
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
                <div className="news-page-wrap">
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
                </div>
            </div>
        </Layout>
    )
}
export default NewsPage;
