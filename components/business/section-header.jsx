import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import style from './style.module.scss';
import Image from 'next/image';

function SectionHeader() {
  const { t } = useTranslation('business');
  return (
    <section className={style[`section-top-solution-package`]}>
      <Container className={style[``]}>
        <Row className={style[`gx-5`]}>
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
