import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Image } from "react-bootstrap";
import Image1 from "../../images/intro-content/group3.png";
import ListIcon from "../../images/intro-content/group2.png";
import "../intro-content-page/intro-content.scss";
import ImageVideo from "../../images/intro-content/poster.png";
import IconPlay from "../../images/icon/icon-play.svg";
import Video1 from "../../images/image-video/video1.mp4";
import News from "./smartHome-slider.jsx";

const IntroContent = () => {
    return (
        <div className="mainPage-container fluid container-wrap">
            <Row>
                <Col sm={7} xs={12} className="left-page container">
                    <span className="time-post-name fs-12 fw-bold">Sliving</span><span className="time-post-date fs-12"> đăng vào lúc 24/05/2021 - 15:29</span>
                    <h3 className="text-title">5 Lý do chọn lựa SLIVING</h3>
                    <Image className="image-header" src={Image1} alt="Image 1" fluid />

                    <div className="list-item container">
                        <Row>
                            <Col sm={2} xs={12}>
                                <Image className="list-icon" src={ListIcon} alt="Image 2" fluid />
                            </Col>

                            <Col sm={10} xs={12}>
                                <h3 className="text-title-number">01.</h3>
                                <p className="text-small-title"> Sản phẩm chất lượng quốc tế</p>
                                <p className="text-description"> Đặt mình vào tâm thế của khách hàng nhằm thấu hiểu điều mà khách hàng mong đợi. Vượt qua những rào cản suy nghĩ về chất lượng của các sản phẩm thiết bị thông minh trong nước. Chúng tôi đã và đang hoàn thiện tốt sản phẩm của mình chứng minh cho khách hàng bằng hàng loạt các chứng chỉ về chất lượng quốc tế mà chúng tôi đã và sẽ nhận được trong thời gian tới, MFi là một trong số đó. </p>
                            </Col>
                        </Row>

                        <Row className="mt-5">
                            <Col sm={2} xs={12}>
                                <Image className="list-icon" src={ListIcon} alt="Image 2" fluid />
                            </Col>

                            <Col sm={10} xs={12}>
                                <h3 className="text-title-number">02.</h3>
                                <p className="text-small-title"> Dãy sản phẩm và giải pháp đa dạng</p>
                                <p className="text-description"> - Xây dựng thiết kế giao diện các ứng dụng di động (Mobile App), trang mạng (website) cho việc giám sát, điều khiển và giới thiệu sản phẩm.  </p>
                                <p className="text-description"> - Thiết kế phần cứng (Hardware) của Sản phẩm. </p>
                                <p className="text-description"> - Sản xuất thiết bị công nghệ thông minh. </p>
                                <p className="text-description"> - Xây dựng các chương trình máy tính như Firmware, Cloud Server. </p>
                                <p className="text-description"> - AI (Trí tuệ nhân tạo). </p>
                            </Col>
                        </Row>

                        <Row className="mt-5">
                            <Col sm={2} xs={12}>
                                <Image className="list-icon" src={ListIcon} alt="Image 2" fluid />
                            </Col>

                            <Col sm={10} xs={12}>
                                <h3 className="text-title-number">03.</h3>
                                <p className="text-small-title"> Khả năng cung ứng lớn</p>
                                <span className="text-description fs-12">Với mục tiêu dẫn đầu thị trường công nghệ thông minh, Sliving là doanh nghiệp đầu tiên được cấp giấy phép sản xuất các thiết bị trong hệ sinh thái Smart Living. Nhà máy sản xuất có diện tích gần 4500m2, tổng công suất ước đạt</span><span className="time-post-name fs-12 fw-bold"> 270 nghìn thiết bị/năm.</span><span className="text-description fs-12"> Trong đó, công suất giai đoạn 1 của dự án sẽ là</span><span className="time-post-name fs-12 fw-bold"> 135 nghìn sản phẩm/năm</span><span className="text-description fs-12"> và tăng dần vào giai đoạn 2, đạt 100% công suất từ tháng 6/2025.</span>
                            </Col>
                        </Row>

                        <Row className="mt-5">
                            <Col sm={2} xs={12}>
                                <Image className="list-icon" src={ListIcon} alt="Image 2" fluid />
                            </Col>

                            <Col sm={10} xs={12}>
                                <h3 className="text-title-number">04.</h3>
                                <p className="text-small-title"> Hỗ trợ kỹ thuật và bảo hành chu đáo</p>
                                <p className="text-description"> Đội ngũ nhân viên dự án, kỹ thuật và bán hàng sẵn sàng tư vấn/hỗ trợ cho khách hàng các giải pháp phù hợp cho từng nhu cầu sử dụng, tiết kiệm chi phí. </p>

                            </Col>
                        </Row>

                        <Row className="mt-5">
                            <Col sm={2} xs={12}>
                                <Image className="list-icon" src={ListIcon} alt="Image 2" fluid />
                            </Col>

                            <Col sm={10} xs={12}>
                                <h3 className="text-title-number">05.</h3>
                                <p className="text-small-title"> Năng lực và Kinh nghiệm đã được chứng minh</p>
                                <ul>
                                    <li><span className="time-post-name fs-12 fw-bold">07 DỰ ÁN</span><span className="text-description fs-12"> sử dụng thiết bị thông minh SLIVING.</span></li>
                                    <li><span className="text-description fs-12">Hơn</span><span className="time-post-name fs-12 fw-bold"> 300 000 THIẾT BỊ</span><span className="text-description fs-12"> đã được lắp đặt.</span> </li>
                                    <li><span className="text-description fs-12">Hơn</span><span className="time-post-name fs-12 fw-bold"> 120 nhân viên</span><span className="text-description fs-12"> đang phát triển và sáng tạo liên tục nhằm thúc đẩy các sản phẩm SLIVING ngày càng hoàn hảo hơn.</span> </li>
                                </ul>
                                <div className="video-play">
                                    <Image className="Image-Video" src={ImageVideo} alt="Image Video" fluid />
                                    <Image className="Icon-Play" src={IconPlay} alt="Icon Play" fluid data-toggle="modal" data-target="#exampleModalCenter" />
                                </div>

                                <div class="modal" id="exampleModalCenter">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" data-dismiss="modal" data-backdrop="false">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <video width="100%" controls>
                                                    <source src={Video1} type="video/mp4"></source>
                                                </video>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </Col>
                        </Row>
                    </div>
                </Col>

                <Col sm={5} xs={12} className="right-page container">
                    <h3 className="text-title-news">Tin tức đề xuất</h3>
                    <News />
                </Col>

            </Row>
        </div>
    )
}

export default IntroContent;
