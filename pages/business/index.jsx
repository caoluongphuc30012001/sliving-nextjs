import LayoutV3 from '@components/common/layout-main';
import SectionHelpMore from '@components/common/SectionHelpMore';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SectionHeader from '../../components/business/section-header';
import SectionProductList from '../../components/business/section-product-list';
import { useTranslation } from 'next-i18next';
import Seo from '@components/common/seo';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'business', 'menu', 'footer', 'seo'])),
      locale: locale,
    },
  };
};
const Business = () => {
  const { t } = useTranslation('seo');
  return (
    <>
      <Seo
        title={t('business.title')}
        description={t('business.description')}
        url="/business/"
        metaImage="/thumbnail.png"
      />
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
