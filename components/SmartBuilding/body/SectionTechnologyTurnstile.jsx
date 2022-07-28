import iconPartnership from '@images/smart-building/icon-partner-smart-building.svg';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';
import styles from '../SmartBuilding.module.scss';
import RowTechnology from './RowTechnology';

function SectionTechnologyTurnstile() {
  const { t, ready } = useTranslation('smartBuilding');

  const technologies = t(
    'smartBuilding.sectionTechnologyTurnstile.technologies',
    { returnObjects: true }
  );

  return (
    <section className={styles['bg-technology-smart-building']}>
      <Container className={`${styles['max-width-1180']} px-0`}>
        <Row className={`${styles['padding-left-right']} gx-md-5 gy-4`}>
          <Col md={6} className={styles['position-relative']}>
            {ready && <RowTechnology technologies={technologies} />}
          </Col>
          <Col md={6} className={styles['position-relative']}>
            <div className={styles['div-wrapper-technology-building']}>
              <h3 className={styles['title-technology-smart-building']}>
                {t(
                  'smartBuilding.sectionTechnologyTurnstile.collaborativeBrand.title'
                )}
              </h3>
              <p className={styles['detail-partnership-building']}>
                {t(
                  'smartBuilding.sectionTechnologyTurnstile.collaborativeBrand.subTitle'
                )}
              </p>
              <div className={styles['div-wrapper-icon-building']}>
                <Image
                  src={iconPartnership.src}
                  alt="icon-partnership"
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
export default SectionTechnologyTurnstile;
