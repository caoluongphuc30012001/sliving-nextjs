
import React from 'react';
import { Image } from "react-bootstrap";
import Logo from "@images/logo/LOGO.png";
import arrowRight from "@images/icon/arrow_right_alt.svg";
import { Link } from "gatsby"
const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container-wrap">
                <div className="main-footer-wrap">
                    <div className="footer-wrap__left">
                        <div className="footer-wrap__left-sub">
                            <ul className="list-unstyled double-space">
                                <li className="fw-bold">Product</li>
                                <li className="">Employee database</li>
                                <li className="">Payroll</li>
                                <li className="">Absences</li>
                                <li className="">Time tracking</li>
                                <li className="">Shift planner</li>
                                <li className="">Recruiting</li>
                            </ul>
                        </div>
                        <div className="footer-wrap__left-sub">
                            <ul className="list-unstyled double-space">
                                <li className="fw-bold">Information</li>
                                <li className="">FAQ</li>
                                <li className="">Blog</li>
                                <li className="">Support</li>
                            </ul>
                        </div>
                        <div className="footer-wrap__left-sub">
                            <ul className="list-unstyled double-space">
                                <li className="fw-bold">Company</li>
                                <li className="">About us</li>
                                <li className="">Careers</li>
                                <li className="">Contact us</li>
                                <li className="">Lift media</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-wrap__right">
                        <div className="footer-wrap__right-search">
                            <div className="search-group">
                                <div className="search-group-wrapper">
                                    <span className="fw-bold fs-16">Giữ liên lạc với chúng tôi để cập nhập những thông tin mới nhất về sản phẩm.</span>
                                </div>
                                <div className="search-group-wrapper search-group-input">
                                    <input type="text" id="inputEmail" placeholder="Email adress" />
                                    <button type="button" className="btn btn-default " aria-label="arrow right"><img src={arrowRight} alt="icon arrow right" /></button>
                                </div>
                                <div className="search-group-wrapper">
                                    <span className="fs-16 search-group-wrapper__sub">Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="logo-wrap" >
                    <div className="logo-wrap-left">
                        <Link to="/"> <Image src={Logo} className="img-obj-cover" alt="sliving sunshine tech" /> </Link>
                    </div>
                    <div className="logo-wrap-right">
                        <div className="logo-wrap-item">
                            <Link to="/" className="logo-wrap-rignt__nav fw-bold fs-16">Terms</Link>
                        </div >
                        <div className="logo-wrap-item">
                            <Link to="/" className="logo-wrap-rignt__nav fw-bold fs-16">Privacy</Link>
                        </div>
                        <div className="logo-wrap-item">
                            <Link to="/" className="logo-wrap-rignt__nav fw-bold fs-16">Cookies</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;
