import React from "react";
import "./stylesheet.css";
import AOS from "aos";
import "aos/dist/aos.css";
import profile from "../Assets/Backgrounds/Profile4.png";
import Resume from "../Assets/Yash_Resume.pdf";

function AboutMe() {
  AOS.init();
  return (
    <div>
      <div id="About" className="bg-dark text-white pt-5 pb-5">
        <div className="container pt-3">
          <h1 className="text-center">
            Who <span className="text-danger">I am?</span>{" "}
          </h1>
          <p
            className="text-center border-bottom border-danger fst-italic"
            data-aos="fade-up"
          >
            {" "}
            <span className="text-danger">&#60; </span> one Who Measures
            programming progress by lines of code{" "}
            <span className="text-danger">&#47;&#62;</span>
          </p>

          <div className="row text-center mx-auto pt-2" data-aos="fade-up">
            <div
              className="col-lg-3 col-sm-12"
              id="img-sec"
              data-aos="fade-right"
            >
              <img
                src={profile}
                className="img-fluid img-thumbnail "
                alt="port-img"
              />
            </div>
            <div className="col-lg col-sm-12 pt-4" id="intro-sec">
              <div className="container text-center ">
                <div className="row">
                  <div className="col-md">
                    <p className="text-center border-danger fst-italic">
                      {" "}
                      <span className="text-danger">&#60; </span> What I am
                      Currently doing?{" "}
                      <span className="text-danger">&#47;&#62;</span>
                    </p>
                    <hr />
                    <p>
                      Currently, I am actively seeking new opportunities and
                      challenges in the field of web development. I am open to
                      collaborating with innovative teams and working on
                      exciting projects that allow me to apply my skills.
                    </p>
                  </div>
                  <div className="col-md">
                    <p className="text-center border-danger fst-italic">
                      {" "}
                      <span className="text-danger">&#60; </span> What I can do?{" "}
                      <span className="text-danger">&#47;&#62;</span>
                    </p>
                    <hr />
                    <p>
                      I can build complete web applications with backend API
                      systems, focusing on the MERN stack. I excel in code
                      optimization to enhance performance and enjoy transforming
                      ideas into functional browser-based projects.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md mt-5">
                    <p className="text-center border-danger fst-italic">
                      {" "}
                      <span className="text-danger">&#60; </span>What do I
                      believe in?{" "}
                      <span className="text-danger">&#47;&#62;</span>
                    </p>
                    <hr />
                    <p>
                      As a developer, I believe in the power of continuous
                      learning and staying updated with the latest advancements
                      in the web development industry.
                    </p>
                  </div>
                  <div className="col-md mt-5">
                    <p className="text-center border-danger fst-italic">
                      {" "}
                      <span className="text-danger">&#60; </span>How can I help
                      you? <span className="text-danger">&#47;&#62;</span>
                    </p>
                    <hr />
                    <p>
                      I can be a valuable addition to your team as a proficient
                      developer, contributing my skills. I can help bring your
                      ideas to life and optimize code for better performance.
                      {/* If you have a project that requires building
                      a complete web application, I can take it from the
                      conceptual stage to the final implementation. I can also
                      collaborate with your existing team to enhance and
                      optimize the performance of your web applications */}
                    </p>
                  </div>
                </div>
              </div>
              <a href={Resume} target="_blank" rel="noreferrer">
                <button
                  type="button"
                  data-aos="flip-up"
                  className="btn btn-primary btn-outline-light btn-lg m-2 glow-eff"
                >
                  <i className="fa-solid fa-download"></i> RESUME
                </button>
              </a>
            </div>
          </div>
          {/* <div className="container row text-center pt-3 mx-auto">
            <h3 className=" code-font text-success pb-3 text-decoration-underline">
              &#60;Technologies have Hands-on&#47;&#62;
            </h3>
            <div className="col">
              <figure>
                <img
                  src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/html5-512.png"
                  data-aos="flip-left"
                  className="img-size"
                  alt="html-img"
                />
                <figcaption className="text-center">HTML</figcaption>
              </figure>
            </div>
            <div className="col">
              <figure>
                <img
                  src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"
                  data-aos="flip-left"
                  className="img-size"
                  alt="css-img"
                />
                <figcaption className="text-center">CSS</figcaption>
              </figure>
            </div>
            <div className="col">
              <figure>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"
                  data-aos="flip-left"
                  className="img-size"
                  alt="js-img"
                />
                <figcaption className="text-center">JavaScript</figcaption>
              </figure>
            </div>
            <div className="col">
              <figure>
                <img
                  src="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png"
                  data-aos="flip-left"
                  className="img-size"
                  alt="react-img"
                />
                <figcaption className="text-center">React</figcaption>
              </figure>
            </div>
            <div className="col">
              <figure>
                <img
                  src="https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-512.png"
                  data-aos="flip-left"
                  className="img-size"
                  alt="nodejs-img"
                />
                <figcaption className="text-center">NodeJS</figcaption>
              </figure>
            </div>
            <div className="col">
              <figure>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png"
                  data-aos="flip-left"
                  className="img-size"
                  alt="mongodb-img"
                />
                <figcaption className="text-center">MongoDB</figcaption>
              </figure>
            </div>
            <div className="col">
              <figure>
                <img
                  src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png"
                  data-aos="flip-left"
                  className="img-size"
                  alt="mysql-img"
                />
                <figcaption className="text-center">MySQL</figcaption>
              </figure>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
