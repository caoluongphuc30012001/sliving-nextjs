import React from "react";
import ButtonMore from "@components/button/button-more.jsx";
const SectionBannerReason = () => {
    return (
        <div className="hp-banner">
            <div className="container-wrap">
                <div className="hp-banner-wrap">
                    <div className="hp-banner-title"><span>Lý do bạn nên lựa chọn Sliving</span></div>
                    <div className="hp-banner-description"><span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit...</span></div>
                    <div className="hp-banner-btn"> <ButtonMore backgroundColor={'#F47403'} color={'#ffffff '} borderReadius={'16px'} padding={'10px 20px'} fontWeight={'700'} /></div>
                </div>
            </div>
        </div>
    );
}
export default SectionBannerReason;
