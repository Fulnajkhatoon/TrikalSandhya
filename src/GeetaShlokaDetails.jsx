import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShlokaDetails = () => {
  const { adhyay, verse } = useParams();
  const [shloka, setShloka] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShloka = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/geeta/shloka/${adhyay}/${verse}`);
        const data = await response.json();
        setShloka(data);
      } catch (error) {
        console.error("Error fetching shloka:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShloka();
  }, [adhyay, verse]);

  return (
    <div className="container shloka-container text-center mt-5 p-4 bg-dark text-white rounded">
      <h2>📜 Shloka from Adhyay {adhyay}, Verse {verse}</h2>

      {loading ? (
        <p>Loading...</p>
      ) : !shloka ? (
        <p className="text-warning mt-4">श्लोक उपलब्ध नहीं है।<br />શ્લોક ઉપલબ્ધ નથી.</p>
      ) : (
        <div className="p-4 my-4 bg-secondary rounded">
          <p className="shloka-text text-warning fw-bold">{shloka.text}</p>
          <p className="translation-text mt-3">
            <strong>Gujarati Translation:</strong> {shloka.translation}
          </p>
          <p className="meaning-text mt-3 p-3 bg-light text-dark rounded">
            <strong>Meaning:</strong> {shloka.meaning}
          </p>
        </div>
      )}
    </div>
  );
};

export default ShlokaDetails;
