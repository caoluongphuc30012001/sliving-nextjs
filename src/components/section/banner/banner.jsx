import React from "react";
import { Row } from "react-bootstrap";

import imgStar from "@images/new-home-page/banner/icon-star.png";
import imgArrow from "@images/new-home-page/banner/arrow-button.png";

import "../../style.scss";

export default function SectionBannerV2() {
    return (
        <section className="section-banner-v2">
            <div className="banner-wrap-v2 container-v2">
                <div className="banner-wrap container-wrap">
                    <Row className="center-row">
                        <div className="banner-icon">
                            <img src={imgStar} alt="" />
                        </div>
                    </Row>
                    <Row className="center-row">
                        <div className="banner-title">
                            <h3>The reason you should go with Sliving.</h3>
                        </div>
                    </Row>
                    <Row className="row-banner-desc center-row">
                        <div className="banner-desc">
                            <p>
                                You are in need of an environment full of smart gadgets, there are several factors to consider.
                                It will be used for your home, your office, or maybe even everywhere you want to...
                            </p>
                        </div>
                    </Row>
                    <Row className="row-banner-button center-row">
                        <button className="banner-btn-v2">
                            <img src={imgArrow} alt="" />
                        </button>
                    </Row>
                </div>
            </div>
        </section>
    );
}
