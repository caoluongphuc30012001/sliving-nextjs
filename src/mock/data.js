import Image2 from "@images/intro-content2/image2.png";
import Image3 from "@images/intro-content2/image3.png";
import Image4 from "@images/intro-content2/image4.png";
import Image5 from "@images/intro-content2/image5.png";

export const navData = {
    menus: [
        {
            id: '0',
            title: 'HEADER.HOMEPAGE.PRODUCT&SOLUTION',
            isActive: false,
            isToggle:false,
            path: "/product-solution-page", isHover: false,
            arrMenu: [
                {
                    id: '0',
                    title: 'Smart Parking',
                    isActive: false,
                    path: "/introduct-detail-page/smart-parking", isHover: false
                },
                {
                    id: '1',
                    title: 'Smart Home',
                    isActive: false,
                    path: "/introduct-detail-page/smart-home", isHover: false
                }, {
                    id: '2',
                    title: 'Saving Energy',
                    isActive: false,
                    path: "/introduct-detail-page/smart-energy", isHover: false
                },
                {
                    id: '3',
                    title: 'Smart Security',
                    isActive: false,
                    path: "/introduct-detail-page/smart-security", isHover: false
                },
                {
                    id: '4',
                    title: 'Smart Lighting',
                    isActive: false,
                    path: "/introduct-detail-page/smart-lighting", isHover: false
                },
            ]
        },
        {

            id: '1',
            title: 'HEADER.HOMEPAGE.SUPPORT',
            isActive: false,
            isHover: false,
            isToggle:false,
            path: "/support-page/",
            arrMenu: [
                {
                    id: '0',
                    title: 'Technical_solutions',
                    isActive: false,
                    path: "/", isHover: false
                },
                {
                    id: '1',
                    title: 'Construction_Manual',
                    isActive: false,
                    path: "/", isHover: false
                }, {
                    id: '2',
                    title: 'Agricultural_Materials',
                    isActive: false,
                    path: "/", isHover: false
                },
                {
                    id: '3',
                    title: 'Product_Identification',
                    isActive: false,
                    path: "/", isHover: false
                },
                {
                    id: '4',
                    title: 'Product_Warranty',
                    isActive: false,
                    path: "/", isHover: false
                },
                {
                    id: '5',
                    title: 'Documents_Download',
                    isActive: false,
                    path: "/", isHover: false
                },
            ]
        },
        // {
        //     id: '2',
        //     title: 'HEADER.HOMEPAGE.PROJECT'
        //     ,
        //     isActive: false,
        //     path: "/"
        //     ,
        //     isHover: false,
        // },
        {

            id: '3',
            title: 'HEADER.HOMEPAGE.ABOUTUS',
            isActive: false,
            path: "/introduction-page",
            isHover: false,
        },
        {
            id: '4',
            title: 'HEADER.HOMEPAGE.BLOG',
            isActive: false,
            path: "/news-page",
            isHover: false,
        },
        {

            id: '5',
            title: 'HEADER.HOMEPAGE.CONTACTUS',
            isActive: false,
            path: "/contact-page",
            isHover: false,
        },
    ]
}

export const addressData = {
    address: {
        title: "ADDRESS.ADDRESS",
        description: "ADDRESS.ADDRESSCOMPANY"
    }
}

export const aboutData = {

    contact: {
        titleFeather: "CONTACTPHONE",
        titleChild: "HEADQUARTERS",
        phone: "+84 (028) 71079995",
        Showroom: {
            title: "SHOWROOM",
            phone: ""
        },
    }
}

export const dataSolutionSuggestion = [
    {
        id: 1,
        img: Image2,
        title: "Smart Home",
        path: "introduct-detail-page/smart-home",
    },
    {
        id: 2,
        img: Image3,
        title: "Smart Parking",
        path: "introduct-detail-page/smart-parking"
    },
    {
        id: 3,
        img: Image4,
        title: "Security Control",
        path: "introduct-detail-page/smart-security"
    },
    {
        id: 4,
        img: Image5,
        title: "Smart Energy",
        path: "introduct-detail-page/smart-energy"
    },
    {
        id: 5,
        img: Image2,
        title: "Smart Home",
        path: "introduct-detail-page/smart-home",
    },
    {
        id: 6,
        img: Image3,
        title: "Smart Parking",
        path: "smart-parking-page"
    },
]
