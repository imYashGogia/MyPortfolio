import React from "react";
import RecommendationCard from "./recommendationCard";
import { Consumer } from "../ContextAPI/context";

function RecommendationSection() {
  return (
    <Consumer>
      {(value) => {
        const { recommendationsData } = value;
        const recommendationsForHomeScreen = recommendationsData.slice(0, 3); // Get only the first 3 recommendations
        return (
          <div className="recommendation-bg py-3" id="Recommendations">
            <div className="container py-5">
              <h1
                className="text-center border-bottom border-danger pb-1"
                data-aos="fade-up"
              >
                Happy <span className="text-danger">Clients,</span> Happy{" "}
                <span className="text-danger">Projects!</span>
              </h1>
              <div className="row">
                {recommendationsForHomeScreen.map((recommendation) => (
                  <RecommendationCard
                    recommendationprop={recommendation}
                    key={recommendation.id}
                  />
                ))}
              </div>
              <div className="text-end pt-3">
                <a
                  className="no-text-decor pt-2  text-black-hover-crimson"
                  href="/AllRecommendation"
                >
                  View All Recommendations
                  <span className="py-auto">
                    {" "}
                    <i className="fa-solid fa-arrow-right fa-fade fa-lg"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default RecommendationSection;
