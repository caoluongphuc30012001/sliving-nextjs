import React from "react";
import { Link } from "gatsby";
import search from "../../images/smart-home-v3/svg/search.svg";
import dropDown from "../../images/smart-home-v3/svg/arrow-down.svg";
import ModalAdvise from "../modal/modal-advise/ModalAdvise";

import "./style.scss";
const MenuTop = ({ logo, listRoute }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <nav className="section-menu-top">
      <div className="menu-top-container">
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
                        <div className="item-select">{item.nameRoute}</div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : (
              <Link to={item.href} key={item.id}>
                <div className={`item-menu ${item.active ? "active" : ""}`}>
                  {item.nameRoute}
                </div>
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
              <span>TƯ VẤN NGAY</span>
            </button>
          </div>
        </div>
      </div>
      <ModalAdvise show={modalShow} onHide={() => setModalShow(false)} />
    </nav>
  );
};

export default MenuTop;
