import  "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Ramayan = () => {
  return (
    <div>
      {/* Content Section */}
      <div className="container content-section mt-5">
        <h2 className="text-center mb-4">Chapters of Ramayan</h2>
        <div className="row">
          {/* Ram-Seeta Milan */}
          <div className="col-md-6">
            <div className="card shadow-lg">
              <img
                src="/img/ramayan1.png"
                className="card-img-top img-fluid w-50 mx-auto"
                alt="Ram-Seeta Milan"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Ram-Seeta Milan</h5>
                <p className="card-text">
                  The divine love story of Lord Ram and Goddess Sita.
                </p>
                <Link to="/ram-seeta-milan" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          {/* Vanvas */}
          <div className="col-md-6">
            <div className="card shadow-lg">
              <img
                src="/img/ramayan2.png"
                className="card-img-top img-fluid w-50 mx-auto"
                alt="Vanvas"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Vanvas</h5>
                <p className="card-text">
                  The exile journey of Lord Ram, Seeta, and Lakshman.
                </p>
                <Link to="/vanvas" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ramayan;
