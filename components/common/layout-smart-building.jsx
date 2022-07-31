import NavbarSecurity from '@components/common/menu/index';
import logo from '@images/smart-home-v3/png/logo.png';
import { useTranslation } from 'next-i18next';
import Footer from './Footer';
function LayoutBuilding({ children }) {
  const { t } = useTranslation('menu');
  const listRoute = [
    {
      id: 0,
      nameRoute: t('menu.building'),
      listRoute: [
        {
          id: 0,
          nameRoute: t('menu.lighting'),
          href: '/smart-lighting/',
        },
        {
          id: 1,
          nameRoute: t('menu.parking'),
          href: '/smart-parking/',
        },
        {
          id: 2,
          nameRoute: t('menu.home'),
          href: '/smart-home',
        },
      ],
    },
    {
      id: 1,
      nameRoute: t('menu.method'),
      href: '/business/',
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
      <NavbarSecurity listRoute={listRoute} logo={logo} back={true} />
      {children}
      <Footer />
      {/* <ButtonRounded />  */}
    </>
  );
}
export default LayoutBuilding;
