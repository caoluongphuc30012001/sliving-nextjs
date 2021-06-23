import React from 'react';
import solutionImg from "@images/solution-page/header/header.svg";
const SolutionHeader = () => {
    return (
        <article>
            <section className="solution-header">
                <div className="solution-header-img">
                    <img src={solutionImg} alt="" />
                </div>
                <div className="solution-section-header">
                    <div className="section-header__title"><h3>Chiếu sáng thông minh</h3></div>
                    <div className="section-header__description">
                        <p>
                            Tính năng cốt lõi của chiếu sáng thông minh là tính linh hoạt của hệ thống điều khiển –
                            có nghĩa là người dùng sẽ không cần dựa vào công tắc treo tường truyền thống để bật/tắt đèn.
                            Hệ thống này sẽ giúp điều khiển ánh sáng ở bất cứ nơi nào trong ngôi nhà
                            thông qua ứng dụng trên điện thoại di động hoặc máy tính bảng. Không chỉ có vậy,
                            sản phẩm chiếu sáng thông minh còn có nhiều đặc điểm cực kỳ nổi bật như có thể
                            tự điều chỉnh công suất, độ sáng, hẹn giờ tắt mở, thay đổi màu sắc theo điệu nhạc...
                        </p>
                    </div>
                </div>
            </section>
        </article>
    )
}
export default SolutionHeader;
