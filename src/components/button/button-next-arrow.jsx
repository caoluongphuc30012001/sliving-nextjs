import React from "react";
import arrowNext from "../../images/home-page/slide/arrow_next.svg";
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div role="button" tabIndex={0}
            className={className}
            style={{ ...style, display: "block", }}
            onClick={onClick} onKeyPress={onClick}>
            <img src={arrowNext} alt="" />
        </div>
    );
}
export default NextArrow;
