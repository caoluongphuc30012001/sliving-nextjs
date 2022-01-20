import React from "react";
import vector from "@images/lighting-page/Vector.svg"
import iphone from "@images/lighting-page/image118.svg"
import brightness from "@images/lighting-page/Frame37933.svg"
import home from "@images/lighting-page/Frame37821.svg"
import indicator from "@images/lighting-page/Frame37925.svg"
import leave from "@images/lighting-page/Frame37930.svg"
import shadow from "@images/lighting-page/image119.svg"
import { useTranslation } from "react-i18next";
const LightingHeader = () => {
  const { t } = useTranslation();
  return (
    <header>
      <div className="headerContainer container-v2">
       
      </div>
      <div className="container">
          <div className="headerContent">
            <h1>
              {t(`solution.lighting.header`)}
              <span>
                {t(`solution.lighting.color`)}
                <img src={vector} alt="vector" />
              </span>
            </h1>
            <p>{t(`solution.lighting.subHeader`)}</p>
          </div>
          <div className="headerImage" style={{transform:'translateY(10%)'}}>
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
    </header>
  );
};
export default LightingHeader;
