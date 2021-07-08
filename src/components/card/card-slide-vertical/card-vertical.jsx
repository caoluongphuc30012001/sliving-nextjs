import React from "react";
import imgPer from "@images/home-page/slide/permission.svg";
import { Link } from "gatsby";
import useGetLgn from "@hook/useGetLgn";
const CardVertical = ({ imgUrl, title, path }) => {
    const Lgn = useGetLgn();
    const standardized = (str) => {
        var convertToArray = str.toLowerCase().split(' ');
        var result = convertToArray.map((val) => {
          return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
        });
        
        return result.join(' ');
      }

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
                    <span className="fs-16 txt-blue">{standardized(title)}</span>
                </div>
            </div>
        </div >
    );
}
export default CardVertical;
