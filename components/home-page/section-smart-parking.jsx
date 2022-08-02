import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import imgUnderLine from '@images/home-page-v3/svg/title-line-under.svg';
import imgItemCart1 from '@images/home-page-v3/svg/icon-smart-parking-item1.svg';
import imgItemCart2 from '@images/home-page-v3/svg/icon-smart-parking-item2.svg';
import imgItemCart3 from '@images/home-page-v3/svg/icon-smart-parking-item3.svg';
import imgItemCart4 from '@images/home-page-v3/svg/icon-smart-parking-item4.svg';
import imgSmartParking from '@images/home-page-v3/png/img-smart-parking.png';
import imgSmartParkingMobile from '@images/home-page-v3/png/img-smart-parking-mobile.png';
import ModalAdvise from '@components/common/modal/ModalAdvise/ModalAdvise';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import styles from './style.module.scss';

function SectionSmartParking() {
  const [modalShow, setModalShow] = React.useState(false);

  const { t } = useTranslation('homePage');

  const listItemCard = [
    {
      id: 0,
      linkImg: imgItemCart1,
      title: t('homePage.smartParking.groupItems.title1'),
    },
    {
      id: 1,
      linkImg: imgItemCart2,
      title: t('homePage.smartParking.groupItems.title2'),
    },
    {
      id: 2,
      linkImg: imgItemCart3,
      title: t('homePage.smartParking.groupItems.title3'),
    },
    {
      id: 3,
      linkImg: imgItemCart4,
      title: t('homePage.smartParking.groupItems.title4'),
    },
  ];
  return (
    <section className={styles['bg-ground-smart-parking']}>
      <div className={styles['container-1220']}>
        <Row className={`${styles['row-line-center']} ${styles['m-left-right-12']}`}>
          <span className={styles['title-eng-line-center']}>SMART PARKING</span>
          <h1 className={styles['title-line-center']}>{t('homePage.smartParking.mainTitle')}</h1>
          <div className={styles['img-line-center']}>
            <Image src={imgUnderLine.src} width={88} height={4} alt="" />
          </div>
          <Image src={imgSmartParking.src} className={styles['smart-parking-group-img']} alt="" />
          <Image
            src={imgSmartParkingMobile.src}
            className={styles['smart-parking-group-img-mobile']}
            alt=""
          />
          <h2 className={styles['smart-parking-title']}>{t('homePage.smartParking.subTitle')}</h2>
          <p className={styles['smart-parking-des']}>{t('homePage.smartParking.mainDesc')}</p>
        </Row>

        <Row lg={4} md={4} xs={1} className={styles['smart-parking-cards']}>
          {listItemCard.map((itemCard, index) => (
            <Col className="gx-5 smart-parking-card-col" key={index.toString()}>
              <div className={styles['smart-parking-card']}>
                <div className={styles['smart-parking-card-top']}>
                  <Image
                    src={itemCard.linkImg.src}
                    className={styles['smart-parking-card-img']}
                    alt=""
                  />
                </div>
                <span className={styles['smart-parking-card-title']}>{itemCard.title}</span>
              </div>
            </Col>
          ))}
        </Row>
        <div className={styles['btn-group']}>
          <button className={styles['advise-now-btn']} onClick={() => setModalShow(true)}>
            <span>{t('homePage.btnGroup.adviseBtn')}</span>
          </button>
          <Link href="/smart-parking">
            <button className={styles['learn-more-btn']}>
              <span>{t('homePage.btnGroup.learnMoreBtn')}</span>
            </button>
          </Link>
        </div>
      </div>
      <ModalAdvise show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
}

export default SectionSmartParking;
