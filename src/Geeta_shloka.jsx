import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const GeetaShlokas = () => {
  const { adhyay } = useParams();
  const [verses, setVerses] = useState([]);

  useEffect(() => {
    const fetchVerses = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/geeta/verses/${adhyay}`);
        const data = await response.json();
        setVerses(data);
      } catch (error) {
        console.error("Error fetching verses:", error);
      }
    };
    fetchVerses();
  }, [adhyay]);

  return (
    <div className="container mt-4">
      <h1 className="text-center">📜 Shlokas from Adhyay {adhyay}</h1>
      <div className="shlok-container mx-auto" style={{ maxWidth: "800px" }}>
        {verses.length === 0 ? (
          <p className="text-center text-danger">No verses found for this Adhyay.</p>
        ) : (
          verses.map((verse, index) => (
            <div key={index} className="shlok-card p-3 shadow-sm rounded my-2">
              <Link
                to={`/geeta-shloka-details/${adhyay}/${verse.verse_number}`}
                className="text-decoration-none text-warning fw-bold fs-5"
              >
                VERSE {verse.verse_number}
              </Link>
              <p className="mt-2 text-muted">Click to view details.</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GeetaShlokas;
