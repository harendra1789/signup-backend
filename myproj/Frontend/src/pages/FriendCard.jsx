import React from 'react';
import './FriendPage.css';

const FriendCard = ({ friend }) => {
    return (
        <div className="friend-card">
            <img src={friend.profilePic} alt={friend.name} className="friend-profile-pic" />
            <div className="friend-info">
                <h3>{friend.name}</h3>
                <button className="Add-button">send message</button>
            </div>
        </div>
    );
}

export default FriendCard;
