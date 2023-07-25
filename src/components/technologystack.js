import React, { useState } from "react";
import Technologycard from "./technologycard";
import "./stylesheet.css";

function Technologystack() {
  const skills = [
    {
      id: 1,
      name: "HTML5",
      category: "frontend",
      imgurl:
        "https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/html5-512.png",
    },
    {
      id: 2,
      name: "CSS",
      category: "frontend",
      imgurl:
        "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png",
    },
    {
      id: 3,
      name: "JS",
      category: "frontend",
      imgurl:
        "https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png",
    },
    {
      id: 4,
      name: "BootStrap 5",
      category: "frontend",
      imgurl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png",
    },
    {
      id: 5,
      name: "React",
      category: "frontend",
      imgurl:
        "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    },
    {
      id: 6,
      name: "NodeJS",
      category: "backend",
      imgurl:
        "https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-512.png",
    },
    {
      id: 7,
      name: "Python",
      // category: "backend",
      category: "software",
      imgurl: "https://img.freepik.com/free-icon/snakes_318-368381.jpg",
    },
    {
      id: 8,
      name: "C",
      category: "software",
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
    },
    {
      id: 9,
      name: "C++",
      category: "software",
      imgurl: "https://www.freeiconspng.com/uploads/c--logo-icon-0.png",
    },
    {
      id: 10,
      name: "Git",
      category: "version",
      imgurl: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    },
    {
      id: 11,
      name: "Responsive Layout",
      category: "frontend",
      imgurl:
        "https://icon-library.com/images/icon-responsive/icon-responsive-9.jpg",
    },
    {
      id: 12,
      name: "MYSQL",
      category: "backend",
      imgurl:
        "https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png",
    },
    {
      id: 13,
      name: "MongoDB",
      category: "backend",
      imgurl:
        "https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png",
    },
  ];
  const [activeCategory, setActiveCategory] = useState("all");

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
              Backend
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
            <button
              data-aos="flip-left"
              className={`btn btn-outline-light m-2 glow-eff ${
                activeCategory === "version" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("version")}
            >
              Version Control
            </button>
          </div>
          <div className="col-md-8 right-side">{finalSkillRow}</div>
        </div>
      </div>
    </div>
  );
}

export default Technologystack;
