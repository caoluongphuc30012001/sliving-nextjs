import Layout from '@components/common/layout-main';
import Seo from '@components/common/seo';
import imgComingSoon from '@images/coming-soon/img-coming-soon.png';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import style from './ComingSoon.module.scss';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'menu', 'footer', 'seo'])),
      locale: locale,
    },
  };
};
function ComingSoon() {
  const { t } = useTranslation('seo');
  return (
    <>
      <Seo title={t('comingSoon.title')} url="/coming-soon" />
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
    </>
  );
}

export default ComingSoon;
