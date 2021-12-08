import React from 'react';
import ButtonShop from '../button/button-shop';
import "../style.scss";
import IconHeart from "../svg/heart";
import styled from 'styled-components';
import img from "@images/product-v2/8ch-3.png"
const BodyTag = styled.div`
backgroundColor: ${props => props.background}
`
const CardProductV2 = ({ props, isButton, background }) => {
    return (
        <div className="card-product-v2" >
            <div className="product-v2-img"> <img src={props?.imgSrcProduct?.publicURL || img} alt="" width={370} height={313} style={{ objectFit: "cover" }} /> </div>
            <BodyTag className="product-v2-detail" background={background}>
                <h6>{props?.type}</h6>
                <h2 style={{ cursor: "pointer" }}>{props?.title}</h2>
                {isButton && (<div className="prod-group-btn d-flex al-center just-cont-bt">
                    <ButtonShop content={"Shop Now"} />
                    <div className="heart-animation" ><IconHeart /></div>
                </div>)}
            </BodyTag>
        </div>

    );
}
export default CardProductV2;
