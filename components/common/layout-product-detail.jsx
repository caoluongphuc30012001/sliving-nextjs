import Footer from '@components/common/Footer';
import NavbarLighting from '@components/common/menu/index';
import logo from '@images/smart-home-v3/png/logo.png';
import { useTranslation } from 'next-i18next';

function LayoutProductDetail({ children }) {
  const { t } = useTranslation('menu');
  const listRoute = [
    {
      id: 0,
      nameRoute: t('menu.method'),
      listRoute: [
        {
          id: 0,
          nameRoute: t('menu.home'),
          href: '/smart-home/',
        },
        {
          id: 1,
          nameRoute: t('menu.parking'),
          href: '/smart-parking/',
        },
        {
          id: 2,
          nameRoute: t('menu.building'),
          href: '/smart-building/',
        },
        {
          id: 3,
          nameRoute: t('menu.lighting'),
          href: '/smart-lighting/',
        },
      ],
    },
    {
      id: 1,
      nameRoute: t('menu.product'),
      href: "/product-detail/",
      active: true,
    },
    {
      id: 2,
      nameRoute: t('menu.process'),
      href: '/implementation-process/',
    },
    {
      id: 3,
      nameRoute: t('menu.contact'),
      href: '/contact-us/',
    },
  ];
  return (
    <>
      <NavbarLighting logo={logo} listRoute={listRoute} back={true} />
      <main>{children}</main>
      <Footer />
      {/* <ButtonRounded /> */}
    </>
  );
}
export default LayoutProductDetail;
