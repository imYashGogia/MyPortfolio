import React from "react";
import "./stylesheet.css";
import Mern from "../Assets/certificates/MERN.jpg";
import css from "../Assets/certificates/css.jpg";
import excel from "../Assets/certificates/Excel.jpg";
import Flutter from "../Assets/certificates/flutter.jpg";
import barclays from "../Assets/certificates/IITM-Barclays.png";
import Rubicon from "../Assets/certificates/IITM-Rubicon.jpg";
import ML from "../Assets/certificates/ML.jpg";
import powerpoint from "../Assets/certificates/Powerpoint.JPG";
import presentation from "../Assets/certificates/Presentation.jpg";
import python from "../Assets/certificates/python.jpg";
import resweb from "../Assets/certificates/Responsive Web.png";
import web from "../Assets/certificates/web.jpg";

function Certificate() {
  return (
    <div id="Certificate">
      <div className="p-4 text-center bg-image bg-dark text-white">
        <div className="container mt-5 pb-3">
          <h1 className="text-center " data-aos="fade-up">
            Here are some of My
            <span className="text-danger"> Certificates!</span>
          </h1>
          <p
            className="text-center border-bottom border-danger fst-italic"
            data-aos="fade-up"
          >
            {" "}
            <span className="text-danger">&#60; </span>Just a{" "}
            <span className="fw-bold"> philomath</span> & want to explore all
            fields <span className="text-danger">&#47;&#62;</span>
          </p>
        </div>
        <div className="lg-screen">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="true"
            data-aos="fade-up"
          >
            {/* <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div> */}
            <div className="carousel-inner container">
              <div className="carousel-item active ">
                <div className="row">
                  <div className="col size" style={{ width: "25rem" }}>
                    <img
                      src={Mern}
                      className="card-img-top hover-zoom"
                      alt="mern-stack"
                    />
                  </div>
                  <div className="col size" style={{ width: "25rem" }}>
                    <img
                      src={web}
                      className="card-img-top hover-zoom"
                      alt="web prog"
                    />
                  </div>
                  <div className="col size" style={{ width: "25rem" }}>
                    <img
                      src={Flutter}
                      className="card-img-top hover-zoom"
                      alt="flutter"
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col" style={{ width: "25rem" }}>
                    <img src={css} className="card-img-top " alt="css" />
                  </div>
                  <div className="col" style={{ width: "25rem" }}>
                    <img
                      src={resweb}
                      className="card-img-top"
                      alt="freecodecamp"
                    />
                  </div>
                  <div className="col" style={{ width: "25rem" }}>
                    <img src={Rubicon} className="card-img-top" alt="rubicon" />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col" style={{ width: "25rem" }}>
                    <img src={ML} className="card-img-top " alt="ML" />
                  </div>
                  <div className="col" style={{ width: "25rem" }}>
                    <img src={python} className="card-img-top" alt="python" />
                  </div>
                  <div className="col" style={{ width: "25rem" }}>
                    <img
                      src={barclays}
                      className="card-img-top"
                      alt="barclays"
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col" style={{ width: "25rem" }}>
                    <img
                      src={powerpoint}
                      className="card-img-top "
                      alt="powerpoint"
                    />
                  </div>
                  <div className="col" style={{ width: "25rem" }}>
                    <img
                      src={presentation}
                      className="card-img-top"
                      alt="presentation"
                    />
                  </div>
                  <div className="col" style={{ width: "25rem" }}>
                    <img src={excel} className="card-img-top" alt="excel" />
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="sm-screen">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Mern} className="d-block w-50 mx-auto" alt="img" />
              </div>
              <div className="carousel-item">
                <img src={resweb} className="d-block w-50 mx-auto" alt="img" />
              </div>
              <div className="carousel-item">
                <img src={web} className="d-block w-50 mx-auto" alt="img" />
              </div>
              <div className="carousel-item">
                <img src={python} className="d-block w-50 mx-auto" alt="img" />
              </div>
              <div className="carousel-item">
                <img
                  src={presentation}
                  className="d-block w-50 mx-auto"
                  alt="img"
                />
              </div>
              <div className="carousel-item">
                <img src={Flutter} className="d-block w-50 mx-auto" alt="img" />
              </div>
              <div className="carousel-item">
                <img
                  src={barclays}
                  className="d-block w-50 mx-auto"
                  alt="img"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Certificate;
