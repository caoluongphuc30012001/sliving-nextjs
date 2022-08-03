import Layout from '@components/common/layout-main';
import SectionHelpMore from '@components/common/SectionHelpMore';
import Seo from '@components/common/seo';
import {
  SectionFeaturedProject,
  SectionHeader,
  SectionProduct,
  SectionSmartLighting,
  SectionSmartParking,
  SectionSolution,
} from '@components/HomePage';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['seo', 'common', 'homePage', 'menu', 'footer'])),
    },
  };
};

const HomePage = () => {
  const { t } = useTranslation('seo');

  return (
    <>
      <Seo title={t('homePage.title')} description={t('homePage.description')} />
      <Layout>
        <SectionHeader />
        <main id="main_page">
          <SectionSolution />
          <SectionProduct />
          <SectionSmartParking />
          <SectionSmartLighting />
          <SectionFeaturedProject />
          <SectionHelpMore />
        </main>
      </Layout>
    </>
  );
};

export default HomePage;
