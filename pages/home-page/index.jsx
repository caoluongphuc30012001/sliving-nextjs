import Layout from '@components/common/layout-main';
import SectionHelpMore from '@components/common/SectionHelpMore';
import {
  SectionFeaturedProject,
  SectionHeader,
  SectionProduct,
  SectionSmartLighting,
  SectionSmartParking,
  SectionSolution,
} from '@components/HomePage';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'homePage', 'menu', 'footer'])),
    },
  };
};

const HomePage = () => {
  return (
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
  );
};

export default HomePage;
