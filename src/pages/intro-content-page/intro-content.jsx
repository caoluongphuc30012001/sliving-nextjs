import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Modal from "react-modal";
import Image1 from "@images/intro-content/image1.png";
import ListIcon from "@images/intro-content/group2.png";
import ImageVideo from "@images/intro-content/poster.png";
import IconPlay from "@images/icon/icon-play.svg";
import Video1 from "@images/image-video/video1.mp4";
import News from "./smartHome-slider.jsx";
import "./intro-content.scss";
import { useTranslation } from 'react-i18next';
Modal.setAppElement('#___gatsby')
const IntroContent = () => {
    const { t } = useTranslation();
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
    const Modals = () => {
        return (<Modal className="modal" id="modal-introduction"
            isOpen={isShowing}
            onRequestClose={closeModal}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="modal-close-button modal-close-btn" data-dismiss="modal" aria-label="Close" onClick={(event) => closeModal(event)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <video muted autoPlay loop playsInline width="100%">
                            <source src={Video1} type="video/mp4"></source>
                        </video>
                    </div>
                </div>
            </div>
        </Modal>)
    }
    return (
        <div className="mainPage-container fluid container-wrap">
            <Row>
                <Col sm={7} xs={12} className="left-page container">
                    <span className="time-post-name fs-12 fw-bold">Sliving</span><span className="time-post-date fs-12"> {t(`posted-at`)} 24/05/2021 - 15:29</span>
                    <h3 className="text-title">{t(`5-reasons`)}</h3>
                    <Image className="image-header" src={Image1} alt="Image 1" fluid />
                    <p className="text-title-middle">{t(`IoT-Flatform`)}</p>
                    <div className="list-item container">
                        <Row>
                            <Col sm={2} xs={12}>
                                <Image className="list-icon" src={ListIcon} alt="Image 2" fluid />
                            </Col>
                            <Col sm={10} xs={12}>
                                <h3 className="text-title-number">01.</h3>
                                <p className="text-small-title"> {t(`International-quality`)}</p>
                                <p className="text-description"> {t(`customers-shoes`)}</p>
                            </Col>
                        </Row>

                        <Row className="mt-5">
                            <Col sm={2} xs={12}>
                                <Image className="list-icon" src={ListIcon} alt="Image 2" fluid />
                            </Col>
                            <Col sm={10} xs={12}>
                                <h3 className="text-title-number">02.</h3>
                                <p className="text-small-title"> {t(`Wide-range`)}</p>
                                <p className="text-description">  {t(`Designing-interfaces`)} </p>
                                <p className="text-description"> {t(`Design-hardware`)} </p>
                                <p className="text-description"> {t(`Producing-smart`)}  </p>
                                <p className="text-description"> {t(`Building-computer`)} </p>
                                <p className="text-description"> {t(`AI`)} </p>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col sm={2} xs={12}>
                                <Image className="list-icon" src={ListIcon} alt="Image 2" fluid />
                            </Col>
                            <Col sm={10} xs={12}>
                                <h3 className="text-title-number">03.</h3>
                                <p className="text-small-title"> {t(`Strong-supply`)}</p>
                                <span className="text-description fs-12">{t(`goal-leading1`)}</span><span className="time-post-name fs-12 fw-bold"> {t(`goal-leading2`)}</span><span className="text-description fs-12">  {t(`goal-leading3`)}</span><span className="time-post-name fs-12 fw-bold">  {t(`goal-leading4`)}</span><span className="text-description fs-12">  {t(`goal-leading5`)}</span>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col sm={2} xs={12}>
                                <Image className="list-icon" src={ListIcon} alt="Image 2" fluid />
                            </Col>
                            <Col sm={10} xs={12}>
                                <h3 className="text-title-number">04.</h3>
                                <p className="text-small-title"> {t(`Technical-warranty-support`)}</p>
                                <p className="text-description"> {t(`Project-staffs`)}</p>

                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col sm={2} xs={12}>
                                <Image className="list-icon" src={ListIcon} alt="Image 2" fluid />
                            </Col>
                            <Col sm={10} xs={12}>
                                <h3 className="text-title-number">05.</h3>
                                <p className="text-small-title"> {t(`Proven-Competence`)}</p>
                                <ul>
                                    <li><span className="time-post-name fs-12 fw-bold">07 {t(`PROJECT`)}</span><span className="text-description fs-12"> {t(`SLIVING's-smart`)}</span></li>
                                    <li><span className="text-description fs-12">{t(`More-than`)}</span><span className="time-post-name fs-12 fw-bold"> 300 000 {t(`DEVICES`)}</span><span className="text-description fs-12"> {t(`was-installed`)}</span> </li>
                                    <li><span className="text-description fs-12">{t(`More-than`)}</span><span className="time-post-name fs-12 fw-bold"> 120 {t(`employees`)}</span><span className="text-description fs-12"> {t(`better-and-better`)}</span> </li>
                                </ul>
                                <div className="video-play">
                                    <Image className="Image-Video" src={ImageVideo} alt="Image Video" fluid />
                                    <Image className="Icon-Play" src={IconPlay} alt="Icon Play" fluid onClick={(event) => { openModal(event) }} />
                                </div>
                                <Modals />
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col sm={5} xs={12} className="right-page container">
                    <h3 className="text-title-news">{t(`Recommended-news`)}</h3>
                    <News />
                </Col>
            </Row>
        </div>
    )
}
export default IntroContent;
