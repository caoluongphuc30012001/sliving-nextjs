import iconApple from '@images/footer/png/icon-down-apple.png';
import iconChPlay from '@images/footer/png/icon-down-chplay.png';
import logoSliving from '@images/footer/png/logo-sliving.png';
import iconEmail from '@images/footer/svg/icon-email.svg';
import iconFb from '@images/footer/svg/icon-fb.svg';
import iconPhone from '@images/footer/svg/icon-phone.svg';
import iconYtn from '@images/footer/svg/icon-youtube.svg';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './FooterNotMap.module.scss';

const BuildLogo = () => <img src={logoSliving.src} alt="logo Unicloud" width={283} height="auto" />;

function BuildInformation() {
  const { t } = useTranslation('footer');

  return (
    <div className={styles['footer-info']}>
      <BuildLogo />
      <p className="text-white fs-14 my-4">{t('footer.description')}</p>
      <h4 className="fs-6 fw-bold text-white mb-3 my-4">{t('footer.connect')}</h4>
      <div
        className={`${styles['group-icon-social']} d-flex justify-content-center align-items-center`}
      >
        <img src={iconFb.src} alt="facebook" />
        <img src={iconYtn.src} alt="youtube" />
        <img src={iconPhone.src} alt="phone" />
        <img src={iconEmail.src} alt="email" />
      </div>
    </div>
  );
}

function BuildAboutUs(props) {
  const { listArray, title } = props;
  return (
    <div className={styles['footer-about-us']}>
      <h4 className="text-white fw-bold fs-4">{title}</h4>
      <ul>
        {listArray?.map((about) => (
          <li key={about.id}>
            <Link href={about.url}>
              <a className={`${styles['item-about']} text-white`}>
                <div>{about.title}</div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BuildApps() {
  const { t } = useTranslation('footer');
  return (
    <div className={styles['footer-apps']}>
      <h4 className="text-white fw-bold fs-4">{t('footer.store')}</h4>
      <a href="https://1p.io/AppSlivingApple" target="_blank" rel="noreferrer">
        <img className="my-3" src={iconApple.src} alt="" />
      </a>
      <a href="https://1p.io/SlivingAppChplay" target="_blank" rel="noreferrer">
        <img className="my-3" src={iconChPlay.src} alt="" />
      </a>
    </div>
  );
}

function Footer() {
  const { t } = useTranslation('footer');

  const listAbout = [
    { id: 0, title: `${t('footer.listAboutItem1')}`, url: '/about-us' },
    { id: 1, title: `${t('footer.listAboutItem2')}`, url: '/business' },
    {
      id: 2,
      title: `${t('footer.listAboutItem3')}`,
      url: 'https://unicloud.com.vn/news',
    },
    { id: 3, title: `${t('footer.listAboutItem4')}`, url: '/contact-us' },
  ];

  const listHref = [
    { id: 0, title: `${t('footer.listHrefItem1')}`, url: '/policy' },
    { id: 1, title: `${t('footer.listHrefItem2')}`, url: '/coming-soon' },
    { id: 2, title: `${t('footer.listHrefItem3')}`, url: '/coming-soon' },
  ];

  useEffect(() => {
    const funcScroll = () => {
      const iconUpTop2 = document.getElementById('div-icon-up-top');
      const windowHeightScroll = window.scrollY;
      const { innerHeight } = window;
      if (window !== undefined && iconUpTop2) {
        if (windowHeightScroll + 90 >= innerHeight) {
          iconUpTop2.style.display = 'block';
        } else iconUpTop2.style.display = 'none';
      }
    };
    window.addEventListener('scroll', funcScroll);
    return () => {
      window.removeEventListener('scroll', funcScroll);
    };
  }, []);

  return (
    <section>
      <footer className={styles['footer']}>
        <div className={styles['bg-footer']}>
          <div className={styles['background-parent']}>
            <Container
              className={`${styles['footer-wrap']} ${styles['container-child']} ${styles['container-1220']}`}
            >
              <Row className="g-0 gy-md-5">
                <Col sm={12} md={12} lg={4} className="d-flex justify-content-center">
                  <BuildInformation />
                </Col>
                <Col sm={6} lg={2}>
                  <BuildAboutUs listArray={listAbout} title={t('footer.aboutSliving')} />
                </Col>
                <Col sm={6} lg={3}>
                  <BuildAboutUs listArray={listHref} title={t('footer.link')} />
                </Col>
                <Col sm={12} md={12} lg={3} className="d-flex justify-content-center text-center">
                  <BuildApps />
                </Col>
              </Row>
            </Container>
          </div>
          <section>
            <div className={`${styles['copy-right']} text-white`}>
              <span>© Sliving 2022. All Rights Reserved.</span>
            </div>
          </section>
        </div>
      </footer>
      {/* {isMobile && (
        <button
          type="button"
          onClick={scrollTop}
          className="div-icon-up-top"
          id="div-icon-up-top"
        >
          <Image src={iconUpTop} className="img-fluid img-icon-up-top" />
        </button>
      )} */}
    </section>
  );
}

export default Footer;
