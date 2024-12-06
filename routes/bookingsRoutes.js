const express = require("express");
const router = express.Router();
const bookingsController = require("../controllers/bookingsController");
const { isAdmin, isCustomer, isAuth } = require("../auth-middleware/check");

// Route to create a new booking
router.post("/", isAuth, isCustomer, bookingsController.create);

// Route to update an existing booking
router.put("/:id", isAuth, isAdmin, bookingsController.update);

// Route to get all bookings
router.get("/", isAuth, isAdmin, bookingsController.findAll);

// Route to get a booking by ID
router.get("/:id", isAuth, bookingsController.findOne);

// Route to delete a booking
router.delete("/:id", isAuth, isAdmin, bookingsController.remove);

module.exports = router;
