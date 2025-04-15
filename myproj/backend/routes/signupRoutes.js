// routes/signupRoutes.js
const express = require('express');
const Signup = require('../models/signup');
const router = express.Router();

// POST route for signup
router.post('/', async (req, res) => {
  const { firstName, lastName, email, password, birthday, gender } = req.body;

  try {
    // Check if user already exists
    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists.' });
    }

    // Create a new user
    const newUser = new Signup({ firstName, lastName, email, password, birthday, gender });
    await newUser.save();

    res.status(201).json({ message: 'Signup successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

module.exports = router;
