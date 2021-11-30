import React from 'react';
import ButtonShop from '../button/button-shop';
import "../style.scss";
import iconHeart from "@images/icon/icon-heart.svg";
import styled from 'styled-components';
const BodyTag = styled.div`
backgroundColor: ${props => props.background}
`
const CardProductV2 = ({ props, isButton, background }) => {
    return (
        <div className="card-product-v2" >
            <div className="product-v2-img"> <img src={props?.featuredImage?.publicURL} alt={props.alt} width={370} height={313} style={{ objectFit: "cover" }} /> </div>
            <BodyTag className="product-v2-detail" background={background}>
                <h6>{props.typeProduct || "Led Lighting"}</h6>
                <h2 style={{ cursor: "pointer" }}>{props.title}</h2>
                {isButton && (<div className="prod-group-btn d-flex al-center just-cont-fl-start">
                    <ButtonShop content={"Shop Now"} />
                    <img src={iconHeart} width={40} height={40} alt="" />
                </div>)}
            </BodyTag>
        </div>

    );
}
export default CardProductV2;
