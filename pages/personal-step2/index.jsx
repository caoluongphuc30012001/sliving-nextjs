import Layout from '@components/common/layout-main';
import SectionHelpMore from '@components/common/SectionHelpMore';
import Seo from '@components/common/seo';
import { i18n } from '@components/next-config';
import SectionProductList from '@components/person/personal-step2/section-product-list';
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
const BusinessStep3 = () => {
  const { t } = useTranslation('seo');

  return (
    <>
      <Seo title={t('person.title')} description={t('person.description')} url="/personal-step2" />
      <Layout>
        <main id="personal-step2">
          <SectionProductList />
          <SectionHelpMore />
        </main>
      </Layout>
    </>
  );
};

export default BusinessStep3;
