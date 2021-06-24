import React from 'react';
import solutionImg from "@images/introduction-page/smart-security/header.svg";
const IntroductHeader = () => {
    return (
        <article>
            <section className="introduct-header">
                <div className="introduct-header-img">
                    <img src={solutionImg} alt="" />
                </div>
                <div className="introduct-section-header">
                    <div className="section-header__title"><h3>An ninh thông minh</h3></div>
                    <div className="section-header__description">
                        <p>
                            Hệ thống an ninh thông minh với các thiết bị an ninh được chế tạo ra nhằm mục đích thay thế con người bảo vệ tài sản, cá nhân hóa đời sống riêng tư một cách toàn diện nhất.
                        </p>
                    </div>
                </div>
            </section>
        </article>
    )
}
export default IntroductHeader;
