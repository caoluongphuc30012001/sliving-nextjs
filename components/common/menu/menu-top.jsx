import React from 'react';
import Link from 'next/link';
import dropDown from '@images/smart-home-v3/svg/arrow-down.svg';
import backIcon from '@images/menu/back.svg';
import england from '@images/menu/png/flag-england.png';
import vietnam from '@images/menu/flag-vietnam.svg';
import { useRouter } from 'next/router';
// import { useLocation } from "@reach/router";
import style from './menu.module.scss';
import { useTranslation } from 'next-i18next';
import { ModalAdvise, ModalAdviseBusiness } from '../modal';
const MenuTop = ({ logo, listRoute, back, business }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const location = useRouter();
  const translate = useTranslation('menu');
  const { t, i18n } = translate;
  const goBack = () => {
    // if (location.key !== "initial") navigate(-1);
    // else navigate("/");
    location.back();
  };
  const changLanguages = () => {
    location.replace(location.asPath, location.asPath, {
      locale: i18n.language === 'vi' ? 'en' : 'vi',
      scroll: false,
    });
  };
  return (
    <nav className={style['section-menu-top']}>
      <div className={style['menu-top-container']}>
        {back && (
          <div className={style['icon-back']} onClick={goBack}>
            <img src={backIcon.src} alt="" />
          </div>
        )}
        <Link href="/">
          <div className={style['logo-box']}>
            <img src={logo.src} alt="" className={style['logo']} />
          </div>
        </Link>
        <div className={style['list-item-menu']}>
          {listRoute.map((item) => {
            return item.listRoute ? (
              <div className={`${style['item-menu']} ${style['select-menu-top']}`} key={item.id}>
                <div className={`${style['main-item-select']}  ${style['item-select']}`}>
                  <p className={`${item.nonActive ? style['non-active'] : ''}`}>{item.nameRoute}</p>
                  {!item.nonActive && <img src={dropDown.src} alt="" />}
                </div>
                <div className={style['drop-box']}>
                  {item.listRoute.map((item) => {
                    return (
                      <Link href={item.href} key={item.id}>
                        <div
                          className={`${style['item-select']} ${
                            item.active ? style['active'] : ''
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
              <Link href={item.href} key={item.id}>
                <p className={`${style['item-menu']} ${item.active ? style['active'] : ''}`}>
                  {item.nameRoute}
                </p>
              </Link>
            );
          })}
        </div>
        <div className={style['support-box']}>
          <div className={style['btn-group']}>
            <button className={style['learn-more-btn']} onClick={() => setModalShow(true)}>
              <span>{t('menu.advise')}</span>
            </button>
          </div>
          <div className={style['change-language-box']} onClick={changLanguages}>
            <p className={style['language']}>{i18n.language.toUpperCase()}</p>
            {i18n.language.toUpperCase() === 'EN' ? (
              <img src={england.src} alt="" className={style['image']} />
            ) : (
              <img src={vietnam.src} alt="" className={style['image']} />
            )}
          </div>
        </div>
      </div>
      {!business && <ModalAdvise show={modalShow} onHide={() => setModalShow(false)} />}

      {business && <ModalAdviseBusiness show={modalShow} onHide={() => setModalShow(false)} />}
    </nav>
  );
};

export default MenuTop;
