import imgBgMobile from '@images/home-page-v3/bg-home-page-mobile.png';
import imgBg from '@images/home-page-v3/bg-home-page.jpg';
import imgBgMobile2 from '@images/home-page-v3/bg-home-page2-mobile.png';
import imgBg2 from '@images/home-page-v3/bg-home-page2.jpg';
import iconPhone from '@images/home-page-v3/svg/icon-phone.svg';
import icon24Line from '@images/icon/icon-24h-line.svg';
import iconSettings from '@images/icon/icon-setting.svg';
import iconSupport from '@images/icon/icon-support.svg';
import { useTranslation } from 'next-i18next';
import { Col, Row } from 'react-bootstrap';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './HomePage.module.scss';

const SectionHeader = () => {
  const { t } = useTranslation('homePage');

  const arrService = [
    {
      id: 0,
      title: t('homePage.header.groupServices.title1'),
      desc: t('homePage.header.groupServices.desc1'),
      icon: iconSettings.src,
    },
    {
      id: 1,
      title: t('homePage.header.groupServices.title2'),
      desc: t('homePage.header.groupServices.desc2'),
      icon: iconSupport.src,
    },
    {
      id: 2,
      title: t('homePage.header.groupServices.title3'),
      desc: t('homePage.header.groupServices.desc3'),
      icon: icon24Line.src,
    },
  ];
  const imgBackground = [
    { id: 0, imgUrl: imgBg.src },
    { id: 1, imgUrl: imgBg2.src },
  ];
  const imgBackgroundMobile = [
    { id: 0, imgUrl: imgBgMobile.src },
    { id: 1, imgUrl: imgBgMobile2.src },
  ];
  return (
    <header className={styles['home-page-v3']}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={`${styles['mySwiper']} ${styles['slider-desktop']}`}
      >
        {imgBackground.map((item) => (
          <SwiperSlide
            key={item.id}
            className={styles['back-ground-desktop']}
            style={{
              backgroundImage: `url(${item.imgUrl})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              marginRight: '30px',
            }}
          >
            {/* <div className="view-360">
              <button>
                <span>
                  Xem 360 <sup>0</sup>
                </span>
                <img src={iconEarth} alt="" />
              </button>
            </div> */}
            {/* <img src={item.imgUrl} alt="" className={styles["bg-img"]} /> */}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={`${styles['mySwiper']} ${styles['slider-mobile']}`}
      >
        {imgBackgroundMobile.map((item) => (
          <SwiperSlide key={item.id} className={`${styles['back-ground-mobile']} d-none`}>
            {/* <div className="view-360">
              <button>
                <span>
                  Xem 360 <sup>0</sup>
                </span>
                <img src={iconEarth} alt="" />
              </button>
            </div> */}
            <img src={item.imgUrl} alt="" className={styles['bg-img']} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles['home-page-tag']}>
        <div className={styles['container-1220']}>
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={3} className="gy-3">
              <div className={styles['group-contact-header']}>
                <img src={iconPhone.src} width={48} height={48} alt="icon phone fill" />
                <div className={styles['contact-header-wrap']}>
                  <span className={styles['hotline']}>Hotline</span>
                  <span style={{ display: 'block' }}>19006054</span>
                </div>
              </div>
            </Col>
            <Col lg={9} className="gy-3">
              <Row className={styles['group-service-tag']} md={3}>
                {arrService.map((service) => (
                  <Col key={service.id} className={`gx-4 ${styles['card-sub-tag-col']}`}>
                    <div className={styles['card-sub-tag']}>
                      <img
                        height={48}
                        src={service.icon}
                        alt="icon settings"
                        loading="eager"
                        className={styles['card-sub-tag-icon']}
                      />
                      <h4 className={styles['card-sub-tag-title']}>{service.title}</h4>
                      <span className={styles['card-sub-tag-des']}>{service.desc}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </header>
  );
};
export default SectionHeader;
