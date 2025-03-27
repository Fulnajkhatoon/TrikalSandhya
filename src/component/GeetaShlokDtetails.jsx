import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const shlokas = {
  "1_1": {
    shloka: "धृतराष्ट्र उवाच धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।\nयुयुत्सवः मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥1.1॥",
    transliteration:
      "dhṛtarāṣṭra uvāca dharma-kṣetre kuru-kṣetre samavetā yuyutsavaḥ |\n māmakāḥ pāṇḍavāścaiva kimakurvata sañjaya ||1.1||",
    meaning:
      "Dhritarashtra said: O Sanjaya, what did my sons and the sons of Pandu do when they had assembled together on the holy plain of Kurukshetra, eager for battle?",
  },
};

const ShlokaDisplay = ({ adhyay, shlok }) => {
  const key = `${adhyay}_${shlok}`;
  const shlokaData = shlokas[key] || {
    shloka: "श्लोक उपलब्ध नहीं है।",
    transliteration: "No Transliteration Available",
    meaning: "No Meaning Available.",
  };

  return (
    <div className="container text-center mt-5">
      <h2 className="fw-bold">BG {adhyay}.{shlok}</h2>
      <p className="text-warning fs-4 fw-bold">{shlokaData.shloka}</p>
      <p className="text-muted">{shlokaData.transliteration}</p>
      <p>
        <strong>Meaning:</strong> {shlokaData.meaning}
      </p>
    </div>
  );
};

const App = () => {
  const [adhyay, setAdhyay] = useState(1);
  const [shlok, setShlok] = useState(1);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Bhagavad Geeta</a>
        </div>
      </nav>
      <div className="container mt-3">
        <label>Adhyay:</label>
        <input
          type="number"
          className="form-control"
          value={adhyay}
          onChange={(e) => setAdhyay(e.target.value)}
        />
        <label>Shloka:</label>
        <input
          type="number"
          className="form-control"
          value={shlok}
          onChange={(e) => setShlok(e.target.value)}
        />
      </div>
      <ShlokaDisplay adhyay={adhyay} shlok={shlok} />
      <footer className="bg-light text-center py-3 mt-5">&copy; 2025 Bhagavad Geeta</footer>
    </>
  );
};

export default App;
