import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./adminSidebar"; // Ensure Sidebar component is imported

const AddShloka = () => {
  const [formData, setFormData] = useState({
    category: "Ram-Seeta Milan",
    adhyay_number: "1",
    shlok: "",
    translation_gujarati: "",
    translation_english: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Shloka added successfully! (No database integration yet)");
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="d-flex justify-content-center align-items-center" style={{ flexGrow: 1, minHeight: "100vh", padding: "20px" }}>
        <div className="form-container p-4 bg-light rounded shadow" style={{ maxWidth: "600px", width: "100%" }}>
          <h2 className="text-center">📖 Add New Shloka</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Select Category:</label>
              <select name="category" className="form-select" value={formData.category} onChange={handleChange} required>
                <option value="Ram-Seeta Milan">Ram-Seeta Milan</option>
                <option value="Vanvas">Vanvas</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Select Adhyay (Chapter):</label>
              <select name="adhyay_number" className="form-select" value={formData.adhyay_number} onChange={handleChange} required>
                {[...Array(20).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>Adhyay {i + 1}</option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Shloka (Sanskrit):</label>
              <textarea name="shlok" className="form-control" rows="3" value={formData.shlok} onChange={handleChange} required></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Gujarati Translation:</label>
              <textarea name="translation_gujarati" className="form-control" rows="2" value={formData.translation_gujarati} onChange={handleChange} required></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">English Translation:</label>
              <textarea name="translation_english" className="form-control" rows="2" value={formData.translation_english} onChange={handleChange} required></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-success">Add Shloka</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddShloka;
