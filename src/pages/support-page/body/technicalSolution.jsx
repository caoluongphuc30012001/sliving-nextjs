import React from "react";
import { Form, Dropdown } from "react-bootstrap";
import "./support-style.scss";
import DropArrow from "@images/icon/dropdownArrow.svg";
import ColumnSeperator from "@images/icon/columnSeperator.svg";
import Searchicon from "@images/icon/searchicon.svg";
import ColumnSlider from "../body/column-slider.jsx";
import {Row,Col} from 'react-bootstrap'

const TechnicalSol = () => {
    return (
        <div className="big-container fluid container-wrap-page">
            <Row className="">
                <Col className="" sm={6} xs={12}>
                    <div className="left-container">
                        <div className="technical-dropdown card">
                                <Dropdown.Item href="#/action-1">Giải đáp kĩ thuật</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Hướng dẫn thi công</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Định mức vật tư nông nghiệp</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Nhận diện sản phẩm</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Quy định bảo hành sản phẩm</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Download tài liệu</Dropdown.Item>
                        </div>
                    </div>
                </Col>


                <Col className="" sm={6} xs={12}>
                    <div className="right-container container">
                        <h4 className="title-second">Giải đáp kỹ thuật</h4>
                        <div className="row">
                            <div className="col">
                                {/* slide number needed to implement later */}
                            </div>

                            <div className="col">
                                <div className="organize-dropdown container-wrap-page">
                                    <Dropdown>
                                        <Dropdown.Toggle sm={5} xs={12} menuAlign={{ lg: 'right' }} variant="" id="dropdown-basic">
                                            <img className="mr-3 font-weight-bold" src={DropArrow} alt="" />Sắp xếp theo
                                </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Mới nhất</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Cũ nhất</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>

                        <div className="container-outside container-wrap-page">
                            <div className="table-dropdown container-wrap-page">
                                <Row className="">
                                    <Dropdown scope="col-6 col-md-4">
                                        <Dropdown.Toggle variant="light" id="dropdown-table">
                                            Công trình sử dụng <img className="ml-3 font-weight-bold" src={DropArrow} alt="" />
                                        </Dropdown.Toggle>
                                        <img className="mr-3 font-weight-bold" src={ColumnSeperator} alt="" />

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Mới nhất</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Cũ nhất</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>


                                    <Dropdown scope="col-6 col-md-4">
                                        <Dropdown.Toggle variant="light" id="dropdown-table">
                                            Nhóm sản phẩm <img className="ml-3 font-weight-bold" src={DropArrow} alt="" />
                                        </Dropdown.Toggle>
                                        <img className="mr-3 font-weight-bold" src={ColumnSeperator} alt="" />

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Mới nhất</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Cũ nhất</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>


                                    <Dropdown scope="col-6 col-md-4">
                                        <Dropdown.Toggle variant="light" id="dropdown-table">
                                            Tính năng sản phẩm <img className="ml-3 font-weight-bold" src={DropArrow} alt="" />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Mới nhất</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Cũ nhất</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Row>
                            </div>
                        </div>

                        <Form className="container-belowDrop">
                            <Form.Group controlId="searchBar">
                                <div className="search-wrapper-supportpage ">
                                    <Form.Control className="form-control form-control container-wrap-page" type="text" placeholder="Tìm theo từ khóa" />
                                    <button type="button" className="btn btn-search fs-12 " aria-label="search icon"><img src={Searchicon} alt="" /></button>
                                </div>
                            </Form.Group>
                        </Form>
                    <ColumnSlider />
                    </div>
                    {/* <Pagination /> */}
                </Col>
            </Row>
        </div>
    );
}

export default TechnicalSol;
