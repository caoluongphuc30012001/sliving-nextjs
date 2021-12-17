import React, { useState, useEffect } from "react";
import ItemProduct from "./../../../components/card/card-product-v2";
import DataProductNew from "../../../query/product-hot";
import TitleSection from "../../../components/section/title/title-section";

const LightingProduct=()=>{
    const dataProducts = DataProductNew();
    
    return <section className="lightingProduct container">
        <TitleSection content={'Smart lighting solutions for your home.'} color={'bold'} direction={'center'}/>
        <div className="row">
            <div class="col-sm-4">
                <ItemProduct props={dataProducts.productLed.edges[0].node.frontmatter} isButton={true}/>
            </div>
            <div class="col-sm-4">
                <ItemProduct props={dataProducts.productLed.edges[1].node.frontmatter} isButton={true}/>
            </div>
            <div class="col-sm-4">
                <ItemProduct props={dataProducts.productLed.edges[2].node.frontmatter} isButton={true}/>
            </div>
        </div>
    </section>
}
export default LightingProduct;
