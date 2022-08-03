import Seo from '@components/common/seo';
import ProductDetail from '@components/ProductDetail';
import axios from 'axios';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

export default function ProductDetailPage({ deviceTypeDetail }) {
  const { t } = useTranslation('seo');
  const router = useRouter();
  const { asPath, locale } = router;
  const { nameEn, nameVi, descriptionVi, imageURL } = deviceTypeDetail;

  return (
    <>
      <Seo
        title={locale === 'en' ? nameEn : nameVi}
        description={descriptionVi}
        url={asPath}
        metaImage={imageURL}
      />
      <ProductDetail deviceTypeDetail={deviceTypeDetail} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { params, query, locale } = context;

  const deviceTypeDetail = await axios.get(
    `https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/product/device-type-detail?deviceTypeId=${params.DeviceTypeId}`,
  );

  if (!query.shape_index || !query.device_index) {
    return {
      redirect: {
        destination: `/${locale}/product-detail/${params.DeviceTypeId}?shape_index=0&device_index=0`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      deviceTypeDetail: deviceTypeDetail.data,
      ...(await serverSideTranslations(locale, [
        'common',
        'productDetail',
        'footer',
        'contact',
        'menu',
        'seo',
      ])),
      locale: locale,
    },
  };
}
