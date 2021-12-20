import React, { useEffect } from "react";
import { Row } from "react-bootstrap";

import imgLine from "@images/new-home-page/app-img/line.png";
import arrowSolution from "@images/new-home-page/solution/arrow-right.png";

import AOS from 'aos';

export default function NewSectionSolution() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <section>
      <div className="home-page-solution">
        <div className="container-wrap">
          <Row>
            <div className="solution-content">
              <h3>Solution for your needs</h3>
              <img src={imgLine} alt="" />
            </div>
          </Row>
          <div className="page-info-1">
            <div className="contain-info-1">
              <div className="grid-container">
                <div
                  className="item2"
                  id="item2"

                >
                  <div className="item-detail-2 item-detail-wrap">
                    <span className="item-detail-bg"></span>
                    <p className="p1">Smart Lighting</p>
                    <p className="p2">
                      Hệ thống điều khiển ánh sáng
                    </p>
                    <div className="btn-read-more">
                      <a href="#">
                        {' '}
                        <p className="p3">Đọc Thêm</p>{' '}
                      </a>{' '}
                      <img
                        src={arrowSolution}
                        className="icon-read-more"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="item3">
                  <div className="item-detail item-detail-wrap">
                    <span className="item-detail-bg"></span>
                    <p className="p1">Smart Parking</p>
                    <p className="p2">
                      Hệ thống quản lý bãi đỗ xe thông minh
                    </p>
                    <div className="btn-read-more">
                      <a href="#">
                        {' '}
                        <p className="p3">Đọc Thêm</p>
                      </a>
                      <img
                        src={arrowSolution}
                        className="icon-read-more"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="item4"

                >
                  <div className="item-detail-4 item-detail-wrap">
                    <span className="item-detail-bg"></span>
                    <p className="p1">Smart Security</p>
                    <p className="p2">
                      Hệ thống quản lý an ninh
                    </p>
                    <div className="btn-read-more">
                      {' '}
                      <a href="https://unicloud.com.vn/he-sinh-thai/he-sinh-thai-iot-smart/">
                        <p className="p3">Đọc Thêm</p>
                      </a>{' '}
                      <img
                        src={arrowSolution}
                        className="icon-read-more"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="item5"

                >
                  <div className="item-detail-5 item-detail-wrap">
                    <span className="item-detail-bg"></span>
                    <p className="p1">Smart Home</p>
                    <p className="p2">
                      Giải pháp nhà thông minh
                    </p>
                    <div className="btn-read-more">
                      <a href="https://unicloud.com.vn/he-sinh-thai/he-sinh-thai-chinh-phu-dien-tu/">
                        <p className="p3">Đọc Thêm</p>
                      </a>{' '}
                      <img
                        src={arrowSolution}
                        className="icon-read-more"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
