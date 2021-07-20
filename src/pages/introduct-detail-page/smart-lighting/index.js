import React from "react";
import Layout from "@components/layout";
import { graphql } from "gatsby";
import { withI18next } from "@wapps/gatsby-plugin-i18next";
import "./style.scss";
import SolutionHeader from "./header/solution-header";
import SolutionSlides from "./body/section-solutions-slide";
import SectionContent from "./body/section-content";
import imgFirst from "@images/solution-page/body/section2.svg";
import imgSecond from "@images/solution-page/body/PK-02-1.svg";
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
            url={"smart-lighting-1-learn-more"}
            title={"Bảo vệ sức khoẻ"}
            subDescription={
              "Hệ thống chiếu sáng của SLiving ưu tiên hướng đến bảo vệ sức khoẻ người dùng thông qua các tiêu chí:"
            }
            description={
              <ul>
                <li>
                  Chỉ số hoàn màu CRI đa dạng (CRI=70-95): phù hợp với yêu cầu
                  công việc ở nhiều không gian khác nhau, từ nhà ở, văn phòng
                  đến nhà xưởng... góp phần bảo vệ sức khoẻ đôi mắt{" "}
                </li>
                <li>
                  Khả năng thay đổi nhiệt độ màu: phù hợp với nhiều hoạt động,
                  giúp tập trung làm việc, tâm trạng tốt và giấc ngủ ngon cho
                  người dùng
                </li>
              </ul>
            }
          />
        </div>
        <div className="section-second">
          <SectionContent
            imgUrl={imgSecond}
            url={"smart-lighting-2-learn-more"}
            title={"Tiết kiệm điện năng"}
            subDescription={
              "Giải pháp chiếu sáng của SLiving đảm bảo tiết kiệm điện năng qua các ưu điểm:"
            }
            description={
              <ul>
                <li>Duy trì hiệu suất phát quang cao (&gt;100 lm/w) </li>
                <li>
                  Tuổi thọ đèn LED cao nhờ sử dụng công nghệ chip led hiện đại
                  (SMD-COB), cho tuổi thọ trung bình 50.000 giờ chiếu sáng
                </li>
                <li>
                  Hệ thống điều khiển từ xa giúp khắc phục tình trạng quên tắt
                  thiết bị khi đã rời khỏi nơi làm việc
                </li>
              </ul>
            }
          />
        </div>
        <div className="section-first">
          <SectionContent
            imgUrl={imgSecond}
            url={"smart-lighting-2-learn-more"}
            title={"Điều khiển tự động"}
            subDescription={
              "Smart Lighting của SLiving giúp hệ thống chiếu sáng trở nên thông minh hơn qua các yếu tố:"
            }
            description={
              <ul>
                <li>Kiểm soát và điều khiển hệ thống từ xa qua ứng dụng</li>
                <li>
                  Thiết lập kịch bản hoạt động phù hợp với lịch sinh hoạt, công
                  việc
                </li>
              </ul>
            }
          />
        </div>
        <div className="section-slide-first">
          <SectionSlidesProduct title={t(`LED-Downlight`)} />
        </div>
        <div className="section-slide-second">
          <SectionSlidesProduct title={"LED Panel"} />
        </div>
        <div className="section-slide-third">
          <SectionSlidesProduct title={"LED Spotlight"} />
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
