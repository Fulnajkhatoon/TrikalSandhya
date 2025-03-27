import React from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const RamayanSholok = () => {
  const { chapter } = useParams();
  const chapterNumber = parseInt(chapter, 10);

  const shlokas = { 
    1: [
      "धर्मो रक्षति रक्षितः।",
      "ધર્મ એ તેને જ રક્ષે છે જે તેને રક્ષે છે।",
      "If one upholds righteousness (Dharma), Dharma in turn protects them. This means that those who act righteously will receive divine protection and blessings."
    ],
    2: [
      "रामाय रामभद्राय रामचन्द्राय वेधसे।",
      "રામ માટે, રામભદ્ર માટે, રામચંદ્ર માટે મારા પ્રણામ।",
      "Salutations to Lord Rama, the one who is noble and auspicious, the divine protector and the source of wisdom."
    ],
    3: [
      "सर्वे सुखिनः सन्तु।",
      "બધા સુખી રહે",
      "May all beings be happy and live in harmony, as true happiness lies in the well-being of everyone."
    ]
  };

  // Ensure that invalid chapters show "Shloka not available" message
  const shlokaData = shlokas[chapterNumber] ?? [
    "श्लोक उपलब्ध नहीं है।",
    "શ્લોક ઉપલબ્ધ નથી।",
    "No Shloka available for this chapter."
  ];

  const styles = {
    body: {
      color: "white",
      fontFamily: "Arial, sans-serif",
    },
    container: {
      maxWidth: "800px",
      margin: "50px auto",
      background: "rgba(0, 0, 0, 0.7)",
      padding: "30px",
      borderRadius: "15px",
      textAlign: "center",
    },
    shlokaText: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "#ffcc00",
    },
    translationText: {
      fontSize: "1.2rem",
      marginTop: "20px",
      color: "white",
    },
    meaningText: {
      fontSize: "1rem",
      marginTop: "20px",
      background: "rgba(255, 255, 255, 0.2)",
      padding: "15px",
      borderRadius: "10px",
    }
  };

  return (
    <div style={styles.body}>
      <nav>{/* Include your Navbar component here */}</nav>
      <div style={styles.container}>
        <h2>📜 Shloka from Adhyay {chapterNumber}</h2>
        <p style={styles.shlokaText}>{shlokaData[0]}</p>
        <p style={styles.translationText}>
          <strong>Gujarati Translation:</strong> {shlokaData[1]}
        </p>
        <p style={styles.meaningText}>
          <strong>Meaning:</strong> {shlokaData[2]}
        </p>
      </div>
    </div>
  );
};

export default RamayanSholok;
