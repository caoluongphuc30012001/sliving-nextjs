import React from 'react';
import imgPer from "@images/home-page/slide/permission.svg";
import { Link } from "gatsby";
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';
import PrevArrow from "@components/button/button-prev-arrow.jsx";
import NextArrow from "@components/button/button-next-arrow.jsx";
import CardHeader from "@components/card/card-title-header";
import Image2 from "@images/intro-content2/image2.png";
import Image3 from "@images/intro-content2/image3.png";
import Image4 from "@images/intro-content2/image4.png";
import Image5 from "@images/intro-content2/image5.png";
const SolutionSuggestion = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      img: Image2,
      title: "Smart Home",
      path: "introduct-detail-page/smart-home",
    },
    {
      id: 2,
      img: Image3,
      title: "Smart Parking",
      path: "smart-parking-page"
    },
    {
      id: 3,
      img: Image4,
      title: "Security Control",
      path: "introduct-detail-page/smart-security"
    },
    {
      id: 4,
      img: Image5,
      title: "Smart Management",
      path: "introduction-technology-page"
    },
    {
      id: 5,
      img: Image2,
      title: "Smart Home",
      path: "introduct-detail-page/smart-home",
    },
    {
      id: 6,
      img: Image3,
      title: "Smart Parking",
      path: "smart-parking-page"
    },
  ];
  const settings = {
    useTransform: false,
    className: "slide-vertical",
    dots: false,
    infinite: data.length > 4 ? true : false,
    loop: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 1,
    slidesToRow: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    nextArrow: data.length > 4 ? <NextArrow /> : '',
    prevArrow: data.length > 4 ? <PrevArrow /> : '',
    swipeToSlide: true,
  };
  return (
    <>
      <div className="slide-sols txt-blue ">
        <CardHeader title={t(`Solution_Suggestions`)} />
        <div className="slide-body">
          <Slider {...settings}>
            {
              data.map(item => {
                return (
                  <div className="card-sol" key={item.id}>
                    <div className="card-sol-wrap" >
                      <div className="card-sol-header">
                        <Link to={`/${item.path}`} className="card-link">
                          <img src={item.img} alt="" />
                        </Link>
                      </div>
                      <div className="card-sol-perm d-flex -al-center">
                        <div className="sol-perm-item">
                          <img src={imgPer} alt="" />
                        </div>
                        <div className="sol-perm-item">
                          <img src={imgPer} alt="" />
                        </div> <div className="sol-perm-item">
                          <img src={imgPer} alt="" />
                        </div> <div className="sol-perm-item">
                          <img src={imgPer} alt="" />
                        </div>
                      </div>
                      <div className="card-sol-des">
                        <span className="fs-16 txt-blue">{item.title}</span>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </div>
    </>
  )
}

export default SolutionSuggestion
