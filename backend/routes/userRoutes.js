const express = require("express");
const pool = require("../config/db");

const router = express.Router();

// Register user
router.post("/register", async (req, res) => {
  const { newUsername, email, newPassword } = req.body;

  try {
    // Check if the user already exists
    const userExists = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Insert user into the database
    const newUser = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [newUsername, email, newPassword] // Storing password as plain text (not recommended)
    );

    res.status(201).json({ message: "User registered successfully!", user: newUser.rows[0] });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
