import React, { useMemo } from "react";
import { Dropdown } from "react-bootstrap";
import { Language } from "@wapps/gatsby-plugin-i18next";
import { useTranslation } from "react-i18next";
import iconLanguage from "@images/new-home-page/header/icon-language.png";
const LanguageSwitcher = ({ changeLng }) => {
  const { i18n } = useTranslation();

  function changeLanguage() {
    if (i18n.language === "en") {
      changeLng("vn");
      i18n.changeLanguage("vn");
    } else {
      changeLng("en");
      i18n.changeLanguage("en");
    }
  }
  const useLng = useMemo(() => {
    if (i18n.language === "vi") {
      i18n.changeLanguage("vn");
      changeLng("vn");
    }
  }, [i18n, i18n.language, changeLng]);

  return (
    <>
      {useLng}
      <Dropdown className="dropdown-language dropdown-language-v2">
        <Dropdown.Toggle
          className="drop-toggle dropdown-toggle"
          variant="#ffffff"
          id="dropdown-basic"
          onClick={() => changeLanguage()}
          onKeyPress={() => changeLanguage()}
          tabIndex={0}
          role={"button"}
        >
          <span style={{ textTransform: "uppercase" }}>
            {i18n.language}
          </span>
          <img src={iconLanguage} alt="" />
        </Dropdown.Toggle>
      </Dropdown>
    </>
  );
};

export default function LanguageSwitchers(props) {
  return (
    <Language>
      {(lngProps) => <LanguageSwitcher {...props} {...lngProps} />}
    </Language>
  );
}
