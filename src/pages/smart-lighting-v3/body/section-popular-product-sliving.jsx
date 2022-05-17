import React from 'react'
import SectionPopularProduct from '../../../components/product/section-popular-product';
import popular1 from '../../../images/smart-home-v3/jpg/popular1.jpg';
import popular2 from '../../../images/smart-home-v3/jpg/popular2.jpg';
import popular3 from '../../../images/smart-home-v3/jpg/popular3.jpg';
const SectionPopularProductSliving = () => {
    const listProduct = [
        {
            id:0,
            image: popular1,
            title: "Công tắc cơ - Phiên bản Wifi - Loại chữ nhật",
            description:"Switch Mechanical"
        },
        {
            id:1,
            image: popular2,
            title: "Công tắc cảm ứng thông minh",
            description:"Switch Touch"
        },
        {
            id:2,
            image: popular3,
            title: "Động cơ rèm",
            description:"Smart Curtain"
        },
    ]
    return (
        <SectionPopularProduct listProduct={listProduct} />
    )
}

export default SectionPopularProductSliving;