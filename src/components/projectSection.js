import React from "react";
import "./stylesheet.css";
import ProjectCard from "./projectCard";
// import gadgets from "../Assets/mockups/gadgets.png";
// import laips from "../Assets/mockups/laips2.png";
// import fiesta from "../Assets/mockups/fiesta.png";
// import techtonics from "../Assets/mockups/techtonics.png";
// import form from "../Assets/mockups/form.png";
// import landingPage from "../Assets/mockups/landingpage.png";
// import tributepage from "../Assets/mockups/tributepage.png";
// import realestate from "../Assets/mockups/realestate.png";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website ",
      link: "/#",
      // img: "https://imyashgogia.github.io/Portfolio/Assets/mockups/gadgets.png",
      img: "https://imyashgogia.github.io/Portfolio/Assets/mockups/gadgets.png",
      lang: "MERN Stack",
    },
    {
      id: 2,
      title: "College Website Project",
      link: "http://laipscollege.in/",
      img: "https://imyashgogia.github.io/Portfolio/Assets/mockups/laips2.png",
      lang: "HTML, CSS, JS, REACT",
    },
    {
      id: 3,
      title: "College's Annual Fest Page",
      link: "https://iitmjp.ac.in/fiesta2k23/",
      img: "https://imyashgogia.github.io/Portfolio/Assets/mockups/fiesta.png",
      lang: "HTML, CSS, JS",
    },
    {
      id: 4,
      title: "College's TECH Event Page",
      link: "https://imyashgogia.github.io/Techtonics/",
      img: "https://imyashgogia.github.io/Portfolio/Assets/mockups/techtonics.png",
      lang: "HTML, CSS",
    },
    {
      id: 5,
      title: "Basic Survey Form ",
      link: "https://imyashgogia.github.io/Survey-Form/",
      img: "https://imyashgogia.github.io/Portfolio/Assets/mockups/form.png",
      lang: "HTML, CSS",
    },
    {
      id: 6,
      title: "Product Landing Page ",
      link: "https://imyashgogia.github.io/Product-Landing-Page/",
      img: "https://imyashgogia.github.io/Portfolio/Assets/mockups/landingpage.png",
      lang: "HTML, CSS",
    },
    {
      id: 7,
      title: "Tribute page",
      link: "https://imyashgogia.github.io/Tribute-Page/",
      img: "https://imyashgogia.github.io/Portfolio/Assets/mockups/tributepage.png",
      lang: "HTML, CSS",
    },
    {
      id: 8,
      title: " Real Estate Webpage",
      link: "https://imyashgogia.github.io/real-estate-landing-page/",
      img: "https://imyashgogia.github.io/Portfolio/Assets/mockups/realestate.png",
      lang: "HTML, CSS",
    },
  ];
  return (
    <div id="Projects">
      <div className="p-4 text-center bg-image project-bg">
        <div className="container mt-5">
          <h1 className="text-center text-white" data-aos="fade-up">
            Here are some of My<span className="text-danger">Projects!</span>
          </h1>
          <p
            className="text-center border-bottom border-danger fst-italic text-white"
            data-aos="fade-up"
          >
            {" "}
            <span className="text-danger">&#60; </span>I design and develop
            experiences that make people's lives{" "}
            <span className="fw-bold">simple.</span>{" "}
            <span className="text-danger">&#47;&#62;</span>
          </p>
          <div className="row text-center">
            {projects.map((project) => (
              <div className="col mt-4" key={project.id}>
                <ProjectCard
                  title={project.title}
                  link={project.link}
                  img={project.img}
                  lang={project.lang}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
