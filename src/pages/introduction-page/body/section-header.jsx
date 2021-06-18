import React from 'react';
import iconArrowRight from "@images/icon/icon-arrow right.svg";
const SectionHeader = () => {
    return (
        <div className="section-introduction__header">
            <div className="container-wrap">
                <div className="section-introduction-wrap">
                    <div className="introduction-title fs-48 txt-blue">
                        <span>SLIVING -</span>
                        <span>chúng tôi là ai?</span>
                    </div>
                    <div className="introduction-description fs-16">
                        <p>
                            Sliving luôn không ngừng phát triển và
                            cho ra đời các giải pháp công nghệ tiên tiến
                            giúp mỗi người dùng có thể trải nghiệm một cuộc sống tiện nghi,...
                        </p>
                    </div>
                    <div className="button-more">
                        <button className="btn-about-prod">
                            <span className="fs-18">Tìm hiểu thêm</span> <img src={iconArrowRight} alt="icon arrow right" />
                        </button>
                    </div>
                </div></div>
        </div>
    )
}
export default SectionHeader;
