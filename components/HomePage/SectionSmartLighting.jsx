import { ModalAdvise } from '@components/common/modal';
import imgSmartLightingLeft from '@images/home-page-v3/png/img-smart-lighting-left.png';
import imgSmartLightingRight from '@images/home-page-v3/png/img-smart-lighting-right.png';
import imgSmartBrightnessControl from '@images/home-page-v3/svg/icon-brightness-control.svg';
import imgSmartEnergy from '@images/home-page-v3/svg/icon-energy.svg';
import imgSmartRemoteControl from '@images/home-page-v3/svg/icon-remote-control.svg';
import imgUnderLine from '@images/home-page-v3/svg/title-line-under.svg';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import styles from './HomePage.module.scss';

function SectionSmartLighting() {
  const [modalShow, setModalShow] = React.useState(false);

  const { t } = useTranslation('homePage');

  const listItemCard = [
    {
      id: 0,
      linkImg: imgSmartRemoteControl,
      title: (
        <>
          {t('homePage.smartLighting.groupItems.title1.1')}
          <br />
          {t('homePage.smartLighting.groupItems.title1.2')}
        </>
      ),
    },
    {
      id: 1,
      linkImg: imgSmartBrightnessControl,
      title: (
        <>
          {t('homePage.smartLighting.groupItems.title2.1')}
          <br />
          {t('homePage.smartLighting.groupItems.title2.2')}
        </>
      ),
    },
    {
      id: 2,
      linkImg: imgSmartEnergy,
      title: (
        <>
          {t('homePage.smartLighting.groupItems.title3.1')}
          <br />
          {t('homePage.smartLighting.groupItems.title3.2')}
        </>
      ),
    },
  ];
  return (
    <section className={styles['bg-ground-smart-lighting']}>
      <div className={styles['container-1220']}>
        <div className={styles['row-line-center']}>
          <span className={styles['title-eng-line-center']}>SMART LIGHTING</span>
          <h1 className={styles['title-line-center']}>{t('homePage.smartLighting.mainTitle')}</h1>
          <div className={styles['img-line-center']}>
            <Image src={imgUnderLine.src} width={88} height={4} alt="" />
          </div>
        </div>
        <Row className={`${styles['smart-lighting-row']} gx-5`}>
          <Col lg={7} md={6} sm={12} className="smart-lighting-col-left">
            <div className={`${styles['smart-lighting-des-desktop']}`}>
              <p className={`${styles['smart-lighting-des']}`}>
                {t('homePage.smartLighting.desc1')}
              </p>
              <br />
              <p className={`${styles['smart-lighting-des']}`}>
                {t('homePage.smartLighting.desc2')}
              </p>
            </div>
            <div className={`${styles['smart-lighting-des-mobile']} d-none`}>
              <p className={`${styles['smart-lighting-des']}`}>
                {t('homePage.smartLighting.desc3')}
              </p>
            </div>
            <div className={styles['btn-group']}>
              <button className={styles['advise-now-btn']} onClick={() => setModalShow(true)}>
                <span>{t('homePage.btnGroup.adviseBtn')}</span>
              </button>
              <Link href="/smart-lighting">
                <button className={styles['learn-more-btn']}>
                  <span>{t('homePage.btnGroup.learnMoreBtn')}</span>
                </button>
              </Link>
            </div>
            <Image
              src={imgSmartLightingLeft.src}
              className={`${styles['smart-lighting-img-left']} w-100`}
              alt=""
            />
          </Col>
          <Col lg={5} md={6} sm={12} className="smart-lighting-col-right">
            <Row className={styles['smart-lighting-group']}>
              {listItemCard.map((itemCard) => (
                <Col className={styles['smart-lighting-card']} key={itemCard.id}>
                  <div className={styles['smart-lighting-top']}>
                    <Image
                      src={itemCard.linkImg.src}
                      className={styles['smart-lighting-img']}
                      alt=""
                    />
                  </div>
                  <div className={styles['smart-lighting-bottom']}>
                    <span className={styles['smart-lighting-content']}>{itemCard.title}</span>
                  </div>
                </Col>
              ))}
            </Row>
            <Image
              src={imgSmartLightingRight.src}
              className={`${styles['smart-lighting-img-right']} w-100`}
              alt=""
            />
            <Image
              src={imgSmartLightingLeft.src}
              className={`${styles['smart-lighting-img-left-mobile']} d-none w-100`}
              alt=""
            />
          </Col>
        </Row>
      </div>
      <ModalAdvise show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
}

export default SectionSmartLighting;
