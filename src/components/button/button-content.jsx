import React from "react";
import styled from "styled-components";
const ButtonContent = ({ boder, background, color, title, isCnt }) => {
    const Button = styled.button`
        border: ${boder};
        background: ${background};
        color: ${color};
    `
    return (
        <div className="btn-content" >
            <Button className={`b-shadow ${isCnt ? 'btn-cnt' : ''}`}><span>{title}</span></Button>
        </div>

    );
}
export default ButtonContent;
