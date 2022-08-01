import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import Link from 'next/link';
import imageStep from '@images/business-step1-v3/jpg/control-solution.jpg';

import item_3 from '@images/personal-step1-v3/jpg/item-1.jpg';
import item_2 from '@images/personal-step1-v3/jpg/item-2.jpg';
import item_v from '@images/personal-step1-v3/jpg/item-3.jpg';
import item_1 from '@images/personal-step1-v3/jpg/item-5.jpg';

import axios from 'axios';

import { useTranslation } from 'next-i18next';

import { BusinessDispatchContext } from '@context/businessContext';

import style from '@components/person/style.module.scss';
const imgList = [
  {
    id: 0,
    img: item_1,
  },
  {
    id: 1,
    img: item_2,
  },
  {
    id: 2,
    img: item_3,
  },
  {
    id: 3,
    img: item_v,
  },
];

const PersonalStep1 = () => {
  const dispatch = useContext(BusinessDispatchContext);

  const [activeCard, setActiveCard] = useState({});

  const [listOption, setListOption] = useState([]);
  const checkList = [{}, {}, {}, {}];
  const [skeleton, setSkeleton] = useState(true);

  const { t, i18n } = useTranslation('person');

  useLayoutEffect(() => {
    const getListHouse = async () => {
      try {
        const response = await axios.get(
          'https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/business/houses',
        );
        // item.listDevice = item.listDevice.sort((a, b) =>
        //     a.deviceValues.nameVi.localeCompare(b.deviceValues.nameVi)
        //   );
        const data = response.data?.Items.sort((a, b) => a.nameVi.localeCompare(b.nameVi));
        setListOption(data);
        setActiveCard(data[0]);
      } catch (err) {
        console.error(err);
      }
    };
    getListHouse();
    const time = setTimeout(() => {
      setSkeleton(false);
    }, 1000);
    return () => {
      clearTimeout(time);
    };
  }, []);

  const handleClickCardItem = (cardItem) => {
    setActiveCard({ ...cardItem });
  };
  return (
    <section className={style["personal-step1-container"]}>
      <div className={style["personal-step1-wrapper"]}>
        <div className={style["top-content"]}>
          <h1 className={style["main-title"]}>{t('personalPackage.personalStep1.mainTitle')}</h1>
          <h4 className={style["sub-title"]}>{t('personalPackage.personalStep1.mainDesc')}</h4>
        </div>
        <div
          className={`${style["bottom-content"]} ${
            listOption.length > 0 ? (!skeleton ? '' : style['non-display']) : style['non-display']
          }`}
        >
          {listOption.map((item, index) => {
            return (
              <div
                className={`${
                  item.id === activeCard.id
                    ? `${style["bottom-content-container"]} ${style["active"]}`
                    : style["bottom-content-container"]
                }  `}
                key={item.id}
                onClick={() => {
                  handleClickCardItem(item);
                }}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
              >
                <div className={style["image-box"]}>
                  <img src={imgList[index].img.src} alt="" className={style["solution-item-img"]}></img>
                </div>
                <div className={style["solution-item-desc"]}>
                  <span>{i18n.language.toUpperCase() === 'VN' ? item.nameVi : item.nameEn}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={`${style["bottom-content"]} ${
            listOption.length > 0 ? (skeleton ? '' : style['non-display']) : ''
          }`}
        >
          {checkList.map((item, index) => {
            const id = index + 1;
            return (
              // <div
              //   className= "skeleton-item"
              //   key={id}
              // >
              // </div>
              <div id={style["card"]} key={id}>
                <div className={style["card-image"]}>
                  <div className={style["block pulsate"]}></div>
                </div>
                <div className={style["card-content"]}>
                  <div className={`${style["block2"]} ${style["pulsate"]}`}></div>
                  <div className={`${style["block3"]} ${style["pulsate"]}`}></div>
                  <div className={`${style["circle"]} ${style["pulsate"]}`}></div>
                  <div></div>
                </div>
              </div>
            );
          })}
        </div>
        <Link href="/personal-step2">
          <button
            className={style["advise-now-btn"]}
            type="button"
            onClick={() => {
              dispatch({ type: 'GET_HOUSE_ID', payload: activeCard.id });
            }}
          >
            <span>{t('personalPackage.groupBtn.confirmBtn')}</span>
          </button>
        </Link>
      </div>
    </section>
  );
};
export default PersonalStep1;
