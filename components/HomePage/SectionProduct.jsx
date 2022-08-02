import { ModalAdvise } from '@components/common/modal';
import imgApp from '@images/home-page-v3/img-app.png';
import imgCurtain from '@images/home-page-v3/img-curtain.png';
import imgSwitch from '@images/home-page-v3/img-switch.png';
import imgTouch from '@images/home-page-v3/img-touch.png';
import imgAppStore from '@images/home-page-v3/png/img-button-app-store.png';
import imgGooglePlay from '@images/home-page-v3/png/img-button-google-play.png';
import imgUnderLine from '@images/home-page-v3/svg/title-line-under.svg';
import iconCheckOutline from '@images/icon/icon-check-circle-outline.svg';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import styles from './HomePage.module.scss';

const SectionProduct = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const { t } = useTranslation('homePage');

  const arrSmartTouch = [
    {
      id: 0,
      title: t('homePage.products.firstProduct.title'),
      subTitle: 'Smart Mechanical Switch',
      image: imgSwitch,
      downloadObjects: [],

      listItem: [
        {
          id: 0,
          title: t('homePage.products.firstProduct.groupDescription.title1'),
          subTitle: t('homePage.products.firstProduct.groupDescription.desc1'),
          icon: iconCheckOutline,
        },
        {
          id: 1,
          title: t('homePage.products.firstProduct.groupDescription.title2'),
          subTitle: t('homePage.products.firstProduct.groupDescription.desc2'),
          icon: iconCheckOutline,
        },
        {
          id: 2,
          title: t('homePage.products.firstProduct.groupDescription.title3'),
          subTitle: t('homePage.products.firstProduct.groupDescription.desc3'),
          icon: iconCheckOutline,
        },
      ],
    },
    {
      id: 1,
      title: t('homePage.products.secondProduct.title'),
      subTitle: 'Smart Touch Switch',
      image: imgTouch,
      downloadObjects: [],

      listItem: [
        {
          id: 0,
          title: t('homePage.products.secondProduct.groupDescription.title1'),
          subTitle: t('homePage.products.secondProduct.groupDescription.desc1'),
          icon: iconCheckOutline,
        },
        {
          id: 1,
          title: t('homePage.products.secondProduct.groupDescription.title2'),
          subTitle: t('homePage.products.secondProduct.groupDescription.desc2'),
          icon: iconCheckOutline,
        },
        {
          id: 2,
          title: t('homePage.products.secondProduct.groupDescription.title3'),
          subTitle: t('homePage.products.secondProduct.groupDescription.desc3'),
          icon: iconCheckOutline,
        },
      ],
    },
    {
      id: 2,
      title: t('homePage.products.thirdProduct.title'),
      subTitle: 'Sliving App',
      image: imgApp,
      downloadObjects: [
        {
          id: 0,
          img: imgAppStore,
          linkDownload: 'https://1p.io/AppSlivingApple',
        },
        {
          id: 1,
          img: imgGooglePlay,
          linkDownload: 'https://1p.io/SlivingAppChplay',
        },
      ],
      listItem: [
        {
          id: 0,
          title: t('homePage.products.thirdProduct.groupDescription.title1'),
          subTitle: t('homePage.products.thirdProduct.groupDescription.desc1'),
          icon: iconCheckOutline,
        },
        {
          id: 1,
          title: t('homePage.products.thirdProduct.groupDescription.title2'),
          subTitle: t('homePage.products.thirdProduct.groupDescription.desc2'),
          icon: iconCheckOutline,
        },
        {
          id: 2,
          title: t('homePage.products.thirdProduct.groupDescription.title3'),
          subTitle: t('homePage.products.thirdProduct.groupDescription.desc3'),
          icon: iconCheckOutline,
        },
      ],
    },
    {
      id: 3,
      title: t('homePage.products.fourthProduct.title'),
      subTitle: 'Smart Curtain',
      image: imgCurtain,
      downloadObjects: [],

      listItem: [
        {
          id: 0,
          title: t('homePage.products.fourthProduct.groupDescription.title1'),
          subTitle: t('homePage.products.fourthProduct.groupDescription.desc1'),
          icon: iconCheckOutline,
        },
        {
          id: 1,
          title: t('homePage.products.fourthProduct.groupDescription.title2'),
          subTitle: t('homePage.products.fourthProduct.groupDescription.desc2'),
          icon: iconCheckOutline,
        },
        {
          id: 2,
          title: t('homePage.products.fourthProduct.groupDescription.title3'),
          subTitle: t('homePage.products.fourthProduct.groupDescription.desc3'),
          icon: iconCheckOutline,
        },
      ],
    },
  ];

  return (
    <section className={styles['section-product-home-page-v3']}>
      <div className={styles['container-1220']}>
        <Row className={styles['row-line-center']}>
          <span className={styles['title-eng-line-center']}>SMART HOME PRODUCTS</span>
          <h2 className={styles['title-line-center']}>{t('homePage.products.mainTitle')}</h2>
          <div className={styles['img-line-center']}>
            <Image src={imgUnderLine.src} width={88} height={4} alt="" />
          </div>
        </Row>
        {arrSmartTouch.map((smart) => {
          return (
            <Row
              key={smart.id}
              className={`${
                smart.id % 2 === 0
                  ? `${styles['card-product']}`
                  : `${styles['card-product']} flex-row-reverse`
              } `}
            >
              <Col lg={7} md={6}>
                <div className={styles['p-relative']}>
                  <img
                    src={smart.image.src}
                    alt=""
                    className={styles['card-product-img']}
                    style={{
                      float: `${smart.id % 2 === 0 ? '' : 'right'}`,
                    }}
                  />
                  {smart?.downloadObjects?.length > 0 && (
                    <div
                      className={`${styles['p-absolute']} d-flex ${styles['download-app-list']} ${styles['download-app-list-desktop']}`}
                    >
                      {smart?.downloadObjects.map((object) => (
                        <div className="download-app-item" key={object.id}>
                          <a href={object.linkDownload} target="_blank" rel="noreferrer">
                            <img
                              src={object.img.src}
                              alt=""
                              className={`${styles['download-app-img']} download-app-img`}
                            ></img>
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Col>
              <Col lg={5} md={6} className="">
                <h3 className={styles['card-product-title']}>{smart.title}</h3>
                <h4 className={styles['card-product-subtitle']}>{smart.subTitle}</h4>
                <div
                  className={`${styles['card-product-img-mobile']} ${styles['p-relative']} d-none`}
                >
                  {smart?.downloadObjects?.length > 0 && (
                    <div
                      className={`${styles['p-absolute']} ${styles['download-app-list']} d-flex`}
                    >
                      {smart?.downloadObjects.map((object) => (
                        <div className="download-app-item" key={object.id}>
                          <a href={object.linkDownload} target="_blank" rel="noreferrer">
                            <img
                              src={object.img.src}
                              alt=""
                              className={`${styles['download-app-img']} download-app-img`}
                            ></img>
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                  <img src={smart.image.src} alt="" className="float-none" />
                </div>
                <ul className={styles['card-product-content']}>
                  {smart.listItem.map((item) => (
                    <li key={item.id} className={styles['card-product-item']}>
                      <div className="d-flex align-items-center">
                        <img src={item.icon.src} alt="" className="mr-2 m" />
                        <h4 className={styles['card-product-item-title']}>{item.title}</h4>
                      </div>
                      <div>
                        <p className={styles['card-product-item-des']}>{item.subTitle}</p>
                        <ul>
                          {item?.listChild &&
                            item?.listChild.map((child) => <li key={child}>{child}</li>)}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className={styles['btn-group']}>
                  <button className={styles['advise-now-btn']} onClick={() => setModalShow(true)}>
                    <span>{t('homePage.btnGroup.adviseBtn')}</span>
                  </button>
                  <Link href="/smart-home">
                    <button className={styles['learn-more-btn']}>
                      <span>{t('homePage.btnGroup.learnMoreBtn')}</span>
                    </button>
                  </Link>
                </div>
              </Col>
            </Row>
          );
        })}
      </div>
      <ModalAdvise show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
};

export default SectionProduct;
