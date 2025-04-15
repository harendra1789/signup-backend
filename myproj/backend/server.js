// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const signupRoutes = require('./routes/signupRoutes');

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/facebook', {
  useNewUrlParser: true,  // Use new URL parser (still needed for backward compatibility)
  // Removed useUnifiedTopology since it is deprecated and no longer needed
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Routes
app.use('/api/signup', signupRoutes);

// Server setup
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bcrypt = require("bcryptjs");

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb://localhost:27017/Facebook", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const userSchema = new mongoose.Schema({
//   firstname: String,
//   lastname: String,
//   email: String,
//   password: String,
//   birthday:Date,
// });

// const User = mongoose.model("signup", userSchema);

// //  Register Route
// app.post("/signup", async (req, res) => {
//   const { firstname, lastname, email, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);

//   try {
//     const newUser = new User({ firstname, lastname, email, password: hashedPassword });
//     await newUser.save();
//     res.json({ message: "Registration successful!" });
//   } catch (error) {
//     res.status(500).json({ message: "Registration failed!" });
//   }
// });















// // Login Route
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });

//   if (user && (await bcrypt.compare(password, user.password))) {
//     res.json({ message: "Login successful!" });
//   } else {
//     res.status(401).json({ message: "Invalid email or password" });
//   }
// });

// app.listen(5000, () => console.log("Server running on port 5000"));
