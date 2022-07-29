import iconTechnology from '@images/smart-building/icon-technology-smart-building.svg';
import iconV from '@images/smart-building/icon-tick-v-smart-building.svg';
import { Image } from 'react-bootstrap';
import styles from '../SmartBuilding.module.scss';

export default function RowTechnology({ technologies }) {
  return (
    <div className={styles['div-wrapper-technology-building']}>
      <h3 className={styles['title-technology-smart-building']}>
        {technologies?.title}
      </h3>
      {technologies?.technologyList?.map((technology, index) => (
        <div key={index.toString()}>
          <p className={styles['title-smart-door-2']}>
            <Image src={iconV.src} alt="icon-v" />
            <span>{technology.title}</span>
          </p>
          {technology.specificationList.length > 0 && (
            <p className={styles['sub-title-smart-door']}>
              {technology.specificationList.map((item, index) => {
                return <span key={index.toString()}>{item}</span>;
              })}
            </p>
          )}
        </div>
      ))}
      <div className={styles['div-wrapper-icon-building']}>
        <Image
          src={iconTechnology.src}
          className="img-fluid"
          alt="icon-technology"
        />
      </div>
    </div>
  );
}
