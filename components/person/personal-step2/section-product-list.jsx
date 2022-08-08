import ModalAdvise from '@components/common/modal/ModalAdvise/ModalAdvise';
import style from '@components/person/style.module.scss';
import axios from 'axios';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const isBrowser = typeof window !== 'undefined';
const Table = ({ table }) => {
  const { i18n } = useTranslation();
  const checkVn = i18n.language.toUpperCase() === 'VN' ? true : false;
  return (
    <tbody className={`${style['body-content-container']} ${style['border-b']}`}>
      <tr className={style['body-table-row']}>
        <td>{checkVn ? table.room.roomValue.nameVi : table.room.roomValue.nameEn}</td>
      </tr>
      <tr className={`${style['body-table-row']} ${style['border-l']}`}>
        {table.listDevice.map((item, index) => {
          const id = index + 1;
          return (
            <td key={id} className={`${style['table-data']} ${style['border-b']}`}>
              {checkVn ? item.deviceValues.nameVi : item.deviceValues.nameEn}
            </td>
          );
        })}
      </tr>
      <tr className={`${style['body-table-row']} ${style['border-l']}`}>
        {table.listDevice.map((item, index) => {
          const id = index + 1;
          return (
            <td key={id} className={`${style['table-data']} ${style['border-b']}`}>
              {item.basicCount * table.room.quantityRoom}
            </td>
          );
        })}
      </tr>
      <tr className={`${style['body-table-row']} ${style['border-l']}`}>
        {table.listDevice.map((item, index) => {
          const id = index + 1;
          return (
            <td key={id} className={`${style['table-data']} ${style['border-b']}`}>
              {item.normalCount * table.room.quantityRoom}
            </td>
          );
        })}
      </tr>
      <tr className={`${style['body-table-row']} ${style['border-l']}`}>
        {table.listDevice.map((item, index) => {
          const id = index + 1;
          return (
            <td key={id} className={`${style['table-data']} ${style['border-b']}`}>
              {item.advancedCount * table.room.quantityRoom}
            </td>
          );
        })}
      </tr>
    </tbody>
  );
};

const SectionProductList = () => {
  const [modalShow, setModalShow] = useState(false);
  const [totalBasic, setTotalBasic] = useState(0);
  const [totalNormal, setTotalNormal] = useState(0);
  const [totalAdvanced, setTotalAdvanced] = useState(0);
  const [currentHouse, setCurrentHouse] = useState('');
  const [display, setDisplay] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const [tableData, setTableData] = useState([]);
  const [isBasic, setBasic] = useState(true);

  const [loading, setLoading] = useState(true);

  const [houseId, setHouseId] = useState(null);

  const { t } = useTranslation('person');

  const router = useRouter();

  useLayoutEffect(() => {
    const houseId = router.query.id;
    if (!houseId)
      router.replace('/personal-step1', '/personal-step1', {
        scroll: true,
      });
    else setHouseId(router.query.id);
  }, [router]);

  useEffect(() => {
    const scrollEvent = () => {
      if (isBrowser) {
        const section = document.getElementById('section-personal-product-list');
        if (window.pageYOffset > section.clientHeight - window.innerHeight) setDisplay(false);
        else setDisplay(true);
      }
    };
    document.addEventListener('scroll', scrollEvent);
    return () => {
      document.removeEventListener('scroll', scrollEvent);
    };
  }, []);
  useEffect(() => {
    const getListHouse = async () => {
      try {
        const response = await axios.get(
          'https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/business/houses',
        );
        setCurrentHouse(response.data?.Items.find((item) => item.id === houseId).nameVi);
      } catch (err) {
        console.error(err);
      }
    };
    if (houseId) getListHouse();
  }, [houseId]);

  useEffect(() => {
    const getDevice = async (houseID, isBasic) => {
      try {
        const res = await axios.post(
          'https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/business/devices',
          {
            houseID: houseId,
            isBasic,
          },
        );
        setLoading(false);
        let rs = res.data.sort((a, b) =>
          a.room.roomValue.nameVi.localeCompare(b.room.roomValue.nameVi),
        );
        res.data.forEach((item) => {
          item.listDevice = item.listDevice.sort((a, b) =>
            a.deviceValues.nameVi.localeCompare(b.deviceValues.nameVi),
          );
        });
        rs.forEach((item) => {
          item.listDevice.forEach((device) => {
            device.deviceValues.totalBasic = device.basicCount * item.room.quantityRoom;
            device.deviceValues.totalNormal = device.normalCount * item.room.quantityRoom;
            device.deviceValues.totalAdvanced = device.advancedCount * item.room.quantityRoom;
          });
        });
        setTableData(rs);
      } catch (err) {
        console.error(err);
      }
    };

    if (houseId) getDevice(1, isBasic);
  }, [isBasic, houseId]);

  const sumCalculation = (list, property) => {
    const sum = list.listDevice.reduce((prev, item) => {
      return prev + item[property] * item.deviceValues.price;
    }, 0);
    return sum;
  };

  const sumDeviceCalculation = (list) => {
    const sum = list.listDevice.reduce((prev, item) => {
      return prev + item.deviceValues.totalBasic;
    }, 0);
    return sum;
  };

  useEffect(() => {
    const getTotal = (SetData, property) => {
      const total = tableData.reduce((prev, item) => {
        return prev + sumCalculation(item, property);
      }, 0);
      SetData(total);
    };
    getTotal(setTotalBasic, 'basicCount');
    getTotal(setTotalNormal, 'normalCount');
    getTotal(setTotalAdvanced, 'advancedCount');
  }, [tableData]);

  return (
    <section className={style['section-personal-product-list']} id="section-personal-product-list">
      <div className={style['section-container']}>
        <div className={style['content-title']}>
          <div className={style['sub-title']}>PRODUCT LIST</div>
          <div className={style['title']}>{t('personalPackage.personalStep2.mainDesc')}</div>
          <div className={style['underline']}></div>
        </div>
        <div className={style['table']}>
          <table className={style['table-container']}>
            <thead className={style['content-container']}>
              <tr className={style['table-row']}>
                <th className={`${style['table-data']} ${style['header']}`}>
                  {t('personalPackage.personalStep2.tableHeader.title1')}
                </th>
                <th className={`${style['table-data']} ${style['header']} ${style['border-l']}`}>
                  {t('personalPackage.personalStep2.tableHeader.title2')}
                </th>
                <th className={`${style['table-data']} ${style['header']} ${style['border-l']}`}>
                  {t('personalPackage.personalStep2.tableHeader.title3')}
                </th>
                <th className={`${style['table-data']} ${style['header']} ${style['border-l']}`}>
                  {t('personalPackage.personalStep2.tableHeader.title4')}
                </th>
                <th className={`${style['table-data']} ${style['header']} ${style['border-l']}`}>
                  {t('personalPackage.personalStep2.tableHeader.title5')}
                </th>
              </tr>
            </thead>
            {loading && (
              <thead className={style['spiner-container']}>
                <tr className={style['spiner-row']}>
                  <th colSpan={5} className={style['spiner-box']}>
                    <Spinner animation="border" className="spiner-animation" />
                  </th>
                </tr>
              </thead>
            )}
            {!loading &&
              tableData.map((table, index) => {
                const id = index + 1;
                return <Table key={id} table={table} quantity={quantity} />;
              })}
            <thead className={style['content-container']}>
              <tr className={style['table-row']}>
                <th className={`${style['table-data']} ${style['header']}`}></th>
                <th
                  className={`${style['table-data']} ${style['header']} ${style['border-l']}`}
                ></th>
                <th className={`${style['table-data']} ${style['header']} ${style['border-l']}`}>
                  {(Math.round(totalBasic / 1000000) * 1000000).toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                  })}
                </th>
                <th className={`${style['table-data']} ${style['header']} ${style['border-l']}`}>
                  {(Math.round(totalNormal / 1000000) * 1000000).toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                  })}
                </th>
                <th className={`${style['table-data']} ${style['header']} ${style['border-l']}`}>
                  {(Math.round(totalAdvanced / 1000000) * 1000000).toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                  })}
                </th>
              </tr>
            </thead>
          </table>
        </div>
        {!loading && (
          <div className={` ${display ? style['active-menu'] : style['section-menu-bottom']}`}>
            <div className={style['bottom-menu']}>
              <div
                className={style['advise-now-btn']}
                onClick={() => setModalShow(true)}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
              >
                <span>{t('personalPackage.groupBtn.adviseBtn')}</span>
              </div>
            </div>
            <div className={style['table']}>
              <table className={style['table-container']}>
                <thead className={style['content-container']}>
                  <tr className={style['table-row']}>
                    <th
                      className={`${style['table-data']} ${style['header']} ${style['border-l']}`}
                    >
                      {(Math.round(totalBasic / 1000000) * 1000000).toLocaleString('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      })}
                    </th>
                    <th
                      className={`${style['table-data']} ${style['header']} ${style['border-l']}`}
                    >
                      {(Math.round(totalNormal / 1000000) * 1000000).toLocaleString('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      })}
                    </th>
                    <th
                      className={`${style['table-data']} ${style['header']} ${style['border-l']}`}
                    >
                      {(Math.round(totalAdvanced / 1000000) * 1000000).toLocaleString('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      })}
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        )}
        {!loading && (
          <div
            className={style['advise-now-btn']}
            onClick={() => setModalShow(true)}
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
          >
            <span>{t('personalPackage.groupBtn.adviseBtn')}</span>
          </div>
        )}
      </div>
      <ModalAdvise
        show={modalShow}
        onHide={() => setModalShow(false)}
        houseName={currentHouse}
        serviceName={isBasic ? 'Cơ Bản' : 'Nâng Cao'}
      />
    </section>
  );
};

export default SectionProductList;
