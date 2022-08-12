import Seo from '@components/common/seo';
import { i18n } from '@components/next-config';
import SmartBuilding from '@components/SmartBuilding';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ['common', 'smartBuilding', 'footer', 'contact', 'menu', 'seo'],
        {
          i18n: i18n,
          serializeConfig: false,
        },
      )),
      locale: locale,
    },
  };
};

function SmartBuildingPage() {
  const { t } = useTranslation('seo');

  return (
    <>
      <Seo
        title={t('smartBuilding.title')}
        description={t('smartBuilding.description')}
        url="/smart-building"
      />
      <SmartBuilding />
    </>
  );
}

export default SmartBuildingPage;
