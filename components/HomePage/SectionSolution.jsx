import imgLeft from '@images/home-page-v3/img-smart-life.png';
import imgAboutTop from '@images/home-page-v3/png/about-sliving-top.png';
import imgRight from '@images/home-page-v3/png/img-solution-best.png';
import imgSolution from '@images/home-page-v3/png/solution-sliving.png';
import imgUnderLine from '@images/home-page-v3/svg/title-line-under.svg';
import iconBulb from '@images/icon/icon-bulb.svg';
import iconCurtain from '@images/icon/icon-curtain.svg';
import iconLight from '@images/icon/icon-light.svg';
import iconRemote from '@images/icon/icon-remote.svg';
import iconSecurity from '@images/icon/icon-security-color.svg';
import iconTouch from '@images/icon/icon-touch.svg';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Col, Image, Row } from 'react-bootstrap';
import styles from './HomePage.module.scss';

const SectionSolution = () => {
  const { t } = useTranslation('homePage');

  const arrSolution = [
    {
      id: 0,
      desc: 'Smart Home',
    },
    {
      id: 1,
      desc: 'Smart Lighting',
    },
    {
      id: 2,
      desc: 'Smart Building',
    },
    {
      id: 3,
      desc: 'Smart Parking',
    },
  ];

  const arrProd = [
    {
      id: 0,
      desc: (
        <>
          {t('homePage.solution.groupSolutions.desc1.1')}
          <br />
          {t('homePage.solution.groupSolutions.desc1.2')}
        </>
      ),
      icon: iconBulb,
    },
    {
      id: 1,
      desc: (
        <>
          {t('homePage.solution.groupSolutions.desc2.1')}
          <br />
          {t('homePage.solution.groupSolutions.desc2.2')}
        </>
      ),
      icon: iconTouch,
    },
    {
      id: 2,
      desc: (
        <>
          {t('homePage.solution.groupSolutions.desc3.1')}
          <br />
          {t('homePage.solution.groupSolutions.desc3.2')}
        </>
      ),
      icon: iconLight,
    },
    {
      id: 3,
      desc: (
        <>
          {t('homePage.solution.groupSolutions.desc4.1')}
          <br />
          {t('homePage.solution.groupSolutions.desc4.2')}
        </>
      ),
      icon: iconSecurity,
    },
    {
      id: 4,
      desc: (
        <>
          {t('homePage.solution.groupSolutions.desc5.1')}
          <br />
          {t('homePage.solution.groupSolutions.desc5.2')}
        </>
      ),
      icon: iconRemote,
    },
    {
      id: 5,
      desc: (
        <>
          {t('homePage.solution.groupSolutions.desc6.1')}
          <br />
          {t('homePage.solution.groupSolutions.desc6.2')}
        </>
      ),
      icon: iconCurtain,
    },
  ];
  return (
    <section className={styles['section-solution']}>
      <div className={`${styles['section-solution-about']} ${styles['container-1220']}`}>
        <Row className="justify-content-around">
          <Col lg={6} md={6} sm={12}>
            <Row className={`${styles['row-line-center']} ${styles['m-left-right-12']}`}>
              <span className={styles['title-eng-line-center']}>ABOUT SLIVING</span>
              <h2 className={styles['title-line-center']}>
                {t('homePage.solution.mainTitle1.part1')} <br />
                {t('homePage.solution.mainTitle1.part2')}
              </h2>
              <div className={styles['img-line-center']}>
                <Image src={imgUnderLine.src} width={88} height={4} alt="" />
              </div>
            </Row>
            <img src={imgAboutTop.src} alt="" className={styles['solution-about-img-mobile']} />
            <div className={`${styles['solution-about-cap']} d-flex`}>
              <div className={styles['solution-about-cap-line']}></div>
              <span className={`${styles['solution-about-cap-content']} d-flex align-items-center`}>
                {`"The light is what guides you home, the warmth is what keeps you
                there." - Ellie Rodriguez`}
              </span>
            </div>
            <span className={styles['detail-v3']}>
              {t('homePage.solution.mainDesc1.part1')}
              <strong>{t('homePage.solution.mainDesc1.part2')}</strong>
              {t('homePage.solution.mainDesc1.part3')}
            </span>
            <ul className={styles['list-ul-li']}>
              {arrSolution.map((solution) => (
                <li key={solution.id}>{solution.desc}</li>
              ))}
            </ul>
            <Link href="/about-us/">
              <button type="button" className={styles['btn-gradient-blue']}>
                <span>{t('homePage.btnGroup.discoverBtn')}</span>
              </button>
            </Link>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className={styles['p-relative']}>
              <img src={imgRight.src} alt="" className={styles['solution-about-img']} />
              <div
                className={`${styles['solution-about-cap-desktop']} ${styles['p-absolute']} d-flex`}
              >
                <div className={styles['solution-about-cap-line']}></div>
                <span
                  className={`${styles['solution-about-cap-content']} d-flex align-items-center`}
                >
                  {`"The light is what guides you home, the warmth is what keeps
                  you there." - Ellie Rodriguez`}
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className={`${styles['section-solution-sliving']} ${styles['container-1220']}`}>
        <Row className="justify-content-between">
          <Col lg={6} md={6} sm={12} xs className={styles['solution-sliving-img']}>
            <img src={imgLeft.src} alt="" />
          </Col>
          <Col lg={6} md={6} sm={12} className="solution-sliving-col-right">
            <Row className={`${styles['row-line-center']} ${styles['m-left-right-12']}`}>
              <span className={styles['title-eng-line-center']}>SLIVING SOLUTION</span>
              <h2 className={styles['title-line-center']}>
                {t('homePage.solution.mainTitle2.part1')} <br />
                {t('homePage.solution.mainTitle2.part2')}
              </h2>
              <div className={styles['img-line-center']}>
                <Image src={imgUnderLine.src} width={88} height={4} alt="" />
              </div>
            </Row>
            <span className={styles['detail-v3']}>{t('homePage.solution.mainDesc2')}</span>
            <Row className="">
              {arrProd.map((prod) => (
                <Col key={prod.id} className="gx-3 gy-3 col-4" lg={4} md={4} sm={4}>
                  <div className={styles['solution-sliving-card']}>
                    <img src={prod.icon.src} alt="" />
                  </div>
                  <span className={styles['solution-sliving-content']}>{prod.desc}</span>
                </Col>
              ))}
            </Row>
            <img
              src={imgSolution.src}
              alt=""
              className={styles['solution-about-img-mobile']}
              style={{ paddingTop: '32px' }}
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default SectionSolution;
