import React, { useState } from "react";
import axios from "axios";

const AddGeetaShloka = () => {
  const [form, setForm] = useState({ adhyay: "", text: "", translation: "", meaning: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/geeta/add", form);
      alert("Shloka added successfully!");
      setForm({ adhyay: "", text: "", translation: "", meaning: "" });
    } catch (err) {
      alert("Error adding shloka");
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Add Geeta Shloka</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Adhyay</label>
          <input type="number" className="form-control" name="adhyay" value={form.adhyay} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Shloka Text</label>
          <textarea className="form-control" name="text" value={form.text} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Gujarati Translation</label>
          <textarea className="form-control" name="translation" value={form.translation} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">English Meaning</label>
          <textarea className="form-control" name="meaning" value={form.meaning} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default AddGeetaShloka;
