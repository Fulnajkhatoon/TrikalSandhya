import React from "react";
import { Link } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function RamSeetaMilan() {
  const styles = {
    chapterCard: {
      background: "rgba(255, 255, 255, 0.8)",
      color: "black",
      textAlign: "center",
      padding: "20px",
      fontSize: "1.5rem",
      borderRadius: "10px",
      transition: "0.3s ease-in-out",
    },
    chapterCardHover: {
      background: "rgba(255, 200, 100, 0.9)",
      transform: "scale(1.05)",
    },
    boxContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "20px",
    },
  };

  return (
    <Container className="text-center mt-4">
      <h1 className="mb-4">Adhyay (Chapters)</h1>
      <div style={styles.boxContainer}>
        {[...Array(20).keys()].map((i) => (
          <Link to={`/ramayansholok?chapter=${i + 1}`} key={i} className="text-decoration-none">
            <Card
              className="shadow-lg text-center"
              style={styles.chapterCard}
              onMouseOver={(e) => Object.assign(e.currentTarget.style, styles.chapterCardHover)}
              onMouseOut={(e) => Object.assign(e.currentTarget.style, styles.chapterCard)}
            >
              अध्याय: {i + 1}
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default RamSeetaMilan;