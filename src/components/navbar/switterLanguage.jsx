import React, { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import iconLanguage from "@images/new-home-page/header/icon-language.png";
import { useLocation } from "@reach/router";
import { navigate } from "gatsby";
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const location = useLocation();

  function changeLanguage() {
    if (i18n.language === "en") {
      i18n.changeLanguage("vn");
      navigate(location.pathname.replace("en", "vn"));
    } else {
      i18n.changeLanguage("en");
      navigate(location.pathname.replace("vn", "en"));
    }
  }

  useEffect(() => {
    const checkLng = () => {
      if (location.pathname.indexOf("/en/") > -1) {
        i18n.changeLanguage("en");
      } else {
        i18n.changeLanguage("vn");
      }
    };
    checkLng();
  }, [i18n, location.pathname]);

  return (
    <>
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
            {" "}
            {i18n.language}{" "}
          </span>{" "}
          <img src={iconLanguage} alt="" />
        </Dropdown.Toggle>{" "}
      </Dropdown>{" "}
    </>
  );
};

export default LanguageSwitcher;
