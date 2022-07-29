import * as React from 'react';
import { Image, Modal } from 'react-bootstrap';
import iconV from '@images/icon/icon-v-thanks.svg';
import { useTranslation } from 'next-i18next';
import styles from './ModalThanks.module.scss';

function ModalThanks(props) {
  const { t } = useTranslation('common');
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={styles['modal-thanks-popup']}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <p className={styles['title-thanks-popup']}>
          <Image src={iconV.src} alt="icon-v" /> <span>{t('modal.thank.title')}</span>
        </p>
        <p className={styles['title-thanks-popup-2']}>{t('modal.thank.description')}</p>
      </Modal.Body>
    </Modal>
  );
}

export default ModalThanks;
