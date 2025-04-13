const express = require("express");
const pool = require("../config/db");

const router = express.Router();

router.put("/", async (req, res) => {
  const { email, username } = req.body;

  try {
    const userCheck = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if (userCheck.rows.length === 0) {
      return res.status(404).json({ message: "User not found." });
    }

    await pool.query("UPDATE users SET username = $1 WHERE email = $2", [username, email]);

    res.status(200).json({ message: "Profile updated successfully!" });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
