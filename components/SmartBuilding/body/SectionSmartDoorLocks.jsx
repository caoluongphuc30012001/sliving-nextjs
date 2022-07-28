import imgLeft from '@images/smart-building/bg-smart-building-5.png';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';
import styles from '../SmartBuilding.module.scss';
import RowUtilities from './RowUtilities';

function SectionSmartDoorLocks() {
  const { t } = useTranslation('smartBuilding');

  return (
    <section className={styles['bg-smart-door-locks']} id="smart-door-locks">
      <Container
        className={`${styles['max-width-1180']} ${styles['padding-left-right-smart-door']}`}
      >
        <h3
          className={styles['sub-title-smart-building']}
          style={{ padding: '0 12px' }}
        >
          {t('smartBuilding.sectionSmartDoorLocks.subTitle')}
        </h3>
        <h2
          className={styles['title-smart-building']}
          style={{ padding: '0 12px' }}
        >
          {t('smartBuilding.sectionSmartDoorLocks.title')}
        </h2>
        <div>
          <div className={styles['div-under-smart-building']}></div>
        </div>
        <Row className="gx-md-12 gx-lg-4 gy-4 mt-3">
          <Col md={12} lg={6} className="px-0">
            <div className={styles['div-wrapper-img-smart-building']}>
              <Image
                src={imgLeft.src}
                alt="img-left"
                className={`img-fluid ${styles['img-left-smart-door-locks']}`}
              />
            </div>
            <Image
              src={imgLeft.src}
              alt="img-left"
              className={`img-fluid ${styles['img-left-smart-door-locks']}`}
              style={{ opacity: '0' }}
            />
          </Col>
          <Col md={12} lg={6} className={styles['col-main-smart-door']}>
            <RowUtilities
              utilities={t('smartBuilding.sectionSmartDoorLocks.utilities', {
                returnObjects: true,
              })}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default SectionSmartDoorLocks;
