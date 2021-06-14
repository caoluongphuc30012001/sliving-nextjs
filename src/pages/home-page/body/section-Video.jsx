import React, { useState, useEffect, useCallback } from 'react'
import CardTitleHeader from "@components/card/card-title-header";
import Slider from "react-slick";
import Modal from "react-modal";
import { Image } from 'react-bootstrap';
import Image1 from "@images/image-video/image1.svg";
import Image2 from "@images/image-video/image2.svg";
import Image3 from "@images/image-video/image3.svg";
import Image4 from "@images/image-video/image4.svg";
import Video1 from "@videos/home-page/slide-1.webp";
import Video2 from "@videos/home-page/slide-2.webp";
import Video3 from "@videos/home-page/slide-3.webp";
import Video4 from "@videos/home-page/slide-4.webp";
import VideoWebm1 from "@videos/home-page/slide-1.webm";
import VideoWebm2 from "@videos/home-page/slide-2.webm";
import VideoWebm3 from "@videos/home-page/slide-3.webm";
import VideoWebm4 from "@videos/home-page/slide-4.webm";
import IconPlay from "@images/icon/icon-play.svg";
import closeImg from "@images/icon/close.svg";
import arrowNext from "@images/icon/navigate_before.svg";
import arrowPrev from "@images/icon/navigate_next.svg";
Modal.setAppElement('#___gatsby')
const SectionVideo = () => {
    const ButtonArrow = (props) => {
        const { className, style, onClick, arrow } = props;
        return (
            <div role="button" tabIndex={0}
                className={className}
                style={{ ...style, display: "block", }}
                onClick={onClick} onKeyDown={onClick}>
                <img src={arrow} alt="" />
            </div>
        );
    }
    const [isShowing, setIsShowing] = useState(false);
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setIsShowing(false);
        }
    }, []);
    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ButtonArrow arrow={arrowPrev} />,
        prevArrow: <ButtonArrow arrow={arrowNext} />
    };
    const Modals = () => {
        return <Modal className="modal modal-video" id="modal-video"
            isOpen={isShowing}
            onRequestClose={closeModal}>
            <button type="button" className="modal-close-button modal-close-btn" data-dismiss="modal" aria-label="Close" onClick={(event) => closeModal(event)}>
                <Image src={closeImg} alt="close image" />
            </button>
            <Slider {...settings}>
                <div className="embed-responsive embed-responsive-16by9 modal-video-wrap">
                    <video muted autoPlay loop playsInline className="embed-responsive-item">
                        <source src={Video1} type="video/webp" />
                        <source src={VideoWebm1} type="video/webm" />
                    </video>
                </div>
                <div className="embed-responsive embed-responsive-16by9 modal-video-wrap">
                    <video muted autoPlay loop playsInline className="embed-responsive-item">
                        <source src={Video2} type="video/webp" />
                        <source src={VideoWebm2} type="video/webm" />
                    </video>
                </div>  <div className="embed-responsive embed-responsive-16by9 modal-video-wrap">
                    <video muted autoPlay loop playsInline className="embed-responsive-item">
                        <source src={Video3} type="video/webp" />
                        <source src={VideoWebm3} type="video/webm" />
                    </video>
                </div>  <div className="embed-responsive embed-responsive-16by9 modal-video-wrap">
                    <video muted autoPlay loop playsInline className="embed-responsive-item">
                        <source src={Video4} type="video/webp" />
                        <source src={VideoWebm4} type="video/webm" />
                    </video>
                </div>
            </Slider>
        </Modal>
    }
    const closeModal = (e) => {
        setIsShowing(!isShowing);
        e.preventDefault();
        document.documentElement.style.overflowY = "auto";
    }
    const openModal = (e) => {
        setIsShowing(!isShowing);
        e.preventDefault();
        document.documentElement.style.overflowY = "hidden";
    }
    return (
        <div className="body-video container-wrap">
            <CardTitleHeader title={"Videos"} />
            <div className="card-video center">
                <div className="App">
                    <Modals />
                </div>
                <div className="grid-video">
                    <div className="grid-video-item">
                        <Image className="grid-img" src={Image1} alt="Image 1" />
                        <Image className="icon-play" src={IconPlay} alt="icon play"
                            onClick={(event) => { openModal(event) }} id="playVideo1" />
                    </div>
                    <div className="grid-video-item">
                        <Image className="grid-img" src={Image2} alt="Image 2" />
                        <Image className="icon-play" src={IconPlay} alt="icon play"
                            onClick={(event) => { openModal(event) }} id="playVideo2" />
                    </div>
                    <div className="grid-video-item">
                        <Image className="grid-img" src={Image3} alt="Image 3" />
                        <Image className="icon-play" src={IconPlay} alt="icon play"
                            onClick={(event) => { openModal(event) }} id="playVideo3" />
                    </div>
                    <div className="grid-video-item">
                        <Image className="grid-img" src={Image4} alt="Image 4" />
                        <Image className="icon-play" src={IconPlay} alt="icon play"
                            onClick={(event) => { openModal(event) }} id="playVideo4" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SectionVideo;
