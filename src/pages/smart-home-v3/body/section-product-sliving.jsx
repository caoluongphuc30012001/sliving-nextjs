import React, { useState,useEffect } from "react";
import SectionProductMobile from '../../../components/product/section-product-mobile'
import SectionProduct from '../../../components/product/section-product'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import product1 from "../../../images/smart-home-v3/jpg/product1.jpg";
import product2 from "../../../images/smart-home-v3/jpg/product2.jpg";
import product3 from "../../../images/smart-home-v3/jpg/product3.jpg";
import product4 from "../../../images/smart-home-v3/jpg/product4.jpg";
import product5 from "../../../images/smart-home-v3/jpg/product5.jpg";
import product6 from "../../../images/smart-home-v3/jpg/product6.jpg";
import '../style.scss'
const isBrowser = typeof window !== "undefined";
const SectionProductSliving = () => {
    const listProduct = [
        {
        id: 0,
        title: "Công tắc",
        listProduct: [
            {
            id: 0,
            title: "Công tắc cơ",
            listProduct: [
                {
                id: 0,
                description: "Công tắc cơ - Phiên bản Wifi - Loại chữ nhật",
                image: product1,
                },
                {
                id: 1,
                description: "Công tắc cơ - Phiên bản Zigbee - Loại chữ nhật",
                image: product2,
                },
                {
                id: 2,
                description: "Công tắc cơ - Phiên bản Wifi - Loại vuông",
                image: product3,
                },
            ],
            },
            {
            id: 1,
            title: "Công tắc cảm ứng",
            listProduct: [
                {
                id: 0,
                description: "Công tắc cảm ứng thông minh",
                image: product4,
                },
                {
                id: 1,
                description: "Công tắc rèm thông minh",
                image: product5,
                },
                {
                id: 2,
                description: "Công tắc cảm ứng cho bình nóng lạnh",
                image: product6,
                },
            ],
            },
        ],
        },
        {
        id: 1,
        title: "LED",
        listProduct: [],
        },
        {
        id: 2,
        title: "Ổ Cắm",
        listProduct: [],
        },
        {
        id: 3,
        title: "Cảm Biến",
        listProduct: [],
        },
        {
        id: 4,
        title: "Zigbee KIT",
        listProduct: [],
        },
        {
        id: 5,
        title: "Công Tắc Thông Minh",
        listProduct: [],
        },
        {
        id: 6,
        title: "Rèm Thông Minh",
        listProduct: [],
        },
        {
        id: 7,
        title: "Đo Lường Thông Minh",
        listProduct: [],
        },
        {
        id: 8,
        title: "Động Cơ",
        listProduct: [],
        },
    ];
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const funcCheckMobile = () => {
        if (window.screen.width > 1180) {
            setIsDesktop(true);
            setIsMobile(false);
        } else {
            setIsDesktop(false);
            setIsMobile(true);
        }
        };
        if (isBrowser) {
        window.addEventListener("resize", funcCheckMobile);
        funcCheckMobile();
        return () => {
            window.removeEventListener("resize", funcCheckMobile);
        };
        }
    }, [isMobile, isDesktop]);
    return (
        <>
            
        {isDesktop&&<SectionProduct listProduct={listProduct}/>}
        {isMobile&&<SectionProductMobile listProduct={listProduct}/>}
        </>
    );
};

export default SectionProductSliving;
