import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'
import arrowLeft from '@images/smart-home-v3/svg/arrow-left.svg'
import arrowRight from '@images/smart-home-v3/svg/arrow-right.svg'
import Link from 'next/link'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'
import { useTranslation } from 'next-i18next'
import style from './style.module.scss'
const ContentLeft = ({ current, setCurrent, productTypes, setListProduct }) => {
  const { i18n } = useTranslation('smartLighting')
  // const checkVn = i18n.language.toUpperCase() === "VN" ? true : false;
  const checkVn = true
  const handle = (item) => {
    setCurrent(item)
    setListProduct([])
  }
  return (
    <div className={style['content-left']}>
      {productTypes.map((item) => {
        return (
          <div
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
            className={`${style['item-box']} ${item.id === current.id ? style['active'] : ''}`}
            key={item.id}
            onClick={() => {
              handle(item)
            }}
          >
            <div className={style['label']}>{checkVn ? item.nameVi : item.nameEn}</div>
            <div className={style['item-border']}></div>
          </div>
        )
      })}
    </div>
  )
}
const ContentRight = ({ listProduct, current }) => {
  const { i18n } = useTranslation('smartLighting')
  // const checkVn = i18n.language.toUpperCase() === "VN" ? true : false;
  const checkVn = true
  return (
    <div className={style['content-right']}>
      {listProduct.length > 0 ? (
        <div className={style['item-product-box']}>
          <div className={style['title-box']}>
            <p className={style['title']}>{checkVn ? current.nameVi : current.nameEn}</p>
            <div className={style['navigation']}>
              <img src={arrowLeft} alt="" className={`button-next-${current.id}`} />
              <img src={arrowRight} alt="" className={`button-prev-${current.id}`} />
            </div>
          </div>
          <ItemProduct listProduct={listProduct} itemId={current.id} />
        </div>
      ) : (
        <div className={style['spinner-box']}>
          <Spinner size="lg" className={style['spinner']} animation="border" />
        </div>
      )}
    </div>
  )
}
const SliderComponent = ({ index, productCount, listProduct }) => {
  const { i18n } = useTranslation('smartLighting')
  // const checkVn = i18n.language.toUpperCase() === "VN" ? true : false;
  const checkVn = true
  let sliders = []
  const itemsGrouped = 6
  for (let j = 0; j < itemsGrouped; j++) {
    const currentIndex = index * itemsGrouped + j
    if (currentIndex < productCount) {
      const item = (
        <Link href={`/product-detail/${listProduct[currentIndex].id}`}>
          <div className={style['item-box']}>
            <div className={style['img-box']}>
              <img src={listProduct[currentIndex].imageURL} alt="" />
            </div>
            <div className={style['name-box']}>
              <p className={style['name']}>
                {checkVn ? listProduct[currentIndex].nameVi : listProduct[currentIndex].nameEn}
              </p>
            </div>
          </div>
        </Link>
      )
      sliders.push(item)
    }
  }
  return <div className={style['slider-box']}>{sliders}</div>
}
const ItemProduct = ({ listProduct, itemId }) => {
  const sliderCount = Math.floor((listProduct.length - 1) / 6) + 1
  const productCount = listProduct.length
  let listSlider = [...Array(sliderCount)]
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      navigation={{
        nextEl: `.button-prev-${itemId}`,
        prevEl: `.button-next-${itemId}`,
      }}
      width="820"
      modules={[Pagination, Navigation]}
    >
      {listSlider.map((item, index) => {
        const id = index + 1
        return (
          <SwiperSlide key={index}>
            <SliderComponent index={index} listProduct={listProduct} productCount={productCount} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
const SectionProduct = ({ productTypes }) => {
  const [current, setCurrent] = useState('')
  const { t } = useTranslation('smartLighting')

  const [listProduct, setListProduct] = useState([])

  useEffect(() => {
    if (productTypes[0]) {
      setCurrent(productTypes[0])
    }
  }, [productTypes])

  useEffect(() => {
    const getDeviceTypes = async () => {
      try {
        const res = await axios.get(
          `https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/dropdown/get-device-type/${current.id}`,
        )

        setListProduct(res.data?.Items)
      } catch (error) {
        console.log(error)
      }
    }
    if (current) {
      getDeviceTypes()
    }
  }, [current])

  return (
    <section className={style['section-product-v3']}>
      <div className={style['product-container']}>
        <div className={style['title-box']}>
          <div className={style['sub-title']}>SLIVING PRODUCTS</div>
          <div className={style['title']}>{t('sectionProductV3.titleMain')}</div>
          {/* <div className={style["title"]}>Sản Phẩm Sliving</div> */}
          <div className={style['item-border']}></div>
        </div>
        <div className={style['content']}>
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
  )
}

export default SectionProduct
