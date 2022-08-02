import { ModalAdvise } from '@components/common/modal';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../ProductDetail.module.scss';
import BuildTopProductInfor from './BuildTopProductInfor';

BuildProductInfor.propTypes = {
  deviceTypeDetail: PropTypes.object.isRequired,
  deviceShapeList: PropTypes.array.isRequired,
  deviceDetail: PropTypes.object.isRequired,
};

function BuildProductInfor({ deviceTypeDetail, deviceShapeList, deviceDetail }) {
  const { t } = useTranslation('productDetail');
  const router = useRouter();
  const { locale, query } = router;
  const { shape_index, device_index } = query;
  const [modalShow, setModalShow] = useState(false);

  const handleChangeIndex = (type, index) => {
    if (type === 'shape' && parseInt(shape_index) === index) return;
    if (type === 'device' && parseInt(device_index) === index) return;

    router.replace(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          shape_index: type === 'shape' ? index : shape_index,
          device_index: type === 'shape' ? 0 : index,
        },
      },
      undefined,
    );
  };

  return (
    <section className={styles['section-product-info']}>
      <article className={styles['product-info-detail']}>
        <BuildTopProductInfor
          subTitle={deviceTypeDetail.nameEn}
          title={locale === 'en' ? deviceTypeDetail.nameEn : deviceTypeDetail.nameVi}
          deviceTypeDetail={deviceTypeDetail}
          listFeature={
            locale === 'en'
              ? deviceDetail?.EnProductDetail?.listFeature
              : deviceDetail?.ViProductDetail?.listFeature
          }
        />
        {!(deviceShapeList.length <= 1 && deviceShapeList[0]?.listDevices.length <= 1) && (
          <Row className={styles['version']}>
            <span>{t('productDetail.titleVersion')}</span>
          </Row>
        )}
        <Col>
          {!(deviceShapeList.length <= 1) && (
            <Row
              className={`${styles['group-btn-version']} ${
                styles[`group-${deviceShapeList.length}-btn`]
              }`}
            >
              {deviceShapeList.map((item, index) => (
                <button
                  key={index.toString()}
                  className={`${styles['btn-version']} ${
                    parseInt(shape_index) === index ? `${styles['is-active-btn']}` : ''
                  }`}
                  onClick={() => handleChangeIndex('shape', index)}
                >
                  <span>{locale === 'vi' ? item.deviceShape.nameVi : item.deviceShape.nameEn}</span>
                </button>
              ))}
            </Row>
          )}
        </Col>
        <Col>
          {!(deviceShapeList[shape_index]?.listDevices.length <= 1) && (
            <Row
              className={`${styles['group-btn-version']} ${
                styles[`group-${deviceShapeList[shape_index]?.listDevices.length}-btn`]
              }`}
            >
              {deviceShapeList[shape_index]?.listDevices.map((item, index) => (
                <button
                  key={index.toString()}
                  className={`${styles['btn-version']} ${
                    parseInt(device_index) === index ? `${styles['is-active-btn']}` : ''
                  }`}
                  onClick={() => handleChangeIndex('device', index)}
                >
                  <span>{locale === 'vi' ? item.nameVi : item.nameEn}</span>
                </button>
              ))}
            </Row>
          )}
        </Col>
      </article>
      <div className={styles['btn-group']}>
        <button className={styles['btn-contact-form']} onClick={() => setModalShow(true)}>
          <span>{t('productDetail.buttonAdvise')}</span>
        </button>
      </div>
      <ModalAdvise
        productName={locale === 'vi' ? deviceTypeDetail?.nameVi : deviceTypeDetail?.nameEn}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </section>
  );
}

export default BuildProductInfor;
