import styles from '../ProductDetail.module.scss';

export default function Skeleton({ width, height }) {
  return (
    <span
      className={styles['skeleton-box']}
      style={{
        width: width,
        height: height,
      }}
    ></span>
  );
}
