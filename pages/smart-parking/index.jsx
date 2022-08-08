import LayoutParking from '@components/common/layout-smart-parking';
import SectionHelpMore from '@components/common/SectionHelpMore';
import Seo from '@components/common/seo';
import SectionDefinition from '@components/smart-parking/section-definition';
import SmartHeader from '@components/smart-parking/section-header';
import SectionParkingSolution from '@components/smart-parking/section-parking-solution';
import SectionParkingSystem from '@components/smart-parking/section-parking-system';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'smartParking',
        'menu',
        'footer',
        'seo',
      ])),
      locale: locale,
    },
  };
};
const SmartParking = () => {
  const { t } = useTranslation('seo');

  return (
    <>
      <Seo
        title={t('smartParking.title')}
        description={t('smartParking.description')}
        url="/smart-parking"
      />
      <LayoutParking>
        <main id="smart-parking-page">
          <SmartHeader />
          <SectionDefinition />
          <SectionParkingSolution />
          <SectionParkingSystem />
          <SectionHelpMore />
        </main>
      </LayoutParking>
    </>
  );
};

export default SmartParking;
