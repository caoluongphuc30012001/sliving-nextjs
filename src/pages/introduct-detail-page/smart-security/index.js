import React from 'react';
import Layout from "@components/layout.jsx";
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { graphql } from 'gatsby';
import IntroductHeader from './header/section-header';
import SectionContent from "./body/section-content";
import SectionIntroductLast from './body/section-last';
import imgFirst from "@images/introduction-page/smart-security/banner-first.svg";
import imgSecond from "@images/introduction-page/smart-security/banner-second.svg";
import imgThird from "@images/introduction-page/smart-security/banner-third.svg";
import "./style.scss"
import SectionSlidesProduct from './body/section-slide-first';
import IntroductSlides from './body/section-introduct-slide';
const IntroductDetail = () => {
    return (
        <Layout>
            <div className="introduct-main" id="introduct-main">
                <IntroductHeader />
                <div><IntroductSlides /> </div>
                <div className="section-first">
                    <SectionContent imgUrl={imgFirst} title={"Khóa Vân Tay Thông Minh"} description={"Sử dụng phương thức nhận dạng vân tay để đóng / mở cửa.Tích hợp máy quét thẻ từ, mật mã.Có đèn báo, âm báo rõ ràng cho các trường hợp.Có thể mở khóa từ xa thông qua tính năng bluetooth trên điện thoại."} />
                </div>
                <div className="section-second">
                    <SectionContent imgUrl={imgSecond} title={"Cửa Xoay Thông Minh"} description={"Là một thiết bị quản lý an ninh khu vực kết hợp với các phần mềm độc quyền. Thiết bị này có khả năng theo dõi các chuyến thăm của khách, quản lý công trình xây dựng và loại bỏ những người có ý định nhảy qua cổng để vào và làm tăng hiệu quả hoạt động trên trong khu vực quản lý."} />
                </div>
                <div className="section-first">
                    <SectionContent imgUrl={imgThird} title={"Face ID"} description={"Sử dụng công nghệ sinh trắc học trích xuất đặc điểm nhận diện khuôn mặt để xác thực cư dân, ứng dụng cho việc kiểm soát ra vào các khu vực cần giám sát cũng như sử dụng để gọi thang, mở barrier."} />
                </div>
                <div className="section-slide-first">
                    <SectionSlidesProduct title={'Parking product'} />
                </div>
                <div className="section-slide-product">
                    <SectionIntroductLast />
                </div>
            </div>
        </Layout>
    );
}
export default withI18next()(IntroductDetail);
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "translations" } }) {
      ...LocaleFragment
    }
  }
`;
