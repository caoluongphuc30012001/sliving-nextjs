import React, { useState } from "react";
import "./support-style.scss";
import Slider from "react-slick";
import { Form, Dropdown, Image } from "react-bootstrap";
import Searchicon from "@images/icon/searchicon.svg";
import DropArrow from "@images/icon/dropdownArrow.svg";
import DataSupportPage from "@query/support-page";
import FormPagination from '@components/pagination/form-pagination';
import { Link } from "gatsby";
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import DownLoadIcons from "@images/icon/download.png";
import useGetLgn from "@hook/useGetLgn";
const TechnicalSol = () => {
  const Lgn = useGetLgn();
  const { t } = useTranslation();
  const data = DataSupportPage();
  const dataTechnicalAnswer = data.dataTechnicalAnswer.edges;
  const dataConstructionInstruction = data.dataConstructionInstruction.edges;
  const dataAgriculturalMaterialNorm = data.dataAgriculturalMaterialNorm.edges;
  const dataProductIdentification = data.dataProductIdentification.edges;
  const dataProductWarranty = data.dataProductWarranty.edges;
  const dataDocumentsDownload = data.dataDocumentsDownload.edges;
  const [post, setPost] = useState(dataTechnicalAnswer);
  const [id, setId] = useState();
  const [titleSolution, setTitle] = useState("Technical_solutions");
  const [arrContruction] = useState([
    { id: 0, title: "Toà nhà" },
    { id: 1, title: "Bệnh viện" },
    { id: 2, title: "Siêu thị" },
    { id: 3, title: "Trung tâm" },
  ]);
  const [arrGroupProduct] = useState([
    { id: 0, title: "Technical_solutions", isActive: true },
    { id: 1, title: "Construction_Manual", isActive: false },
    { id: 2, title: "Agricultural_Materials", isActive: false },
    { id: 3, title: "Product_Identification", isActive: false },
    { id: 4, title: "Product_Warranty", isActive: false },
    { id: 5, title: "Documents_Download", isActive: false }
  ]);
  const [arrDrop] = useState([
    { id: 0, title: "Technical_solutions", isActive: true },
    { id: 1, title: "Construction_Manual", isActive: false },
    { id: 2, title: "Agricultural_Materials", isActive: false },
    { id: 3, title: "Product_Identification", isActive: false },
    { id: 4, title: "Product_Warranty", isActive: false },
    { id: 5, title: "Documents_Download", isActive: false }
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
  const handleClick = (id, title) => {
    arrDrop.forEach((item) => {
      item.isActive = id === item.id ? true : false;
    })
    setTitle(title);
    if (id === 0) { setPost(dataTechnicalAnswer) };
    if (id === 1) { setPost(dataConstructionInstruction) };
    if (id === 2) { setPost(dataAgriculturalMaterialNorm) };
    if (id === 3) { setPost(dataProductIdentification) };
    if (id === 4) { setPost(dataProductWarranty) };
    if (id === 5) { setPost(dataDocumentsDownload) };
    setId(id);
  }
  return (
    <div className="support-pages big-container fluid container-wrap">
      <Row noGutters>
        <Col sm={5} xs={12}>
          <div className="support-page-left">
            <div className="left-container">
              <div className="technical-dropdown card">
                {
                  arrDrop && arrDrop.map(item => {
                    return (
                      <Dropdown.Item className={`${item.isActive ? 'is-active-item' : ''}`} onClick={() => handleClick(item.id, item.title)}>{t(`${item.title}`)}</Dropdown.Item>
                    )
                  })
                }
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
              <div className="container-outside">
                <div className="table-dropdown ">
                  <Row>
                    <Col className="col-in-containerOutside">
                      <Dropdown>
                        <Dropdown.Toggle className="table-dropdown-first" id="dropdown-table">
                          {t(`Current_Construction`)} <img className="font-weight-bold" src={DropArrow} alt="" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {arrContruction && arrContruction.map((product, index) => {
                            return (<Dropdown.Item key={index}>{product.title}</Dropdown.Item>)
                          })}
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                    <Col className="col-in-containerOutside">
                      <Dropdown>
                        <Dropdown.Toggle className="table-dropdown-first" id="dropdown-table">
                          {t(`Product_Groups`)} <img className="font-weight-bold" src={DropArrow} alt="" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {arrGroupProduct && arrGroupProduct.map((product, index) => {
                            return (<Dropdown.Item key={index}>{t(`${product.title}`)}</Dropdown.Item>)
                          })}
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                    <Col className="col-in-containerOutside">
                      <Dropdown>
                        <Dropdown.Toggle id=" dropdown-table">
                          {t(`Product_Features`)} <img className="font-weight-bold" src={DropArrow} alt="" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  </Row>
                </div>
              </div>
              <Form className="container-belowDrop">
                <Form.Group controlId="searchBar">
                  <div className="search-wrapper-supportpage ">
                    <Form.Control className="form-control form-control container-wrap-page" type="text" placeholder={t(`Search`)} />
                    <button type="button" className="btn btn-search fs-12 " aria-label="search icon"><img src={Searchicon} alt="" /></button>
                  </div>
                </Form.Group>
              </Form>
              <Slider className="support-slider" {...settings} >
                {
                  id === 5 ? (
                    post.map(({ node }) => {
                      return (
                        <div className="container-first-slider" key={node.frontmatter.id}>
                          <Row>
                            <Col sm={3} xs={12}>
                              <div className="image-container first-slider-wrap">
                                <div className="first-slider-wrap__left">
                                  <Link href={`${node.frontmatter.featuredVideo.publicURL}`} >
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
                          <Row>
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
  );
}
export default TechnicalSol;
