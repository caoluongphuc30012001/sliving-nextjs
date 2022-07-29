import ImplementationProcess from '@components/ImplementationProcess';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'process'])),
      locale: locale,
    },
  };
};
const ImplementationProcessPage = () => {
  return <ImplementationProcess />;
};

export default ImplementationProcessPage;
