import React from 'react';
import { Image, Row } from 'react-bootstrap';
import imgUnderLine from '@images/home-page-v3/svg/title-line-under.svg';
import imgFeature1 from '@images/home-page-v3/png/feature-1.png';
import imgFeature2 from '@images/home-page-v3/png/feature-2.png';
import imgFeature3 from '@images/home-page-v3/png/feature-3.png';
import imgFeature4 from '@images/home-page-v3/png/feature-4.png';
import imgFeature5 from '@images/home-page-v3/png/feature-5.png';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import style from './style.module.scss';
// import required modules
import { Pagination } from 'swiper';

import { useTranslation } from 'react-i18next';

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
      linkImg: imgFeature1,
      title: t('homePage.featuredProject.groupItems.title1'),
    },
    {
      id: 2,
      linkImg: imgFeature2,
      title: t('homePage.featuredProject.groupItems.title2'),
    },
    {
      id: 3,
      linkImg: imgFeature3,
      title: t('homePage.featuredProject.groupItems.title3'),
    },
    {
      id: 4,
      linkImg: imgFeature4,
      title: t('homePage.featuredProject.groupItems.title4'),
    },
    {
      id: 5,
      linkImg: imgFeature5,
      title: t('homePage.featuredProject.groupItems.title5'),
    },
  ];
  return (
    <section className={style["bg-ground-feature-project"]}>
      <div className="container-1220 feature-project-container">
        <Row className="row-line-center">
          <span className="title-eng-line-center">FEATURED PROJECT</span>
          <h2 className="title-line-center">{t('homePage.featuredProject.mainTitle')}</h2>
          <div className="img-line-center d-flex justify-content-center">
            <Image src={imgUnderLine} style={{ width: 88, height: 4 }} alt="" />
          </div>
        </Row>
        <div className="options">
          {listItemCard.map((itemCard) => (
            <div
              onClick={() => handleSlidesSolutionTable(itemCard.id)}
              className={solutionTable === itemCard.id ? 'option active' : 'option'}
              style={{ backgroundImage: `url(${itemCard.linkImg})` }}
              key={itemCard.id}
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
            >
              <div className="shadow" />
              <div className="label">
                <div className="icon">
                  <span className="number">0{itemCard.id}</span>
                </div>
                <div className="info">
                  <div className="main">{itemCard.title}</div>
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
        className="mySwiper options-mobile d-none"
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
            <div className="feature-card" style={{ backgroundImage: `url(${itemCard.linkImg})` }}>
              <div className="shadow" />
              <div className="label">
                <div className="icon">
                  <span className="number">0{itemCard.id}</span>
                </div>
                <div className="info">
                  <div className="main">{itemCard.title}</div>
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
