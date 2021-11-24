import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { Language } from '@wapps/gatsby-plugin-i18next';
import { useTranslation } from 'react-i18next';

import iconLanguage from "../../images/new-home-page/header/icon-language.png"

const isBrowser = typeof window !== "undefined";
const LanguageSwitcher = ({ changeLng }) => {
    const valueFlag = ({ vn: "vn", en: "en" });
    const { i18n } = useTranslation();
    function changeFlag(lgn) {
        i18n.changeLanguage(lgn)
        setIsChange(lgn === "vn" ? true : false);
    };
    const [language] = useState(localStorage.getItem("i18nextLng"));
    const [isChange, setIsChange] = useState(false);
    useEffect(() => {
        if (language === "vn") {
            setIsChange(true)
        } else {
            setIsChange(false)
        }
        if (isBrowser) {
            const pathPublic = window.location.href;
            if (typeof pathPublic === "string") {
                if (pathPublic.indexOf('/vn') > -1) {
                    i18n.changeLanguage("vn");
                    setIsChange(true);
                }
                if (pathPublic.indexOf('/en') > -1) {
                    i18n.changeLanguage("en");
                    setIsChange(false);
                }

            }
        }
    }, [language, isChange, i18n])
    return <Dropdown className="dropdown-language dropdown-language-v2">
        <Dropdown.Toggle className="drop-toggle dropdown-toggle" variant="#ffffff" id="dropdown-basic">
            <span>{isChange ? 'VI' : 'EN'}</span>
            <img src={iconLanguage} alt="" />
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-customize" id="dropdown-customize">
            <Dropdown.Item onClick={() => { changeFlag(valueFlag.vn); changeLng(valueFlag.vn); }}>Việt Nam</Dropdown.Item>
            <Dropdown.Item onClick={() => { changeFlag(valueFlag.en); changeLng(valueFlag.en); }}>English</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
}

export default props => (
    <Language>{lngProps => <LanguageSwitcher {...props} {...lngProps} />}</Language>
);
