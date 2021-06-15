import React from "react"
import { Carousel } from "react-bootstrap";
import Video1 from "@videos/home-page/slide-1.mp4";
import Video2 from "@videos/home-page/slide-2.mp4";
import Video3 from "@videos/home-page/slide-3.mp4";
import Video4 from "@videos/home-page/slide-4.mp4";
import VideoWebm1 from "@videos/home-page/slide-1.webm";
import VideoWebm2 from "@videos/home-page/slide-2.webm";
import VideoWebm3 from "@videos/home-page/slide-3.webm";
import VideoWebm4 from "@videos/home-page/slide-4.webm";
const SectionHeader = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <div className="video">
                    <video muted autoPlay loop playsInline>
                        <source src={Video1} type="video/mp4" />
                        <source src={VideoWebm1} type="video/webm" />
                    </video>
                </div >
            </Carousel.Item>
            <Carousel.Item>
                <div className="video">
                    <video muted autoPlay loop playsInline>
                        <source src={Video2} type="video/mp4" />
                        <source src={VideoWebm2} type="video/webm" />
                    </video>
                </div >
            </Carousel.Item>
            <Carousel.Item>
                <div className="video">
                    <video muted autoPlay loop playsInline>
                        <source src={Video3} type="video/mp4" />
                        <source src={VideoWebm3} type="video/webm" />
                    </video>
                </div >
            </Carousel.Item>
            <Carousel.Item>
                <div className="video">
                    <video muted autoPlay loop playsInline>
                        <source src={Video4} type="video/mp4" />
                        <source src={VideoWebm4} type="video/webm" />
                    </video>
                </div >
            </Carousel.Item>
        </Carousel>
    );
}
export default SectionHeader;
