import React from 'react';
import SolutionSuggestion from "@components/card/SolutionSuggestion";
import { dataSolutionSuggestion } from "@mock/data";
const SectionSolution = () => {
    return (
        <div className="section-introduction__solution">
            <div className="introduction__solution-wrap container-wrap">
                <SolutionSuggestion data={dataSolutionSuggestion} />
            </div>
        </div>
    );
}
export default SectionSolution;
