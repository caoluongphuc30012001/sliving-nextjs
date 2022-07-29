import React from 'react';
import { Row } from 'react-bootstrap';
import imgUnderLine from '@images/home-page-v3/svg/title-line-under.svg';
import imgBrandStory from '@images/about-us-v3/png/img-brand-story.png';
import { useTranslation } from 'react-i18next';

import style from './style.module.scss';
import Image from 'next/image';

function SectionBrandStory() {
  const { t } = useTranslation('aboutUs');
  return (
    <section className={style[`bg-section-brand-story`]}>
      <div className={style[`section-container`]}>
        <Row className={style[`top-content`]}>
          <span className={style[`title`]}>BRAND STORY</span>
          <h2 className={style[`main-title`]}>{t('aboutUs.brandStory.mainTitle')}</h2>
          <div className={style[`underline`]}>
            <Image src={imgUnderLine} style={{ width: 88, height: 4 }} alt=""/>
          </div>
          <p className={style[`description-line-center`]}>{t('aboutUs.brandStory.mainDesc')}</p>
        </Row>
        <div className={style[`brand-story-img`]}>
          <Image src={imgBrandStory} alt="" />
        </div>
      </div>
    </section>
  );
}

export default SectionBrandStory;
