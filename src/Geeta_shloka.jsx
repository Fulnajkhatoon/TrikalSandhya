// import React from "react";
import { Link, useParams } from "react-router-dom";
// import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles.css";

const GeetaShlokas = () => {
  const { adhyay } = useParams();

  return (
    <div>
      {/* <Navbar /> */}
      <div className="container mt-4">
        <h1 className="text-center">📜 Shlokas from Adhyay {adhyay}</h1>
        <div className="shlok-container mx-auto" style={{ maxWidth: "800px" }}>
          {[...Array(10).keys()].map((i) => (
            <div key={i} className="shlok-card p-3 shadow-sm rounded my-2">
              <Link to={`/geeta-shloka-details/${adhyay}/${i + 1}`} className="text-decoration-none text-warning fw-bold fs-5">
                VERSE {i + 1}
              </Link>
              <p className="mt-2 text-muted">This is a placeholder for the shloka content.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeetaShlokas;
