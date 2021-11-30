import React from "react";
import arrowPrev from "../../images/home-page/slide/arrow_prev.svg";
const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div role="button"
            tabIndex={0}
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
            onKeyPress={onClick}>
            <img src={arrowPrev} alt="" />
        </div>
    );
}
export default PrevArrow;
