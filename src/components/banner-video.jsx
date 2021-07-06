import React from 'react';
const BannerVideo = ({ videoUrl }) => {
    return (
        <div className="section-banner-video">
            <video muted autoPlay loop playsInline className="embed-responsive-item">
                <source src={videoUrl} srcset={videoUrl} type="video/mp4" />
            </video>
        </div>
    );
}
export default BannerVideo;
