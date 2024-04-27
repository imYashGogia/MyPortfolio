import React, { useState } from "react";
import Technologycard from "./technologycard";
import { Consumer } from "../ContextAPI/context";

function Technologystack() {
  const [activeCategory, setActiveCategory] = useState("all");
  return (
    <Consumer>
      {(value) => {
        const { skills } = value;

        const filteredSkills =
          activeCategory === "all"
            ? skills
            : skills.filter((skill) => skill.category === activeCategory);

        // Function to handle button click and update active category
        const handleButtonClick = (category) => {
          setActiveCategory(category);
        };

        // Divide the filtered skills into rows of 4 for rendering
        const finalSkillRow = [];
        for (let i = 0; i < filteredSkills.length / 4; i++) {
          let skillRow = filteredSkills.slice(i * 4, (i + 1) * 4);
          finalSkillRow.push(
            <div className="d-flex justify-content-around py-3" key={i}>
              {skillRow.map((skill) => (
                <Technologycard skill={skill} key={skill.id} />
              ))}
            </div>
          );
        }

        return (
          <div className="text-white w-100 bg-dark">
            <div className="container row text-center pt-3 mx-auto">
              <h1 data-aos="fade-up">
                <span className="text-danger">Technology</span> Stack{" "}
                <span className="text-danger">&#x3b;</span>
              </h1>
              <p
                className="text-center border-bottom border-danger fst-italic"
                data-aos="fade-up"
              >
                <span className="text-danger">&#60; </span> I design, Develop &
                Deliver using these weapons{" "}
                <span className="text-danger">&#47;&#62;</span>
              </p>
              <div className="row">
                <div className="col-md-4 left-side my-auto">
                  <button
                    data-aos="flip-left"
                    className={`btn btn-outline-light m-2 glow-eff ${
                      activeCategory === "all" ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick("all")}
                  >
                    Weapons
                  </button>
                  <br />
                  <button
                    data-aos="flip-left"
                    className={`btn btn-outline-light m-2 glow-eff ${
                      activeCategory === "frontend" ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick("frontend")}
                  >
                    Frontend
                  </button>
                  <button
                    data-aos="flip-left"
                    className={`btn btn-outline-light m-2 glow-eff ${
                      activeCategory === "backend" ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick("backend")}
                  >
                    Backend & Database
                  </button>
                  <button
                    data-aos="flip-left"
                    className={`btn btn-outline-light m-2 glow-eff ${
                      activeCategory === "software" ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick("software")}
                  >
                    Software Development
                  </button>
                  <br />
                  <button
                    data-aos="flip-left"
                    className={`btn btn-outline-light m-2 glow-eff ${
                      activeCategory === "tools" ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick("tools")}
                  >
                    Tools
                  </button>
                  <button
                    data-aos="flip-left"
                    className={`btn btn-outline-light m-2 glow-eff ${
                      activeCategory === "designing" ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick("designing")}
                  >
                    UI/UX
                  </button>
                </div>
                <div className="col-md-8 right-side">{finalSkillRow}</div>
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default Technologystack;
