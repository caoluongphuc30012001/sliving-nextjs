import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import styles from '../ProductDetail.module.scss';
import BuildProductInfor from './BuildProductInfor';
import Skeleton from './Skeleton';
import BuildThumbs from './thumb';

function SkeletonProductInfor() {
  return (
    <>
      <div style={{ marginBottom: '2px' }}>
        <Skeleton width="40%" height="24px" />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <Skeleton width="100%" height="48px" />
      </div>
      <div style={{ marginBottom: '2px' }}>
        <Skeleton width="30%" height="24px" />
      </div>
      {[...Array(2)].map((item, i) => (
        <div key={i} style={{ marginBottom: '16px' }}>
          <Skeleton width="100%" height="44px" />
        </div>
      ))}
      <div style={{ margin: '32px 0' }}>
        <Skeleton width="30%" height="40px" />
      </div>
    </>
  );
}

BuildHeader.propTypes = {
  deviceTypeDetail: PropTypes.object.isRequired,
  deviceShapeList: PropTypes.array,
  deviceDetail: PropTypes.object,
  isLoading: PropTypes.bool,
};

function BuildHeader({
  deviceTypeDetail,
  deviceShapeList = [],
  deviceDetail = {},
  isLoading = true,
}) {
  const BuildThumbsProduct = () => {
    return isLoading ? (
      <Skeleton width="100%" height="372px" />
    ) : (
      <BuildThumbs dataProduct={deviceDetail.imageURL} />
    );
  };

  return (
    <section className={`container-wrap ${styles['product-header-page']}`}>
      <Row className={styles['header-page-wrap']}>
        <Col xs={12} lg={6} md={12}>
          <BuildThumbsProduct />
        </Col>
        <Col xs={12} lg={6} md={12}>
          {!(deviceShapeList.length > 0 && deviceTypeDetail && !isLoading) ? (
            <section className={styles['section-product-info']}>
              <SkeletonProductInfor />
            </section>
          ) : (
            <BuildProductInfor
              deviceTypeDetail={deviceTypeDetail}
              deviceShapeList={deviceShapeList}
              deviceDetail={deviceDetail}
            />
          )}
        </Col>
      </Row>
    </section>
  );
}

export default BuildHeader;
