import React from "react";
import { Dropdown } from "react-bootstrap";
import { Language } from '@wapps/gatsby-plugin-i18next';
import { useTranslation } from 'react-i18next';
import iconLanguage from "@images/new-home-page/header/icon-language.png";
import { useLocation } from "@reach/router";
const LanguageSwitcher = ({ changeLng }) => {
    const location = useLocation();
    const { i18n } = useTranslation();
    function changeLanguage() {
        if (i18n.language === "en") {
            changeLng("vn");
            i18n.changeLanguage("vn");
        } else {
            changeLng("en");
            i18n.changeLanguage("en");
        }
    };
    // useEffect(() => {
    //     if (location.pathname.indexOf('/vn/') > -1) {
    //         i18n.changeLanguage("vn");
    //         changeLng("vn");
    //     }
    //     if (location.pathname.indexOf('/en/') > -1) {
    //         i18n.changeLanguage("en");
    //         changeLng("en");
    //     }
    // }, [])

    return <Dropdown className="dropdown-language dropdown-language-v2">
        <Dropdown.Toggle className="drop-toggle dropdown-toggle" variant="#ffffff" id="dropdown-basic" onClick={() => changeLanguage()} onKeyPress={() => changeLanguage()} tabIndex={0} role={"button"}>
            <span style={{ textTransform: "uppercase" }}>{i18n.language === "vi" ? "VN" : "Eng"}</span>
            <img src={iconLanguage} alt="" />
        </Dropdown.Toggle>
    </Dropdown>
}

export default function LanguageSwitchers(props) {
    return <Language>{lngProps => <LanguageSwitcher {...props} {...lngProps} />}</Language>
};
