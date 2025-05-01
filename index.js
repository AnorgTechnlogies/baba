// index.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require('./config/db.js');

// Load environment variables
dotenv.config({ path: './config/config.env' });

const app = express();

// Connect to MongoDB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/api/testing", (req, res) => {
  try {
    res.send("Hello from pullu!");
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("Something went wrong!");
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
