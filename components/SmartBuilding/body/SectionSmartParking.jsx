import icon4 from '@images/smart-building/icon-face-id-time.svg';
import icon1 from '@images/smart-building/icon-smart-door-lock.svg';
import icon2 from '@images/smart-building/icon-smart-elevator.svg';
import icon3 from '@images/smart-building/icon-smart-turmstile.svg';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import styles from '../SmartBuilding.module.scss';

function SectionSmartParking() {
  const { t } = useTranslation('smartBuilding');

  return (
    <section className={styles['bg-smart-parking-building']}>
      <Container
        className={`${styles['max-width-1180']} ${styles['padding-left-right']}`}
      >
        <h3 className={styles['sub-title-smart-building']}>
          {t('smartBuilding.sectionSystem.subTitle')}
        </h3>
        <h2 className={styles['title-smart-building']}>
          {t('smartBuilding.sectionSystem.title')}
        </h2>
        <div>
          <div className={styles['div-under-smart-building']}></div>
        </div>
        <Row className="gx-md-5 gy-md-5 gy-4 px-0 mt-3">
          <Col md={6}>
            <a href="#smart-door-locks">
              <div className={styles['div-wrapper-smart-parking']}>
                <Row className={`gy-4 ${styles['row-smart-parking-building']}`}>
                  <Col md={4} lg={3} className="d-flex justify-content-center">
                    <Image src={icon1.src} alt="icon-1" className="img-fluid" />
                  </Col>
                  <Col md={8} lg={9} className={styles['div-wrapper-door']}>
                    <h3
                      className={`${styles['title-smart-parking-building']} ${styles['desktop']}`}
                    >
                      {t('smartBuilding.sectionSystem.smartDoorLock.title1')}
                      <br />
                      {t('smartBuilding.sectionSystem.smartDoorLock.title2')}
                    </h3>
                    <h3
                      className={`${styles['title-smart-parking-building']} ${styles['mobile']}`}
                    >
                      {t('smartBuilding.sectionSystem.smartDoorLock.title3')}
                    </h3>
                    <p className={styles['sub-title-smart-parking-building']}>
                      {t('smartBuilding.sectionSystem.smartDoorLock.subTitle')}
                    </p>
                  </Col>
                </Row>
              </div>
            </a>
          </Col>
          <Col md={6}>
            <a href="#smart-elevator">
              <div className={styles['div-wrapper-smart-parking']}>
                <Row className={`gy-4 ${styles['row-smart-parking-building']}`}>
                  <Col md={4} lg={3} className="d-flex justify-content-center">
                    <Image src={icon2.src} alt="icon-2" className="img-fluid" />
                  </Col>
                  <Col md={8} lg={9}>
                    <h3 className={styles['title-smart-parking-building']}>
                      {t('smartBuilding.sectionSystem.smartElevator.title')}
                    </h3>
                    <p className={styles['sub-title-smart-parking-building']}>
                      {t('smartBuilding.sectionSystem.smartElevator.subTitle')}
                    </p>
                  </Col>
                </Row>
              </div>
            </a>
          </Col>
          <Col md={6}>
            <a href="#smart-turnstile">
              <div className={styles['div-wrapper-smart-parking']}>
                <Row className={`gy-4 ${styles['row-smart-parking-building']}`}>
                  <Col md={4} lg={3} className="d-flex justify-content-center">
                    <Image src={icon3.src} alt="icon-3" className="img-fluid" />
                  </Col>
                  <Col md={8} lg={9}>
                    <h3 className={styles['title-smart-parking-building']}>
                      {t('smartBuilding.sectionSystem.smartTurnstile.title')}
                    </h3>
                    <p className={styles['sub-title-smart-parking-building']}>
                      {t('smartBuilding.sectionSystem.smartTurnstile.subTitle')}
                    </p>
                  </Col>
                </Row>
              </div>
            </a>
          </Col>
          <Col md={6}>
            <a href="#face-id-attendance">
              <div className={styles['div-wrapper-smart-parking']}>
                <Row className={`gy-4 ${styles['row-smart-parking-building']}`}>
                  <Col md={4} lg={3} className="d-flex justify-content-center">
                    <Image src={icon4.src} alt="icon-4" className="img-fluid" />
                  </Col>
                  <Col md={8} lg={9}>
                    <h3 className={styles['title-smart-parking-building']}>
                      {t('smartBuilding.sectionSystem.smartFaceId.title')}
                    </h3>
                    <p className={styles['sub-title-smart-parking-building']}>
                      {t('smartBuilding.sectionSystem.smartFaceId.subTitle')}
                    </p>
                  </Col>
                </Row>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default SectionSmartParking;
