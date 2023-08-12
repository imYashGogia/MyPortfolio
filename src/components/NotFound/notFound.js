import React from "react";

function NotFound() {
  return (
    <div>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center mx-auto">
              <div className="four_zero_four_bg"></div>

              <div className="contant_box_404">
                <h1 className="text-center">
                  <span className="text-danger">Oops! </span> It's a 404
                </h1>
                <h3 className="h2">
                  Sorry couldn't find what your are looking for...
                </h3>
                <a href="/" className="link_404 no-text-decor btn-radius">
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
