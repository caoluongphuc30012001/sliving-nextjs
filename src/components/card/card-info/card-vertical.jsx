import React from "react";
import { Col } from "react-bootstrap";
const CardInfo = ({ title, description, isImage, imgR, imgL, ...props }) => {
    return (
        <div className="card-info container-wrap">
            <div className="card-info-wrap">
                <div className="">
                    <Col sm={12} md={6} lg={6} className="card-info-wrap__left">
                        <div className="card-info-title fs-32 fw-bold txt-blue info-title-left">
                            {title}
                        </div>
                        <div className="info-des">
                            <span>
                                <span>  Những lĩnh vực phát triển của công ty :</span>
                                <ul>
                                    <li>Xây dựng thiết kế giao diện các ứng dụng di động (Mobile App), trang mạng (website) cho việc giám sát, điều khiển và giới thiệu sản phẩm.</li>
                                    <li>Thiết kế phần cứng (Hardware) của Sản phẩm</li>
                                    <li>Sản xuất thiết bị công nghệ thông minh</li>
                                    <li>Xây dựng các chương trình máy tính như Firmware, Cloud Server</li>
                                    <li>AI ( Trí tuệ nhân tạo )</li>
                                </ul>
                                Trong những năm qua, Sliving luôn không ngừng phát triển và cho ra đời các giải pháp công nghệ tiên tiến giúp mỗi người dùng có thể trải nghiệm một cuộc sống tiện nghi, thoải mái và tiện lợi nhất...
                            </span>
                        </div>
                        <div className="info-more fs-18 fw-bold"><span >Tìm hiểu thêm</span></div>
                    </Col>
                    <Col sm={12} md={6} lg={6} className="card-info-wrap_right  ">
                        <div className="img-info">
                            <img src={imgR} alt="iot" />
                        </div>
                    </Col>
                </div>
            </div>
        </div>
    );
}
export default CardInfo;
