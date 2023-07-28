import React from "react";

function RecommendationCard(props) {
  const { message, name, projecturl } = props.recommendationprop;
  return (
    <div className="col-12 col-md-4 mt-2 mx-auto ">
      <div className="card shadow h-100">
        <div className="card-body">
          <h4 className="card-text text-center">{name}</h4>
          <p className="card-text text-secondary mb-0">
            <img
              src="https://static.thenounproject.com/png/453953-200.png"
              alt="icon"
              className="apostrophe-icon"
            />{" "}
            {message}{" "}
            <img
              src="https://static.thenounproject.com/png/453953-200.png"
              alt="icon"
              className="apostrophe-icon-right"
            />
          </p>
          <div className="text-center pt-2">
            {/* Button modal */}
            <button
              type="button"
              className="btn btn-outline-danger"
              data-bs-toggle="modal"
              data-bs-target={`#exampleModal-${props.recommendationprop.id}`}
            >
              Read More!
            </button>
          </div>

          {/* <!-- Modal --> */}
          <div
            className="modal fade"
            id={`exampleModal-${props.recommendationprop.id}`}
            tabIndex="-1"
            aria-labelledby={`exampleModalLabel-${props.recommendationprop.id}`}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h1
                    className="modal-title fs-5"
                    id={`exampleModalLabel-${props.recommendationprop.id}`}
                  >
                    What they say!
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div
                  className="modal-body"
                  style={{ maxHeight: "400px", overflowY: "auto" }}
                >
                  <pre
                    style={{
                      whiteSpace: "pre-wrap",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {projecturl}
                  </pre>{" "}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendationCard;
