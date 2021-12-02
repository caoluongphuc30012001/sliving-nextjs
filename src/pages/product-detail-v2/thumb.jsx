import React, { Component } from "react";
import Slider from "react-slick";
import "./style.scss";
import img1 from "@images/product/prod-about.svg";
import img2 from "@images/product/prod-spec.svg";
import img3 from "@images/product/prod.svg";
import iconArrowLeft from "@images/icon/arrow-down-left-v2.svg";
import iconArrowRight from "@images/icon/arrow-down-right-v2.svg";
import slide2 from "@images/product-v2/8ch-4.png";
import slide3 from "@images/product-v2/8ch-5.png";
import slide4 from "@images/product-v2/8ch-6.png";
import slide5 from "@images/product-v2/8ch-7.png";
import slide6 from "@images/product-v2/8ch-8.png";

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
            onKeyPress={onClick}
            role={"button"}
            tabIndex={0}
        >
            <img src={iconArrowRight} alt="" />
        </div>
    );
}

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
            onKeyPress={onClick}
            role={"button"}
            tabIndex={0}
        >
            <img src={iconArrowLeft} alt="" />
        </div>
    );
}
export default class CenterMode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null,
            arrImg: [
                { id: 0, src: img1, isActive: true },
                { id: 1, src: img2, isActive: false },
                { id: 2, src: img3, isActive: false },
                { id: 3, src: img3, isActive: false },
            ],
        };

        this.listRef = React.createRef();
        this.handleActive = this.handleActive.bind(this);
    }

    handleActive = (id) => {
        this.setState(state => {
            const arrImg = state.arrImg.map(element => {
                if (id === element.id) {
                    element.isActive = true
                    return element;
                } else {
                    element.isActive = false;
                    return element;
                }
            });
            return {
                arrImg,
            };
        })
    }
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        const dataProduct = this.props.dataProduct;
        console.log("dataProduct", dataProduct);
        const arrProduct = [
            { id: 0, buttons: 3, version: [], color: [], thumbImg: slide6 },
            { id: 1, buttons: 3, version: [], color: [], thumbImg: slide2 },
            { id: 2, buttons: 3, version: [], color: [], thumbImg: slide3 },
            { id: 3, buttons: 3, version: [], color: [], thumbImg: slide4 },
            { id: 4, buttons: 3, version: [], color: [], thumbImg: slide5 },

        ]
        console.log("dataProduct", arrProduct);
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeToSlide: true,
            focusOnSelect: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            afterChange: (value) => this.handleActive(value)
        };
        return (
            <div className="thumb-wrap" >
                <Slider
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)} dotsClass={"slick-dots slick-thumb"}
                >
                    {arrProduct && arrProduct.map((element, index) => {
                        return (<div className="thumb-center" key={index}>
                            <img src={element.thumbImg} alt="" width={458} height={461} />
                        </div>)
                    })}
                </Slider>
                <Slider
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    {...settings}
                >
                    {arrProduct.map((element, index) => {
                        return (
                            <div key={index} className="thumb-bottom">
                                <img src={element.thumbImg} alt="" width={160} height={160} />
                            </div>
                        )
                    })}
                </Slider>
            </div >
        );
    }
}