import React from 'react'
import SectionSwiperVideo from '../../../components/video-swiper/section-swiper-video';
import video from '../../../images/smart-home-v3/jpg/video.jpg'
import '../style.scss';
export default function SectionSwiperVideoSliving() {
    const listVideo = [
        {
            id: 0,
            image:video
        },
        {
            id: 1,
            image:video
        },
        {
            id: 2,
            image:video
        },
        {
            id: 3,
            image:video
        },
        {
            id: 4,
            image:video
        },
        {
            id: 5,
            image:video
        },
        {
            id: 6,
            image:video
        },
        {
            id: 7,
            image:video
        },
        {
            id: 8,
            image:video
        },
        {
            id: 9,
            image:video
        },
        {
            id:10,
            image:video
        },
        {
            id: 11,
            image:video
        },
    ]
    return (
        <SectionSwiperVideo listVideo={listVideo} />
    )
}
