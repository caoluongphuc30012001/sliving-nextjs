import React from "react";
import ButtonShop from "../button/button-shop";
import "../style.scss";
import IconHeart from "../svg/heart";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const BodyTag = styled.div`
  backgroundcolor: ${(props) => props.background};
`;
const CardProductV2 = ({ props, isButton, background }) => {
  return (
    <div className="card-product-v2">
      <div className="product-v2-img">
        <GatsbyImage
          image={props?.imgSrcProduct?.childImageSharp?.gatsbyImageData}
          alt=""
        />
      </div>
      <BodyTag className="product-v2-detail" background={background}>
        <h6>{props?.type}</h6>
        <h2 style={{ cursor: "pointer" }}>{props?.title}</h2>
      </BodyTag>
    </div>
  );
};
export default CardProductV2;
