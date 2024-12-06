const {
  create,
  findAll,
  findOne,
  remove,
  update,
} = require("../services/carService");

// Create a car
exports.create = async (req, res) => {
  try {
    const car = await create(req.body);
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a car
exports.findAll = async (req, res) => {
  try {
    const cars = await findAll();
    res.status(201).json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a car
exports.findOne = async (req, res) => {
  try {
    const car = await findOne(req.params.id);
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a car
exports.update = async (req, res) => {
  try {
    const car = await update(req.params.id, req.body);
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a car
exports.remove = async (req, res) => {
  try {
    const car = await remove(req.params.id);
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
