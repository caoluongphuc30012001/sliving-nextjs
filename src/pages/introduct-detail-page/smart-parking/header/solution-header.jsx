import React from 'react';
import solutionImg from "@images/solution-page/header/header.svg";
import { useTranslation } from 'react-i18next';
const SolutionHeader = () => {
    const { t } = useTranslation();
    return (
        <article>
            <section className="solution-header">
                <div className="solution-header-img">
                    <img src={solutionImg} alt="" />
                </div>
                <div className="solution-section-header">
                    <div className="section-header__title"><h3>{t(`Smart-Parking`)}</h3></div>
                    <div className="section-header__description">
                        <p>
                            Tại các thành phố lớn, lượng phương tiện giao thông càng tăng cao, trong khi quỹ đất dành cho bãi đỗ,
                            gửi xe lại chưa được tăng theo tương xứng.
                            Mô hình bãi đổ xe thông minh hoạt động hoàn toàn tự động, tiết kiệm thời gian,
                            góp phần gia tăng sức chứa cho bến bãi và tạo thêm nhiều tiện ích cho người sử dụng.
                            Chỉ với sự kết hợp chặt chẽ của 4 sản phẩm : Cảm biến siêu âm, hộp đèn led,
                            bảng led và camera tạo nên sự khác biệt so với các bãi đổ xe thông thường.
                        </p>
                    </div>
                </div>
            </section>
        </article>
    )
}
export default SolutionHeader;
