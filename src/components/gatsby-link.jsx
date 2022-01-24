import React from 'react';
import { Link as GatsbyLink } from "gatsby";
import PropTypes from 'prop-types';

import i18next from 'i18next';

const Link = ({ children, to, activeClassName, partiallyActive, ...other }) => {
    const internal = /^\/(?!\/)/.test(to)
    const lngCurrent = i18next.language;
    if (internal) {
        return (
            <GatsbyLink style={{textDecorarion:'none'}}
                to={`/${lngCurrent}${to}`}
                activeClassName={activeClassName}
                partiallyActive={partiallyActive}
                {...other}
            >
                {children}
            </GatsbyLink>
        )
    }

    return (
        <a href={to} {...other}>
            {children}
        </a>
    )
}

Link.prototype = {
    children: PropTypes.any.isRequired,
    to: PropTypes.string.isRequired, 
    activeClassName : PropTypes.any, 
    partiallyActive: PropTypes.any
}

export default Link;
