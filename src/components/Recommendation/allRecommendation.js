import React from "react";
import RecommendationCard from "./recommendationCard";
import { Consumer } from "../ContextAPI/context";

function AllRecommendation() {
  return (
    <Consumer>
      {(value) => {
        const { recommendationsData } = value;
        const finalRecommendationRow = [];
        for (let i = 0; i < recommendationsData.length / 3; i++) {
          let recommendationRow = recommendationsData.slice(i * 3, (i + 1) * 3);
          finalRecommendationRow.push(
            <div className="row" key={i}>
              {recommendationRow.slice(0, 3).map((recommendatiion) => (
                <RecommendationCard
                  recommendationprop={recommendatiion}
                  key={recommendatiion.id}
                />
              ))}
            </div>
          );
        }
        return (
          <div className="recommendation-bg py-3" id="Recommendations">
            <div className="container py-5">
              <h1 className="text-center border-bottom border-danger pb-1">
                Happy <span className="text-danger">Clients,</span> Happy{" "}
                <span className="text-danger">Projects!</span>
              </h1>
              {finalRecommendationRow}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default AllRecommendation;
