import imgFeature1 from '@images/home-page-v3/png/feature-1.png';
import imgFeature2 from '@images/home-page-v3/png/feature-2.png';
import imgFeature3 from '@images/home-page-v3/png/feature-3.png';
import imgFeature4 from '@images/home-page-v3/png/feature-4.png';
import imgFeature5 from '@images/home-page-v3/png/feature-5.png';
import imgUnderLine from '@images/home-page-v3/svg/title-line-under.svg';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { Image, Row } from 'react-bootstrap';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './HomePage.module.scss';

function SectionFeaturedProject() {
  const [solutionTable, setSolutionTable] = React.useState(1);

  const { t } = useTranslation('homePage');

  const handleSlidesSolutionTable = (numSolutionTable) => {
    const intNumSolutionTable = parseInt(numSolutionTable, 10);
    setSolutionTable(intNumSolutionTable);
  };
  const listItemCard = [
    {
      id: 1,
      linkImg: imgFeature1.src,
      title: t('homePage.featuredProject.groupItems.title1'),
    },
    {
      id: 2,
      linkImg: imgFeature2.src,
      title: t('homePage.featuredProject.groupItems.title2'),
    },
    {
      id: 3,
      linkImg: imgFeature3.src,
      title: t('homePage.featuredProject.groupItems.title3'),
    },
    {
      id: 4,
      linkImg: imgFeature4.src,
      title: t('homePage.featuredProject.groupItems.title4'),
    },
    {
      id: 5,
      linkImg: imgFeature5.src,
      title: t('homePage.featuredProject.groupItems.title5'),
    },
  ];
  return (
    <section className={styles['bg-ground-feature-project']}>
      <div className={`${styles['container-1220']} ${styles['feature-project-container']}`}>
        <Row className={styles['row-line-center']}>
          <span className={styles['title-eng-line-center']}>FEATURED PROJECT</span>
          <h2 className={styles['title-line-center']}>{t('homePage.featuredProject.mainTitle')}</h2>
          <div className={`${styles['img-line-center']} d-flex justify-content-center`}>
            <Image src={imgUnderLine} height={4} width={88} alt="" />
          </div>
        </Row>
        <div className={styles['options']}>
          {listItemCard.map((itemCard) => (
            <div
              onClick={() => handleSlidesSolutionTable(itemCard.id)}
              className={
                solutionTable === itemCard.id
                  ? `${styles['option']} ${styles['active']}`
                  : `${styles['option']}`
              }
              style={{ backgroundImage: `url(${itemCard.linkImg})` }}
              key={itemCard.id}
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
            >
              <div className={styles['shadow']} />
              <div className={styles['label']}>
                <div className={styles['icon']}>
                  <span className={styles['number']}>0{itemCard.id}</span>
                </div>
                <div className={styles['info']}>
                  <div className={styles['main']}>{itemCard.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        modules={[Pagination]}
        className={`${styles['mySwiper']} ${styles['options-mobile']} d-none`}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          375: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {listItemCard.map((itemCard) => (
          <SwiperSlide key={itemCard.id}>
            <div
              className={styles['feature-card']}
              style={{ backgroundImage: `url(${itemCard.linkImg})` }}
            >
              <div className={styles['shadow']} />
              <div className={styles['label']}>
                <div className={styles['icon']}>
                  <span className={styles['number']}>0{itemCard.id}</span>
                </div>
                <div className={styles['info']}>
                  <div className={styles['main']}>{itemCard.title}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default SectionFeaturedProject;
