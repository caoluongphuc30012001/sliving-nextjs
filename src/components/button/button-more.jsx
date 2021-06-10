import React from "react";
import styled from "styled-components";
const ButtonMore = ({ backgroundColor, color, border, boxShadow, title, borderReadius, fontWeight, padding, titleBtn, ...props }) => {
    const Div = styled.div`
    background-color: ${backgroundColor};
    border: ${border};
    box-shadow: ${boxShadow};
    border-radius: ${borderReadius};
    padding: ${padding};
    `
    const Span = styled.span`
    color: ${color} !important;
    font-weight: ${fontWeight};
    `
    return (
        <Div className="btn-more b-shadow">
            <Span >{titleBtn ? titleBtn : 'Tìm hiểu thêm'}
            </Span>
        </Div>);
}
export default ButtonMore;
