// models/signup.js
const mongoose = require('mongoose');

const SignupSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  birthday: { type: Date, required: true },
  gender: { type: String, required: true },
});

const Signup = mongoose.model('Signup', SignupSchema);

module.exports = Signup;
