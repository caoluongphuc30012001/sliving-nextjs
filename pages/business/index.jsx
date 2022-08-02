import LayoutV3 from '@components/common/layout-main';
import SectionHelpMore from '@components/common/SectionHelpMore';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SectionHeader from '../../components/business/section-header';
import SectionProductList from '../../components/business/section-product-list';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'business', 'menu', 'footer'])),
      locale: locale,
    },
  };
};
const Business = () => {
  return (
    <LayoutV3>
      <main id="business">
        <SectionHeader />
        <SectionProductList />
        <SectionHelpMore />
      </main>
    </LayoutV3>
  );
};

export default Business;
