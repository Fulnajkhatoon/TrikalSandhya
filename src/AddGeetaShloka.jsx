import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./AdminSidebar";

const AddGeetaShloka = () => {
  const [form, setForm] = useState({
    adhyay: "",
    verse_number: "",
    text: "",
    translation: "",
    meaning: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/geeta/add", form);
      alert("✅ Shloka added successfully!");
      setForm({
        adhyay: "",
        verse_number: "",
        text: "",
        translation: "",
        meaning: "",
      });
    } catch (err) {
      console.error(err);
      alert("❌ Error adding shloka");
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div
        className="d-flex justify-content-center align-items-start"
        style={{ flexGrow: 1, minHeight: "100vh", padding: "40px" }}
      >
        <div
          className="form-container bg-white p-4 rounded shadow"
          style={{ maxWidth: "700px", width: "100%" }}
        >
          <h3 className="text-center mb-4 fw-bold text-success">
            📖 Add Bhagavad Geeta Shloka
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* Adhyay Input */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Adhyay (Chapter)</label>
                <input
                  type="number"
                  className="form-control"
                  name="adhyay"
                  value={form.adhyay}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Verse Number Input */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Verse Number</label>
                <input
                  type="number"
                  className="form-control"
                  name="verse_number"
                  value={form.verse_number}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Shloka Text */}
            <div className="mb-3">
              <label className="form-label">Shloka (Sanskrit)</label>
              <textarea
                className="form-control"
                name="text"
                value={form.text}
                onChange={handleChange}
                rows="3"
                required
              ></textarea>
            </div>

            {/* Gujarati Translation */}
            <div className="mb-3">
              <label className="form-label">Gujarati Translation</label>
              <textarea
                className="form-control"
                name="translation"
                value={form.translation}
                onChange={handleChange}
                rows="2"
                required
              ></textarea>
            </div>

            {/* English Meaning */}
            <div className="mb-3">
              <label className="form-label">English Meaning</label>
              <textarea
                className="form-control"
                name="meaning"
                value={form.meaning}
                onChange={handleChange}
                rows="2"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="btn btn-success px-4">
                ➕ Add Shloka
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddGeetaShloka;
