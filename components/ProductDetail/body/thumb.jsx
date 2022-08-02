import '@fancyapps/ui/dist/fancybox.css';
import Fancybox from '@hooks/fancybox';
import iconArrowLeft from '@images/icon/arrow-down-left-v2.svg';
import iconArrowRight from '@images/icon/arrow-down-right-v2.svg';
import img1 from '@images/product/prod-about.svg';
import img2 from '@images/product/prod-spec.svg';
import img3 from '@images/product/prod.svg';
import React, { Component } from 'react';
import Slider from 'react-slick';
import styles from '../ProductDetail.module.scss';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
      onKeyPress={onClick}
      role={'button'}
      tabIndex={0}
    >
      <img src={iconArrowRight.src} alt="" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
      onKeyPress={onClick}
      role={'button'}
      tabIndex={0}
    >
      <img src={iconArrowLeft.src} alt="" />
    </div>
  );
};
export default class CenterMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      arrImg: [
        { id: 0, src: img1, isActive: true },
        { id: 1, src: img2, isActive: false },
        { id: 2, src: img3, isActive: false },
        { id: 3, src: img3, isActive: false },
      ],
      arrThumbs: [],
    };
    this.listRef1 = React.createRef();
    this.listRef2 = React.createRef();
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
    this.getData();
  }

  getData = () => {
    const dataProduct = this.props?.dataProduct || [];
    if (dataProduct) {
      this.setState((state) => {
        state.arrThumbs = dataProduct;
      });
    }
  };

  render() {
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      focusOnSelect: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <div className={styles['thumb-wrap']}>
        <Fancybox options={{ infinite: true }}>
          <Slider
            asNavFor={this.state.nav2}
            infinite={false}
            ref={(slider) => (this.slider1 = slider)}
            dotsClass={`slick-dots ${styles['slick-thumb']}`}
          >
            {this.state.arrThumbs &&
              this.state.arrThumbs?.map((image, index) => {
                return (
                  <div
                    className={styles['thumb-center']}
                    data-fancybox="gallery"
                    data-src={image}
                    key={index.toString()}
                  >
                    <img src={image} alt="" style={{ width: '100%', margin: 'auto' }} />
                  </div>
                );
              })}
          </Slider>
        </Fancybox>

        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          {...settings}
          className={styles['thumb-bottom-slide']}
        >
          {this.state.arrThumbs.map((image, index) => {
            return (
              <div key={index.toString()} className={styles['wrapper-thumb-bottom']}>
                {image !== undefined && (
                  <>
                    <div key={index} className={styles['thumb-bottom']}>
                      {image && <img src={image} alt="" />}
                    </div>
                    <div className={styles['divider-prod']} />
                  </>
                )}
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
