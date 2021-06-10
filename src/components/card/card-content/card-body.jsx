import React from 'react';
import ImageDescription from "./image-description.jsx";
const CardBody = ({ arrImg }) => {
    return (
        <>
            {arrImg && (
                <div className="card-body-des"><ImageDescription arrImg={arrImg} /></div>
            )}
        </>
    );
};

export default CardBody;
