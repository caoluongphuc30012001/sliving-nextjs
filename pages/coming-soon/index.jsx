import * as React from 'react';
import Layout from '@components/common/layout-main';
import Link from 'next/link';
import imgComingSoon from '@images/coming-soon/img-coming-soon.png';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import style from './style.module.scss';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'menu', 'footer'])),
      locale: locale,
    },
  };
};
function ComingSoon() {
  return (
    <Layout>
      <section className={`${style['container-child']} ${style['not-found']}`}>
        <img src={imgComingSoon.src} alt="not found" className={style['img-not-found']} />
        <h3>Sắp ra mắt !!!</h3>
        <span className={`${style['desc-404']} ${style['desc-coming-soon']}`}>
          Chúng tôi đang trong quá trình hoàn thiện sản phẩm/giải pháp ,hãy tham khảo thêm các sản
          phẩm khác của chúng tôi
        </span>
        <Link href="/">
          <button type="button" className={style['btn-home']}>
            <span className={style['span']}>Về trang chủ</span>
          </button>
        </Link>
      </section>
    </Layout>
  );
}

export default ComingSoon;
