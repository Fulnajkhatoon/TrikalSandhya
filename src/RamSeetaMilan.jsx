import React from "react";
import { Link } from "react-router-dom";

const RamSeetaMilan = () => {
  return (
    <div className="container text-center mt-4">
      <h1 className="mb-4">Ram-Seeta Milan Adhyay</h1>
      <div className="box-container d-grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
        {[...Array(10).keys()].map((i) => (
          <Link to={`/shloka/Ram-Seeta%20Milan/${i + 1}`} key={i} className="text-decoration-none">
            <div className="chapter-card shadow-lg p-3 rounded">
              अध्याय: {i + 1}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RamSeetaMilan;
