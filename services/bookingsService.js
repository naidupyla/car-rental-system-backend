const Booking = require("../models/bookingsModel");

class bookingsService {
  async create(data, userId) {
    const obj = {
      ...data,
      totalAmount: 100,
      customer: userId,
    };

    const bookings = new Booking(obj);
    return await bookings.save();
  }

  async findAll() {
    const bookings = Booking.find()
      .populate("customer", "name")
      .populate("car", "make model");
    return await bookings;
  }

  async findOne(id) {
    const booking = Booking.findOne({ _id: id });
    return await booking;
  }

  async update(id, data) {
    const booking = Booking.findOneAndUpdate({ _id: id }, data);
    return await booking;
  }

  async remove(id) {
    const booking = Booking.deleteOne({ _id: id });
    return await booking;
  }
}

module.exports = new bookingsService();
