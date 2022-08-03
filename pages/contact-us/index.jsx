import Seo from '@components/common/seo';
import ContactUs from '@components/ContactUs';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contact', 'footer', 'menu', 'seo'])),
      locale: locale,
    },
  };
};
const ContactUsPage = () => {
  const { t } = useTranslation('seo');
  return (
    <>
      <Seo title={t('contact.title')} description={t('contact.description')} url="/contact-us" />
      <ContactUs />
    </>
  );
};

export default ContactUsPage;
