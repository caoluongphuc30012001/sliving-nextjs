import React from "react";
import BannerVideo from "../../banner-video";
import CardHeader from "./card-header";
const CardSection = ({ title, subtitle, description, backgroundColor, color, dataImg, isButton, videoUrl, border , borderReadius }) => {
    return (
        <div className="card-section card-wrap">
            <CardHeader
                title={title}
                subtitle={subtitle}
                description={description}
                backgroundColor={backgroundColor}
                color={color}
                isButton={isButton}
                border={border}
                borderReadius={borderReadius}
            />
            {!videoUrl && (<div className="img-des">
                {dataImg && (<img src={dataImg} alt="" className="img-banner" />)}
            </div>)}
            {videoUrl && (<div className="card-section-video">
                <BannerVideo videoUrl={videoUrl} />
            </div>)}
        </div>
    );
}
export default CardSection;
