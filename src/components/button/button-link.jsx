import React from 'react';
import {Link} from "gatsby";
const ButtonLink = ({ title, url }) => {
    return (<Link to={url} className="btn-link-a"><div className="btn-link fs-18 fw-bold"><span >{title}</span></div></Link>);
}
export default ButtonLink;
