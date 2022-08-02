import imgBrandStory from '@images/about-us-v3/png/img-brand-story.png';
import imgUnderLine from '@images/home-page-v3/svg/title-line-under.svg';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Row } from 'react-bootstrap';
import style from './AboutUs.module.scss';

function SectionBrandStory() {
  const { t } = useTranslation('aboutUs');
  return (
    <section className={style[`bg-section-brand-story`]}>
      <div className={style[`section-container`]}>
        <Row className={style[`top-content`]}>
          <span className={style[`title`]}>BRAND STORY</span>
          <h2 className={style[`main-title`]}>{t('aboutUs.brandStory.mainTitle')}</h2>
          <div className={style[`underline`]}>
            <Image src={imgUnderLine} width={88} height={4} alt="" />
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
