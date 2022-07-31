import SmartBuilding from '@components/SmartBuilding';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'smartBuilding', 'footer', 'contact', 'menu'])),
      locale: locale,
    },
  };
};

function SmartBuildingPage() {
  return <SmartBuilding />;
}

export default SmartBuildingPage;
