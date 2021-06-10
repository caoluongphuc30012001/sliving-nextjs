import React from 'react';
import Layout from "@components/layout";
import SectionNavBar from './body/section-NavBar';
import SectionAbout from "./body/section-about";
import ProdSlide from "./body/prod-slide";
import Thermostat from './body/thermostat';
import ProdDetail from './body/prod-detail';
import Specitification from './body/spectification';
const Product = (props) => {
    return (<Layout>
        <SectionNavBar />
        <SectionAbout />
        <ProdSlide />
        <Thermostat />
        <ProdDetail />
        <Specitification />
    </Layout>)
}
export default Product;
