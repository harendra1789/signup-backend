import React, { useState } from 'react';
import './MessagePage.css'; // Import the CSS for styling

const MessagePage = () => {
    // Initialize state for storing messages and the new message
    const [messages, setMessages] = useState([
        { id: 1, sender: 'John', text: 'Hey! How are you?' },
        { id: 2, sender: 'Jane', text: 'Hello! I am good, thanks for asking.' },
        { id: 3, sender: 'Alice', text: 'Long time no see!' },
    ]);

    const [newMessage, setNewMessage] = useState('');

    // Handle the input change event
    const handleInputChange = (event) => {
        setNewMessage(event.target.value);
    };

    // Handle sending the message
    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([
                ...messages,
                { id: messages.length + 1, sender: 'You', text: newMessage }
            ]);
            setNewMessage(''); // Clear the input field after sending the message
        }
    };

    return (
        <div className="message-page">
            <h1>Facebook Messenger</h1>
            <div className="message-list">
                {messages.map((message) => (
                    <div key={message.id} className={`message-card ${message.sender === 'You' ? 'sent' : 'received'}`}>
                        <p><strong>{message.sender}:</strong> {message.text}</p>
                    </div>
                ))}
            </div>

            <div className="message-input">
                <input
                    type="text"
                    value={newMessage}
                    onChange={handleInputChange}
                    placeholder="Type a message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default MessagePage;
