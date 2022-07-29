import React from "react";
import Link from "@components/gatsby-link";
import dropDown from "@images/smart-home-v3/svg/arrow-down.svg";
import ModalAdvise from "../modal/modal-advise/ModalAdvise";
import ModalAdviseBusiness from "../modal/modal-advise/ModalAdvise-business";
import backIcon from "@images/menu/back.svg";
import england from "@images/menu/png/flag-england.png";
import vietnam from "@images/menu/flag-vietnam.svg";
// import { navigate } from "gatsby";
// import { useLocation } from "@reach/router";
import "./style.scss";
// import { useTranslation } from "react-i18next";
const MenuTop = ({ logo, listRoute, back, business }) => {
  const [modalShow, setModalShow] = React.useState(false);
  // const location = useLocation();
  // const goBack = () => {
  //   if (location.key !== "initial") navigate(-1);
  //   else navigate("/");
  // };
  // const changLanguages = () => {
  //   i18n.changeLanguage(i18n.language.toUpperCase() === "EN" ? "vn" : "en");
  // };
  // const { i18n, t } = useTranslation();
  return (
    <nav className="section-menu-top">
      <div className="menu-top-container">
        {back && (
          <div className="icon-back" onClick={goBack}>
            <img src={backIcon} alt="" />
          </div>
        )}
        <Link to="/">
          <div className="logo-box">
            <img src={logo} alt="" className="logo" />
          </div>
        </Link>
        <div className="list-item-menu">
          {listRoute.map((item) => {
            return item.listRoute ? (
              <div className="item-menu select-menu-top" key={item.id}>
                <div className="main-item-select item-select">
                  <p className={`${item.nonActive ? "non-active" : ""}`}>
                    {item.nameRoute}
                  </p>
                  {!item.nonActive && <img src={dropDown} alt="" />}
                </div>
                <div className="drop-box">
                  {item.listRoute.map((item) => {
                    return (
                      <Link to={item.href} key={item.id}>
                        <div
                          className={`item-select ${
                            item.active ? "active" : ""
                          }`}
                        >
                          {item.nameRoute}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : (
              <Link to={item.href} key={item.id}>
                <p className={`item-menu ${item.active ? "active" : ""}`}>
                  {item.nameRoute}
                </p>
              </Link>
            );
          })}
        </div>
        <div className="support-box">
          <div className="btn-group">
            <button
              className="learn-more-btn"
              onClick={() => setModalShow(true)}
            >
              <span>{t("menu.advise")}</span>
            </button>
          </div>
          {/* <div className="change-language-box" onClick={changLanguages}>
            <p className="language">{i18n.language.toUpperCase()}</p>
            {i18n.language.toUpperCase() === "EN" ? (
              <img src={england} alt="" className="image" />
            ) : (
              <img src={vietnam} alt="" className="image" />
            )}
          </div> */}
        </div>
      </div>
      {!business && (
        <ModalAdvise show={modalShow} onHide={() => setModalShow(false)} />
      )}

      {business && (
        <ModalAdviseBusiness
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      )}
    </nav>
  );
};

export default MenuTop;
