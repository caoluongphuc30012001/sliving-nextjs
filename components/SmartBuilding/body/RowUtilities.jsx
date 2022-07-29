import iconV from '@images/smart-building/icon-tick-v-smart-building.svg';
import { Image } from 'react-bootstrap';
import styles from '../SmartBuilding.module.scss';

function RowUtilities({ utilities }) {
  return (
    <>
      <p className={styles['title-smart-door-1']}>{utilities?.title}</p>
      {utilities?.utilList?.map((item, index) => (
        <div key={index}>
          <p className={styles['title-smart-door-2']}>
            <Image src={iconV.src} alt="icon-v" />
            <span>{item.title}</span>
          </p>
          <p className={styles['sub-title-smart-door']}>{item.subTitle}</p>
        </div>
      ))}
    </>
  );
}

export default RowUtilities;
