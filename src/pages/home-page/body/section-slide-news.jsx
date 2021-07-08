import React from "react";
import Slider from "react-slick";
import CardTitleHeader from "@components/card/card-title-header";
import PrevArrow from "@components/button/button-prev-arrow";
import NextArrow from "@components/button/button-next-arrow";
import { useTranslation } from 'react-i18next';
import DataNewsPage from "@query/news-page";
import { Link } from "gatsby";
import UseGetLgn from "@hook/useGetLgn";
const SectionSlideNews = () => {
    const { t } = useTranslation();
    const data = DataNewsPage().dataNewsPage.edges;
    const Lgn =UseGetLgn();
    const settings = {
        dots: false,
        infinite: false,
        loop: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
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
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <div className="news-slide">
            <div className="container-wrap news-slide-wrap">
                <CardTitleHeader title={t(`News`)} id={3} />
                <div className="slide-wrap">
                    <Slider {...settings}>
                        {
                            data && data.map(({ node }) => {
                                return (
                                    <div className="news-wrap" key={node.frontmatter.id}>
                                        <div className="news-wrap-item">
                                            <div className="news-wrap-img">
                                                <Link to={`${Lgn}news-page/${node.frontmatter.slug}`}>
                                                    <img src={node.frontmatter.featuredImage.publicURL} alt="image1" />
                                                </Link>
                                            </div>
                                            <div className="news-wrap-description">
                                                <div className="description_content">{node.frontmatter.description}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
}
export default SectionSlideNews;
