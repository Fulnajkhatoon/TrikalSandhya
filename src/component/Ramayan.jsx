import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Ramayan = () => {
  return (
    <>
      <div className="container content-section my-5">
        <h2 className="text-center mb-4">Chapters of Ramayan</h2>

        <div className="row">
          {/* Ram-Seeta Milan */}
          <div className="col-md-6">
            <div className="card shadow-lg">
              <img
                src="src/imges/ramayan1.png"
                className="card-img-top img-fluid w-50 mx-auto"
                alt="Ram-Seeta Milan"
              />
              <div className="card-body">
                <h5 className="card-title">Ram-Seeta Milan</h5>
                <p className="card-text">
                  The divine love story of Lord Ram and Goddess Sita.
                </p>
                <Link to="/Ram-Seeta-Milan" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Vanvas */}
          <div className="col-md-6">
            <div className="card shadow-lg">
              <img
                src="src/imges/ramayan2.png"
                className="card-img-top img-fluid w-50 mx-auto"
                alt="Vanvas"
              />
              <div className="card-body">
                <h5 className="card-title">Vanvas</h5>
                <p className="card-text">
                  The exile journey of Lord Ram, Sita, and Lakshman.
                </p>
                <Link to="/vanvas" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ramayan;
