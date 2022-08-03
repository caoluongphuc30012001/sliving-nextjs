import Seo from '@components/common/seo';
import ImplementationProcess from '@components/ImplementationProcess';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'process', 'menu', 'footer', 'seo'])),
      locale: locale,
    },
  };
};
const ImplementationProcessPage = () => {
  const { t } = useTranslation('seo');

  return (
    <>
      <Seo
        title={t('process.title')}
        description={t('process.description')}
        url="/implementation-process"
      />
      <ImplementationProcess />
    </>
  );
};

export default ImplementationProcessPage;
