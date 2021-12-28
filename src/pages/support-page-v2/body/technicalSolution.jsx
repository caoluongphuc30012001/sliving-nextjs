import React, { useState, useEffect } from "react";
import "./support-style.scss";
import { Form, Dropdown, Image } from "react-bootstrap";
import Searchicon from "@images/icon/searchicon.svg";
import DropArrow from "@images/icon/dropdownArrow.svg";
import BotBanner from "@images/support-page-v2-img/banner1.jpg";
import ImageExample from "../../../../contents/images/support-page/technical-solution/apartment/apartment-1.png";
import FormPagination from "@components/pagination/form-pagination";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";
import { Row, Col, Accordion, Card } from "react-bootstrap";
import DownLoadIcons from "@images/icon/download.png";
import PrevIcon from "@images/icon/icon-prev.svg";
import NextIcon from "@images/icon/icon-next.svg";
import useGetLgn from "@hook/useGetLgn";
import iconDropdown from "@images/icon/dropdownArrow.svg";
import iconSort from "@images/icon/sort-icon.svg";
import { useLocation } from "@reach/router";
import {navigate } from "gatsby";
const ListSupports = ({data}) => {
  const Lgn = useGetLgn();
  const { t } = useTranslation();

  const dataTechnicalAnswer = data?.dataTechnicalAnswer?.edges || [];
  const dataConstructionInstruction = data?.dataTechnicalAnswer?.edges
    ? data?.dataTechnicalAnswer?.edges?.filter((item) =>
      item?.node?.frontmatter?.slug?.includes("construction-manual")
    )
    : [];
  const dataAgriculturalMaterialNorm = data?.dataTechnicalAnswer?.edges
    ? data?.dataTechnicalAnswer?.edges?.filter((item) =>
      item?.node?.frontmatter?.slug?.includes("agricultural-material-quota")
    )
    : [];
  const dataProductIdentification = data?.dataTechnicalAnswer?.edges
    ? data?.dataTechnicalAnswer?.edges?.filter((item) =>
      item?.node?.frontmatter?.slug?.includes("product-identification")
    )
    : [];
  const dataProductWarranty = data?.dataTechnicalAnswer?.edges
    ? data?.dataTechnicalAnswer?.edges?.filter((item) =>
      item?.node?.frontmatter?.slug?.includes("product-warranty")
    )
    : [];
  const dataDocumentsDownload = data?.dataTechnicalAnswer?.edges
    ? data?.dataTechnicalAnswer?.edges?.filter(
      (item) => item?.node?.frontmatter?.slug === null
    )
    : [];

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
    { id: 6, title: "Documents_Download", isActive: false },
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
  const [titleSuport, SetTitleSuport] = useState("Technical_solutions");
  const [isMobile, SetIsMobile] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const indexofLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexofLastPost - postsPerPage;
  const currentPosts = post?.slice(indexOfFirstPost, indexofLastPost);
  const totalPage = Math.round(post?.length / postsPerPage);
  const delta = 4;
  const pageNumbers = [];
  const paginate = (pageNum) => setCurrentPage(pageNum);
  const paginatePrev = () => {
    if (!pageNumbers.includes(1)) {
      setCurrentPage(currentPage - 5);
    }
  };
  const paginateNext = () => {
    if (currentPage + 5 <= totalPage) {
      setCurrentPage(currentPage + 5);
    } else if (currentPage + 5 > totalPage) {
      setCurrentPage(totalPage);
    }
  };
  for (let i = currentPage - delta; i <= currentPage + delta; i++) {
    if (i >= 1 && i <= totalPage && pageNumbers.length < 5) {
      pageNumbers.push(i);
    }
  }

  const CheckWidthDropdown = () => {
    if (
      document.getElementById("dropdowm-toggle") &&
      document.getElementById("dropdown-item")
    ) {
      const dropdowns = document.getElementById("dropdowm-toggle");
      const dropdownItem = document.getElementById("dropdown-item")
        ? document.getElementById("dropdown-item")
        : null;
      dropdownItem.style.width = `${dropdowns.clientWidth}px`;
      const dropdownItems = document.getElementById("dropdown-item-1")
        ? document.getElementById("dropdown-item-1")
        : null;
      dropdownItems.style.width = `${dropdowns.clientWidth}px`;
    }
    return null;
  };
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
  }, [isMobile]);
  const getDataPost = (id) => {
    if (id === 1) {
      setPost(dataTechnicalAnswer);
    }
    if (id === 2) {
      setPost(dataConstructionInstruction);
    }
    if (id === 3) {
      setPost(dataAgriculturalMaterialNorm);
    }
    if (id === 4) {
      setPost(dataProductIdentification);
    }
    if (id === 5) {
      setPost(dataProductWarranty);
    }
    if (id === 6) {
      setPost(dataDocumentsDownload);
    }
    return null;
  };
  const handleClick = (id, title) => {
    SetTitleSuport(title);
    arrDrop.forEach((item) => {
      item.isActive = id === item.id ? true : false;
    });
    setTitle(title);
    getDataPost(id);
    setId(id);
    setCurrentPage(1);
    location.search = `?support=${id}`;
    if (typeof window !== undefined) {
      window.history.pushState(null, null, `?support=${id}`);
    }
    return null;
  };
  const location = useLocation();
  const [searchParam, setSearchParam] = useState("");
  useEffect(() => {
    setSearchParam(window.location.search);
    CheckSupport();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParam]);
  function CheckSupport() {
    const params = new URLSearchParams(searchParam.substring(1));
    const getSupport = params.get("supportId");
    if (getSupport) {
      let supportTitle = "";
      arrDrop.forEach((itemConst) => {
        itemConst.isActive =
          parseInt(getSupport) === itemConst.id ? true : false;
        if (itemConst.isActive === true) {
          supportTitle = itemConst.title;
        }
      });
      setTitle(supportTitle);
      setId(parseInt(getSupport));
      getDataPost(parseInt(getSupport));
    }
    return null;
  }
  return (
    <div>
      <div className="banner"></div>
      <div className="support-pages big-container fluid container-wrap">
        <Row  >
          <Col sm={5} xs={12}>
            <div className="support-page-left">
              <div className="left-container">
                {!isMobile && (
                  <div className="technical-dropdown card">
                    {arrDrop &&
                      arrDrop.map((item,index) => {
                        return (
                          <Dropdown.Item
                            key={index}
                            className={`${item.isActive ? "is-active-item" : ""
                              }`}
                            onClick={() => handleClick(item.id, item.title)}
                          >
                            {t(`${item.title}`)}
                          </Dropdown.Item>
                        );
                      })}
                  </div>
                )}
                <div className="technical-mobile">
                  {isMobile && (
                    <Accordion>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          {t(`${titleSuport}`)}{" "}
                          <span>
                            <img
                              src={iconDropdown}
                              alt="icon dropdown sliving"
                            />
                          </span>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            {arrDrop &&
                              arrDrop.map((item,index) => {
                                return (
                                  <Dropdown.Item
                                    key={index}
                                    className={`${item.isActive ? "is-active-item" : ""
                                      }`}
                                    onClick={() =>
                                      handleClick(item.id, item.title)
                                    }
                                  >
                                    {t(`${item.title}`)}
                                  </Dropdown.Item>
                                );
                              })}
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  )}
                </div>
              </div>
            </div>
          </Col>
          <Col sm={7} xs={12}>
            <div className="support-page-right">
              <div className="right-container">
                <h4 className="title-second fs-32 fw-bold">
                  {t(`${titleSolution}`)}
                </h4>
                <div className="organize-dropdown container-wrap-page">
                  <FormPagination
                    currentPosts={currentPosts}
                    indexOfFirstPost={indexOfFirstPost}
                    count={post?.length}
                    variable={t(`posts`)}
                  />
                </div>
                <Form className="container-belowDrop">
                  <Form.Group controlId="searchBar">
                    <div className="search-wrapper-supportpage search-wrapper-mobile">
                      <Form.Control
                        className="form-control form-control container-wrap-page form-tech-mobile"
                        type="text"
                        placeholder={t(`Search`)}
                      />
                      <button
                        type="button"
                        className={`btn btn-search btn-research fs-12 ${isMobile ? "btn-search-mobile" : null
                          }`}
                        aria-label="search icon"
                      >
                        <img src={Searchicon} alt="" />
                      </button>
                      {isMobile && (
                        <button
                          type="button"
                          className="btn btn-search btn-replace"
                          aria-label="search icon"
                        >
                          <img src={Searchicon} alt="" />
                        </button>
                      )}
                    </div>
                  </Form.Group>
                </Form>
                <div className="technical-table-mobile table-dropdown">
                  {isMobile && (
                    <Accordion>
                      <Accordion.Toggle as={Card.Header} eventKey="0">
                        <div className="icon-sort-tech">
                          <img src={iconSort} alt="" />
                        </div>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          {
                            <Row  >
                              <Col className="col-in-containerOutside">
                                <Dropdown id="dropdowm-toggle">
                                  <Dropdown.Toggle
                                    className="table-dropdown-first"
                                    id="dropdown-table"
                                  >
                                    {t(`Current_Construction`)}{" "}
                                    <img
                                      className="font-weight-bold"
                                      src={DropArrow}
                                      alt=""
                                    />
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    {arrConstruction &&
                                      arrConstruction.map((product, index) => {
                                        return (
                                          <Dropdown.Item
                                            id="dropdown-item-1"
                                            key={index}
                                          >
                                            {product.title}
                                          </Dropdown.Item>
                                        );
                                      })}
                                  </Dropdown.Menu>
                                </Dropdown>
                              </Col>
                              <Col className="col-in-containerOutside">
                                <Dropdown id="dropdowm-toggle">
                                  <Dropdown.Toggle
                                    className="table-dropdown-first"
                                    id="dropdown-table"
                                  >
                                    {t(`Product_Groups`)}{" "}
                                    <img
                                      className="font-weight-bold"
                                      src={DropArrow}
                                      alt=""
                                    />
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    {arrGroupProduct &&
                                      arrGroupProduct.map((product, index) => {
                                        return (
                                          <Dropdown.Item
                                            id="dropdown-item"
                                            key={index}
                                          >
                                            {t(`${product.title}`)}
                                          </Dropdown.Item>
                                        );
                                      })}
                                  </Dropdown.Menu>
                                </Dropdown>
                              </Col>
                              <Col className="col-in-containerOutside">
                                <Dropdown id="dropdowm-toggle">
                                  <Dropdown.Toggle id=" dropdown-table">
                                    {t(`Product_Features`)}{" "}
                                    <img
                                      className="font-weight-bold"
                                      src={DropArrow}
                                      alt=""
                                    />
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu></Dropdown.Menu>
                                </Dropdown>
                              </Col>
                            </Row>
                          }
                        </Card.Body>
                      </Accordion.Collapse>
                    </Accordion>
                  )}
                </div>
                <div className="support-slider">
                  {id === 6
                    ? currentPosts?.map(({ node ,index}) => {
                      return (
                        <div
                          className="container-first-slider"
                          key={index}
                        >
                          <Row onMouseDown={() => navigate('detail')}>
                            <Col sm={3} xs={12}>
                              <div className="image-container first-slider-wrap">
                                <div className="first-slider-wrap__left">
                                  <Link to={`${Lgn}${node.frontmatter.slug}`}>
                                    <div className="download__container">
                                      <img
                                        src={DownLoadIcons}
                                        alt="icon download"
                                      />
                                    </div>
                                  </Link>
                                  <div className="container-below-image">
                                    <div className="row">
                                      <span className="fs-12 fw-bold mt-2">
                                        Công trình:{" "}
                                      </span>
                                      <span className="fs-12 mt-2 ml-1">
                                        Căn hộ
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col>
                              <div className="first-slider-wrap__right">
                                <div className="text-title fs-16">
                                  {node.frontmatter.title}
                                </div>
                                <div className="text-date fs-12">
                                  {node.frontmatter.date}
                                </div>
                                <div className="text-description fs-14">
                                  {node.frontmatter.description}
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      );
                    })
                    : currentPosts?.map(({ node ,index}) => {
                      return (
                        <div
                          className="container-first-slider"
                          key={index}
                        >
                          <Row onMouseDown={() => navigate('detail')}>
                            <Col sm={5} xs={12}>
                              <div className="image-container first-slider-wrap">
                                <div className="first-slider-wrap__left">
                                  {/* <Link to={`${Lgn}support-page/${node.frontmatter.slug}`}> */}
                                  <Link>
                                    {node.frontmatter.featuredImage ? (
                                      <Image
                                        className="image-example"
                                        src={
                                          node.frontmatter.featuredImage
                                            .publicURL
                                        }
                                        alt="Image 1"
                                        fluid
                                      />
                                    ) : (
                                      <Image
                                        className="image-example"
                                        src={ImageExample}
                                        alt="Image 1"
                                        fluid
                                      />
                                    )}
                                  </Link>
                                  <div className="container-below-image">
                                    <div className="row">
                                      <span className="fs-12 fw-bold">
                                        Công trình:
                                      </span>
                                      <span className="ml-1 fs-12">
                                        {" "}
                                        Căn hộ
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col>
                              <div className="first-slider-wrap__right">
                                {/* <Link to={`${Lgn}support-page/${node.frontmatter.slug}`}> */}
                                <Link to={`detail`}>
                                  <div className="text-title fs-16">
                                    {node.frontmatter.title}
                                  </div>
                                  <div className="text-date fs-12">
                                    {node.frontmatter.date}
                                  </div>
                                  <div className="text-description fs-14">
                                    {node.frontmatter.description}
                                  </div>
                                </Link>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      );
                    })}
                  {post?.length && (
                    <div className="pagination-container">
                      <nav>
                        <ul className="pagination">
                          <li>
                            <a href="#" onClick={() => paginatePrev()} onKeyPress={() => paginatePrev()}  tabIndex={0} role={"table"}>
                              <Image
                                src={PrevIcon}
                                className="pagination-btn-prev" alt="icon"
                              />
                            </a>
                          </li>
                          {pageNumbers.map((num,index) => (
                            <li className="page-item" key={index}>
                              <a href="#"
                                className={
                                  num === currentPage
                                    ? "page-link active"
                                    : "page-link"
                                }
                                onClick={() => paginate(num)}
                                onKeyPress={() => paginate(num)} tabIndex={0} role={"table"}
                                style={{ cursor: "pointer" }}
                              >
                                {num}
                              </a>
                            </li>
                          ))}
                          <li>
                            <a href="#" onClick={() => paginateNext()} onKeyPress={() => paginateNext()} tabIndex={0} role={"table"}>
                              <Image
                                src={NextIcon}
                                className="pagination-btn-next"
                              />
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  )}
                </div>
                {post?.length <= 0 && (
                  <div className="no_result">
                    <span>{t(`no_result`)}</span>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div class="bot-banner">
        <img class="bot-banner-img" src={BotBanner} alt="bottom banner"/>
      </div>
    </div>
  );
};
export default ListSupports;
