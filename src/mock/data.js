
export const navData = {
    menus: [
        {
            id: '0',
            title: 'HEADER.HOMEPAGE.PRODUCT&SOLUTION',
            isActive: true,
            path: "/product-solution-page", isHover: false,
           // path: "/smart-parking-page", isHover: false,
            arrMenu: [
                {
                    id: '0',
                    title: 'Smart Parking',
                    isActive: true,
                    path: "/smart-parking-page", isHover: false,
                },
                {
                    id: '1',
                    title: 'Smart Home',
                    isActive: true,
                    path: "/", isHover: false
                }, {
                    id: '2',
                    title: 'Saving Energy',
                    isActive: true,
                    path: "/", isHover: false
                },
                {
                    id: '2',
                    title: 'Smart Security',
                    isActive: true,
                    path: "/", isHover: false
                },
            ]
        },
        {

            id: '1',
            title: 'HEADER.HOMEPAGE.SUPPORT',
            isActive: false,
            path: "/support-page/",
            isHover: false,
            arrMenu: [
                {
                    id: '0',
                    title: 'Technical_solutions',
                    isActive: true,
                    path: "/", isHover: false
                },
                {
                    id: '1',
                    title: 'Construction_Manual',
                    isActive: true,
                    path: "/", isHover: false
                }, {
                    id: '2',
                    title: 'Agricultural_Materials',
                    isActive: true,
                    path: "/", isHover: false
                },
                {
                    id: '3',
                    title: 'Product_Identification',
                    isActive: true,
                    path: "/", isHover: false
                },
                {
                    id: '4',
                    title: 'Product_Warranty',
                    isActive: true,
                    path: "/", isHover: false
                },
                {
                    id: '5',
                    title: 'Documents_Download',
                    isActive: true,
                    path: "/", isHover: false
                },
            ]
        },
        {
            id: '2',
            title: 'HEADER.HOMEPAGE.PROJECT'
            ,
            isActive: false,
            path: "/"
            ,
            isHover: false,
        },
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
