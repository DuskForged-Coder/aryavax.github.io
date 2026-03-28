const express = require("express");
const rateLimit = require("express-rate-limit");
const asyncHandler = require("../utils/asyncHandler");
const { protect } = require("../middleware/authMiddleware");
const {
  registerUser,
  loginUser,
  getProfile
} = require("../controllers/authController");

const router = express.Router();

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 25,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: "Too many authentication attempts. Please try again later."
  }
});

router.post("/register", authLimiter, asyncHandler(registerUser));
router.post("/login", authLimiter, asyncHandler(loginUser));
router.get("/profile", protect, asyncHandler(getProfile));

module.exports = router;
