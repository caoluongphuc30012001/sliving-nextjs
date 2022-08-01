import React from 'react';
import PersonalStep1 from '@components/person/personal-step1/personal-step-1';
import SectionHeader from '@components/person/personal-step1/section-header';
import Layout from '@components/common/layout-main';
import SectionHelpMore from '@components/common/SectionHelpMore';
// import Seo from "../../components/seo";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['person', 'footer', 'contact', 'menu', 'common'])),
      locale: locale,
    },
  };
};
const IndexPage = () => {
  return (
    <Layout>
      {/* <Seo
        title="Sliving - Giải pháp dành cho doanh nghiệp"
        description="Cung cấp các giải pháp chiếu sáng, điều khiển thông minh, giải pháp an ninh cho tòa nhà, 
        căn hộ, văn phòng, trung tâm thương mại... với đa dạng lựa chọn và chi phí hợp lý nhất."
        url="/business/"
        metaImage="/thumbnail.png"
      /> */}
      <main id="business-step1-v3">
        <SectionHeader />
        <PersonalStep1 />
        <SectionHelpMore />
      </main>
    </Layout>
  );
};
export default IndexPage;
