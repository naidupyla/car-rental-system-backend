const {
  create,
  findAll,
  findOne,
  remove,
  update,
} = require("../services/userService");

// Create a user
exports.create = async (req, res) => {
  try {
    const user = await create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Find all users
exports.findAll = async (req, res) => {
  try {
    const users = await findAll();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Find one user
exports.findOne = async (req, res) => {
  try {
    const user = await findOne(req.params.id);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update user details
exports.update = async (req, res) => {
  try {
    const user = await update(req.params.id, req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete user details
exports.remove = async (req, res) => {
  try {
    const user = await remove(req.params.id);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
