import React, { Component } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import LoadingSpinner from "../Loaders/loadingSpninner";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.state = {
      isLoading: false,
    };
  }

  sendEmail = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true }); // Set isLoading to true when the form is submitted

    emailjs
      .sendForm(
        "service_imyashgogia",
        "template_zvvvhp3",
        this.form.current,
        "TyTw-jec9GEeMYmtI"
      )
      .then(
        (result) => {
          this.setState({ isLoading: false }); // Set isLoading to false after the form is sent

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
          this.setState({ isLoading: false }); // Set isLoading to false in case of an error

          Swal.fire({
            title: "Oops! Something Went wrong.",
            text: "Please try again later :(",
            icon: "error",
            confirmButtonText: "Retry Later!",
          });
        }
      );
  };

  render() {
    const { isLoading } = this.state;

    return (
      <div>
        <div id="Contact">
          <div className="bg-dark text-center text-white pt-3">
            <div className="container pt-5">
              <section className="mb-4">
                <h3>
                  Let's <span className="text-danger"> Connect & work</span>{" "}
                  together...
                </h3>
                <p className="text-center border-bottom border-danger fst-italic">
                  {" "}
                  &lt; How do you take your coffee? /&gt;
                </p>
                <div className="container row">
                  <div className="form col-md left-sec">
                    <h3 className="mb-4">
                      Let's Start a{" "}
                      <span className="text-danger">Project!</span>{" "}
                    </h3>
                    <form ref={this.form} onSubmit={this.sendEmail} id="reset">
                      <div className="row g-2 mb-4">
                        <div className="col-md">
                          <div className="form-floating mb-3">
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
                        <div className="form-floating mb-3">
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
                        <div className="form-floating">
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
                          {isLoading ? (
                            <LoadingSpinner />
                          ) : (
                            <button
                              className="btn btn-primary glow-eff"
                              type="submit"
                              value="Send"
                              id="liveAlertBtn"
                            >
                              Send Message
                            </button>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="right-sec col-md my-auto">
                    <div className="d-flex justify-content-center">
                      <div className="hover-container">
                        <a
                          className="btn mt-1 me-2 glow-eff btn-hover"
                          style={{ backgroundColor: "#0082ca" }}
                          href="https://linkedin.com/in/imyashgogia"
                          role="button"
                        >
                          <i className="fa-brands fa-linkedin fa-beat"></i>
                        </a>
                      </div>
                      <div className="hover-container">
                        <a
                          className="btn mt-1 me-2 glow-eff btn-hover"
                          style={{ backgroundColor: "#424c5a" }}
                          href="https://github.com/imYashGogia"
                          role="button"
                        >
                          <i className="fa-brands fa-github fa-beat"></i>
                        </a>
                      </div>
                      <div className="hover-container">
                        <a
                          className="btn mt-1 me-2 glow-eff btn-hover"
                          style={{ backgroundColor: "#55acee" }}
                          href="https://twitter.com/imYashGogia"
                          role="button"
                        >
                          <i className="fa-brands fa-twitter fa-beat"></i>
                        </a>
                      </div>
                      <div className="hover-container">
                        <a
                          className="btn mt-1 me-2 glow-eff btn-hover"
                          style={{ backgroundColor: "#3b5998" }}
                          href="https://www.facebook.com/imyashgogia/"
                          role="button"
                        >
                          <i className="fa-brands fa-facebook fa-beat"></i>
                        </a>
                      </div>
                      <div className="hover-container">
                        <a
                          className="btn mt-1 me-2 glow-eff btn-hover"
                          style={{ backgroundColor: "#ac2bac" }}
                          href="https://www.instagram.com/imyashgogia/"
                          role="button"
                        >
                          <i className="fa-brands fa-instagram fa-beat"></i>
                        </a>
                      </div>
                    </div>
                    <div className="mt-5">
                      <p>Hope you have liked my projects and portfolio :)</p>
                      <p>
                        If you have any questions, please feel free to drop me.
                        I'll get back to you as soon as I can.
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
}

export default Contact;
