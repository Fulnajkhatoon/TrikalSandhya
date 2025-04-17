const express = require("express");
const router = express.Router();
const pool = require("../config/db"); // PostgreSQL pool

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await pool.query(
      "INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3)",
      [name, email, message]
    );
    res.status(200).json({ message: "Message stored successfully!" });
  } catch (err) {
    console.error("Error storing message:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
