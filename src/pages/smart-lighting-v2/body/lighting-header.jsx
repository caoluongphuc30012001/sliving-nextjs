import React from "react";
import vector from "@images/lighting-page/Vector.svg"
import iphone from "@images/lighting-page/image118.svg"
import brightness from "@images/lighting-page/Frame37933.svg"
import home from "@images/lighting-page/Frame37821.svg"
import indicator from "@images/lighting-page/Frame37925.svg"
import leave from "@images/lighting-page/Frame37930.svg"
import ButtonShop from "../../../components/button/button-shop";
import shadow from "@images/lighting-page/image119.svg"

const LightingHeader=()=>{
    return <header>
        <div className="headerContainer">
        <div className="container">
            <div className="headerContent">
                <h1>The technology of light gives your<span> colour. <img src={vector} alt="vector" /></span></h1>
                <p>Complex project management experience. When selecting an offshore software development company, ensure that they have</p>
                {/* <div>
                    <ButtonShop content='Shop now' />
                    <button type="button" class="btn btn-outline-warning">Learn more</button>
                </div> */}
            </div>
            <div className="headerImage">
                <div>
                <img src={iphone} alt="iphone" />
                <img src={brightness} alt="brightness" className="brightness" />
                <img src={home} alt="home" className="home" />
                <img src={indicator} alt="indicator" className="indicator" />
                <img src={leave} alt="leave" className="leave" />
                <img src={shadow} alt="shadow" className="shadowIphone" />
                </div>
            </div>
        </div>
        </div>
    </header>
}
export default LightingHeader;