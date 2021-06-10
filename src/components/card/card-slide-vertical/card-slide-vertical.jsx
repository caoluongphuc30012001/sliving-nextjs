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

SwiperCore.use([Navigation]);
	

const SlidePermission = ({ title, isMenu, rows, infinite, dots, isArrow, slidesToShow }) => {
	const dataAllProducts = DataProductSolution();
	const dataLED = dataAllProducts.dataLED.edges;
	const dataSwitch = dataAllProducts.dataSwitch.edges;
	const dataSocket = dataAllProducts.dataSocket.edges;
	const dataSensor = dataAllProducts.dataSensor.edges;
	const dataAirConditioningSystem = dataAllProducts.dataAirConditioningSystem.edges;
	const dataSmartCurtain = dataAllProducts.dataSmartCurtain.edges;
	const dataSmartMeasurement = dataAllProducts.dataSmartMeasurement.edges;
	const dataZigbeeKit = dataAllProducts.dataZigbeeKit.edges;

	const [post, setPost] = useState(dataLED);
	const arrProduct = [
		{ title: "LED", id: 0, isActive: true },
		{ title: "Công tắc", id: 1, isActive: false },
		{ title: "Ô cắm", id: 2, isActive: false },
		{ title: "Cảm biến", id: 3, isActive: false },
		{ title: "Hệ thống điều hòa", id: 4, isActive: false },
		{ title: "Rèm thông minh", id: 5, isActive: false },
		{ title: "Đo lường thông minh", id: 6, isActive: false },
		{ title: "Zigbee KIT", id: 7, isActive: false },
	];

	const settings = {
		useTransform: false,
		className: "slide-vertical",
		dots: dots ? dots : false,
		infinite: infinite,
		lop: true,
		slidesToShow: 4,
		rows: rows,
		slidesToRow: 2,
		slidesToScroll: 1,
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
		afterChange: function (index) {

		}
	};
	const clickProduct = (id) => {
		arrProduct.map((prod) => (prod.isActive = id === prod.id ? true : false));
			if(id === 0){ setPost(dataLED); };
			if(id === 1){	setPost(dataSwitch); };
			if(id === 2){	setPost(dataSocket); };
			if(id === 3){	setPost(dataSensor); };
			if(id === 4){	setPost(dataAirConditioningSystem); };
			if(id === 5){	setPost(dataSmartCurtain); };
			if(id === 6){	setPost(dataSmartMeasurement); };
			if(id === 7){	setPost(dataZigbeeKit); };
	}

	return (
		<div className="slide-sols txt-blue ">
			<CardHeader title={title} />
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
								tabIndex="0">{prod.title}</div>)
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
