import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Modal from "react-modal";
import Image1 from "@images/intro-content/image1.png";
import ListIcon from "@images/intro-content/group2.png";
import ImageVideo from "@images/intro-content/poster.svg";
import IconPlay from "@images/icon/icon-play.svg";
import Video1 from "@videos/home-page/slide-1.mp4";
import News from "./smartHome-slider.jsx";
import "./intro-content.scss";
import { useTranslation } from 'react-i18next';
import ButtonMore from "@components/button/button-more.jsx";
import CardSlideVertical from "@components/card/card-slide-vertical/card-slide-vertical";
import DataHomePage from "@query/home-page";
import { Form, Button } from 'react-bootstrap';
import closeImg from "@images/icon/close.svg";
Modal.setAppElement('#___gatsby')
const IntroContent = () => {
    const { t } = useTranslation();
    const [isShowing, setIsShowing] = useState(false);
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setIsShowing(false);
        }
    }, []);
    const data = DataHomePage();
    const post = data.dataSectionSlides.edges.slice(0, 10);
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
        return (<Modal className="modal modal-introduct" id="modal-introduction"
            isOpen={isShowing}
            onRequestClose={closeModal}>
            <div className="modal modal-video">
                <button type="button" className="modal-close-button modal-close-btn" data-dismiss="modal" aria-label="Close" onClick={(event) => closeModal(event)}>
                    <Image src={closeImg} alt="close image" />
                </button>
                <video muted autoPlay loop playsInline width="100%">
                    <source src={Video1} type="video/mp4"></source>
                </video>
            </div>
        </Modal>)
    }
    return (
        <>
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
                                    <p className="text-description"> -{t(`Designing-interfaces`)} </p>
                                    <p className="text-description"> -{t(`Design-hardware`)} </p>
                                    <p className="text-description"> -{t(`Producing-smart`)}  </p>
                                    <p className="text-description"> -{t(`Building-computer`)} </p>
                                    <p className="text-description"> -{t(`AI`)} </p>
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
            <div className="intro-reason-content">
                <div className="hp-banner">
                    <div className="hp-banner-wrap container-wrap">
                        <div className="hp-banner-title"><h4>{t(`Career-opportunities`)}</h4></div>
                        <div className="hp-banner-description"><span>{t(`embody-core-values`)}
                        </span></div>
                        <div className="hp-banner-btn"> <ButtonMore backgroundColor={'#F47403'} color={'#f9f9f9'} borderReadius={'16px'} padding={'10px 20px'} fontWeight={'700'} url={'/intro-content-page/'} /></div>
                    </div>
                </div>
            </div>
            <div className="slide-solution-wrap container-wrap">
                <CardSlideVertical id={1} infinite={true} rows={1} data={post} title={t(`Solution_Suggestions`)} isArrow={true} />
            </div>
            <div className="intro-content-bottom section-introduction__support">
                <div className="container-wrap">
                    <div className="form-support">
                        <div className="title-support fs-32 fw-bold txt-blue">
                            <span>{t(`How_Can_We_help`)}</span>
                        </div>
                        <div className="form-support-wrap">
                            <Form className="support-wrap__textarea">
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control
                                        className="support-wrap-textarea"
                                        as="textarea"
                                        rows={13}
                                        placeholder={t(`Address/Name_Distributor`)} />
                                </Form.Group>
                            </Form>
                            <div className="form-contact">
                                <div className="form-contact-wrap contact-left">
                                    <div className="contact-left-input"> <Form.Control className="contact-wrap__name" type="text" placeholder={t(`Your_Name`)} /></div>
                                    <div className="contact-left-input"> <Form.Control className="contact-wrap__email" type="text" placeholder={t(`Your_Email`)} /></div>
                                </div>
                                <div className="form-contact-wrap contact-right">
                                    <Button className="btn-delete"><span className="fs-20">{t(`Send_Message`)}</span></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default IntroContent;
