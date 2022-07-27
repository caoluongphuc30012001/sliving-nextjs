import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ReactPlayer from 'react-player'
import playIcon from '@images/smart-home-v3/svg/play-btn.svg'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import { Image } from 'react-bootstrap'
import { useTranslation } from 'next-i18next'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import style from './style.module.scss'

// import required modules
const SectionSwiperVideo = ({ listVideo }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const { t } = useTranslation('smartLighting')

  return (
    <section className={style["section-swiper-video-v3"]}>
      <div className={style["swiper-video-container"]}>
        <div className={style["title-box"]}>
          <p className={style["sub-title"]}>SLIVING PRODUCT EXPERIENCE</p>
          <div className={style["title"]}>{t('sectionSwiperVideoV3.titleMain')}</div>
          {/* <p className={style["title"]}>Trải Nghiệm Smart Home</p> */}
          <div className={style["item-border"]}></div>
        </div>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          //   loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={style["mySwiper2"]}
        >
          {listVideo.map((item) => (
            <SwiperSlide key={item.id}>
              <ReactPlayer
                //   ref={ref}
                className={style["iframe-youtube-sliving"]}
                url={item.url}
                controls
                playing
                config={{
                  file: {
                    attributes: {
                      controlsList: 'nodownload',
                    },
                  },
                }}
                light={item.image.src}
                playIcon={<Image src={playIcon.src} alt="" />}
                // width={1180}
                // onStart=
              />
              {/* <img src={item.image} alt="" /> */}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={style["container-swiper-thumb"]}>
          <Swiper
            onSwiper={setThumbsSwiper}
            // loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={style["mySwiper"]}
            breakpoints={{
              320: {
                slidesPerView: 1.5,
              },
              550: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
            }}
          >
            {listVideo.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className={style["wrap-item"]}>
                    <div className={style["img-box"]}>
                      <img src={item.image} alt="" className={style["img"]} />
                    </div>
                    <div className={style["item-border"]}></div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default SectionSwiperVideo
