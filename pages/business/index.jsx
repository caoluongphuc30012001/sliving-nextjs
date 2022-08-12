import LayoutV3 from '@components/common/layout-main';
import SectionHelpMore from '@components/common/SectionHelpMore';
import Seo from '@components/common/seo';
import { i18n } from '@components/next-config';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SectionHeader from '../../components/business/section-header';
import SectionProductList from '../../components/business/section-product-list';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'business', 'menu', 'footer', 'seo'],{
        i18n: i18n,
        serializeConfig: false,
      })),
      locale: locale,
    },
  };
};
const Business = () => {
  const { t } = useTranslation('seo');
  return (
    <>
      <Seo title={t('business.title')} description={t('business.description')} url="/business" />
      <LayoutV3>
        <main id="business">
          <SectionHeader />
          <SectionProductList />
          <SectionHelpMore />
        </main>
      </LayoutV3>
    </>
  );
};

export default Business;
