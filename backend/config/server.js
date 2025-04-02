const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./config");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// User Registration Route
app.post("/users/register", async (req, res) => {
  const { newUsername, email, newPassword } = req.body;

  if (!newUsername || !email || !newPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const userExists = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
      [newUsername, email, newPassword]
    );

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
