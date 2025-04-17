const express = require("express");
const router = express.Router();
const pool = require("../config/db"); // PostgreSQL pool

// Get all verses for an Adhyay
router.get("/verses/:adhyay", async (req, res) => {
  try {
    const { adhyay } = req.params;
    const result = await pool.query(
      "SELECT DISTINCT verse_number FROM geeta_shlokas WHERE adhyay = $1 ORDER BY verse_number",
      [adhyay]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get specific shloka by adhyay and verse
router.get("/shloka/:adhyay/:verse", async (req, res) => {
  try {
    const { adhyay, verse } = req.params;
    const result = await pool.query(
      "SELECT * FROM geeta_shlokas WHERE adhyay = $1 AND verse_number = $2",
      [adhyay, verse]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Shloka not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
