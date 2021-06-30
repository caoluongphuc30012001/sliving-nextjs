import React from "react";
import SolutionSuggestion from "@components/SolutionSuggestion";
import { useTranslation } from 'react-i18next';
const SolutionSlide = (props) => {
  const { t } = useTranslation();
  return (
    <div className="container-wrap">
      <SolutionSuggestion />
    </div>);
}
export default SolutionSlide;
