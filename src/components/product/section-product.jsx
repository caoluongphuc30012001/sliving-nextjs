import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import arrowLeft from "../../images/smart-home-v3/svg/arrow-left.svg";
import arrowRight from "../../images/smart-home-v3/svg/arrow-right.svg";
import { Link } from "gatsby";
const ContentLeft = ({ listProduct, current, setCurrent }) => {
  return (
    <div className="content-left">
      {listProduct.map((item) => {
        return (
          <div
            className={`item-box ${item.id === current ? "active" : ""}`}
            key={item.id}
            onClick={() => {
              setCurrent(item.id);
            }}
          >
            <div className="label">{item.title}</div>
            <div className="item-border"></div>
          </div>
        );
      })}
    </div>
  );
};
const ContentRight = ({ listProduct }) => {
  return (
    <div className="content-right">
      {listProduct.map((item) => {
        return (
          <div className="item-product-box" key={item.id}>
            <div className="title-box">
              <p className="title">{item.title}</p>
              <div className="navigation">
                <img
                  src={arrowLeft}
                  alt=""
                  className={`button-next-${item.id}`}
                />
                <img
                  src={arrowRight}
                  alt=""
                  className={`button-prev-${item.id}`}
                />
              </div>
            </div>
            <ItemProduct listProduct={item.listProduct} itemId={item.id} />
          </div>
        );
      })}
    </div>
  );
};
const ItemProduct = ({ listProduct, itemId }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      //   centeredSlides={true}
      grabCursor={true}
      //   loop={true}
      navigation={{
        nextEl: `.button-prev-${itemId}`,
        prevEl: `.button-next-${itemId}`,
      }}
      modules={[Pagination, Navigation]}
    >
      {listProduct.map((item) => {
        console.log("item", item);
        return (
          <SwiperSlide key={item.id} className="list-product">
            <Link to={`/product-detail/${item.type}`}>
              <div className="item-box">
                <div className="img-box">
                  <img src={item.image} alt="" />
                </div>
                <div className="description">{item.description}</div>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
const SectionProduct = ({ listProduct }) => {
  const [current, setCurrent] = useState(0);
  return (
    <section className="section-product-v3">
      <div className="product-container ">
        <div className="title-box">
          <div className="sub-title">SLIVING PRODUCTS</div>
          <div className="title">Sản phẩm Sliving</div>
          <div className="item-border"></div>
        </div>
        <div className="content">
          <ContentLeft
            listProduct={listProduct}
            current={current}
            setCurrent={setCurrent}
          />
          <div className="line-separate"></div>
          <ContentRight listProduct={listProduct[current].listProduct} />
        </div>
      </div>
    </section>
  );
};

export default SectionProduct;
