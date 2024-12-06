const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { secretOfKey } = require("../config/config");

exports.userLogin = async (data, res) => {
  const { email, password } = data;

  try {
    // Find the user by email
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      secretOfKey,
      { expiresIn: "30h" } // Token expiration time
    );

    // Respond with success and token
    return res.status(200).json({
      message: "Login successful.",
      token,
      user: {
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

exports.userSignUp = async (data, res) => {
  const { name, email, password } = data;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email: email }).exec();
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: 0,
    });

    // Save the new user to the database
    await newUser.save();

    // Generate a JWT token
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email, role: newUser.role },
      secretOfKey, // Make sure to set your secret in environment variables
      { expiresIn: "1h" } // Token expiration time
    );

    // Respond with success and token
    return res.status(201).json({
      message: "User registered successfully.",
      token,
      user: {
        name: newUser.name,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error("Error during sign up:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
