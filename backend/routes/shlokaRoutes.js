const express = require("express");
const router = express.Router();
const db = require("../config/db");  // Ensure correct relative path to db.js

router.post("/add", async (req, res) => {
  const { category, adhyay_number, shlok, translation_gujarati, translation_english } = req.body;

  try {
    const query = `
      INSERT INTO ramayan_shlokas (category, adhyay_number, shlok, translation_gujarati, translation_english)
      VALUES ($1, $2, $3, $4, $5)
    `;
    const values = [category, adhyay_number, shlok, translation_gujarati, translation_english];
    await db.query(query, values);  // Using db for the query

    res.status(200).json({ message: "Shloka added successfully!" });
  } catch (error) {
    console.error("Error inserting shloka:", error);
    res.status(500).json({ error: "Failed to add shloka" });
  }
});

module.exports = router;
