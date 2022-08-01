import React from 'react';
import Layout from '@components/common/layout-main';
import SectionProductList from '@components/person/personal-step2/section-product-list';
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
const BusinessStep3 = () => {
  return (
    <Layout>
      {/* <Seo
        title="Sliving - Giải pháp dành cho doanh nghiệp"
        description="Cung cấp các giải pháp chiếu sáng, điều khiển thông minh, giải pháp an ninh cho tòa nhà, 
        căn hộ, văn phòng, trung tâm thương mại... với đa dạng lựa chọn và chi phí hợp lý nhất."
        url="/business/"
        metaImage="/thumbnail.png"
      /> */}
      <main id="personal-step2-v3">
        <SectionProductList />
        <SectionHelpMore />
      </main>
    </Layout>
  );
};

export default BusinessStep3;
