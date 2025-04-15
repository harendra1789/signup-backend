// Signup.jsx
import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthday: '',
    gender: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, birthday, gender } = formData;

    // Basic validation
    if (!firstName || !lastName || !email || !password || !birthday || !gender) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    setErrorMessage('');

    // Send data to backend API
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Sign Up Successful!');
      } else {
        setErrorMessage(data.error || 'Error occurred during signup.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Error occurred. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Facebook</h2>
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="New Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="date"
              name="birthday"
              value={formData.birthday}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="gender-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleInputChange}
                required
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleInputChange}
                required
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={handleInputChange}
                required
              />
              Other
            </label>
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="signup-btn">
            Sign Up
          </button>

          <div className="footer-links">
            <p>
              By clicking Sign Up, you agree to our <a href="#">Terms</a> and{' '}
              <a href="#">Privacy Policy</a>.
            </p>
            <p>
              Already have an account? <a href="#">Log in</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
















// // Signup.jsx
// import React, { useState } from 'react';
// import './Signup.css';  // Correct import path


// const Signup = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     birthday: '',
//     gender: '',
//   });

//   const [errorMessage, setErrorMessage] = useState('');

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { firstName, lastName, email, password, birthday, gender } = formData;

//     // Basic validation
//     if (!firstName || !lastName || !email || !password || !birthday || !gender) {
//       setErrorMessage('Please fill in all fields.');
//       return;
//     }

//     setErrorMessage('');
//     alert('Sign Up Successful!');
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-form">
//         <h2>Facebook</h2>
//         <h3>Sign Up</h3>
//         <form onSubmit={handleSubmit}>
//           {/* First and Last Name */}
//           <div className="input-group">
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleInputChange}
//               required
//             />
//             </div>
//             <div className="input-group">
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleInputChange}
//               required
//             />
//           </div>

//           {/* Email */}
//           <div className="input-group">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//             />
//           </div>

//           {/* Password */}
//           <div className="input-group">
//             <input
//               type="password"
//               name="password"
//               placeholder="New Password"
//               value={formData.password}
//               onChange={handleInputChange}
//               required
//             />
//           </div>

//           {/* Birthday */}
//           <div className="input-group">
//             <input
//               type="date"
//               name="birthday"
//               value={formData.birthday}
//               onChange={handleInputChange}
//               required
//             />
//           </div>

//           {/* Gender Selection */}
//           <div className="gender-group">
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="female"
//                 onChange={handleInputChange}
//                 required
//               />
//               Female
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="male"
//                 onChange={handleInputChange}
//                 required
//               />
//               Male
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="other"
//                 onChange={handleInputChange}
//                 required
//               />
//               Other
//             </label>
//           </div>

//           {/* Error Message */}
//           {errorMessage && <p className="error-message">{errorMessage}</p>}

//           {/* Submit Button */}
//           <button type="submit" className="signup-btn">
//             Sign Up
//           </button>

//           {/* Footer Links */}
//           <div className="footer-links">
//             <p>
//               By teST clicking Sign Up, you agree to our <a href="#">Terms</a> and{' '}
//               <a href="#">Privacy Policy</a>.
//             </p>
//             <p>
//               Already have an account? <a href="#">Log in</a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
