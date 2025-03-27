import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  adhyayCard: {
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    background: "#fff",
    transition: "transform 0.3s ease",
  },
  adhyayCardHover: {
    transform: "translateY(-5px)",
  },
  adhyayTitle: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  adhyayChapter: {
    color: "#ff9800",
    fontWeight: "bold",
  },
  adhyayDescription: {
    color: "#6c757d",
  },
};

const AdhyayCard = ({ chapter }) => {
  return (
    <div className="col-md-6 mb-4">
      <div
        className="adhyay-card p-4 bg-white shadow-sm rounded"
        style={styles.adhyayCard}
        onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        <span className="adhyay-chapter" style={styles.adhyayChapter}>
          Chapter {chapter}
        </span>
        <h5 className="adhyay-title" style={styles.adhyayTitle}>
          अध्याय: {chapter}
        </h5>
        <p className="adhyay-description" style={styles.adhyayDescription}>
          This chapter of the Bhagavad Gita explores deep philosophical concepts and teachings.
        </p>
        <a href={`/geeta-shlok?adhyay=${chapter}`} className="text-decoration-none">
          📜 View Shlokas
        </a>
      </div>
    </div>
  );
};

const BhagavadGeetaAdhyays = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">📖 Bhagavad Geeta - Adhyays</h1>
      <div className="row">
        {[...Array(14).keys()].map((i) => (
          <AdhyayCard key={i + 1} chapter={i + 1} />
        ))}
      </div>
    </div>
  );
};

export default BhagavadGeetaAdhyays;
