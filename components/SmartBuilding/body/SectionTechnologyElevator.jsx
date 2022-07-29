import iconPartnership from '@images/smart-building/icon-partner-smart-building.svg';
import logoMitsubishi from '@images/smart-building/logo-mitsubishi.svg';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';
import styles from '../SmartBuilding.module.scss';
import RowTechnology from './RowTechnology';

function SectionTechnologyElevator() {
  const { t, ready } = useTranslation('smartBuilding');

  const technologies = t(
    'smartBuilding.sectionTechnologyElevator.technologies',
    { returnObjects: true }
  );
  return (
    <section className={styles['bg-technology-smart-building']}>
      <Container className={`px-0 ${styles['max-width-1180']}`}>
        <Row className={`gx-md-5 gy-4 ${styles['padding-left-right']}`}>
          <Col md={6} className={styles['position-relative']}>
            {ready && <RowTechnology technologies={technologies} />}
          </Col>
          <Col md={6} className={styles['position-relative']}>
            <div className={styles['div-wrapper-technology-building']}>
              <h3 className={styles['title-technology-smart-building']}>
                {t(
                  'smartBuilding.sectionTechnologyElevator.collaborativeBrand.title'
                )}
              </h3>
              <Image
                src={logoMitsubishi.src}
                alt="logo-mitsubishi"
                className={`img-fluid ${styles['img-logo-technologo-building']}`}
              />
              <p className={styles['detail-partnership-building']}>
                {t(
                  'smartBuilding.sectionTechnologyElevator.collaborativeBrand.subTitle'
                )}
              </p>
              <div className={styles['div-wrapper-icon-building']}>
                <Image
                  src={iconPartnership.src}
                  alt="icon-partnerships"
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
export default SectionTechnologyElevator;
