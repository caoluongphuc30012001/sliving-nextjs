import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import style from './AboutUs.module.scss';

const SectionHeader = () => {
  const [headerToggle, setheaderToggle] = useState(false);
  const isBrowser = typeof window !== 'undefined';

  const { t } = useTranslation('aboutUs');

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener('scroll', OnScroll);
    }
    return () => {
      window.removeEventListener('scroll', OnScroll);
    };
  }, [isBrowser]);

  function OnScroll() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      setheaderToggle(true);
    } else {
      setheaderToggle(false);
    }
  }
  return (
    <header className={style[`section-about-us-header`]}>
      <div className={style[`header-container`]}>
        <div
          className={
            headerToggle
              ? [style[`header-content`], style[`hide`]].join(' ')
              : style[`header-content`]
          }
        >
          <h2 className={style[`content-title`]}>{t('aboutUs.header.mainTitle')}</h2>
          <div className={style[`content-subtitle-container`]}>
            <p className={style[`content-subtitle-desktop`]}>{t('aboutUs.header.mainDesc')}</p>
            <p className={style[`content-subtitle-mobile`]}>
              Hệ sinh thái Sliving gồm các giải pháp Smart Home, Smart Lighting, Smart Parking và
              Smart Building.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default SectionHeader;
