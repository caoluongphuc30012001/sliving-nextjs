import imgSecurity from '@images/smart-building/img-top-building.png';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import styles from '../SmartBuilding.module.scss';

function SectionTopSmartBuilding() {
  const { t } = useTranslation('smartBuilding');

  return (
    <section className={styles['bg-top-smart-building']}>
      <Container className="max-width-1600 px-0">
        <Row
          className={`gx-md-5 ${styles['padding-left-right']} ${styles['row-main-top-building']}`}
        >
          <Col md={6} className={styles['col-img-top-building']}>
            <Image
              src={imgSecurity.src}
              alt="img-building"
              className={`img-fluid ${styles['img-top-building']}`}
            />
          </Col>
          <Col md={6} className="order-first order-md-last">
            <h2 className={styles['title-top-smart-building']}>
              {t('smartBuilding.sectionTop.title')}
            </h2>
            <p className={styles['detail-top-smart-building']}>
              {t('smartBuilding.sectionTop.subTitle')}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default SectionTopSmartBuilding;
