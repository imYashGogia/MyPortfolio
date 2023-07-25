import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import "./stylesheet.css";
import LoadingSpinner from "./loadingSpninner";

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set isLoading to true when the form is submitted

    emailjs
      .sendForm(
        "service_imyashgogia",
        "template_zvvvhp3",
        form.current,
        "TyTw-jec9GEeMYmtI"
      )
      .then(
        (result) => {
          setIsLoading(false); // Set isLoading to false after the form is sent

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message Sent!",
            showConfirmButton: false,
            timer: 1500,
          });
          document.getElementById("reset").reset();
        },
        (error) => {
          setIsLoading(false); // Set isLoading to false in case of an error

          Swal.fire({
            title: "Oops! Something Went wrong.",
            text: "Please try again later :(",
            icon: "error",
            confirmButtonText: "Retry Later!",
          });
        }
      );
  };

  return (
    <div>
      <div id="Contact">
        <div className="bg-dark text-center text-white pt-3">
          <div className="container pt-5">
            <section className="mb-4">
              <h3 data-aos="fade-up">
                Let's <span className="text-danger"> Connect & work</span>{" "}
                together...
              </h3>
              <p
                className="text-center border-bottom border-danger fst-italic"
                data-aos="fade-up"
              >
                {" "}
                <span className="text-danger">&#60; </span>How do you take your
                coffee? <span className="text-danger">&#47;&#62;</span>
              </p>
              <div className="container row">
                <div className="form col-md left-sec">
                  <h3 className="mb-4">
                    Let's Start a <span className="text-danger">Project!</span>{" "}
                  </h3>
                  <form ref={form} onSubmit={sendEmail} id="reset">
                    <div className="row g-2 mb-4">
                      <div className="col-md">
                        <div
                          className="form-floating mb-3"
                          data-aos="fade-right"
                        >
                          <input
                            type="name"
                            className="form-control"
                            id="floatingInput name"
                            name="user_name"
                            required
                          />
                          <label
                            htmlFor="floatingInput"
                            className="fw-bold"
                            id="crimson-col"
                          >
                            Full Name
                          </label>
                        </div>
                      </div>
                      <div className="form-floating mb-3" data-aos="fade-right">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput email"
                          name="user_email"
                          required
                        />
                        <label
                          htmlFor="floatingInput"
                          className="fw-bold"
                          id="crimson-col"
                        >
                          Email address
                        </label>
                      </div>
                      <div className="form-floating" data-aos="fade-right">
                        <textarea
                          type="message"
                          className="form-control"
                          id="floatingTextarea2 message"
                          style={{ height: "80px" }}
                          name="message"
                          required
                        ></textarea>
                        <label
                          htmlFor="floatingTextarea2"
                          className="fw-bold"
                          id="crimson-col"
                        >
                          Message
                        </label>
                      </div>
                      <div
                        className="d-grid gap-2 mt-4"
                        id="liveAlertPlaceholder"
                      >
                        {isLoading ? ( // Render the LoadingSpinner if isLoading is true
                          <LoadingSpinner />
                        ) : (
                          <button
                            className="btn btn-primary glow-eff"
                            type="Submit"
                            value="Send"
                            id="liveAlertBtn"
                            data-aos="fade-right"
                          >
                            Send Message
                          </button>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
                <div className="right-sec col-md my-auto">
                  <div data-aos="fade-up">
                    {/* <a
                      className="btn mt-1 me-2"
                      style={{ backgroundColor: "#FBBC05" }}
                      href="mailto:yashgogia2001@gmail.com"
                      role="button"
                    >
                      <i className="fa-solid fa-at"></i>
                    </a> */}
                    <a
                      className="btn mt-1 me-2 glow-eff"
                      style={{ backgroundColor: "#0082ca" }}
                      href="https://linkedin.com/in/imyashgogia"
                      role="button"
                    >
                      <i className="fa-brands fa-linkedin fa-beat"></i>
                    </a>
                    <a
                      className="btn mt-1 me-2 glow-eff"
                      style={{ backgroundColor: "#424c5a" }}
                      href="https://github.com/imYashGogia"
                      role="button"
                    >
                      <i className="fa-brands fa-github fa-beat"></i>
                    </a>
                    <a
                      className="btn mt-1 me-2 glow-eff"
                      style={{ backgroundColor: "#55acee" }}
                      href="https://twitter.com/imYashGogia"
                      role="button"
                    >
                      <i className="fa-brands fa-twitter fa-beat"></i>
                    </a>
                    <a
                      className="btn mt-1 me-2 glow-eff"
                      style={{ backgroundColor: "#3b5998" }}
                      href="https://www.facebook.com/imyashgogia/"
                      role="button"
                    >
                      <i className="fa-brands fa-facebook fa-beat"></i>
                    </a>
                    <a
                      className="btn mt-1 me-2 glow-eff"
                      style={{ backgroundColor: "#ac2bac" }}
                      href="https://www.instagram.com/imyashgogia/"
                      role="button"
                    >
                      <i className="fa-brands fa-instagram fa-beat"></i>
                    </a>
                  </div>
                  <div className="mt-5">
                    <p>Hope you have liked my projects and portfolio :)</p>
                    <p>
                      If you have any questions, please feel free to drop me.
                      I'll get back to you as soon as i can.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <div className="pb-1">
              <hr />
              <p className="fw-bold">
                Developed & Maintained by{" "}
                <span className="text-danger">Yash Gogia</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
