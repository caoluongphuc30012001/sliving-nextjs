import iconBgEmail from '@images/icon/icon-bg-mail.svg';
import iconBgPhone from '@images/icon/icon-bg-phone.svg';
import iconBgPin from '@images/icon/icon-bg-pin.svg';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Footer.module.scss';

const SectionMap = dynamic(() => import('../Map/map'));

const isBrowser = typeof window !== 'undefined';

export default function AddressAndMap() {
  const { i18n, ready, t } = useTranslation('footer');
  const [listContact, setListContact] = useState([
    {
      key: {
        id: 1,
        title: `${t('contact.quickSupport.headquarter')}`,
        description: `${t('contact.quickSupport.headquarterSubTitle')}`,
      },
      urlIcon: iconBgPin,
      position: { lat: 21.0300541, lng: 105.7786784 },
    },
    {
      key: {
        id: 2,
        title: `${t('contact.quickSupport.branch')}`,
        description: `${t('contact.quickSupport.branchSubTitle')}`,
      },
      urlIcon: iconBgPin,
      position: { lat: 10.85023, lng: 106.80562 },
    },
    {
      key: {
        id: 3,
        title: '',
        description: `${t('contact.quickSupport.emailSubTitle')}`,
      },
      urlIcon: iconBgEmail,
    },
    {
      key: {
        id: 4,
        title: '',
        description: `${t('contact.quickSupport.hotlineSubTitle')}`,
      },
      urlIcon: iconBgPhone,
    },
  ]);
  useEffect(() => {
    setListContact([]);
    setTimeout(() => {
      setListContact([
        {
          key: {
            id: 1,
            title: `${t('contact.quickSupport.headquarter')}`,
            description: `${t('contact.quickSupport.headquarterSubTitle')}`,
          },
          urlIcon: iconBgPin,
          position: { lat: 21.0300541, lng: 105.7786784 },
        },
        {
          key: {
            id: 2,
            title: `${t('contact.quickSupport.branch')}`,
            description: `${t('contact.quickSupport.branchSubTitle')}`,
          },
          urlIcon: iconBgPin,
          position: { lat: 10.85023, lng: 106.80562 },
        },
        {
          key: {
            id: 3,
            title: '',
            description: `${t('contact.quickSupport.emailSubTitle')}`,
          },
          urlIcon: iconBgEmail,
        },
        {
          key: {
            id: 4,
            title: '',
            description: `${t('contact.quickSupport.hotlineSubTitle')}`,
          },
          urlIcon: iconBgPhone,
        },
      ]);
    }, 0);
  }, [ready, i18n.language, t]);
  const [position, setPosition] = useState(listContact[0]?.position);
  const [map, setMap] = useState();

  const MAP_ZOOM = 15;

  const onSelectContact = useCallback(
    (contact) => {
      if (contact.position && map) {
        setPosition(contact.position);
        map.setView(contact.position, map.getZoom());
      }
    },
    [map],
  );

  const onMapCreated = useCallback(
    (_map) => {
      setMap(_map);
      _map.setView(listContact[0].position, MAP_ZOOM);
    },
    [listContact],
  );
  const checkBrowser = useMemo(() => {
    if (isBrowser) return <SectionMap position={position} whenCreated={onMapCreated} />;
    else return [];
  }, [onMapCreated, position]);

  return (
    <Container className={`${styles['map-detail']} ${styles['container-child']}`}>
      <Row className="g-lg-5 g-sm-3">
        <Col sm={12} lg={6}>
          {checkBrowser}
        </Col>
        <Col sm={12} lg={6}>
          <h3
            className={`fs-4 fw-bold text-gradient-origan ${styles['map-detail-address-footer']}`}
          >
            {t('footer:footer.connect')}
          </h3>
          <div className={styles['group-contact']}>
            {listContact.length > 0 &&
              listContact.map((contact) => {
                return (
                  <div
                    key={contact.key.id}
                    className={`${styles['group-contact-wrap']} d-flex align-items-center mb-3`}
                    role="button"
                    onClick={() => onSelectContact(contact)}
                    aria-hidden="true"
                  >
                    <img src={contact.urlIcon.src} alt="" width={48} className="align-self-start" />
                    <div className={styles['contact-wrap-item']}>
                      <h5 className={`fw-bold fs-18 ${styles['title-contact']}`}>
                        {contact.key.title}
                      </h5>
                      <p className={`${styles['title-contact']} fs-6`}>{contact.key.description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
