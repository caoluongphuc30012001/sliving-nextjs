import React from "react";
import Slider from "react-slick";
import DataIntroduction from "@query/introduction";
import CardHorizonal from '@components/card/card-horizontal/card-horizontal';
const NewsPageSlider = () => {
    const data = DataIntroduction();
    const posts = data.dataIntroContentPage.edges;

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 4,
        vertical: true,
        row: 4,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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
        <div>
            <Slider className="news-slider" {...settings}>
                {
                    posts && posts.map(post => {
                        return (
                            <CardHorizonal
                                key={post.node.frontmatter.id}
                                date={post.node.frontmatter.date}
                                title={post.node.frontmatter.title}
                                imgUrl={post.node.frontmatter.featuredImage.publicURL}
                                slug={post.node.frontmatter.slug}
                                alt={post.node.frontmatter.alt}
                                url="intro-content-page"
                            />
                        )
                    })
                }
            </Slider>
        </div>
    );
}
export default NewsPageSlider;
