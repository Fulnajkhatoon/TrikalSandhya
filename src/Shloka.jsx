import "react";
import { useParams } from "react-router-dom";
// import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles.css";

const shlokas = {
  1: {
    text: "धर्मो रक्षति रक्षितः।",
    translation: "ધર્મ એ તેને જ રક્ષે છે જે તેને રક્ષે છે।",
    meaning:
      "If one upholds righteousness (Dharma), Dharma in turn protects them. This means that those who act righteously will receive divine protection and blessings.",
  },
  2: {
    text: "रामाय रामभद्राय रामचन्द्राय वेधसे।",
    translation: "રામ માટે, રામભદ્ર માટે, રામચંદ્ર માટે મારા પ્રણામ।",
    meaning:
      "Salutations to Lord Rama, the one who is noble and auspicious, the divine protector and the source of wisdom.",
  },
  3: {
    text: "सर्वे सुखिनः सन्तु।",
    translation: "બધા સુખી રહે",
    meaning:
      "May all beings be happy and live in harmony, as true happiness lies in the well-being of everyone.",
  },
};

const Shloka = () => {
  const { chapter } = useParams();
  const shlokaData = shlokas[chapter] || {
    text: "श्लोक उपलब्ध नहीं है।",
    translation: "શ્લોક ઉપલબ્ધ નથી।",
    meaning: "No Shloka available for this chapter.",
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="container shloka-container text-center mt-5 p-4 bg-dark text-white rounded">
        <h2>📜 Shloka from Adhyay {chapter}</h2>
        <p className="shloka-text text-warning fw-bold mt-3">{shlokaData.text}</p>
        <p className="translation-text mt-3">
          <strong>Gujarati Translation:</strong> {shlokaData.translation}
        </p>
        <p className="meaning-text mt-3 p-3 bg-light text-dark rounded">
          <strong>Meaning:</strong> {shlokaData.meaning}
        </p>
      </div>
    </div>
  );
};

export default Shloka;
