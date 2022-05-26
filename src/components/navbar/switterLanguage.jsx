import React, { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import iconLanguage from "@images/new-home-page/header/icon-language.png";
import { useLocation } from "@reach/router";
import { navigate } from "gatsby";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const { pathname } = location;

  const typeLng = {
    en: "en",
    vn: "vn",
  };

  function replaceUrlByI18n(fromLng, toLng) {
    i18n.changeLanguage(toLng);
    const newUrl = pathname.replace(fromLng, toLng);
    return navigate(newUrl);
  }

  function changeLanguage() {
    if (i18n.language === typeLng.en) {
      return replaceUrlByI18n(typeLng.en, typeLng.vn);
    }
    if (i18n.language === typeLng.vn) {
      return replaceUrlByI18n(typeLng.vn, typeLng.en);
    }
  }

  // function redirectUrl(lng) {
  //   i18n.changeLanguage(lng);
  //   return navigate(lng);
  // }

  useEffect(() => {
    const changeDetectLanguage = () => {
      if (pathname.includes(typeLng.vn) && i18n.language === typeLng.en) {
        i18n.changeLanguage(typeLng.vn);
        return;
      }

      if (pathname.includes(typeLng.en) && i18n.language === typeLng.vn) {
        i18n.changeLanguage(typeLng.en);
        return;
      }
    };
    changeDetectLanguage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
        <span
          style={{
            textTransform: "uppercase",
          }}
        >
          {i18n.language}
        </span>
        <img
          src={iconLanguage}
          width={16}
          height={16}
          alt="icon localization"
          style={{ opacity: "1" }}
        />
      </Dropdown.Toggle>
    </Dropdown>
  );
};

export default LanguageSwitcher;
