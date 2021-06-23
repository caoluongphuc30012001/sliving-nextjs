import React from "react";
import Slider from "react-slick";
import { Row, Col, Image } from 'react-bootstrap';
import "./support-style.scss";
import Image1 from "@images/support-image-slider/image1.svg";
const SupportPageSlider = () => {
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
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "none",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          color: "#e85d04",
          width: "15px",
          height: "20px",
          border: "1px #F2F2F2 solid",
          backgroundColor: "#F2F2F2",
          textAlign: "center",
          // marginBottom: "24px",
          borderRadius: "3px",
          fontSize: "12px",
        }}

      // activeStyle={{
      //   width: 13,
      //   height: 13,
      //   display: "inline-block",

      //   backgroundSize: 'contain',
      //   backgroundRepeat: "no-repeat"
      // }}
      >
        {i + 1}
      </div>
    )
  };
  return (
    <div>
      <Slider className="support-slider" {...settings} >
        <div className="container-first-slider">
          <Row className="image-container">
            <Col sm={4} xs={12}>
              <Image className="mb-4 image-example" src={Image1} alt="Image 1" fluid />
              <div className="container-below-image">
                <div className="row">
                  <h7 className="text font-weight-bold mb-2">Công trình <span className="text font-weight-normal"> : Căn hộ</span></h7>
                </div>
              </div>
            </Col>

            <Col sm={8} xs={12}>
              <div className="text-title md-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
              <div className="text-date"> 16/10/2020</div>
              <div className="text-description mb-4"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </Col>
          </Row>
        </div>
        <div className="container-first-slider">
          <Row className="image-container">
            <Col sm={4} xs={12}>
              <Image className="mb-4 image-example" src={Image1} alt="Image 1" fluid />
              <div className="container-below-image">
                <div className="row">
                  <h7 className="text font-weight-bold mb-2">Công trình <span className="text font-weight-normal"> : Căn hộ</span></h7>
                </div>
              </div>
            </Col>

            <Col sm={8} xs={12}>
              <div className="text-title md-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
              <div className="text-date"> 16/10/2020</div>
              <div className="text-description mb-4"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </Col>
          </Row>
        </div>
        <div className="container-first-slider">
          <Row className="image-container">
            <Col sm={4} xs={12}>
              <Image className="mb-4 image-example" src={Image1} alt="Image 1" fluid />
              <div className="container-below-image">
                <div className="row">
                  <h7 className="text font-weight-bold mb-2">Công trình <span className="text font-weight-normal"> : Căn hộ</span></h7>
                </div>
              </div>
            </Col>
            <Col sm={8} xs={12}>
              <div className="text-title md-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
              <div className="text-date"> 16/10/2020</div>
              <div className="text-description mb-4"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </Col>
          </Row>
        </div>
        <div className="container-first-slider">
          <Row className="image-container">
            <Col sm={4} xs={12}>
              <Image className="mb-4 image-example" src={Image1} alt="Image 1" fluid />
              <div className="container-below-image">
                <div className="row">
                  <h7 className="text font-weight-bold mb-2">Công trình <span className="text font-weight-normal"> : Căn hộ</span></h7>
                </div>
              </div>
            </Col>
            <Col sm={8} xs={12}>
              <div className="text-title md-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
              <div className="text-date"> 16/10/2020</div>
              <div className="text-description mb-4"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </Col>
          </Row>
        </div>
        <div className="container-first-slider">
          <Row className="image-container">
            <Col sm={4} xs={12}>
              <Image className="mb-4 image-example" src={Image1} alt="Image 1" fluid />
              <div className="container-below-image">
                <div className="row">
                  <h7 className="text font-weight-bold mb-2">Công trình <span className="text font-weight-normal"> : Căn hộ</span></h7>
                </div>
              </div>
            </Col>
            <Col sm={8} xs={12}>
              <div className="text-title md-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
              <div className="text-date"> 16/10/2020</div>
              <div className="text-description mb-4"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </Col>
          </Row>
        </div>
        <div className="container-first-slider">
          <Row className="image-container">
            <Col sm={4} xs={12}>
              <Image className="mb-4 image-example" src={Image1} alt="Image 1" fluid />
              <div className="container-below-image">
                <div className="row">
                  <h7 className="text font-weight-bold mb-2">Công trình <span className="text font-weight-normal"> : Căn hộ</span></h7>
                </div>
              </div>
            </Col>

            <Col sm={8} xs={12}>
              <div className="text-title md-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
              <div className="text-date"> 16/10/2020</div>
              <div className="text-description mb-4"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </Col>
          </Row>
        </div>
        <div className="container-first-slider">
          <Row className="image-container">
            <Col sm={4} xs={12}>
              <Image className="mb-4 image-example" src={Image1} alt="Image 1" fluid />
              <div className="container-below-image">
                <div className="row">
                  <h7 className="text font-weight-bold mb-2">Công trình <span className="text font-weight-normal"> : Căn hộ</span></h7>
                </div>
              </div>
            </Col>
            <Col sm={8} xs={12}>
              <div className="text-title md-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
              <div className="text-date"> 16/10/2020</div>
              <div className="text-description mb-4"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </Col>
          </Row>
        </div>
        <div className="container-first-slider">
          <Row className="image-container">
            <Col sm={4} xs={12}>
              <Image className="mb-4 image-example" src={Image1} alt="Image 1" fluid />
              <div className="container-below-image">
                <div className="row">
                  <h7 className="text font-weight-bold mb-2">Công trình <span className="text font-weight-normal"> : Căn hộ</span></h7>
                </div>
              </div>
            </Col>
            <Col sm={8} xs={12}>
              <div className="text-title md-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
              <div className="text-date"> 16/10/2020</div>
              <div className="text-description mb-4"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </Col>
          </Row>
        </div>
        <div className="container-first-slider">
          <Row className="image-container">
            <Col sm={4} xs={12}>
              <Image className="mb-4 image-example" src={Image1} alt="Image 1" fluid />
              <div className="container-below-image">
                <div className="row">
                  <h7 className="text font-weight-bold mb-2">Công trình <span className="text font-weight-normal"> : Căn hộ</span></h7>
                </div>
              </div>
            </Col>
            <Col sm={8} xs={12}>
              <div className="text-title md-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
              <div className="text-date"> 16/10/2020</div>
              <div className="text-description mb-4"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </Col>
          </Row>
        </div>
        <div className="container-first-slider">
          <Row className="image-container">
            <Col sm={4} xs={12}>
              <Image className="mb-4 image-example" src={Image1} alt="Image 1" fluid />
              <div className="container-below-image">
                <div className="row">
                  <h7 className="text font-weight-bold mb-2">Công trình <span className="text font-weight-normal"> : Căn hộ</span></h7>
                </div>
              </div>
            </Col>
            <Col sm={8} xs={12}>
              <div className="text-title md-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
              <div className="text-date"> 16/10/2020</div>
              <div className="text-description mb-4"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </Col>
          </Row>
        </div>
        <div className="container-first-slider">
          <Row className="image-container">
            <Col sm={4} xs={12}>
              <Image className="mb-4 image-example" src={Image1} alt="Image 1" fluid />
              <div className="container-below-image">
                <div className="row">
                  <h7 className="text font-weight-bold mb-2">Công trình <span className="text font-weight-normal"> : Căn hộ</span></h7>
                </div>
              </div>
            </Col>
            <Col sm={8} xs={12}>
              <div className="text-title md-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
              <div className="text-date"> 16/10/2020</div>
              <div className="text-description mb-4"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </Col>
          </Row>
        </div>
        <div className="container-first-slider">
          <Row className="image-container">
            <Col sm={4} xs={12}>
              <Image className="mb-4 image-example" src={Image1} alt="Image 1" fluid />
              <div className="container-below-image">
                <div className="row">
                  <h7 className="text font-weight-bold mb-2">Công trình <span className="text font-weight-normal"> : Căn hộ</span></h7>
                </div>
              </div>
            </Col>
            <Col sm={8} xs={12}>
              <div className="text-title md-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
              <div className="text-date"> 16/10/2020</div>
              <div className="text-description mb-4"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </Col>
          </Row>
        </div>
        <div className="container-first-slider">
          <Row className="image-container">
            <Col sm={4} xs={12}>
              <Image className="mb-4 image-example" src={Image1} alt="Image 1" fluid />
              <div className="container-below-image">
                <div className="row">
                  <h7 className="text font-weight-bold mb-2">Công trình <span className="text font-weight-normal"> : Căn hộ</span></h7>
                </div>
              </div>
            </Col>
            <Col sm={8} xs={12}>
              <div className="text-title md-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
              <div className="text-date"> 16/10/2020</div>
              <div className="text-description mb-4"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </Col>
          </Row>
        </div>
        <div className="container-first-slider">
          <Row className="image-container">
            <Col sm={4} xs={12}>
              <Image className="mb-4 image-example" src={Image1} alt="Image 1" fluid />
              <div className="container-below-image">
                <div className="row">
                  <h7 className="text font-weight-bold mb-2">Công trình <span className="text font-weight-normal"> : Căn hộ</span></h7>
                </div>
              </div>
            </Col>
            <Col sm={8} xs={12}>
              <div className="text-title md-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
              <div className="text-date"> 16/10/2020</div>
              <div className="text-description mb-4"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </Col>
          </Row>
        </div>
        <div className="container-first-slider">
          <Row className="image-container">
            <Col sm={4} xs={12}>
              <Image className="mb-4 image-example" src={Image1} alt="Image 1" fluid />
              <div className="container-below-image">
                <div className="row">
                  <h7 className="text font-weight-bold mb-2">Công trình <span className="text font-weight-normal"> : Căn hộ</span></h7>
                </div>
              </div>
            </Col>
            <Col sm={8} xs={12}>
              <div className="text-title md-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
              <div className="text-date"> 16/10/2020</div>
              <div className="text-description mb-4"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </Col>
          </Row>
        </div>
        <div className="container-first-slider">
          <Row className="image-container">
            <Col sm={4} xs={12}>
              <Image className="mb-4 image-example" src={Image1} alt="Image 1" fluid />
              <div className="container-below-image">
                <div className="row">
                  <h7 className="text font-weight-bold mb-2">Công trình <span className="text font-weight-normal"> : Căn hộ</span></h7>
                </div>
              </div>
            </Col>
            <Col sm={8} xs={12}>
              <div className="text-title md-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
              <div className="text-date"> 16/10/2020</div>
              <div className="text-description mb-4"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </Col>
          </Row>
        </div>
        <div className="container-first-slider">
          <Row className="image-container">
            <Col sm={4} xs={12}>
              <Image className="mb-4 image-example" src={Image1} alt="Image 1" fluid />
              <div className="container-below-image">
                <div className="row">
                  <h7 className="text font-weight-bold mb-2">Công trình <span className="text font-weight-normal"> : Căn hộ</span></h7>
                </div>
              </div>
            </Col>
            <Col sm={8} xs={12}>
              <div className="text-title md-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
              <div className="text-date"> 16/10/2020</div>
              <div className="text-description mb-4"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </Col>
          </Row>
        </div>
        <div className="container-first-slider">
          <Row className="image-container">
            <Col sm={4} xs={12}>
              <Image className="mb-4 image-example" src={Image1} alt="Image 1" fluid />
              <div className="container-below-image">
                <div className="row">
                  <h7 className="text font-weight-bold mb-2">Công trình <span className="text font-weight-normal"> : Căn hộ</span></h7>
                </div>
              </div>
            </Col>
            <Col sm={8} xs={12}>
              <div className="text-title md-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
              <div className="text-date"> 16/10/2020</div>
              <div className="text-description mb-4"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </Col>
          </Row>
        </div>
        <div className="container-first-slider">
          <Row className="image-container">
            <Col sm={4} xs={12}>
              <Image className="mb-4 image-example" src={Image1} alt="Image 1" fluid />
              <div className="container-below-image">
                <div className="row">
                  <h7 className="text font-weight-bold mb-2">Công trình <span className="text font-weight-normal"> : Căn hộ</span></h7>
                </div>
              </div>
            </Col>
            <Col sm={8} xs={12}>
              <div className="text-title md-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
              <div className="text-date"> 16/10/2020</div>
              <div className="text-description mb-4"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </Col>
          </Row>
        </div>
        <div className="container-first-slider">
          <Row className="image-container">
            <Col sm={4} xs={12}>
              <Image className="mb-4 image-example" src={Image1} alt="Image 1" fluid />
              <div className="container-below-image">
                <div className="row">
                  <h7 className="text font-weight-bold mb-2">Công trình <span className="text font-weight-normal"> : Căn hộ</span></h7>
                </div>
              </div>
            </Col>
            <Col sm={8} xs={12}>
              <div className="text-title md-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
              <div className="text-date"> 16/10/2020</div>
              <div className="text-description mb-4"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </Col>
          </Row>
        </div>
        <div className="container-first-slider">
          <Row className="image-container">
            <Col sm={4} xs={12}>
              <Image className="mb-4 image-example" src={Image1} alt="Image 1" fluid />
              <div className="container-below-image">
                <div className="row">
                  <h7 className="text font-weight-bold mb-2">Công trình <span className="text font-weight-normal"> : Căn hộ</span></h7>
                </div>
              </div>
            </Col>
            <Col sm={8} xs={12}>
              <div className="text-title md-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
              <div className="text-date"> 16/10/2020</div>
              <div className="text-description mb-4"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </Col>
          </Row>
        </div>
        <div className="container-first-slider">
          <Row className="image-container">
            <Col sm={4} xs={12}>
              <Image className="mb-4 image-example" src={Image1} alt="Image 1" fluid />
              <div className="container-below-image">
                <div className="row">
                  <h7 className="text font-weight-bold mb-2">Công trình <span className="text font-weight-normal"> : Căn hộ</span></h7>
                </div>
              </div>
            </Col>
            <Col sm={8} xs={12}>
              <div className="text-title md-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
              <div className="text-date"> 16/10/2020</div>
              <div className="text-description mb-4"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </Col>
          </Row>
        </div>
        <div className="container-first-slider">
          <Row className="image-container">
            <Col sm={4} xs={12}>
              <Image className="mb-4 image-example" src={Image1} alt="Image 1" fluid />
              <div className="container-below-image">
                <div className="row">
                  <h7 className="text font-weight-bold mb-2">Công trình <span className="text font-weight-normal"> : Căn hộ</span></h7>
                </div>
              </div>
            </Col>
            <Col sm={8} xs={12}>
              <div className="text-title md-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
              <div className="text-date"> 16/10/2020</div>
              <div className="text-description mb-4"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </Col>
          </Row>
        </div>
        <div className="container-first-slider">
          <Row className="image-container">
            <Col sm={4} xs={12}>
              <Image className="mb-4 image-example" src={Image1} alt="Image 1" fluid />
              <div className="container-below-image">
                <div className="row">
                  <h7 className="text font-weight-bold mb-2">Công trình <span className="text font-weight-normal"> : Căn hộ</span></h7>
                </div>
              </div>
            </Col>
            <Col sm={8} xs={12}>
              <div className="text-title md-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</div>
              <div className="text-date"> 16/10/2020</div>
              <div className="text-description mb-4"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </Col>
          </Row>
        </div>
      </Slider>
    </div>
  );
}
export default SupportPageSlider;
