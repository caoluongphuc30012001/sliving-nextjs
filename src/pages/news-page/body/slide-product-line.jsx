import React from 'react';
import CardProductLine from "@components/card/card-product-line/card-product-line";
import Slider from "react-slick";
const SlideProductLine = (props) => {
    const post = props.data;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings} className="slide-prod-line">
            {
                ( post && post.map(({node}) => {
                    return (
                        <CardProductLine 
                            key={node.frontmatter.id}
                            title={node.frontmatter.title}
                            subtitle={""}
                            slug={node.frontmatter.slug}
                            description={node.frontmatter.description}
                            imgUrl={node.frontmatter.featuredImage.publicURL} 
                            isBtn={true} 
                            url="news-page"
                        />
                    )
                }))
            }
        </Slider>
    );
}
export default SlideProductLine;
