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
    en: { locale: "en", detect: "en-US" },
    vn: { locale: "vn", detect: "vi" },
  };
  const urlDefault = "/";

  function replaceUrlByI18n(fromLng, toLng) {
    i18n.changeLanguage(toLng);
    const newUrl = pathname.replace(fromLng, toLng);
    return navigate(newUrl);
  }

  function changeLanguage() {
    if (
      i18n.language === typeLng.en.locale ||
      i18n.language === typeLng.en.detect
    ) {
      console.log("abc en");
      return replaceUrlByI18n(typeLng.en.locale, typeLng.vn.locale);
    }
    if (
      i18n.language === typeLng.vn.locale ||
      i18n.language === typeLng.vn.detect
    ) {
      console.log("abc vn");

      return replaceUrlByI18n(typeLng.vn.locale, typeLng.en.locale);
    }
  }

  function redirectUrl(lng) {
    i18n.changeLanguage(lng);
    return navigate(lng);
  }

  useEffect(() => {
    const changeDetectLanguage = () => {
      if (pathname === urlDefault) {
        if (
          i18n.language === typeLng.vn.detect ||
          i18n.language === typeLng.vn.locale
        ) {
          return redirectUrl(typeLng.vn.locale);
        } else {
          return redirectUrl(typeLng.en.locale);
        }
      }

      if (i18n.language === typeLng.en.detect) {
        return redirectUrl(typeLng.en.locale);
      }

      if (i18n.language === typeLng.vn.detect) {
        return redirectUrl(typeLng.vn.locale);
      }

      if (
        pathname.includes(typeLng.vn.locale) &&
        (i18n.language === typeLng.en.locale ||
          i18n.language === typeLng.en.detect)
      ) {
        i18n.changeLanguage(typeLng.vn.locale);
        return;
      }

      if (
        pathname.includes(typeLng.en.locale) &&
        (i18n.language === typeLng.vn.locale ||
          i18n.language === typeLng.vn.detect)
      ) {
        i18n.changeLanguage(typeLng.en.locale);
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
        <img src={iconLanguage} width={16} height={16} alt="icon localization"  style={{opacity:'1'}}/>
      </Dropdown.Toggle>
    </Dropdown>
  );
};

export default LanguageSwitcher;
