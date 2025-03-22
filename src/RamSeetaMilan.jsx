import  "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const RamayanChapters = () => {
  return (
    <div>
      <div className="container text-center mt-4">
        <h1 className="mb-4">Adhyay (Chapters)</h1>
        <div className="box-container d-grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          {[...Array(20).keys()].map((i) => (
            <Link to={`/shloka/${i + 1}`} key={i} className="text-decoration-none">
              <div className="chapter-card shadow-lg p-3 rounded">
                अध्याय: {i + 1}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RamayanChapters;
