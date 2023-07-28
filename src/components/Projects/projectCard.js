import React from "react";

function ProjectCard(props) {
  const { title, link, img, lang } = props;
  return (
    <div className="card hover-zoom glow-eff card-size mx-auto">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className=" no-text-decor"
      >
        <img
          src={img}
          // data-aos="zoom-in"
          className="card-img-top img-thumbnail"
          alt="project-img"
        />
        <div className="card-body">
          <p className="card-text">
            <span className="text-danger">&#60; </span>{" "}
            <span className="fw-bold"> {title}</span>
            <span className="text-danger">&#47;&#62;</span>
            <br /> Using {lang}
          </p>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
