import "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Geeta = () => {
  return (
    <div>
      <div className="container mt-4">
        <h1 className="mb-4 text-center">📖 Bhagavad Geeta - Adhyays</h1>
        <div className="row">
          {[...Array(14).keys()].map((i) => (
            <div className="col-md-6 mb-4" key={i}>
              <div className="adhyay-card p-3 shadow-sm">
                <span className="adhyay-chapter">Chapter {i + 1}</span>
                <h5 className="adhyay-title">अध्याय: {i + 1}</h5>
                <p className="adhyay-description">
                  This chapter of the Bhagavad Gita explores deep philosophical concepts and teachings.
                </p>
                <Link to={`/geeta-shlok/${i + 1}`} className="text-decoration-none">
                  📜 View Shlokas
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Geeta;
