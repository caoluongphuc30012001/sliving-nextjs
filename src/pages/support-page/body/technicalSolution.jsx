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
const TechnicalSol = () => {
  const { t } = useTranslation();
  const data = DataSupportPage();
  const dataTechnicalAnswer = data.dataTechnicalAnswer.edges;
  const dataConstructionInstruction = data.dataConstructionInstruction.edges;
  const dataAgriculturalMaterialNorm = data.dataAgriculturalMaterialNorm.edges;
  const dataProductIdentification = data.dataProductIdentification.edges;
  const dataProductWarranty = data.dataProductWarranty.edges;
  const [post, setPost] = useState(dataTechnicalAnswer);
  const [titleSolution, setTitle] = useState("Technical_solutions");
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
    slidesToShow: 1,
    slidesToScroll: 6,
    vertical: true,
    row: 6,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
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
    if (id === 5) { setPost([]) };
  }
  return (
    <div className="support-pages big-container fluid container-wrap">
      <div className="support-page-wrap">
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
        <div className="support-page-right">
          <div className="right-container">
            <h4 className="title-second fs-32 fw-bold">{t(`${titleSolution}`)}</h4>
            <div className="organize-dropdown container-wrap-page">
              <FormPagination variable={t(`posts`)} />
            </div>
            <div className="container-outside">
              <div className="table-dropdown ">
                <Dropdown>
                  <Dropdown.Toggle className="table-dropdown-first" id="dropdown-table">
                    {t(`Current_Construction`)} <img className="font-weight-bold" src={DropArrow} alt="" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item >Mới nhất</Dropdown.Item>
                    <Dropdown.Item >Cũ nhất</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle className="table-dropdown-first" id="dropdown-table">
                    {t(`Product_Groups`)} <img className="font-weight-bold" src={DropArrow} alt="" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item >Mới nhất</Dropdown.Item>
                    <Dropdown.Item >Cũ nhất</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle id=" dropdown-table">
                    {t(`Product_Features`)} <img className="font-weight-bold" src={DropArrow} alt="" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item >Mới nhất</Dropdown.Item>
                    <Dropdown.Item >Cũ nhất</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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
                post.map(({ node }) => {
                  return (
                    <div className="container-first-slider">
                      <div className="image-container first-slider-wrap">
                        <div className="first-slider-wrap__left">
                          <Link to={`/support-page/${node.frontmatter.slug}`}>
                            <Image className="image-example"
                              src={node.frontmatter.featuredImage.childImageSharp.fluid.src} alt="Image 1"
                              fluid
                            />
                          </Link>
                          <div className="container-below-image">
                            <div className="row">
                              <span className="fs-12 fw-bold">Công trình :</span><span className="fs-12">Căn hộ</span>
                            </div>
                          </div>
                        </div>
                        <div className="first-slider-wrap__right">
                          <Link to={`/support-page/${node.frontmatter.slug}`}>
                            <div className="text-title fs-16 fw-bold">{node.frontmatter.title}</div>
                            <div className="text-date fs-12">{node.frontmatter.date}</div>
                            <div className="text-description fs-14">{node.frontmatter.description}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </Slider>
            {post.length <= 0 && (<div className="no_result"><span >{t(`no_result`)}</span></div>)}
          </div>
        </div>
      </div>
    </div >
  );
}

export default TechnicalSol;
