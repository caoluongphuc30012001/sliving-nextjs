import React from "react";
import imgPer from "@images/home-page/slide/permission.svg";
import { Link } from "gatsby";
import useGetLgn from "@hook/useGetLgn";
const CardVertical = ({ imgUrl, description, path }) => {
    const Lgn = useGetLgn();
    return (
        <div className="card-sol">
            <div className="card-sol-wrap" >
                <div className="card-sol-header">
                    <Link to={`${Lgn}product/${path}/`} className="card-link">
                        <img src={imgUrl} alt="" />
                    </Link>
                </div>
                <div className="card-sol-perm d-flex -al-center">
                    <div className="sol-perm-item">
                        <img src={imgPer} alt="" />
                    </div>
                    <div className="sol-perm-item">
                        <img src={imgPer} alt="" />
                    </div> <div className="sol-perm-item">
                        <img src={imgPer} alt="" />
                    </div> <div className="sol-perm-item">
                        <img src={imgPer} alt="" />
                    </div>
                </div>
                <div className="card-sol-des">
                    <span className="fs-16 txt-blue">{description}</span>
                </div>
            </div>
        </div >
    );
}
export default CardVertical;
