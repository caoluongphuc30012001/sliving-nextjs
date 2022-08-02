import { useTranslation } from 'next-i18next';
import { Col, Container, Row } from 'react-bootstrap';
import style from './Business.module.scss';

function SectionHeader() {
  const { t } = useTranslation('business');
  return (
    <section className={style[`section-top-solution-package`]}>
      <Container>
        <Row className="gx-5">
          <Col md={2} lg={5} xl={7}></Col>
          <Col md={10} lg={7} xl={5}>
            <div className={style[`container-header`]}>
              <h2 className={style[`text-top-solution-1`]}>{t('business.header.title')}</h2>
              <h4 className={style[`text-top-solution-2`]}>{t('business.header.subTitle')}</h4>
              <p className={style[`text-top-solution-3`]}>{t('business.header.description')}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SectionHeader;
