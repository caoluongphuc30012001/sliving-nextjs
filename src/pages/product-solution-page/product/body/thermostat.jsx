import React from 'react';
import CardSection from "@components/card/card-content/card-section";
const Thermostat = ({ videoUrl, imgURL }) => {
    return (
        <div className="Thermostat container-wrap">
            {
                videoUrl && (
                    <CardSection title={"Advanced Technology"}
                        description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"}
                        videoUrl={videoUrl}
                    />
                )  
            }
            {
                imgURL && (
                    <CardSection imgURL={imgURL}/>
                )
            }
        </div>
    )
}
export default Thermostat;
