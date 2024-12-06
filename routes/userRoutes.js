const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Route to create a new user
router.post("/", userController.create);

// Route to update an existing user
router.put("/:id", userController.update);

// Route to get all users
router.get("/", userController.findAll);

// Route to get a user by ID
router.get("/:id", userController.findOne);

// Route to delete a user
router.delete("/:id", userController.remove);

module.exports = router;
