import React from "react";
import Mern from "../Assets/certificates/MERN.jpg";
import css from "../Assets/certificates/css.jpg";
import excel from "../Assets/certificates/Excel.jpg";
import Flutter from "../Assets/certificates/flutter.jpg";
import barclays from "../Assets/certificates/IITM-Barclays.png";
import Rubicon from "../Assets/certificates/IITM-Rubicon.jpg";
import Ml from "../Assets/certificates/ML.jpg";
import powerpoint from "../Assets/certificates/Powerpoint.JPG";
import presentation from "../Assets/certificates/Presentation.jpg";
import python from "../Assets/certificates/python.jpg";
import resweb from "../Assets/certificates/Responsive Web.png";
import web from "../Assets/certificates/web.jpg";
import pandas from "../Assets/certificates/Python-Pandas.jpg";
import agile from "../Assets/certificates/AGILE.jpg";
import sdlc from "../Assets/certificates/SDLC.jpg";

const certificates = [
  { src: Mern, alt: "MERN Stack" },
  { src: web, alt: "Web Programming" },
  { src: resweb, alt: "Responsive Web" },
  { src: python, alt: "Python" },
  { src: pandas, alt: "pandas" },
  { src: Ml, alt: "Machine Learning" },
  { src: agile, alt: "Agile" },
  { src: sdlc, alt: "SDLC" },
  { src: Rubicon, alt: "Rubicon" },
  { src: barclays, alt: "Barclays" },
  { src: powerpoint, alt: "PowerPoint" },
  { src: presentation, alt: "Presentation" },
  { src: css, alt: "CSS" },
  { src: Flutter, alt: "Flutter" },
  { src: excel, alt: "Excel" },
];

function Certificate() {
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunkedCertificates = chunkArray(certificates, 3);

  return (
    <div id="Certificate">
      <div className="p-4 text-center bg-image bg-dark text-white">
        <div className="container mt-5 pb-3">
          <h1 className="text-center" data-aos="fade-up">
            Here are some of My
            <span className="text-danger"> Certificates!</span>
          </h1>
          <p
            className="text-center border-bottom border-danger fst-italic"
            data-aos="fade-up"
          >
            <span className="text-danger">&#60; </span>Just a{" "}
            <span className="fw-bold">philomath</span> & want to explore all
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
            <div className="carousel-inner container">
              {chunkedCertificates.map((chunk, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="row">
                    {chunk.map((cert, idx) => (
                      <div className="col" style={{ width: "25rem" }} key={idx}>
                        <img
                          src={cert.src}
                          className="card-img-top hover-zoom"
                          alt={cert.alt}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
              {certificates.map((cert, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <img
                    src={cert.src}
                    className="d-block w-50 mx-auto"
                    alt={cert.alt}
                  />
                </div>
              ))}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
