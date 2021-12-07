import React, { Component } from "react";
import Slider from "react-slick";
import "./style.scss";
import img1 from "@images/product/prod-about.svg";
import img2 from "@images/product/prod-spec.svg";
import img3 from "@images/product/prod.svg";
import iconArrowLeft from "@images/icon/arrow-down-left-v2.svg";
import iconArrowRight from "@images/icon/arrow-down-right-v2.svg";
import "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";
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
            arrThumbs: []
        };
        this.listRef1 = React.createRef();
        this.listRef2 = React.createRef();
        this.getData = this.getData.bind(this);
    }
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
        this.getData();
    }

    getData = () => {
        const dataProduct = this.props?.dataProduct || [];
        if (dataProduct) {
            this.setState(state => {
                state.arrThumbs = dataProduct;
            })
        }
    }

    render() {
        const settings = {
            dots: false,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeToSlide: true,
            focusOnSelect: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };
        return (

            <div className="thumb-wrap" >
                <Slider
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)} dotsClass={"slick-dots slick-thumb"}
                >
                    {this.state.arrThumbs && this.state.arrThumbs?.map((element, index) => {
                        return (<div className="thumb-center" data-fancybox="gallery" data-src={element.publicURL} key={index}>
                            <img src={element.publicURL} alt="" width={458} height={461} />
                        </div>)
                    })}
                </Slider>
                <Slider
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    {...settings}
                >
                    {this.state.arrThumbs.map((element, index) => {
                        return (
                            <div key={index} className="thumb-bottom">
                                <img src={element.publicURL} alt="" width={160} height={160} />
                            </div>
                        )
                    })}
                </Slider>
            </div >
        );
    }
}