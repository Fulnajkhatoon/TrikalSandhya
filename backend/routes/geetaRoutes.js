const express = require("express");
const router = express.Router();
const pool = require("../config/db"); // pg Pool instance

// ✅ Add a Geeta Shloka
router.post("/geeta/add", async (req, res) => {
  try {
    const { adhyay, verse_number, text, translation, meaning } = req.body;
    const result = await pool.query(
      `INSERT INTO geeta_shlokas (adhyay, verse_number, text, translation, meaning)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [adhyay, verse_number, text, translation, meaning]
    );
    res.json({ message: "Shloka added!", data: result.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// ✅ Get All Adhyays
router.get("/geeta/adhyays", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT DISTINCT adhyay FROM geeta_shlokas ORDER BY adhyay`
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// ✅ Get Verses by Adhyay
router.get("/geeta/verses/:adhyay", async (req, res) => {
  try {
    const { adhyay } = req.params;
    const result = await pool.query(
      `SELECT id, verse_number FROM geeta_shlokas WHERE adhyay = $1 ORDER BY verse_number`,
      [adhyay]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// ✅ Get Shloka by Verse ID
router.get("/geeta/shloka/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      `SELECT * FROM geeta_shlokas WHERE id = $1`,
      [id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
