import React ,{useState,useEffect}from 'react';
import SectionSlides from "./body/section-Slides";
import Layout from "@components/layout.jsx";
import Sectionorizontal from "@components/section/section-horizontal/section-horizontal";
import imgIot from "@images/home-page/info/iot.svg";
import "./home-page.scss";
import SectionHeader from "./body/section-header";
import SectionBannerSuport from "./body/section-banner-support";
import SectionConstruction from './body/section-construction';
import SectionIntroduce from "./body/section-introduce";
import SectionBannerReason from "./body/section-banner-reason";
import SectionProject from "./body/section-project";
import SectionVideo from "./body/section-Video";
import SectionSlideNews from "./body/section-slide-news";
import { useTranslation } from "react-i18next";
import { withTranslation } from "react-i18next";
import { PortfolioProvider } from "../../context/context";
const HomePage = (props) => {
  const { t } = useTranslation();
  const [location, setLocation] = useState({});
  const [pageContext, setPageContext] = useState({});
  useEffect(() => {
    setLocation(props.props.location);
    setPageContext(props.props.pageContext);
  }, []);
  return (
    <Layout>
      <PortfolioProvider value={{ location, pageContext }}>
        <div className="home-page-main">
          <SectionHeader />
          <SectionBannerSuport />
          <SectionConstruction />
          <SectionIntroduce />
          <SectionSlides />
          <SectionBannerReason />
          <Sectionorizontal
            title={t(`who_are_we`)}
            urlImg={imgIot}
            url={"/introduction-page/"}
          >
            <span>
              <span>{t(`sub-who-are-we.title`)}</span>
              <ul>
                <li>{t(`sub-who-are-we.description_1`)}</li>
                <li>{t(`sub-who-are-we.description_2`)}</li>
                <li>{t(`sub-who-are-we.description_3`)}</li>
                <li>{t(`sub-who-are-we.description_4`)}</li>
                <li>{t(`sub-who-are-we.description_5`)}</li>
              </ul>
              {t(`sub-who-are-we.sub-description`)}
            </span>
          </Sectionorizontal>
          <SectionVideo />
          <SectionProject />
          <SectionSlideNews props={props} />
        </div>
      </PortfolioProvider>
    </Layout>
  );
};
export default withTranslation()(HomePage);
