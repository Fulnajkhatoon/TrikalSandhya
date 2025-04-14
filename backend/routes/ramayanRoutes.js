const express = require("express");
const router = express.Router();
const db = require("../config/db"); // ensure db is properly exported from db.js

// GET all shlokas for a specific Ramayan adhyay
router.get("/ramayan/:adhyay_number", async (req, res) => {
  const { adhyay_number } = req.params;

  try {
    const result = await db.query(
      "SELECT * FROM ramayan_shlokas WHERE adhyay_number = $1 ORDER BY id",
      [adhyay_number]
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching shlokas:", err.message);
    res.status(500).json({ error: "Failed to fetch shlokas" });
  }
});

module.exports = router;
