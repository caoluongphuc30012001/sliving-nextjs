import React from 'react';
import imgPer from "@images/home-page/slide/permission.svg";
import { Link } from "gatsby";
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';
import PrevArrow from "@components/button/button-prev-arrow.jsx";
import NextArrow from "@components/button/button-next-arrow.jsx";
import CardHeader from "@components/card/card-title-header";
import useGetLgn from "@hook/useGetLgn";
const SolutionSuggestion = ({ data }) => {
  const { t } = useTranslation();
  const Lgn = useGetLgn();
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
          slidesToShow: 3,
          slidesToScroll: 3,
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
        <CardHeader title={t(`Solution_Suggestions`)} id={1} />
        <div className="slide-body">
          <Slider {...settings}>
            {
              data.map(item => {
                return (
                  <Link key={item} to={`${Lgn}${item.path}`} className="card-link">
                    <div className="card-sol" key={item.id}>
                      <div className="card-sol-wrap" >
                        <div className="card-sol-header">

                          <img src={item.img} alt="" />
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
                          <span className="fs-16 txt-blue">{t(`${item.title}`)}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
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
