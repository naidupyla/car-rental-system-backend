const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController");
const { isAdmin, isAuth } = require("../auth-middleware/check");

// Route to create a new car
router.post("/", isAuth, isAdmin, carController.create);

// Route to update an existing car
router.put("/:id", isAuth, isAdmin, carController.update);

// Route to get all cars
router.get("/", carController.findAll);

// Route to get a car by ID
router.get("/:id", carController.findOne);

// Route to delete a car
router.delete("/:id", isAuth, isAdmin, carController.remove);

module.exports = router;
