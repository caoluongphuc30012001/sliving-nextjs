import React, { useState } from "react";
import arrowLeft from "../../images/smart-home-v3/svg/arrow-left.svg";
import arrowRight from "../../images/smart-home-v3/svg/arrow-right.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import ModalAdvise from "@components/modal/modal-advise/ModalAdvise";

import { Link } from "gatsby";
const SectionPopularProduct = ({ listProduct }) => {
  const [current, setCurrent] = useState(1);
  const [productName, setProductName] = useState("");
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <section className="section-popular-product-v3">
      <div className="popular-product-container">
        <div className="title-box">
          <p className="sub-title">FEATURED PRODUCTS</p>
          <p className="title">Sản Phẩm Nổi Bật</p>
          <div className="item-border"></div>
        </div>
        <div className="content-container">
          <div className="swiper-container-v3">
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              // centeredSlides={true}
              grabCursor={true}
              loop={true}
              navigation={{
                nextEl: ".button-next-slider",
                prevEl: ".button-prev-slider",
              }}
              modules={[Pagination, Navigation]}
              onSlideChange={(swiper) => {
                setCurrent((swiper.activeIndex % listProduct.length) + 1);
              }}
              className="container-cover"
            >
              {listProduct.length > 0 &&
                listProduct.map((item) => {
                  return (
                    <SwiperSlide key={item.id} className="list-product">
                      <div className="item-box">
                        <Link to={`/product-detail/?${item.id}`}>
                          <div className="img-box">
                            <div className="box-shadow"></div>
                            <img src={item.imageURL} alt="" />
                          </div>
                        </Link>
                        <div className="description-box">
                          <p className="sub-title">{item.nameEn}</p>
                          <p className="title">{item.nameVi}</p>
                          <div className="btn-group">
                            <button
                              className="advise-now-btn"
                              onClick={() => {
                                setProductName(item.nameVi);
                                setModalShow(true);
                              }}
                            >
                              <span>Tư vấn ngay</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
          <div className="nav-swiper-box">
            <img src={arrowLeft} alt="" className="button-prev-slider" />
            <img src={arrowRight} alt="" className="button-next-slider" />
          </div>
        </div>
      </div>
      <ModalAdvise
        productName={productName}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </section>
  );
};

export default SectionPopularProduct;
