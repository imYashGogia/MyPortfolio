import React from "react";
import Mern from "../Assets/certificates/MERN.jpg";
import css from "../Assets/certificates/css.jpg";
import excel from "../Assets/certificates/Excel.jpg";
import Flutter from "../Assets/certificates/flutter.jpg";
import barclays from "../Assets/certificates/IITM-Barclays.png";
import Rubicon from "../Assets/certificates/IITM-Rubicon.jpg";
// import ML from "../Assets/certificates/ML.jpg";
// import powerpoint from "../Assets/certificates/Powerpoint.JPG";
// import presentation from "../Assets/certificates/Presentation.jpg";
// import python from "../Assets/certificates/python.jpg";
// import resweb from "../Assets/certificates/Responsive Web.png";
// import web from "../Assets/certificates/web.jpg";

function Image() {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner ">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={css} className="d-block w-50 mx-auto " alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={Mern} className="d-block w-50 mx-auto" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={excel} className="d-block w-50 mx-auto" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Flutter} className="d-block w-50 mx-auto" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={barclays} className="d-block w-50 mx-auto" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Rubicon} className="d-block w-50 mx-auto" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Image;
