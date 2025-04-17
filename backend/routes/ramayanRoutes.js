const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Get shlokas by category and adhyay_number
router.get("/ramayan/:category/:adhyay_number", async (req, res) => {
  const { category, adhyay_number } = req.params;

  try {
    // Query to fetch shlokas by category and adhyay_number
    const result = await db.query(
      "SELECT * FROM ramayan_shlokas WHERE category = $1 AND adhyay_number = $2 ORDER BY adhyay_number",
      [category, adhyay_number]
    );

    // Respond with the fetched shlokas
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching shlokas:", err.message);
    res.status(500).json({ error: "Failed to fetch shlokas" });
  }
});

module.exports = router;
  