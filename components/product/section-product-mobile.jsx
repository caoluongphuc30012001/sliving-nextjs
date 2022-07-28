import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import axios from "axios";
import { useTranslation } from "next-i18next";

import style from "../../pages/smart-home/style.module.scss";
const ContentLeft = ({ current, setCurrent, productTypes, setListProduct }) => {
  const { i18n } = useTranslation();
  const checkVn = i18n.language.toUpperCase() === "VN" ? true : false;
  return (
    <div className={style[`content-left`]}>
      <div className={style[`top-menu`]}>
        {productTypes.map((item) => {
          return (
            <div
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
              className={
                item.id === current.id
                  ? [style["item-box"], style["active"]].join(" ")
                  : style["item-box"]
              }
              key={item.id}
              onClick={() => {
                setCurrent(item);
              }}
            >
              <div className={style[`label`]}>
                {checkVn ? item.nameVi : item.nameEn}
              </div>
              <div className={style[`item-border`]}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const ContentRight = ({ listProduct, current }) => {
  const { i18n } = useTranslation();
  const checkVn = i18n.language.toUpperCase() === "VN" ? true : false;
  return (
    listProduct.length > 0 && (
      <div className={style[`content-right`]}>
        <Swiper
          spaceBetween={30}
          grabCursor={true}
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            560: {
              slidesPerView: 2,
            },
            760: {
              slidesPerView: 3,
            },
          }}
          // centeredSlides={true}
        >
          {listProduct.map((item) => {
            return (
              <SwiperSlide key={item.id} className={style[`list-product`]}>
                <Link href={`/product-detail/${item.id}`}>
                  <div className={style[`item-box`]}>
                    <div className={style[`img-box`]}>
                      <img src={item.imageURL} alt="" />
                    </div>
                    <div className={style[`description`]}>
                      {checkVn ? item.nameVi : item.nameEn}
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    )
  );
};
const SectionProductMobile = ({ productTypes }) => {
  const [current, setCurrent] = useState("");
  const { t } = useTranslation();

  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    if (productTypes[0]) {
      setCurrent(productTypes[0]);
    }
  }, [productTypes]);

  useEffect(() => {
    const getDeviceTypes = async () => {
      try {
        const res = await axios.get(
          `https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/dropdown/get-device-type/${current.id}`
        );

        setListProduct(res.data?.Items);
      } catch (error) {
        console.log(error);
      }
    };
    if (current) {
      getDeviceTypes();
    }
  }, [current]);
  return (
    <section className={style[`section-product-v3-mobile`]}>
      <div className={style[`product-container`]}>
        <div className={style[`title-box`]}>
          <div className={style[`sub-title`]}>SLIVING PRODUCTS</div>
          <div className={style[`title`]}>
            {t("sectionProductV3Mobile.titleMain")}
          </div>
          {/* <div className={style[`title">Sản Phẩm Sliving</div> */}
          <div className={style[`item-border`]}></div>
        </div>
        <div className={style[`content`]}>
          <ContentLeft
            setListProduct={setListProduct}
            current={current}
            setCurrent={setCurrent}
            productTypes={productTypes}
          />
          <ContentRight listProduct={listProduct} current={current} />
        </div>
      </div>
    </section>
  );
};

export default SectionProductMobile;
