import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Importing Router components
import './App.css'; // Importing global CSS styles

// Importing the components for each page
import Signup from './pages/Signup'; // Importing the Signup page
import FriendPage from './pages/FriendPage'; // Importing the FriendPage
import MessagePage from './pages/MessagePage'; // Importing the MessagePage

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Menu */}
        <nav>
          <ul>
            <li>
              <Link to="/" class="link">Signup</Link> {/* Link to Signup page */}
            </li>
            <li>
              <Link to="/friends" class="link">Friends</Link> {/* Link to Friend page */}
            </li>
            <li>
              <Link to="/messages" class="link">Messages</Link> {/* Link to MessagePage */}
            </li>
          </ul>
        </nav>

        {/* Routing Configuration */}
        <Routes>
          <Route path="/" element={<Signup />} /> {/* Route for the Signup page */}
          <Route path="/friends" element={<FriendPage />} /> {/* Route for the FriendPage */}
          <Route path="/messages" element={<MessagePage />} /> {/* Route for the MessagePage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
