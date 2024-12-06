const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Initialize Express app
const app = express();
const PORT = 8000; // Define your port

// load routers
const authRoutes = require("./routes/authRoutes");
const carRoutes = require("./routes/carRoutes");
const userRoutes = require("./routes/userRoutes");
const bookingsRoutes = require("./routes/bookingsRoutes");

// Middleware
app.use(cors()); // Enables Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// connect database
mongoose
  .connect(
    "mongodb+srv://car-rental-admin:Pa$$w0rd@car-rental.c3pox.mongodb.net/car-rental?retryWrites=true&w=majority"
  )
  .then(() => console.log("db is running"))
  .catch((err) => console.log(err));

// routes middleware
app.use("/api/auth", authRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingsRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
