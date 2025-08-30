import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

// Register
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: "User already exists" });

  const user = await User.create({ name, email, password });
  res.status(201).json({
    _id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin,
    token: generateToken(user._id),
  });
};

// Login
export const authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else res.status(401).json({ message: "Invalid email or password" });
};

// Profile
export const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) res.json({ _id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin });
  else res.status(404).json({ message: "User not found" });
};

// Admin: Get all users
export const getUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

// Admin: Delete user
export const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    await user.deleteOne();
    res.json({ message: "User removed" });
  } else res.status(404).json({ message: "User not found" });
};
