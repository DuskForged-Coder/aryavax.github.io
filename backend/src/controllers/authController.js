const User = require("../models/User");
const generateToken = require("../utils/generateToken");

function formatAuthPayload(user) {
  return {
    token: generateToken(user._id),
    user: {
      id: user._id,
      fullName: user.fullName,
      email: user.email
    }
  };
}

async function registerUser(req, res) {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    res.status(400);
    throw new Error("Full name, email, and password are required.");
  }

  if (password.length < 8) {
    res.status(400);
    throw new Error("Password must be at least 8 characters long.");
  }

  const normalizedEmail = email.toLowerCase().trim();
  const existingUser = await User.findOne({ email: normalizedEmail });

  if (existingUser) {
    res.status(409);
    throw new Error("An account with that email already exists.");
  }

  const user = await User.create({
    fullName: fullName.trim(),
    email: normalizedEmail,
    password
  });

  res.status(201).json(formatAuthPayload(user));
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Email and password are required.");
  }

  const user = await User.findOne({ email: email.toLowerCase().trim() }).select("+password");

  if (!user) {
    res.status(401);
    throw new Error("Invalid credentials.");
  }

  const passwordMatches = await user.matchPassword(password);

  if (!passwordMatches) {
    res.status(401);
    throw new Error("Invalid credentials.");
  }

  res.status(200).json(formatAuthPayload(user));
}

async function getProfile(req, res) {
  res.status(200).json({
    user: {
      id: req.user._id,
      fullName: req.user.fullName,
      email: req.user.email
    }
  });
}

module.exports = {
  registerUser,
  loginUser,
  getProfile
};
