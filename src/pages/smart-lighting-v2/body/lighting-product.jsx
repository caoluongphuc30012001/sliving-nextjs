import React from "react";
import ItemProduct from "./../../../components/card/card-product-v2";
import DataProductNew from "../../../query/product-hot";
import TitleSection from "../../../components/section/title/title-section";

const LightingProduct=()=>{
    const dataProducts = DataProductNew();
    
    return <section className="lightingProduct container">
        <TitleSection content={'Smart lighting solutions for your life.'} color={'bold'} direction={'center'}/>
        <div className="row">
            <div className="col-sm-4">
                <ItemProduct props={dataProducts.productLed.edges[0].node.frontmatter}/>
            </div>
            <div className="col-sm-4">
                <ItemProduct props={dataProducts.productLed.edges[1].node.frontmatter}/>
            </div>
            <div className="col-sm-4">
                <ItemProduct props={dataProducts.productLed.edges[2].node.frontmatter}/>
            </div>
        </div>
    </section>
}
export default LightingProduct;
