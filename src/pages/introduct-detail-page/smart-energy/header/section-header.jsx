import React from 'react';
import solutionImg from "@images/introduction-page/smart-energy/header.svg";
const IntroductHeader = () => {
    return (
        <article>
            <section className="introduct-header">
                <div className="introduct-header-img">
                    <img src={solutionImg} alt="" />
                </div>
                <div className="introduct-section-header">
                    <div className="section-header__title"><h3>Tiết kiệm năng lượng</h3></div>
                    <div className="section-header__description">
                        <p>
                        Giải pháp này có nhiều tính năng như: thu thập tự động giá trị các thông số năng lượng: tổng năng lượng tiêu thụ tích lũy (bao gồm số điện, tấn hơi, mét khối nước…), 
                        năng lượng tiêu thụ tức thời và chất lượng năng lượng…; gửi ngay các cảnh báo, sự kiện bất thường qua web trên máy tính, qua ứng dụng trên điện thoại thông minh và máy tính bảng. 
                        Nhờ thông tin này, người dùng có thể kịp thời xử lý các sự cố, tránh được tai nạn cháy nổ, hư hỏng máy móc do sự cố điện...
                        </p>
                    </div>
                </div>
            </section>
        </article>
    )
}
export default IntroductHeader;
