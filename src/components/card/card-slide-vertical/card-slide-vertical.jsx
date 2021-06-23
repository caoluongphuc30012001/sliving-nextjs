import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import CardSlideChild from "./card-vertical";
import CardHeader from "../card-title-header";
import SwiperCore, {
	Navigation
} from 'swiper/core';
import Slider from "react-slick";
import PrevArrow from "../../button/button-prev-arrow.jsx";
import NextArrow from "../../button/button-next-arrow.jsx";
import DataProductSolution from "@query/product-solution";
import { useTranslation } from 'react-i18next';
SwiperCore.use([Navigation]);
const SlidePermission = ({ title, isMenu, rows, infinite, dots, isArrow, slidesToShow, id, isShow }) => {
	const { t } = useTranslation();
	const dataAllProducts = DataProductSolution();
	const dataGateWay = dataAllProducts.dataGateWay.edges;
	const dataLED = dataAllProducts.dataLED.edges;
	const dataSwitch = dataAllProducts.dataSwitch.edges;
	const dataSocket = dataAllProducts.dataSocket.edges;
	const dataSensor = dataAllProducts.dataSensor.edges;
	const dataAirConditioningSystem = dataAllProducts.dataAirConditioningSystem.edges;
	const dataSmartCurtain = dataAllProducts.dataSmartCurtain.edges;
	const dataSmartMeasurement = dataAllProducts.dataSmartMeasurement.edges;
	const dataZigbeeKit = dataAllProducts.dataZigbeeKit.edges;
	const [post, setPost] = useState(dataLED);
	const [arrProduct] = useState([
		{ title: "LED", id: 0, isActive: true },
		{ title: "navProduct.Switches", id: 1, isActive: false },
		{ title: "navProduct.Sockets", id: 2, isActive: false },
		{ title: "navProduct.Sensors", id: 3, isActive: false },
		{ title: "navProduct.Air_Conditioning_System", id: 4, isActive: false },
		{ title: "navProduct.Smart_Curtain", id: 5, isActive: false },
		{ title: "navProduct.Smart_Measurement", id: 6, isActive: false },
		{ title: "Zigbee KIT", id: 7, isActive: false },
		{ title: "navProduct.Door_motor_gate", id: 8, isActive: false },
	]);
	const settings = {
		useTransform: false,
		className: "slide-vertical",
		dots: dots ? dots : false,
		infinite: post.length > 4 && infinite ? true : false,
		loop: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		rows: (post.length >= 16 && rows === 4) ? 4 : (post.length > 12 && rows === 4) ? 3 : (post.length <= 12 && post.length > 8 && rows === 4) ? 2 : (post.length <= 8 && post.length > 4 && rows === 4) ? 2 : (post.length <= 4 && rows === 4) ? 1 : rows,
		slidesToRow: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},

			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		],
		nextArrow: isArrow ? <NextArrow /> : '',
		prevArrow: isArrow ? <PrevArrow /> : '',
		swipeToSlide: true,
	};
	const clickProduct = (id) => {
		arrProduct.forEach((prod) => (prod.isActive = id === prod.id ? true : false));
		setPost([]);
		if (id === 0) { setPost(dataLED); };
		if (id === 1) { setPost(dataSwitch); };
		if (id === 2) { setPost(dataSocket); };
		if (id === 3) { setPost(dataSensor); };
		if (id === 4) { setPost(dataAirConditioningSystem); };
		if (id === 5) { setPost(dataSmartCurtain); };
		if (id === 6) { setPost(dataSmartMeasurement); };
		if (id === 7) { setPost(dataZigbeeKit); };
		if (id === 8) { setPost(dataGateWay); };
	}
	return (
		<div className="slide-sols txt-blue ">
			{title && (<CardHeader title={t(`${title}`)} id={id} isShow={isShow} />)}
			{isMenu && (<div className="slide-nav">
				<Nav>
					{arrProduct && arrProduct.map((prod, index) => {
						return (
							<div
								key={index}
								onClick={() => clickProduct(prod.id)}
								onKeyDown={() => clickProduct(prod.id)}
								className={`nav-prod ${prod.isActive ? 'is-active-slide' : ''}`}
								role="button"
								tabIndex="0">{t(`${prod.title}`)}</div>)

					})}
				</Nav>
			</div>)}
			<div className="slide-body">
				<Slider {...settings}>
					{
						post.map(({ node }) => {
							return (
								<CardSlideChild
									key={node.frontmatter.id}
									imgUrl={node.frontmatter.featuredImage.childImageSharp.fluid.src}
									description={node.frontmatter.title}
									path={node.frontmatter.slug}
								/>
							)
						})
					}
				</Slider>
			</div>
		</div>
	);
}
export default SlidePermission;
