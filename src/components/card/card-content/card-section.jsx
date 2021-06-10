import React from "react";
import CardHeader from "./card-header";
const CardSection = ({ title, subtitle, description, backgroundColor, color, dataImg, arrImg, isButton }) => {
    return (
        <div className="card-section card-wrap">
            <CardHeader title={title} subtitle={subtitle} description={description} backgroundColor={backgroundColor} color={color} isButton={isButton}
            />
            <div className="img-des">
                {dataImg && (<img src={dataImg} alt="" className="img-banner" />)}
            </div>
        </div>
    );
}
export default CardSection;
