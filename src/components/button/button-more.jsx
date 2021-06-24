import React from "react";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Link } from "gatsby";
const Div = styled.div`
background-color:  ${props => props.backgroundColor};
border: ${props => props.border};
border-radius: ${props => props.borderReadius};
padding: ${props => props.padding};
`
const Span = styled.span`
color: ${props => props.color} !important;
font-weight:${props => props.fontWeight};
`
const ButtonMore = ({ url, backgroundColor, color, border, boxShadow, title, borderReadius, fontWeight, padding, titleBtn, ...props }) => {
    const { t } = useTranslation();
    return (
        <Link to={url}>
            <Div className="btn-more b-shadow" padding={padding} backgroundColor={backgroundColor} border={border} borderReadius={borderReadius}>
                <Span color={color} fontWeight={fontWeight}>{titleBtn ? t(`${titleBtn}`) : t(`More_Information`)}
                </Span>
            </Div>
        </Link>)
}
export default ButtonMore;
