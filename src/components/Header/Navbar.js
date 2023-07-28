import React, { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    // Close the navbar when a link is clicked
    const navbarLinks = document.querySelectorAll(".navbar-collapse a");
    navbarLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const navbarToggler = document.querySelector(".navbar-toggler");
        if (navbarToggler.getAttribute("aria-expanded") === "true") {
          navbarToggler.click();
        }
      });
    });
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top text-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Yash's Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <a
                  className="nav-link text-dark js-scroll-trigger"
                  href="#About"
                >
                  About
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link text-dark js-scroll-trigger" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark js-scroll-trigger"
                  href="/AllProjects"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark js-scroll-trigger"
                  aria-current="page"
                  href="/AllRecommendation"
                >
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark js-scroll-trigger"
                  href="#Contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
