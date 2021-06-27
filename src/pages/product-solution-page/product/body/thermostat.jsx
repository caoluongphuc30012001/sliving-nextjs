import React from 'react';
import CardSection from "@components/card/card-content/card-section";
import imgtherm from "@images/product/Thermostat.svg";
import video from "../../../../videos/Thermostat.mp4";
const Thermostat = ({ videoUrl }) => {
    return (
        <div className="Thermostat container-wrap">
            {
                videoUrl ? (
                    <CardSection title={"Advanced Technology"}
                        description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"}
                        dataImg={imgtherm} videoUrl={videoUrl}
                    />
                ) : (
                    <CardSection title={"Advanced Technology"}
                        description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"}
                        dataImg={imgtherm} videoUrl={video}
                    />
                )
            }
        </div>
    )
}
export default Thermostat;
