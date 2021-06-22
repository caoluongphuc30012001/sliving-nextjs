import React from 'react';
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
import { useTranslation } from 'react-i18next';
import { withTranslation } from 'react-i18next';
const HomePage = () => {
    const { t } = useTranslation();
    return (
        <Layout>
            <div className="home-page-main">
                <SectionHeader />
                <SectionBannerSuport />
                <SectionConstruction />
                <SectionIntroduce />
                <SectionSlides />
                <SectionBannerReason />
                <Sectionorizontal title={t(`who_are_we`)} urlImg={imgIot}>
                    <span>
                        <span>  Những lĩnh vực phát triển của công ty :</span>
                        <ul>
                            <li>Xây dựng thiết kế giao diện các ứng dụng di động (Mobile App), trang mạng (website) cho việc giám sát, điều khiển và giới thiệu sản phẩm.</li>
                            <li>Thiết kế phần cứng (Hardware) của Sản phẩm</li>
                            <li>Sản xuất thiết bị công nghệ thông minh</li>
                            <li>Xây dựng các chương trình máy tính như Firmware, Cloud Server</li>
                            <li>AI ( Trí tuệ nhân tạo )</li>
                        </ul>
                        Trong những năm qua, Sliving luôn không ngừng phát triển và cho ra đời các giải pháp công nghệ tiên tiến giúp mỗi người dùng có thể trải nghiệm một cuộc sống tiện nghi, thoải mái và tiện lợi nhất...
                    </span>
                </Sectionorizontal>
                <SectionVideo />
                <SectionProject />
                <SectionSlideNews />
            </div>
        </Layout>
    );
}
export default withTranslation()(HomePage);
