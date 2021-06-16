import React from "react";
import styled from "styled-components";
const Button = styled.button`
border: ${props => props.border};
background: ${props => props.background};
color: ${props => props.color};
`
const ButtonContent = ({ border, background, color, title, isCnt }) => {

    return (
        <div className="btn-content" >
            <Button border={border} background={background} color={color} className={`b-shadow ${isCnt ? 'btn-cnt' : ''}`}><span>{title}</span></Button>
        </div>

    );
}
export default ButtonContent;
