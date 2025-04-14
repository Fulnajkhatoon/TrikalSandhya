import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Shloka = () => {
  const { chapter } = useParams();
  const [shlokas, setShlokas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShlokas = async () => {
      try {
        const response = await fetch(`http://localhost:5000/rama/ramayan/${chapter}`);
        const data = await response.json();
        setShlokas(data);
      } catch (error) {
        console.error("Error fetching shlokas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShlokas();
  }, [chapter]);

  return (
    <div className="container shloka-container text-center mt-5 p-4 bg-dark text-white rounded">
      <h2>📜 Shlokas from Adhyay {chapter}</h2>

      {loading ? (
        <p>Loading...</p>
      ) : shlokas.length === 0 ? (
        <p className="text-warning mt-4">श्लोक उपलब्ध नहीं है।<br />શ્લોક ઉપલબ્ધ નથી.</p>
      ) : (
        shlokas.map((shloka, index) => (
          <div key={shloka.id || index} className="p-4 my-4 bg-secondary rounded">
            <p className="shloka-text text-warning fw-bold">{shloka.shlok}</p>
            <p className="translation-text mt-3">
              <strong>Gujarati Translation:</strong> {shloka.translation_gujarati}
            </p>
            <p className="meaning-text mt-3 p-3 bg-light text-dark rounded">
              <strong>Meaning:</strong> {shloka.translation_english}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Shloka;
