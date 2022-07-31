import iconPartnership from '@images/smart-building/icon-partner-smart-building.svg';
import logoDahua from '@images/smart-building/logo-dahua.svg';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';
import styles from '../SmartBuilding.module.scss';
import RowTechnology from './RowTechnology';

function SectionTechnologyDoorLocks() {
  const { t, ready } = useTranslation('smartBuilding');

  const technologies = t(
    'smartBuilding.sectionTechnologyDoorLocks.technologies',
    { returnObjects: true }
  );

  return (
    <section className={styles['bg-technology-smart-building']}>
      <Container
        className={`${styles['max-width-1180']} ${styles['padding-left-right']}`}
      >
        <Row className="gx-md-5 gy-4">
          <Col md={6} className={styles['position-relative']}>
            {ready && <RowTechnology technologies={technologies} />}
          </Col>
          <Col md={6} className={styles['position-relative']}>
            <div className={styles['div-wrapper-technology-building']}>
              <h3 className={styles['title-technology-smart-building']}>
                {t(
                  'smartBuilding.sectionTechnologyDoorLocks.collaborativeBrand.title'
                )}
              </h3>
              <Image
                src={logoDahua.src}
                alt="logo-dahua"
                className={`img-fluid ${styles['img-logo-technologo-building']}`}
              />
              <p className={styles['detail-partnership-building']}>
                {t(
                  'smartBuilding.sectionTechnologyDoorLocks.collaborativeBrand.subTitle'
                )}
              </p>
              <div className={styles['div-wrapper-icon-building']}>
                <Image
                  src={iconPartnership.src}
                  alt="img-partnership"
                  className="img-fluid"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default SectionTechnologyDoorLocks;
