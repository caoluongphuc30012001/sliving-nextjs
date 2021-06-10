import React from "react"
import { Carousel } from "react-bootstrap";
import Video1 from "@videos/home-page/slide-1.mp4";
import Video2 from "@videos/home-page/slide-2.mp4";
import Video3 from "@videos/home-page/slide-3.mp4";
import Video4 from "@videos/home-page/slide-4.mp4";
const SectionHeader = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <div className="video">
                    <video muted autoPlay loop playsInline>
                        <source src={Video1} type="video/mp4" />
                    </video>
                </div >
            </Carousel.Item>
            <Carousel.Item>
                <div className="video">
                    <video muted autoPlay loop playsInline>
                        <source src={Video2} type="video/mp4" />
                    </video>
                </div >
            </Carousel.Item>
            <Carousel.Item>
                <div className="video">
                    <video muted autoPlay loop playsInline>
                        <source src={Video3} type="video/mp4" />
                    </video>
                </div >
            </Carousel.Item>
            <Carousel.Item>
                <div className="video">
                    <video muted autoPlay loop playsInline>
                        <source src={Video4} type="video/mp4" />
                    </video>
                </div >
            </Carousel.Item>
        </Carousel>
    );
}
export default SectionHeader;
