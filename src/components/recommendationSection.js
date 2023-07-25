import React from "react";
import RecommendationCard from "./recommendationCard";
import "./stylesheet.css";

function RecommendationSection() {
  const recommendationsData = [
    {
      id: 1,
      message:
        "I am writing this testimonial to express our deepest gratitude and appreciation for the outstanding work you did in creating our website.",
      name: "LAIPS College",
      projecturl: `To Yash Gogia,
      I am writing this testimonial to express our deepest gratitude and appreciation for the outstanding work you did in creating our website. Your expertise and dedication have truly exceeded our expectations, and we couldn't be happier with the results.
      From the very beginning, you demonstrated a keen understanding of our vision for the website. Your ability to translate our ideas into a visually stunning and user-friendly design was remarkable. The modern and intuitive interface you crafted perfectly encapsulates our brand's identity, making it a pleasure for our visitors to explore our products and services.
      Throughout the development process, your professionalism and responsiveness were exceptional. You consistently kept us informed about the project's progress and eagerly incorporated our feedback, ensuring that the final product aligned perfectly with our vision.
      Your technical expertise and problem-solving skills are truly commendable. Any challenges that arose during the project were met with diligence and creativity, resulting in a website that not only meets but surpasses our expectations.
      Working with you has been an absolute pleasure. Your friendly and approachable demeanor made communication effortless, and your ability to explain complex technical concepts in a clear and understandable manner was invaluable.
      We wholeheartedly recommend your services to anyone seeking a skilled and reliable web developer. Your passion for your work and commitment to client satisfaction are evident in every aspect of the website you created for us.
      Once again, thank you for your exceptional work. The impact of the website on our business has been immeasurable, and we are confident that it will continue to drive our success in the future.
      
      Best regards,
      Pinki Singhania
      Little Angel Institute of Law
      Contact Information -  9910047197`,
    },
    {
      id: 2,
      message: `I had the pleasure of working with Yash Gogia on the "FIESTA 2K23" website project of our college, and I am thoroughly impressed.`,
      name: "IITM College",
      projecturl: `To Yash Gogia - Website Developer Student:
      
      I had the pleasure of working with Yash Gogia on the "FIESTA 2K23" website project of our college, and I am thoroughly impressed. As a college student myself, I understand the challenges that come with juggling academic responsibilities and extracurricular projects, but Yash managed to excel in both areas.
      From the moment we started the "FIESTA 2K23" project, it was evident that he possessed a remarkable passion for web development. His enthusiasm was infectious, and it reflected in the quality of his work. They were receptive to our ideas and suggestions, and they even brought his own creative input, which significantly enhanced the overall design and functionality of the website.
      What sets Yash apart is his dedication and determination to deliver a top-notch product. Despite the tight timeline, they consistently met deadlines and ensured that the "FIESTA 2K23" website was not only visually appealing but also user-friendly and responsive across various devices.
      Communication with Yash was seamless throughout the project. They were always approachable and responded promptly to any queries we had. His professionalism and positive attitude made the collaboration a delightful experience.
      I have no hesitation in recommending Yash Gogia for any web development projects. His talent and commitment are evident in his work, and I have no doubt they will continue to achieve great things in his future endeavours.
      Thank you, Yash Gogia, for your outstanding services.
      It was a pleasure working with you, and I wish you all the best in your academic and professional journey.

      Sincerely,
      Akshay Kumar (Assistant Professor)
      Institute of Innovation in Technology and Management (IITM)`,
    },
  ];
  const finalRecommendationRow = [];
  for (let i = 0; i < recommendationsData.length / 3; i++) {
    let recommendationRow = recommendationsData.slice(i * 3, (i + 1) * 3);
    finalRecommendationRow.push(
      <div className="row" key={i}>
        {recommendationRow.map((recommendatiion) => (
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
        <h1
          className="text-center border-bottom border-danger pb-1"
          data-aos="fade-up"
        >
          Happy <span className="text-danger">Clients,</span> Happy{" "}
          <span className="text-danger">Projects!</span>
        </h1>
        {/* <p
          className="text-center border-bottom border-danger fst-italic"
          data-aos="fade-up"
        >
          {" "}
          <span className="text-danger">&#60; </span>I design and develop
          experiences that make people's lives{" "}
          <span className="fw-bold">simple.</span>{" "}
          <span className="text-danger">&#47;&#62;</span>
        </p> */}
        {finalRecommendationRow}
      </div>
    </div>
  );
}

export default RecommendationSection;
