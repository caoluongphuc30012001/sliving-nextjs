import React from "react";
import Slider from "react-slick";
import { Row, Col, Image } from 'react-bootstrap';
import Image1 from "@images/intro-content/rectangle1.png";
import Image2 from "@images/intro-content/rectangle2.png";
import Image3 from "@images/intro-content/rectangle3.png";
import Image4 from "@images/intro-content/rectangle4.png";
const NewsPageSlider = () => {
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
                <div className="news-small-card">
                    <Row>
                        <Col className="col-5">
                            <Image className="video-cover" src={Image1} alt="Image 1" fluid />
                        </Col>
                        <Col className="col-7">
                            <div className="text-day"> 16/10/2020</div>
                            <div className="text-description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
                        </Col>
                    </Row>
                </div>
                <div className="news-small-card">
                    <Row>
                        <Col className="col-5">
                            <Image className="video-cover" src={Image2} alt="Image 1" fluid />
                        </Col>

                        <Col className="col-7">
                            <div className="text-day"> 16/10/2020</div>
                            <div className="text-description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
                        </Col>
                    </Row>
                </div>
                <div className="news-small-card">
                    <Row>
                        <Col className="col-5">
                            <Image className="video-cover" src={Image3} alt="Image 1" fluid />
                        </Col>

                        <Col className="col-7">
                            <div className="text-day"> 16/10/2020</div>
                            <div className="text-description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
                        </Col>
                    </Row>
                </div>
                <div className="news-small-card">
                    <Row>
                        <Col className="col-5">
                            <Image className="video-cover" src={Image4} alt="Image 1" fluid />
                        </Col>
                        <Col className="col-7">
                            <div className="text-day"> 16/10/2020</div>
                            <div className="text-description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
                        </Col>
                    </Row>
                </div>
            </Slider>
        </div>
    );
}
export default NewsPageSlider;
