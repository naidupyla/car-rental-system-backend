const Car = require("../models/carModel");

class CarService {
  async create(data) {
    const car = new Car(data);
    return await car.save();
  }

  async findAll() {
    const cars = Car.find();
    return await cars;
  }

  async findOne(id) {
    const cars = Car.findOne({ _id: id });
    return await cars;
  }

  async update(id, data) {
    const car = Car.findOneAndUpdate({ _id: id }, data);
    return await car;
  }

  async remove(id) {
    const cars = Car.deleteOne({ _id: id });
    return await cars;
  }
}

module.exports = new CarService();
