import React from "react";
import SolutionSuggestion from "@components/card/SolutionSuggestion";
import { dataSolutionSuggestion } from "@mock/data";
const SolutionSlide = () => {
  return (
    <div className="container-wrap">
      <SolutionSuggestion data={dataSolutionSuggestion} />
    </div>);
}
export default SolutionSlide;
