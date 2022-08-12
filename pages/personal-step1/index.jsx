import Layout from '@components/common/layout-main';
import SectionHelpMore from '@components/common/SectionHelpMore';
import Seo from '@components/common/seo';
import { i18n } from '@components/next-config';
import PersonalStep1 from '@components/person/personal-step1/personal-step-1';
import SectionHeader from '@components/person/personal-step1/section-header';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ['person', 'footer', 'contact', 'menu', 'common', 'seo'],
        {
          i18n: i18n,
          serializeConfig: false,
        },
      )),
      locale: locale,
    },
  };
};
const IndexPage = () => {
  const { t } = useTranslation('seo');

  return (
    <>
      <Seo title={t('person.title')} description={t('person.description')} url="/personal-step1" />
      <Layout>
        <main id="personal-step1">
          <SectionHeader />
          <PersonalStep1 />
          <SectionHelpMore />
        </main>
      </Layout>
    </>
  );
};
export default IndexPage;
