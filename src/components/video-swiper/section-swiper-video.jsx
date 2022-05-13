import React,{useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
const SectionSwiperVideo = ({listVideo}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <section
            className='section-swiper-video-v3'
        >
            <div className="swiper-video-container">
                <div className="title-box">
                    <p className="sub-title">VIDEO SLIVING</p>
                    <p className="title">Trải Nghiệm Smart Home - Sliving</p>
                    <div className="item-border"></div>
                </div>
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    loop={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {listVideo.map((item) =>
                        <SwiperSlide
                            key={item.id}
                        >
                            <img src={item.image} alt="" />
                        </SwiperSlide>)}
                </Swiper>
                <div className="container-swiper-thumb">
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {
                            listVideo.map((item) => {
                                return (
                                    <SwiperSlide
                                        key={item.id}
                                    >
                                        <div
                                            className='wrap-item'
                                        >
                                            <div className="img-box">
                                                <img src={item.image} alt="" className='img' />
                                            </div>
                                            <div className="item-border"></div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>  
                </div> 
            </div>
        </section>
    )
}

export default SectionSwiperVideo;