import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

import { useTranslation } from 'next-i18next';

import style from '@components/person/style.module.scss';
function SectionHeader() {
  const { t } = useTranslation('person');

  return (
    <section className={style['section-top-solution-package']}>
      <Container className={`${style['max-width-1300']} ${style['padding-left-right']}`}>
        <Row className="gx-5">
          <Col md={2} lg={5} xl={7}></Col>
          <Col md={10} lg={7} xl={5}>
            <div className={style['container-header']}>
              <h2 className={style['text-top-solution-1']}>
                {t('personalPackage.header.mainTitle')}
              </h2>
              <h4 className={style['text-top-solution-2']}>
                {t('personalPackage.header.subTitle')}
              </h4>
              <p className={style['text-top-solution-3']}>{t('personalPackage.header.mainDesc')}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SectionHeader;
