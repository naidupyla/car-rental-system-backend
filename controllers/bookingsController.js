const {
  create,
  findAll,
  findOne,
  remove,
  update,
} = require("../services/bookingsService");

// Create a booking
exports.create = async (req, res) => {
  try {
    const booking = await create(req.body, req.user.id);
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// fins all bookings
exports.findAll = async (req, res) => {
  try {
    const bookings = await findAll();
    res.status(201).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// find a booking
exports.findOne = async (req, res) => {
  try {
    const booking = await findOne(req.params.id);
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update a booking
exports.update = async (req, res) => {
  try {
    const booking = await update(req.params.id, req.body);
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove a booking
exports.remove = async (req, res) => {
  try {
    const booking = await remove(req.params.id);
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
