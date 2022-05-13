import React from "react";
import search from "../../images/smart-home-v3/svg/search.svg";
import dropDown from "../../images/smart-home-v3/svg/arrow-down.svg";
import './style.scss'
const MenuTop = ({ logo, listRoute }) => {
  return (
    <nav className="section-menu-top">
      <div className="menu-top-container">
        <div className="logo-box">
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="list-item-menu">
          {listRoute.map((item) => {
            return item.listRoute ? (
              <div
                className="item-menu select-menu-top"
                key={item.id}
              >
                <div className="main-item-select item-select">
                  <p>{item.nameRoute}</p>
                  <img src={dropDown} alt=""/>
                </div>
                <div className="drop-box">
                  {item.listRoute.map((item) => {
                    return (
                      <div key={item.id} className="item-select">
                        {item.nameRoute}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className={`item-menu ${item.active ? "active" : ""}`} key={item.id}>
                {item.nameRoute}
              </div>
            );
          })}
        </div>
        <div className="support-box">
          <button className="btn-advise">
            <div className="content">TƯ VẤN NGAY</div>
          </button>
          <img src={search} alt="" className="search" />
        </div>
      </div>
    </nav>
  );
};

export default MenuTop;
