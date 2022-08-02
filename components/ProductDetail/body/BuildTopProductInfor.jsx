import styles from '../ProductDetail.module.scss';

function BuildTopProductInfor({ subTitle, title, listFeature }) {
  return (
    <>
      <h6>{subTitle}</h6>
      <h2>{title}</h2>
      <div className={styles['divider']} />
      <ul className={styles['desc-list']}>
        {listFeature?.map((des, index) => (
          <li key={index.toString()}>
            <span>{des}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default BuildTopProductInfor;
