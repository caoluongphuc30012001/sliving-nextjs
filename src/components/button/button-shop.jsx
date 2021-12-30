import React from 'react';
import iconShopping from "@images/icon/cart-shopping-2.svg";
import "../style.scss";

const ButtonShop = ({ content }) => {
    return (
        <button className="btn-shopping">
            <div className='d-flex al-item-center btn-shopping-wrap'>
                <div >
                    <img src={iconShopping} alt="icon shopping" width={24} height={24} />
                </div>
                <h4>{content}</h4>
            </div>
        </button>
    )
}

export default ButtonShop;
