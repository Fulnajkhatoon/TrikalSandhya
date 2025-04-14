import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./AdminSidebar";

const AddRamayanShloka = () => {
  const [formData, setFormData] = useState({
    category: "Ram-Seeta Milan", // default, but can change
    adhyay_number: "1", // default, but user can pick others
    shlok: "",
    translation_gujarati: "",
    translation_english: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/shlokas/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Shloka added successfully!");
        setFormData({
          category: "Ram-Seeta Milan",
          adhyay_number: "1",
          shlok: "",
          translation_gujarati: "",
          translation_english: "",
        });
      } else {
        alert("❌ Failed to add shloka.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Server connection error.");
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ flexGrow: 1, minHeight: "100vh", padding: "20px" }}
      >
        <div
          className="form-container p-4 bg-light rounded shadow"
          style={{ maxWidth: "600px", width: "100%" }}
        >
          <h2 className="text-center mb-4">📖 Add New Shloka</h2>
          <form onSubmit={handleSubmit}>
            {/* Category Dropdown */}
            <div className="mb-3">
              <label className="form-label">Select Category:</label>
              <select
                name="category"
                className="form-select"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="Ram-Seeta Milan">Ram-Seeta Milan</option>
                <option value="Vanvas">Vanvas</option>
              </select>
            </div>

            {/* Adhyay Dropdown */}
            <div className="mb-3">
              <label className="form-label">Select Adhyay (Chapter):</label>
              <select
                name="adhyay_number"
                className="form-select"
                value={formData.adhyay_number}
                onChange={handleChange}
                required
              >
                {[...Array(20).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    Adhyay {i + 1}
                  </option>
                ))}
              </select>
            </div>

            {/* Shloka */}
            <div className="mb-3">
              <label className="form-label">Shloka (Sanskrit):</label>
              <textarea
                name="shlok"
                className="form-control"
                rows="3"
                value={formData.shlok}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Gujarati Translation */}
            <div className="mb-3">
              <label className="form-label">Gujarati Translation:</label>
              <textarea
                name="translation_gujarati"
                className="form-control"
                rows="2"
                value={formData.translation_gujarati}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* English Translation */}
            <div className="mb-3">
              <label className="form-label">English Translation:</label>
              <textarea
                name="translation_english"
                className="form-control"
                rows="2"
                value={formData.translation_english}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="btn btn-success">
                ➕ Add Shloka
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRamayanShloka;
