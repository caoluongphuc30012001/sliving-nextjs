import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@components/common/layout-main';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import img404 from '@images/not-found/img-404.png';
import { useTranslation } from 'next-i18next';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'menu', 'footer', '404'])),
    },
  };
};
// markup
const NotFoundPage = () => {
  const { t } = useTranslation('404');
  return (
    <Layout>
      <section className="container-child not-found">
        <Image src={img404} alt="not found" className="img-not-found" />
        <h3>{t('404.title')}</h3>
        <span className="desc-404">{t('404.description')}</span>
        <Link href="/">
          <button type="button" className="btn-home">
            <span>{t('404.btnHome')}</span>
          </button>
        </Link>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
