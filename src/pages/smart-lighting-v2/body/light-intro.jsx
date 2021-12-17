import React from "react";
import Introduction from "../../../components/section/introduction/introduction";
import url1 from "@images/lighting-page/family.svg";
import url2 from "@images/lighting-page/many.svg";
import url3 from "@images/lighting-page/phone.svg";
const IntroMain = () => {

  return (
    <section className="position-relative">
      <div className="lightingBackground"></div>
      <div className="lightingIntro container">
      <Introduction
        imgUrl={url1}
        title={"Protect your health"}
        description={`Sliving's lighting system prioritizes protecting users' health through the following criteria:
Wide variety of CRI colour rendering index (CRI=70-95): suitable for work requirements in many different spaces, from houses, offices to factories... contributing to protecting eye health
Ability to change colour temperature: suitable for many activities, helping to focus on work, good mood and sound sleep for users`}
      />
            <Introduction
        imgUrl={url2}
        revert
        title={"Energy saving"}
        description={`Sliving's lighting solutions ensure energy savings through the following advantages:
        Maintains high luminescence efficiency (>100 lm/w)
        Long LED lamp life thanks to the use of modern led chip technology (SMD-COB), for an average lifespan of 50,000 hours of lighting
        The remote control system helps overcome the situation of forgetting to turn off the device when leaving the workplace.`}
      />
                  <Introduction
        imgUrl={url3}   
        title={"Automatic control"}
        description={`Sliving's Smart Lighting makes the lighting system smarter through the following factors:
        Control and control the system remotely via the app
        Set up an activity scenario by the schedule of activities and work`}
      />
      </div>
    </section>
  );
};
export default IntroMain;
