const express = require("express");
const pool = require("../config/db");

const router = express.Router();

// User Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if (user.rows.length === 0) {
      return res.status(400).json({ message: "User not found!" });
    }

    // Compare password (stored in plain text)
    if (user.rows[0].password !== password) {
      return res.status(400).json({ message: "Invalid password!" });
    }

    // Send user data including name and email
    res.status(200).json({
      message: "Login successful!",
      user: {
        id: user.rows[0].id,
        username: user.rows[0].username,    // Include the name
        email: user.rows[0].email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
