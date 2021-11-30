import React from 'react';
import iconShopping from "@images/icon/cart-shopping-2.svg";
import { Row } from 'react-bootstrap';
import "../style.scss";

const ButtonShop = ({ content }) => {
    return (
        <button className="btn-shopping">
            <Row noGutters>
                <img src={iconShopping} alt="icon shopping" width={24} height={24} />
                <span>|</span>
                <h4>{content}</h4>
            </Row>
        </button>
    )
}

export default ButtonShop;
