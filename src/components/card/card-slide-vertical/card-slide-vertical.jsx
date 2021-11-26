import React, { useState, useEffect } from "react";
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
import getGetLgn from "@hook/useGetLgn";
SwiperCore.use([Navigation]);
const SlidePermission = ({ title, isMenu, rows, infinite, dots, isArrow, slidesToShow, id, isShow, params }) => {
	const lgn = getGetLgn().slice(1, 3, 1);
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
	const [post, setPost] = useState([]);
	function changePostsWithLgn(lgnCurrent, arrPost) {
		let arrPosts = [];
		arrPost.forEach((item) => {
			if (item.node.frontmatter.lgn === lgnCurrent) {
				arrPosts.push(item);
			}
		})
		setPost(arrPosts);
		return null
	}
	useEffect(() => {
		changePostsWithLgn(lgn, dataLED);
		if (params) {
			clickProduct(parseInt(params));
		}
		return () => {
			changePostsWithLgn(lgn, []);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params, lgn])
	const [arrProduct] = useState([
		{ title: "LED", id: 0, isActive: true },
		{ title: "navProduct.Switches", id: 1, isActive: false },
		{ title: "navProduct.Sockets", id: 2, isActive: false },
		{ title: "navProduct.Sensors", id: 3, isActive: false },
		{ title: "navProduct.Air_Conditioning_System", id: 4, isActive: false },
		{ title: "navProduct.Smart_Curtain", id: 5, isActive: false },
		{ title: "navProduct.Smart_Meter", id: 6, isActive: false },
		{ title: "navProduct.Zigbee_KIT", id: 7, isActive: false },
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
					dots: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					dots: false
				}
			},

			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			}
		],
		nextArrow: isArrow ? <NextArrow /> : '',
		prevArrow: isArrow ? <PrevArrow /> : '',
		swipeToSlide: true,
	};
	const clickProduct = (id) => {
		console.log("dataSwitch", dataSwitch);
		arrProduct.forEach((prod) => (prod.isActive = id === prod.id ? true : false));
		if (id === 0) { changePostsWithLgn(lgn, dataLED); };
		if (id === 1) { changePostsWithLgn(lgn, dataSwitch); };
		if (id === 2) { changePostsWithLgn(lgn, dataSocket); };
		if (id === 3) { changePostsWithLgn(lgn, dataSensor); };
		if (id === 4) { changePostsWithLgn(lgn, dataAirConditioningSystem); };
		if (id === 5) { changePostsWithLgn(lgn, dataSmartCurtain); };
		if (id === 6) { changePostsWithLgn(lgn, dataSmartMeasurement); };
		if (id === 7) { changePostsWithLgn(lgn, dataZigbeeKit); };
		if (id === 8) { changePostsWithLgn(lgn, dataGateWay); };
	}
	return (
		<div className="slide-sols txt-blue ">
			{title && (<CardHeader title={t(`${title}`)} id={id} isShow={isShow} />)}
			{isMenu && (<div className="slide-nav">
				<Nav>
					{arrProduct.map((prod, index) => {
						return (
							<div
								key={index}
								onClick={() => clickProduct(prod.id)}
								onKeyPress={() => clickProduct(prod.id)}
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
									imgUrl={node.frontmatter.featuredImage ? node.frontmatter.featuredImage.publicURL : ""}
									title={node.frontmatter.title}
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
