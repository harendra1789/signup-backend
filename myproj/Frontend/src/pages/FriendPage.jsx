import React, { useState } from 'react';
import './FriendPage.css';  // Inline styling will be used in this file
import FriendCard from './FriendCard';

const FriendPage = () => {
    const [friends] = useState([
        { id: 1, name: 'John Doe', profilePic: './images/logo.png' },
        { id: 2, name: 'Jane Smith', profilePic: './images/logo.png' },
        { id: 3, name: 'Alice Johnson', profilePic: './images/logo.png' },
        { id: 4, name: 'Mark Brown', profilePic: './images/logo.png' },
    ]);

    return (
        <div className="friend-page">
            <h1>Your Friends</h1>
            <div className="friend-list">
                {friends.map((friend) => (
                    <FriendCard key={friend.id} friend={friend} />
                ))}
            </div>
        </div>
    );
}

export default FriendPage;
