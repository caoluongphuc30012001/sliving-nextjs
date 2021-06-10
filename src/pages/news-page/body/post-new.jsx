import React from 'react';
import Slider from "react-slick";
import CardProductLine from '@components/card/card-product-line/card-product-line';
import FormPagination from '@components/pagination/form-pagination';

const PostNews = (props) => {
    const post = props.data;
    const settings = {
        dots: true,
        infinite: false,
        lop: true,
        speed: 500,
        slidesToShow: 2,
        rows: 3,
        slidesToRow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        className: "slick-post-news",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };
    return (
        <>
            <FormPagination title={"Bài viết mới"} variable={"bài viết"} />
            <div className="posts-new">
                <Slider {...settings}>
                    {
                        (post && post.map(({node}) => {
                            return (
                                <CardProductLine 
                                    key={node.frontmatter.id}
                                    title={""}
                                    subtitle={node.frontmatter.subtitle}
                                    slug={node.frontmatter.slug}
                                    description={""}
                                    imgUrl={node.frontmatter.featuredImage.childImageSharp.fluid.src} 
                                    data={post.slice(0, 5)}
                                />
                            )
                        }))
                    }
                </Slider>
            </div>
        </>
    )

}
export default PostNews;
