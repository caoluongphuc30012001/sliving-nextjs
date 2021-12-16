import React, { useState, useEffect } from "react";
import "./support-style.scss";
import Slider from "react-slick";
import { Form, Dropdown, Image } from "react-bootstrap";
import Searchicon from "@images/icon/searchicon.svg";
import DropArrow from "@images/icon/dropdownArrow.svg";
import Banner from "@images/support-page-v2-img/banner.png";
import BotBanner from "@images/support-page-v2-img/banner1.png";
import FormPagination from '@components/pagination/form-pagination';
import { Link } from "gatsby";
import { useTranslation } from 'react-i18next';
import { Row, Col, Accordion, Card } from 'react-bootstrap';
import DownLoadIcons from "@images/icon/download.png";
import useGetLgn from "@hook/useGetLgn";
import iconDropdown from "@images/icon/dropdownArrow.svg";
import iconSort from "@images/icon/sort-icon.svg";
import { useLocation } from "@reach/router";
const TechnicalSol = ({ data }) => {
    console.log("data", data);
    const Lgn = useGetLgn();
    const { t } = useTranslation();


    const dataTechnicalAnswer = data?.dataTechnicalAnswer?.edges || [];
    const dataConstructionInstruction = data?.dataConstructionInstruction?.edges || [];
    const dataAgriculturalMaterialNorm = data?.dataAgriculturalMaterialNorm?.edges || [];
    const dataProductIdentification = data?.dataProductIdentification?.edges || [];
    const dataProductWarranty = data?.dataProductWarranty?.edges || [];
    const dataDocumentsDownload = data?.dataDocumentsDownload?.edges || [];
    const [post, setPost] = useState(dataTechnicalAnswer);
    const [id, setId] = useState();
    const [titleSolution, setTitle] = useState("Technical_solutions");
    const [arrConstruction] = useState([
        { id: 0, title: "Toà nhà" },
        { id: 1, title: "Bệnh viện" },
        { id: 2, title: "Siêu thị" },
        { id: 3, title: "Trung tâm" },
    ]);
    const [arrDrop] = useState([
        { id: 1, title: "Technical_solutions", isActive: true },
        { id: 2, title: "Construction_Manual", isActive: false },
        { id: 3, title: "Agricultural_Materials", isActive: false },
        { id: 4, title: "Product_Identification", isActive: false },
        { id: 5, title: "Product_Warranty", isActive: false },
        { id: 6, title: "Documents_Download", isActive: false }
    ]);
    const [arrGroupProduct] = useState([
        { id: 0, title: "navProduct.led", isActive: false },
        { id: 1, title: "navProduct.Switches", isActive: false },
        { id: 2, title: "navProduct.Sockets", isActive: false },
        { id: 3, title: "navProduct.Sensors", isActive: false },
        { id: 4, title: "navProduct.Air_Conditioning_System", isActive: false },
        { id: 5, title: "navProduct.Smart_Curtain", isActive: false },
        { id: 6, title: "navProduct.Smart_Meter", isActive: false },
        { id: 7, title: "navProduct.Zigbee_KIT", isActive: false },
        { id: 8, title: "navProduct.Door_motor_gate", isActive: false },
    ]);
    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        slidesToShow: post.length > 6 ? 6 : 3,
        slidesToScroll: post.length > 6 ? 6 : 3,
        vertical: true,
        row: post.length > 6 ? 6 : 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ],
        customPaging: i => (
            <div
                style={{
                    width: "15px",
                    height: "16px",
                    backgroundColor: "#F2F2F2",
                    textAlign: "center",
                    borderRadius: "3px",
                    fontSize: "14px",
                }}
            >
                {i + 1}
            </div>
        )
    };
    const [titleSuport, SetTitleSuport] = useState("Technical_solutions");
    const [isMobile, SetIsMobile] = useState(false);
    const CheckWidthDropdown = () => {
        if (document.getElementById("dropdowm-toggle") && document.getElementById("dropdown-item")) {
            const dropdowns = document.getElementById("dropdowm-toggle");
            const dropdownItem = document.getElementById("dropdown-item") ? document.getElementById("dropdown-item") : null;
            dropdownItem.style.width = `${dropdowns.clientWidth}px`;
            const dropdownItems = document.getElementById("dropdown-item-1") ? document.getElementById("dropdown-item-1") : null;
            dropdownItems.style.width = `${dropdowns.clientWidth}px`;
        }
        return null;
    }
    useEffect(() => {
        if (window.innerWidth > 662) {
            SetIsMobile(false);
        }
        if (window.innerWidth <= 662) {
            SetIsMobile(true);
        }
        CheckWidthDropdown();
        window.addEventListener("resize", () => {
            if (window.innerWidth > 662) {
                SetIsMobile(false);
            } else {
                SetIsMobile(true);
            }
            CheckWidthDropdown();
        });
    }, [isMobile])
    const getDataPost = (id) => {
        if (id === 1) { setPost(dataTechnicalAnswer) };
        if (id === 2) { setPost(dataConstructionInstruction) };
        if (id === 3) { setPost(dataAgriculturalMaterialNorm) };
        if (id === 4) { setPost(dataProductIdentification) };
        if (id === 5) { setPost(dataProductWarranty) };
        if (id === 6) { setPost(dataDocumentsDownload) };
        return null
    }
    const handleClick = (id, title) => {
        SetTitleSuport(title)
        arrDrop.forEach((item) => {
            item.isActive = id === item.id ? true : false;
        })
        setTitle(title);
        getDataPost(id);
        setId(id);
        location.search = `?support=${id}`;
        if (typeof widnow !== undefined) {
            window.history.pushState(null, null, `?support=${id}`);
        }
        return null;
    }
    const location = useLocation();
    const [searchParam, setSearchParam] = useState("");
    useEffect(() => {
        setSearchParam(window.location.search);
        CheckSupport();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParam])
    function CheckSupport() {
        const params = new URLSearchParams(searchParam.substring(1));
        const getSupport = params.get("supportId");
        if (getSupport) {
            let supportTitle = "";
            arrDrop.forEach((itemConst) => {
                itemConst.isActive = parseInt(getSupport) === itemConst.id ? true : false;
                if (itemConst.isActive === true) {
                    supportTitle = itemConst.title
                }
            })
            setTitle(supportTitle);
            setId(parseInt(getSupport));
            getDataPost(parseInt(getSupport));
        }
        return null
    }
    return (
        <div>
            <div class="banner" >
                <img src={Banner} />
            </div>
            <div className="support-pages big-container fluid container-wrap">
                <Row noGutters>
                    <Col sm={5} xs={12}>
                        <div className="support-page-left">
                            <div className="left-container">
                                {!isMobile && (<div className="technical-dropdown card">
                                    {
                                        arrDrop && arrDrop.map(item => {
                                            return (
                                                <Dropdown.Item key={item} className={`${item.isActive ? 'is-active-item' : ''}`} onClick={() => handleClick(item.id, item.title)}>{t(`${item.title}`)}</Dropdown.Item>
                                            )
                                        })
                                    }
                                </div>)}
                                <div className="technical-mobile">
                                    {isMobile && (<Accordion >
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                                {t(`${titleSuport}`)} <span><img src={iconDropdown} alt="icon dropdown sliving" /></span>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>{
                                                    arrDrop && arrDrop.map(item => {
                                                        return (
                                                            <Dropdown.Item key={item} className={`${item.isActive ? 'is-active-item' : ''}`} onClick={() => handleClick(item.id, item.title)}>{t(`${item.title}`)}</Dropdown.Item>
                                                        )
                                                    })
                                                }</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>)}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={7} xs={12}>
                        <div className="support-page-right">
                            <div className="right-container">
                                <h4 className="title-second fs-32 fw-bold">{t(`${titleSolution}`)}</h4>
                                <div className="organize-dropdown container-wrap-page">
                                    <FormPagination count={post.length} variable={t(`posts`)} />
                                </div>
                                <Form className="container-belowDrop">
                                    <Form.Group controlId="searchBar">
                                        <div className="search-wrapper-supportpage search-wrapper-mobile">
                                            <Form.Control className="form-control form-control container-wrap-page form-tech-mobile" type="text" placeholder={t(`Search`)} />
                                            <button type="button" className={`btn btn-search btn-research fs-12 ${isMobile ? 'btn-search-mobile' : null}`} aria-label="search icon"><img src={Searchicon} alt="" /></button>
                                            {isMobile && (<button type="button" className="btn btn-search btn-replace" aria-label="search icon"><img src={Searchicon} alt="" /></button>)}
                                        </div>
                                    </Form.Group>
                                </Form>
                                <div className="technical-table-mobile table-dropdown">
                                    {isMobile && (<Accordion >
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            <div className="icon-sort-tech">
                                                <img src={iconSort} alt="" />
                                            </div>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>{
                                                <Row noGutters>
                                                    <Col className="col-in-containerOutside">
                                                        <Dropdown id="dropdowm-toggle">
                                                            <Dropdown.Toggle className="table-dropdown-first" id="dropdown-table">
                                                                {t(`Current_Construction`)} <img className="font-weight-bold" src={DropArrow} alt="" />
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                {arrConstruction && arrConstruction.map((product, index) => {
                                                                    return (<Dropdown.Item id="dropdown-item-1" key={index}>{product.title}</Dropdown.Item>)
                                                                })}
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </Col>
                                                    <Col className="col-in-containerOutside">
                                                        <Dropdown id="dropdowm-toggle">
                                                            <Dropdown.Toggle className="table-dropdown-first" id="dropdown-table">
                                                                {t(`Product_Groups`)} <img className="font-weight-bold" src={DropArrow} alt="" />
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                {arrGroupProduct && arrGroupProduct.map((product, index) => {
                                                                    return (<Dropdown.Item id="dropdown-item" key={index}>{t(`${product.title}`)}</Dropdown.Item>)
                                                                })}
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </Col>
                                                    <Col className="col-in-containerOutside">
                                                        <Dropdown id="dropdowm-toggle">
                                                            <Dropdown.Toggle id=" dropdown-table">
                                                                {t(`Product_Features`)} <img className="font-weight-bold" src={DropArrow} alt="" />
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </Col>
                                                </Row>
                                            }</Card.Body>
                                        </Accordion.Collapse>
                                    </Accordion>)}
                                </div>
                                <Slider className="support-slider" {...settings} >
                                    {
                                        id === 6 ? (
                                            post.map(({ node }) => {
                                                return (
                                                    <div className="container-first-slider" key={node.frontmatter.id}>
                                                        <Row noGutters>
                                                            <Col sm={3} xs={12}>
                                                                <div className="image-container first-slider-wrap">
                                                                    <div className="first-slider-wrap__left">
                                                                        <Link to={`${Lgn}${node.frontmatter.slug}`} >
                                                                            <div className="download__container">
                                                                                <img src={DownLoadIcons} alt="icon download" />
                                                                            </div>
                                                                        </Link>
                                                                        <div className="container-below-image">
                                                                            <div className="row">
                                                                                <span className="fs-12 fw-bold">Công trình :</span><span className="fs-12">Căn hộ</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            <Col >
                                                                <div className="first-slider-wrap__right">
                                                                    <div className="text-title fs-16 fw-bold">{node.frontmatter.title}</div>
                                                                    <div className="text-date fs-12">{node.frontmatter.date}</div>
                                                                    <div className="text-description fs-14">{node.frontmatter.description}</div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                )
                                            })
                                        ) : (
                                            post.map(({ node }) => {
                                                return (
                                                    <div className="container-first-slider" key={node.frontmatter.id}>
                                                        <Row noGutters>
                                                            <Col sm={5} xs={12}>
                                                                <div className="image-container first-slider-wrap">
                                                                    <div className="first-slider-wrap__left">
                                                                        <Link to={`${Lgn}support-page/${node.frontmatter.slug}`}>
                                                                            {
                                                                                node.frontmatter.featuredImage && <Image className="image-example"
                                                                                    src={node.frontmatter.featuredImage.publicURL} alt="Image 1"
                                                                                    fluid
                                                                                />
                                                                            }
                                                                        </Link>
                                                                        <div className="container-below-image">
                                                                            <div className="row">
                                                                                <span className="fs-12 fw-bold">Công trình :</span><span className="fs-12">Căn hộ</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            <Col >
                                                                <div className="first-slider-wrap__right">
                                                                    <Link to={`${Lgn}support-page/${node.frontmatter.slug}`}>
                                                                        <div className="text-title fs-16 fw-bold">{node.frontmatter.title}</div>
                                                                        <div className="text-date fs-12">{node.frontmatter.date}</div>
                                                                        <div className="text-description fs-14">{node.frontmatter.description}</div>
                                                                    </Link>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                )
                                            })
                                        )
                                    }
                                </Slider>
                                {post.length <= 0 && (<div className="no_result"><span >{t(`no_result`)}</span></div>)}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div >

            <div class="bot-banner" >
                <img class="bot-banner-img" src={BotBanner} />
            </div>
        </div>
    );
}

export default TechnicalSol;

