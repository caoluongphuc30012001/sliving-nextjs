import React from 'react';
import CardSuggest from '@components/card/card-product-line/card-suggest';
const ProductSuggest = ({ title, isVideo, data }) => {
    return (
        <CardSuggest title={title} isVideo={isVideo} data={data} url="news-page"/>
    )
}
export default ProductSuggest;
