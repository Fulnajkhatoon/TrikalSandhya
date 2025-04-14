const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/userRoutes");  // For Registration
const authRoutes = require("./routes/authRoutes");  // For Login
const updateProfileRoute = require("./routes/updateProfileRoute"); // For updating profile details
const shlokaRoutes = require("./routes/shlokaRoutes");// for add ramayan slokas
const rama = require("./routes/ramayanRoutes"); // for get ramayan slokas
app.use("/users", userRoutes);
app.use("/auth", authRoutes);  // Login API
app.use("/userupdate", updateProfileRoute);
app.use("/shlokas", shlokaRoutes); // Add Shloka API
app.use("/rama", rama); // Get Shloka API

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
