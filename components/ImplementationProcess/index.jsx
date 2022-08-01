import LayoutV3 from '@components/common/layout-main';
import { ModalAdvise } from '@components/common/modal';
import SectionHelpMore from '@components/common/SectionHelpMore';
import iconArrow from '@images/icon/icon-arrow-process.svg';
import iconQuestion from '@images/icon/icon-question-process.svg';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import styles from './ImplementationProcess.module.scss';

const ImplementationProcess = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const { t } = useTranslation('process');

  return (
    <LayoutV3>
      <main>
        <section className={styles['section-process']}>
          <Container className={styles['padding-left-right']} fluid style={{ maxWidth: 1220 }}>
            <h3 className={styles['sub-title']}>{t('processPage.subTitle')}</h3>
            <h2 className={styles['title']}>{t('processPage.title')}</h2>
            <div>
              <div className={styles['div-under']}></div>
            </div>
            <Row className={`gx-5 gy-5 ${styles['row-main-process']}`}>
              <Col md={6}>
                <p className={styles['title-process-sliving']}>
                  <Image
                    src={iconArrow.src}
                    alt="icon-arrow"
                    className={`img-fluid ${styles['img-arrow-process']}`}
                  />
                  01. <span>{t('processPage.process.step1.title')}</span>
                </p>
                <p className={styles['detail-process-sliving']}>
                  {t('processPage.process.step1.subTitle')}
                </p>
              </Col>
              <Col md={6}>
                <p className={styles['title-process-sliving']}>
                  <Image
                    src={iconArrow.src}
                    alt="icon-arrow"
                    className={`img-fluid ${styles['img-arrow-process']}`}
                  />
                  02. <span>{t('processPage.process.step2.title')}</span>
                </p>
                <p className={styles['detail-process-sliving']}>
                  {t('processPage.process.step2.subTitle')}
                </p>
              </Col>
              <Col md={6}>
                <p className={styles['title-process-sliving']}>
                  <Image
                    src={iconArrow.src}
                    alt="icon-arrow"
                    className={`img-fluid ${styles['img-arrow-process']}`}
                  />
                  03. <span>{t('processPage.process.step3.title')}</span>
                </p>
                <p className={styles['detail-process-sliving']}>
                  {t('processPage.process.step3.subTitle')}
                </p>
              </Col>
              <Col md={6}>
                <p className={styles['title-process-sliving']}>
                  <Image
                    src={iconArrow.src}
                    alt="icon-arrow"
                    className={`img-fluid ${styles['img-arrow-process']}`}
                  />
                  04.<span>{t('processPage.process.step4.title')}</span>
                </p>
                <p className={styles['detail-process-sliving']}>
                  {t('processPage.process.step4.subTitle')}
                </p>
              </Col>
              <Col md={6}>
                <p className={styles['title-process-sliving']}>
                  <Image
                    src={iconArrow.src}
                    alt="icon-arrow"
                    className={`img-fluid ${styles['img-arrow-process']}`}
                  />
                  05.<span>{t('processPage.process.step5.title')}</span>
                </p>
                <p className={styles['detail-process-sliving']}>
                  {t('processPage.process.step5.subTitle')}
                </p>
              </Col>
              <Col md={6}>
                <div className={styles['div-wrapper-answers']}>
                  <p className={styles['title-answers-process']}>
                    <Image src={iconQuestion.src} alt="icon-question" />
                    <span>{t('processPage.process.answerProcess.title')}</span>
                  </p>
                  <p className={styles['detail-answers-process']}>
                    {t('processPage.process.answerProcess.subTitle')}
                  </p>
                  <button type="button" onClick={() => setModalShow(true)}>
                    <span>{t('processPage.process.buttonAdvise')}</span>
                  </button>
                </div>
              </Col>
            </Row>
            <Row className={`gx-5 ${styles['row-main-process']}`}></Row>
            <Row className={`gx-5 ${styles['row-main-process']}`}></Row>
          </Container>
        </section>
        <SectionHelpMore />
        <ModalAdvise show={modalShow} onHide={() => setModalShow(false)} />
      </main>
    </LayoutV3>
  );
};

export default ImplementationProcess;
