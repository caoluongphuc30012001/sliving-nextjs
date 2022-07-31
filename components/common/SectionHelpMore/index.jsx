import iconBusiness from '@images/home-page-v3/svg/icon-business.svg';
import iconMedia from '@images/home-page-v3/svg/icon-media.svg';
import iconSupport from '@images/home-page-v3/svg/icon-support.svg';
import imgUnderLine from '@images/home-page-v3/svg/title-line-under.svg';
import { Col, Image, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import styles from './SectionHelpMore.module.scss';

const SectionHelpMore = () => {
  const { t } = useTranslation('common');

  const listItemCard = [
    {
      id: 0,
      linkImg: iconBusiness,
      title: t('component.sectionHelpMore.business.title'),
      desc: 'sales@unicloud.com.vn',
    },
    {
      id: 1,
      linkImg: iconSupport,
      title: t('component.sectionHelpMore.support.title'),
      desc: 'supports@unicloud.com.vn',
    },
    {
      id: 2,
      linkImg: iconMedia,
      title: t('component.sectionHelpMore.media.title'),
      desc: 'media@unicloud.com.vn',
    },
  ];
  return (
    <section className={styles['bg-ground-help-more']}>
      <div className={`${styles['help-more-container']} ${styles['container-1220']}`}>
        <Row className={`${styles['row-line-center']} ${styles['m-left-right-12']}`}>
          <span className={styles['title-eng-line-center']}>
            {t('component.sectionHelpMore.title')}
          </span>
          <h2 className={styles['title-line-center']}>{t('component.sectionHelpMore.subTitle')}</h2>
          <div className={`${styles['img-line-center']} d-flex justify-content-center`}>
            <Image src={imgUnderLine.src} alt="img-underline" style={{ width: 88, height: 4 }} />
          </div>
          <p className={styles['description-line-center']}>
            {t('component.sectionHelpMore.description')}
          </p>
        </Row>
        <Row
          lg={3}
          md={3}
          xs={1}
          className={`${styles['help-more-cards']} ${styles['m-left-right-12']}`}
        >
          {listItemCard.map((itemCard) => (
            <Col key={itemCard.id} className="gx-4 gy-4">
              <div className={styles['help-more-card']}>
                <Image
                  src={itemCard.linkImg.src}
                  alt="img-card-description"
                  className={styles['help-more-card-image']}
                />
                <h3 className={styles['help-more-card-title']}>{itemCard.title}</h3>
                <span className={styles['help-more-card-des']}>{itemCard.desc}</span>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};
export default SectionHelpMore;
