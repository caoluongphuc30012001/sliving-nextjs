import React from "react";
import Layout from "@components/layout";
import { graphql } from "gatsby";
import { withI18next } from "@wapps/gatsby-plugin-i18next";
import "./style.scss";
import SolutionHeader from "./header/solution-header";
import SolutionSlides from "./body/section-solutions-slide";
import SectionContent from "./body/section-content";
import imgFirst from "@images/introduction-page/smart-parking/image5.png";
import imgSecond from "@images/introduction-page/smart-parking/image6.png";
import SectionSlidesProduct from "./body/section-slide-first";
import SectionSolutionLast from "./body/section-last";
import { useTranslation } from "react-i18next";
const SolutionPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="solution-main" id="solution-main">
        <SolutionHeader />
        <SolutionSlides />
        <div className="section-first">
          <SectionContent
            imgUrl={imgFirst}
            title={"Tìm kiếm vị trí bãi đỗ xe một cách dễ dàng"}
            subDescription={
              "Khi đến bãi xe, người dùng dễ dàng đến được vị trí chỗ trống thông qua:"
            }
            description={
              <ul>
                <li>Ứng dụng hướng dẫn đường đi nhanh nhất</li>
                <li>Bảng đèn led chỉ hướng trong các tầng hầm</li>
              </ul>
            }
            url={"smart-parking-1-learn-more"}
          />
        </div>
        <div className="section-second">
          <SectionContent
            imgUrl={imgSecond}
            title={"Đặt trước chỗ đỗ xe nhanh chóng"}
            subDescription={
              "Hệ thống hoàn toàn tự động, sử dụng công nghệ cảm biến, cập nhật chính xác các thông tin cần thiết để đặt chỗ như: "
            }
            description={
              <ul>
                <li>Số lượng, vị trí chỗ trống trong từng khu vực, tầng hầm</li>
                <li>Thời gian hoạt động của bãi xe</li>
                <li>Phí gửi xe tương ứng theo thời gian thực</li>
              </ul>
            }
            url={"smart-parking-2-learn-more"}
          />
        </div>
        <div className="section-first">
          <SectionContent
            imgUrl={imgSecond}
            title={"Đặt trước chỗ đỗ xe nhanh chóng"}
            subDescription={
              "Sau khi gửi xe, người dùng hoàn toàn yên tâm làm việc khi ứng dụng sẽ cập nhật các thông tin:"
            }
            description={
              <ul>
                <li>Tình trạng phiên đỗ xe</li>
                <li>Thông báo khi sắp hết thời gian đăng kí để tránh mất thêm chi phí</li>
              </ul>
            }
            url={"smart-parking-2-learn-more"}
          />
        </div>
        <div className="section-slide-first">
          <SectionSlidesProduct title={t(`Parking-products`)} />
        </div>
        <div className="section-slide-product">
          <SectionSolutionLast />
        </div>
      </div>
    </Layout>
  );
};
export default withI18next()(SolutionPage);
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(
      filter: { lng: { eq: $lng }, ns: { eq: "translations" } }
    ) {
      ...LocaleFragment
    }
  }
`;
