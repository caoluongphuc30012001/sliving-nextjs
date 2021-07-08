import React from "react";
import BannerVideo from "../../banner-video";
import CardHeader from "./card-header";
const CardSection = ({ title, subtitle, description, imgURL, backgroundColor, color, isButton, videoUrl, border, borderReadius, dataImg }) => {
    return (
        <div className="card-section card-wrap">
            {
                imgURL && (
                    <div className="img-des">
                        <img src={imgURL} alt="" className="img-banner" />
                    </div>
                )
            }
            {
                videoUrl && (
                    <>
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
                        <div className="card-section-video">
                            <BannerVideo videoUrl={videoUrl} />
                        </div>
                    </>
                )
            }{
                dataImg && (
                    <>
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
                        <div className="img-des">
                            <img src={dataImg} alt="" className="img-banner" />
                        </div>
                    </>
                )
            }
        </div>
    );
}
export default CardSection;
