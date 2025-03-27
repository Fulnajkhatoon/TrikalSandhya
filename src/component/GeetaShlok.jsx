import React from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const BhagavadGeetaShlokas = () => {
  const { adhyay } = useParams();
  const adhyayNumber = parseInt(adhyay, 10);

  return (
    <div>
      <nav>{/* Include your Navbar component here */}</nav>

      <div className="container mt-4">
        <h1 className="text-center">📜 Shlokas from Adhyay {adhyayNumber}</h1>
        <div className="shlok-container">
          {[...Array(10).keys()].map((i) => (
            <div className="shlok-card" key={i + 1}>
              <Link to={`/geeta-shloka-details/${adhyayNumber}/${i + 1}`}>
                VERSE {i + 1}
              </Link>
              <p className="mt-2 text-muted">This is a placeholder for the shloka content.</p>
            </div>
          ))}
        </div>
      </div>

      <footer>{/* Include your Footer component here */}</footer>
    </div>
  );
};

export default BhagavadGeetaShlokas;
