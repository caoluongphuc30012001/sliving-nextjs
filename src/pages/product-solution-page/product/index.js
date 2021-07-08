import React, { useState, useEffect } from 'react';
import Layout from "@components/layout";
import SectionNavBar from './body/section-NavBar';
import SectionAbout from "./body/section-about";
import ProdSlide from "./body/prod-slide";
import Thermostat from './body/thermostat';
import ProdDetail from './body/prod-detail';
import Specitification from './body/spectification';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { graphql } from 'gatsby';
const Product = ({ pageContext }) => {
    const [data, setData] = useState({});
    const [slide, setSlide] = useState([]);
    const [name, setName] = useState("");
    const [imgURL, setImgURL] = useState();
    useEffect(() => {
        const tmp = pageContext.dataProd;
        setData(tmp);
        setName(tmp.title);
        if (tmp.property_2) {
            setSlide(prev => [...prev, tmp.property_2.publicURL]);
        }
        if (tmp.property_3) {
            setSlide(prev => [...prev, tmp.property_3.publicURL]);
        }
        if (tmp.property_4) {
            setSlide(prev => [...prev, tmp.property_4.publicURL]);
        }
        if(tmp.property_5) {
            setImgURL(tmp.property_5.publicURL);
        }
    }, []);
    return (
        <Layout>
            <SectionNavBar name={name}/>
            {
                data.property_1 ? (
                    <SectionAbout banner={data.property_1.publicURL} />
                ) : (
                    <SectionAbout />
                )
            }
            {
                slide ? (
                    <ProdSlide slide={slide} />
                ) : (
                    <ProdSlide />
                )
            }
            {
                data.featuredVideo ? (
                    <Thermostat videoUrl={data.featuredVideo.publicURL} />
                ) : (
                    <Thermostat imgURL={imgURL}/>
                )
            }
            <ProdDetail />
            <Specitification />
        </Layout>
    )
}
export default withI18next()(Product);
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "translations" } }) {
      ...LocaleFragment
    }
  }
`;
