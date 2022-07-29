/* eslint-disable react-hooks/exhaustive-deps */
import { MapContact } from '@components/common/Footer';
import iconEmailMobile from '@images/contact-page/svg/icon-email-blue.svg';
import iconEmail from '@images/contact-page/svg/icon-email.svg';
import iconMapMobile from '@images/contact-page/svg/icon-map-blue.svg';
import iconMap from '@images/contact-page/svg/icon-map.svg';
import iconPhoneMobile from '@images/contact-page/svg/icon-phone-blue.svg';
import iconPhone from '@images/contact-page/svg/icon-phone.svg';
import { useTranslation } from 'next-i18next';
import { useCallback, useMemo, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../ContactUs.module.scss';

function SectionQuickSupport() {
  const { t } = useTranslation('contact');
  const listContact = [
    {
      id: 0,
      title: t('contact.quickSupport.map.headquarter'),
      position: { lat: 21.0300541, lng: 105.7786784 },
    },
    {
      id: 1,
      title: t('contact.quickSupport.map.branch'),
      position: { lat: 10.85023, lng: 106.80562 },
    },
  ];

  const [position, setPosition] = useState(listContact[0].position);
  const [activeContact, setActiveContact] = useState(listContact[0]);
  const [map, setMap] = useState();
  const isBrowser = typeof window !== 'undefined';
  const MAP_ZOOM = 15;

  const onMapCreated = useCallback(
    (_map) => {
      setMap(_map);
      _map.setView(listContact[0].position, MAP_ZOOM);
    },
    [listContact],
  );

  const checkBrowser = useMemo(() => {
    if (isBrowser) return <MapContact position={position} whenCreated={onMapCreated} />;
    else return [];
  }, [isBrowser, position, onMapCreated]);

  const handleOnClick = useCallback(
    (contact) => {
      if (contact.position && map) {
        setPosition(contact.position);
        setActiveContact({ ...contact });
        map.setView(contact.position, map.getZoom());
      }
    },
    [map],
  );
  return (
    <section className={styles['section-quick-support']}>
      <Row className={styles['section-quick-support-row']}>
        <Col md={6} className={styles['col-left']}>
          <div className={styles['quick-support-content']}>
            <div className={styles['quick-support-content-row']}>
              <h3 className={`${styles['quick-support-content-title']} text-capitalize`}>
                {t('contact.quickSupport.title')}
              </h3>
            </div>
            <div className={`${styles['quick-support-content-row']} d-flex`}>
              <div className={styles['quick-support-icon']}>
                <img src={iconPhone.src} alt="icon-phone" className={styles['icon-desktop']} />
                <img
                  src={iconPhoneMobile.src}
                  alt="icon-phone-mobile"
                  className={`d-none ${styles['icon-mobile']}`}
                />
              </div>
              <div className={styles['quick-support-body']}>
                <h5>{t('contact.quickSupport.hotline')}</h5>
                <span>{t('contact.quickSupport.hotlineSubTitle')}</span>
              </div>
            </div>
            <div className={`${styles['quick-support-content-row']} d-flex`}>
              <div className={styles['quick-support-icon']}>
                <img src={iconEmail.src} alt="icon-email" className={styles['icon-desktop']} />
                <img
                  src={iconEmailMobile.src}
                  alt="icon-email-mobile"
                  className={`d-none ${styles['icon-mobile']}`}
                />
              </div>
              <div className={styles['quick-support-body']}>
                <h5>{t('contact.quickSupport.email')}</h5>
                <span>{t('contact.quickSupport.emailSubTitle')}</span>
              </div>
            </div>
            <div className={`${styles['quick-support-content-row']} d-flex`}>
              <div className={styles['quick-support-icon']}>
                <img src={iconMap.src} alt="icon-map" className={styles['icon-desktop']} />
                <img
                  src={iconMapMobile.src}
                  alt="icon-map-mobile"
                  className={`d-none ${styles['icon-mobile']}`}
                />
              </div>
              <div className={styles['quick-support-body']}>
                <h5>{t('contact.quickSupport.address')}</h5>
                <p>{t('contact.quickSupport.headquarter')}</p>
                <span>{t('contact.quickSupport.headquarterSubTitle')}</span>
                <p>{t('contact.quickSupport.branch')}</p>
                <span>{t('contact.quickSupport.branchSubTitle')}</span>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} className="px-0 col-right">
          <Row className={`${styles['menu-map']} mx-0`}>
            {listContact.map((contact) => (
              <Col
                className={`d-flex justify-content-center align-items-center cursor-pointer ${
                  activeContact.id === contact.id ? `${styles['map-active']}` : ''
                }`}
                key={contact.id}
                onClick={() => handleOnClick(contact)}
              >
                <h1
                  className={`text-center ${
                    activeContact.id === contact.id
                      ? `${styles['menu-map-title__active']}`
                      : `${styles['menu-map-title']}`
                  }`}
                >
                  {contact.title}
                </h1>
              </Col>
            ))}
          </Row>
          {checkBrowser}
        </Col>
      </Row>
    </section>
  );
}

export default SectionQuickSupport;
