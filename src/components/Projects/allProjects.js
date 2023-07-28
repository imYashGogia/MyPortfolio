import React from "react";
import ProjectCard from "./projectCard";
import { Consumer } from "../ContextAPI/context";

function AllProjects() {
  return (
    <Consumer>
      {(value) => {
        const { projects } = value;
        return (
          <div id="Projects">
            <div className="p-4 text-center bg-image project-bg">
              <div className="container mt-5">
                <h1
                  className="text-center text-white"
                  // data-aos="fade-up"
                >
                  Here are some of My{" "}
                  <span className="text-danger"> Projects!</span>
                </h1>
                <p
                  className="text-center border-bottom border-danger fst-italic text-white"
                  //   data-aos="fade-up"
                >
                  {" "}
                  <span className="text-danger">&#60; </span>I design and
                  develop experiences that make people's lives{" "}
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
      }}
    </Consumer>
  );
}

export default AllProjects;
