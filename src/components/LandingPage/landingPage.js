import React from "react";
import Typewriter from "typewriter-effect";
function LandingPage() {
  return (
    <div id="Home">
      <div id="intro-example" className="p-4 text-center bg-image bg-class">
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3 code-font">
                <code className="text-danger"> &lt;</code>Hello World!
                <code className="text-danger">/&gt; </code>
              </h1>
              <h2 className="mb-4">
                I am <span className="text-success">Yash Gogia</span>
              </h2>
              <div className="d-flex justify-content-center">
                <h3>And I do</h3>
                <h3 id="word" className="text-success fw-bold ">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Freelancing")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Software Development")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Front-end Development")
                        .pauseFor(1000)
                        .start()
                        .deleteAll()
                        .typeString("Web Development")
                        .start();
                    }}
                  />
                </h3>
              </div>
              <br />
              <div className="d-flex justify-content-center">
                <div className="hover-container">
                  <a
                    className="btn btn-outline-light btn-sm m-2 bg-danger glow-eff btn-hover"
                    href="mailto:yashgogia2001@gmail.com"
                    role="button"
                    rel="noreferrer"
                  >
                    I want a Website
                  </a>
                </div>
                <div className="hover-container">
                  <a
                    className="btn btn-outline-light m-2 btn-sm glow-eff btn-hover"
                    target="_blank"
                    rel="noreferrer"
                    href="https://linkedin.com/in/imyashgogia"
                    role="button"
                  >
                    I want to Hire
                  </a>
                </div>
              </div>

              <section id="section05" className="demo text-center ">
                <a href="#About" className="text-center ">
                  <span></span>Scroll
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
      <a href="#Home">
        <i className="scroll-up" id="scroll-up">
          <img
            data-aos="fade-up"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImEiPgogICA8cGF0aCBkPSJtMTM5LjIxIDEzOS4yMWg0NzMuNTh2NDczLjU4aC00NzMuNTh6Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxwYXRoIGQ9Im03NTIgMzc2YzAgMTM0LjMzLTcxLjY2NCAyNTguNDYtMTg4IDMyNS42Mi0xMTYuMzQgNjcuMTY4LTI1OS42NiA2Ny4xNjgtMzc2IDAtMTE2LjM0LTY3LjE2NC0xODgtMTkxLjI5LTE4OC0zMjUuNjJzNzEuNjY0LTI1OC40NiAxODgtMzI1LjYyYzExNi4zNC02Ny4xNjggMjU5LjY2LTY3LjE2OCAzNzYgMCAxMTYuMzQgNjcuMTY0IDE4OCAxOTEuMjkgMTg4IDMyNS42MiIgZmlsbD0iI2ZmZiIvPgogPGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj4KICA8cGF0aCBkPSJtMzc2IDEzOS4yMWMtMTMwLjc3IDAtMjM2Ljc5IDEwNi4wMS0yMzYuNzkgMjM2Ljc5IDAgMTMwLjc3IDEwNi4wMiAyMzYuNzkgMjM2Ljc5IDIzNi43OXMyMzYuNzktMTA2LjAyIDIzNi43OS0yMzYuNzljMC4wMDM5MDctMTMwLjc4LTEwNi4wMS0yMzYuNzktMjM2Ljc5LTIzNi43OXptMTI2LjY4IDMxMS4zNC0xMjYuNjgtMTExLjI4LTEyNi42OCAxMTEuMjgtMTguNzU0LTIxLjM0OCAxNDUuNDMtMTI3Ljc1IDE0NS40NCAxMjcuNzV6Ii8+CiA8L2c+Cjwvc3ZnPgo="
            className="socicon up-arrow img-fluid glow-eff"
            alt="scroll-up"
          />
        </i>
      </a>
    </div>
  );
}

export default LandingPage;
