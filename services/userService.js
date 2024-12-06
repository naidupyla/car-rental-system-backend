const User = require("../models/userModel");

class userService {
  async create(data) {
    const user = new User(data);
    return await user.save();
  }

  async findAll() {
    const users = users.find();
    return await users;
  }

  async findOne(id) {
    const user = user.findOne({ _id: id });
    return await user;
  }

  async update(id, data) {
    const user = user.findOneAndUpdate({ _id: id }, data);
    return await user;
  }

  async remove(id) {
    const user = user.deleteOne({ _id: id });
    return await user;
  }
}

module.exports = new userService();
