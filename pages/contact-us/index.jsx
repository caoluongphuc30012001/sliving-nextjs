import ContactUs from '@components/ContactUs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contact'])),
      locale: locale,
    },
  };
};
const ContactUsPage = () => {
  return <ContactUs />;
};

export default ContactUsPage;
