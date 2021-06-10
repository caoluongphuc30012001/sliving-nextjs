import React from "react";
import CardHeader from "@components/card/card-content/card-header";
import headerSolImg from "@images/solution-page/header/img-header-solution.svg";
const SectionApplication = () => {
    return (<>
        <CardHeader title={"Những ứng dụng của sản phẩm cho từng khu vực trong công trình"}
            description={"The powerful system hardware integrates the functions of different devices. Convenient operation and excellent interaction make the home life experience more natural and and comfortable."}
            titleBtn={"Tư vấn sản phẩm"}
            subtitle={"Sub-title explaining"}
            color={"#004BA1"}
            isButton={true}
        />
        <div className="solution-header-img">
            <img src={headerSolImg} alt="sliving" />
        </div>
    </>)
}

export default SectionApplication;
